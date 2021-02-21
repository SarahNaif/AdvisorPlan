var express = require('express');
var router = express.Router();
const User = require('../models/userModel')
const Appointment = require('../models/appointmentModel')
const Package = require('../models/packageModel')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const path = require('path');
const { find } = require('../models/userModel');


// 1. -------------- add package to use --------------
router.post('/add', (req, res) => {
    // if [] => push ![] => for status == 0 ? on : off push 
    // X map => 0 => T [T,F] if X.include(T) =>  you have else push 

    User.findOne({ _id: req.body.userId }).populate({
        path: 'packeges',
        match: {
            status: 0
        }
    }).then(info => {
        if (info.packeges.length > 0) {
            if (info.packeges.some(ele => ele.status == 0)) {
                res.json({ msg: "you have alrady packege" })
            } else {
                User.findOneAndUpdate(
                    { _id: req.body.userId },
                    {
                        $push: {
                            packeges: {
                                "packege": req.body.packegeId
                            }
                        }
                    }
                ).then(info => {
                    console.log("2nd then info --- no package ---- :\n ", info)
                    res.json({ msg: info })
                })
                    .catch((err) => {
                        console.log("2nd catch ++++ no package ++++ ", err)
                        res.json({ msg: err })
                    })

            }
        } else {
            console.log("info else ", info)
            User.findOneAndUpdate(
                { _id: req.body.userId },
                {
                    $push: {
                        packeges: {
                            "packege": req.body.packegeId
                        }
                    }
                }
            ).then(info => {
                console.log("2nd then info --- no package ---- :\n ", info)
                res.json({ msg: info })
            })
                .catch((err) => {
                    console.log("2nd catch ++++ no package ++++ ", err)
                    res.json({ msg: err })
                })

        }
    }).catch((err) => {
        console.log("1st catch ++++++++++++++++++ ", err)
        res.json({ msg: err })
    });

})

// 2. -------------- show All package --------------
router.get('/all', (req, res) => {
    Package.find().populate("services").then((packages) => {
        res.json({ packages })
    })

})

// 3. -------------- single package -------------- 
router.get('/:id', (req, res) => {
    Package.findById(req.params.id).populate("services").then((package) => {
        // console.log("package", package)
        res.json({ package })
    })

})

module.exports = router;