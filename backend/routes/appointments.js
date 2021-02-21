var express = require('express');
var router = express.Router();
const User = require('../models/userModel')
const Appointment = require('../models/appointmentModel')
const Package = require('../models/packageModel')
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const path = require('path');


// 1. --------------  Get All Appointments --------------
router.get("/", (req, res) => {
    console.log('Hello fron BACKEND, Get appointments')

    Appointment.find()
        .then(appointments => {
            console.log('appointments', appointments)
            res.json({ msg: "All appointments", appointments });
        })
        .catch((err) => res.json({ msg: err }));
});


// 2. --------------  Book Appointment --------------
router.post("/new", (req, res) => {
    console.log('Hello fron BACKEND')
    const newAppointment = {
        date: req.body.date,
        topic: req.body.topic,
        details: req.body.details,
        budget: req.body.budget,
        time: req.body.time,
        service: req.body.service,
        attachment: req.body.attachment,
        user: req.body.user
    };

    // User.packeges.appointment.length()
    User.findById(req.body.user).then(user => {
        // console.log("user 1",user)
        // book app => use staue 0 
        let isLast =  req.body.NumOfMeeting - user.appointments.length; // 3-0=0 ==1 3-2 = 1 3-3=0
        // no more if statuse 
        if (isLast == 1) {
            user.packeges.forEach(element => {
                element.status = 1
            });
            console.log("user packeges\n ", user.packeges)
            Appointment.create(newAppointment)
                .then(appointment => {
                    User.findByIdAndUpdate({ _id: user._id }, { $set: { packeges:user.packeges, appointments: [] } }, { new: true }).then((user) => {
                        console.log("user:\n", user)
                        res.json({ msg: "last appointment has been added successfully", appointment: appointment });
                    })
                })
                .catch((err) => res.json({ msg: err }));

        } else {

            Appointment.create(newAppointment)
                .then(appointment => {
                    User.findByIdAndUpdate({ _id: user._id }, { $push: { appointments: req.body.typeOfAppointment } }, { new: true }).then((appointment) => {
                        res.json({ msg: "appointment has been added successfully", appointment: appointment });
                    })
                })
                .catch((err) => res.json({ msg: err }));

        }

    })
});

// 3. --------------  Get All Appointments --------------
router.get('/appointments', (req, res) => {
    Appointment.find({ 'user': req.params.id })
        .then(appointment => {
            res.json({ appointment: appointment });
        })
        .catch((err) => res.json({ msg: err }));
})


module.exports = router;