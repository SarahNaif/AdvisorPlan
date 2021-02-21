var express = require('express');
var router = express.Router();
const User = require('../models/userModel')
const ResetPassword = require('../models/resetPasswordModel')
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
var moment = require('moment'); // require
const path = require('path');

//reference the plugin
var hbs = require('nodemailer-express-handlebars');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, // sender address
        pass: process.env.PASSWORD // password "keep it safe"
    }
});


//attach the plugin to the nodemailer transporter
transporter.use('compile', hbs({

    viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve(__dirname, "views"),
        defaultLayout: false,
    },
    viewPath: path.resolve(__dirname, "views"),
    extName: ".handlebars",

}));

// Reset password by generating a link and send it to user email and expire the link after half an hour
router.post('/reset-password', (req, res) => {
    const email = req.body.email
    // console.log('email',email)
    User.findOne({ email: req.body.email }) //checking if the email address sent by client is present in the db(valid))
        .then((user) => {
            // console.log("user", user)
            if (!user) {
                res.json({ msg: "No user found with that email address" })
            }
            else {
                console.log('user email', user.email)
                //             const userEmail = user.email
                ResetPassword.findOne({ userId: user._id })
                    .then((resetPassword) => {
                        if (resetPassword) {
                            console.log('found with status 0')
                            resetPassword.deleteOne({ email: resetPassword.email }).then(user => console.log('deleted'))
                        }
                        // console.log('there is no user with this email in ResetPassword')
                        let payload = { user };
                        let token = jwt.sign(payload, process.env.JWTSecret, {
                            expiresIn: 1000 * 60 * 60,
                        });
                        const newResetReq =
                        {
                            userId: user._id,
                            resetPasswordToken: token,
                            expire: moment().add(1800, 'seconds').toDate(),
                            status: 0
                        }
                        console.log('newResetReq to be added to DB', newResetReq)

                        ResetPassword.create(newResetReq).
                            then(userInReset => {
                                console.log('userInReset', userInReset)
                                // res.json({ userInReset: userInReset })
                                let mailOptions = {
                                    from: 'overflowteam00@gmail.com',
                                    to: req.body.email, // will be changed to user email later & the link sent to user will be changed depending on the frontend
                                    subject: 'Reset your account password',
                                    template: 'reset',
                                    context: {
                                        name: 'Name',
                                        data: {
                                            url: `http://localhost:3000/resetPassword/redirect/${user.id}/${token}`
                                        }
                                    }
                                }
                                transporter.sendMail(mailOptions).then(x => {
                                    res.send(`email sent! to ${mailOptions.to}`)
                                })
                                    .catch(err => {
                                        res.send(`Error in sending Email: ${err}`)
                                    })
                            }).catch(err => console.log('Error in Creating Reset', err))
                        //                 }
                    }).catch(err => console.log('Error in reaching ResetPassword ', err))
                //             return res.json({ msg: "Email found in users" })
            }
        })
        .catch(err => console.log('unable to sent ... cant reach user collection ', err))
})


router.post('/reset/:userId/:userToken', (req, res) => {
    console.log('you are tring to reach the reset function')
    // check if the link works 
    // if user id and token == in the Reset pass and time not expire
    // allow to get body and change pass 
    // else show not working link 
    // ask if we can use it as token 
    ResetPassword.findOne({ resetPasswordToken: req.params.userToken, status: 0 })
        .then(resetPassword => {
            if (resetPassword && resetPassword.userId == req.params.userId) {
                let currentTime = new Date();
                if (currentTime > resetPassword.expire) {
                    console.log('working link')
                    console.log('time expire')
                    res.json({ success: false, message: 'time expire' })
                }
                else {
                    console.log('time not expire')
                    bcrypt.compare(req.params.userToken, resetPassword.resetPasswordToken, function (errBcrypt, resBcrypt) { // the token and the hashed token in the db are verified befor updating the password
                        password = req.body.newPassword
                        console.log('new password', password)
                        bcrypt.genSalt(function (err, salt) {
                            bcrypt.hash(password, salt, function (err, hash) {
                                User.findOneAndUpdate({ _id: req.params.userId }, { password: hash }, { new: true }) // to get the new user after update
                                    .then(userUpdated => {
                                        console.log('userPassUpdated', userUpdated)
                                        ResetPassword.findOneAndUpdate({ userId: userUpdated._id }, { status: 1 })
                                            .then((msg) => {
                                                if (!msg)
                                                    throw err
                                                else
                                                    res.json({ success: true, message: ' Password Updated successfully.' })
                                            })
                                    })
                            });
                        });
                    });
                }
            }
            else {
                res.json({ success: false, message: 'link is invalid' })
            }
        })
})

module.exports = router;
