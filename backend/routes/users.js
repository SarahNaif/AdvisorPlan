var express = require('express');
var router = express.Router();
const User = require('../models/userModel')
const Appointment = require('../models/appointmentModel')
const Package = require('../models/packageModel')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const path = require('path');


//reference the plugin
var hbs = require('nodemailer-express-handlebars');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'overflowteam00@gmail.com', // sender address
        pass: 'Over123123' // password "keep it safe"
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

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// 1. --------------  User Signup --------------
router.post('/signup', function (req, res, next) {
    User.createSecure(req.body.firstName, req.body.lastName, req.body.email, req.body.username, req.body.password, req.body.phone, (err, user) => {
        if (err) {
            res.status(500).json({ msg: err })
        } else {
            let mailOptions = {
                from: 'overflowteam00@gmail.com', // sender address
                to: `${req.body.email}`, // list of receivers
                subject: 'registeration confiremed',
                text: "This email was sent from nodemailer", // you can also send plain text
                template: 'register',
                context: {
                    name: 'Name',
                    data: {firstName:req.body.firstName, 
                           lastName:req.body.lastName}
                }
            };
            transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                    return console.log('Error occurs', err);
                }
                return console.log('Email sent !!!');
            }); // Send email
            user.password = undefined;
            let payload = { user };
            let token = jwt.sign(payload, process.env.JWTSecret, {
                expiresIn: 1000 * 60 * 60,
            }); // to the user info
            res.json({ msg: "registeration confiremed", token, user });
        }
    })
});


// 2. --------------  User Login --------------
router.post('/login', function (req, res, next) {
    User.authenticate(req.body.email, req.body.password, (err, user) => {
        if (err) {
            res.json({ msg: "email or password is not correct" })
        } else {
            user.password = undefined;
            let payload = { user };
            let token = jwt.sign(payload, process.env.JWTSecret, {
                expiresIn: 1000 * 60 * 60,
            }); // to the user info
            res.json({ msg: "user login ", token, user });
        }
    })
});

// 3. --------------  User Profile --------------
router.get('/:id/profile', (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            res.json({ user: user });
        })
        .catch((err) => res.json({ msg: err }));
})

// 4. --------------  User Appointments --------------
router.get('/:id/appointments', (req, res) => {
    Appointment.find({ 'user': req.params.id })
        .then(appointment => {
            res.json({ appointment: appointment });
        })
        .catch((err) => res.json({ msg: err }));
})

// 5. --------------  Edit Profile --------------
router.put('/:id/profile/edit', function (req, res, next) {

    const { firstName, lastName, img, address, phone } = req.body;

    const newInfo = { firstName, lastName, img, address, phone }
  
    console.log("newInfonewInfo", newInfo)

    
    jwt.verify(req.headers.token, process.env.JWTSecret, (err, decode) => {
        if (err) return res.json({ msg: err });
        let user = decode.user;
        User.findOneAndUpdate({ _id: user._id }, { $set: newInfo },{new:true})
            .then((user) => {
                console.log(newInfo)
                user.password = undefined
                res.json({ msg: "update done" ,user})
            })
    });
});

// 6. --------------  Book Appointment --------------
router.post("/:id/appointments/new", (req, res) => {
    const newAppointment = {
        date: req.body.date,
        topic: req.body.topic,
        details: req.body.details,
        user: req.params.id,
    };
    Appointment.create(newAppointment)
        .then(appointment => {
            res.json({ msg: "appointment has been added successfully", appointment: appointment });
        })
        .catch((err) => res.json({ msg: err }));
});

// 7. --------------  change password from profile --------------
router.post("/changepassword", (req, res) => {


    console.log('BACKEND HERE')
    const userId = req.body.userId;

    User.findById(userId).then(user => {

        if (user.checkPassword(req.body.oldPassword)) {
            if (req.body.password == '' || ' ') {
                return res.json({ msg: "empty password invalid" })
            } else {
                jwt.verify(req.headers.token, process.env.JWTSecret, (err, decode) => {
                    if (err) return res.json({ msg: err });
                    let user = decode.user;

                    bcrypt.genSalt(function (err, salt) {
                        bcrypt.hash(req.body.password, salt, function (err, hash) {
                            User.findOneAndUpdate({ _id: user._id }, { password: hash }).then((err) => {
                                res.json({ msg: "change password done" })
                            })
                        })
                    })
                });
            }

        } else {
            res.json({ msg: "entered password wrong can't change password" });
        }
    })


})


// 8. -------------- show All user package --------------
router.get('/:id/packages', (req, res) => {
    User.findOne({ _id: req.params.id }).populate({ path: 'packeges' })
        .then((user) => {
            const packeges = user.packeges
            console.log("user.packeges:\n", user.packeges)
            console.log("user:\n", user)
            res.json({ packeges })
        })
        .catch((err) => res.json({ msg: err }));

})

// 9. -------------- single package --------------
router.get('/packages/:id', (req, res) => {

    User.findOne({ _id: req.body.userId })
        .populate({
            path: "packeges",
            populate: {
                path: "packege"
            }
        })
        .then((package) => {
            // console.log("package", package)
            res.json({ package })
        })

})

// 10. -------------- user info --------------
router.get('/:id/info', (req, res) => {
console.log(req.params.id)
    User.findById(req.params.id)
        .populate("packeges")
        .then((user) => {
            console.log("user", user)
            res.json({ user })
        })

})

module.exports = router;