// DEPENDENCIES
require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000
const mongoose = require("mongoose");
const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs')

AdminBro.registerAdapter(require('admin-bro-mongoose'))

// This will hide this warning => DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// DB Connection
mongoose.connect(
    process.env.MongoDB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("---------------- MongoDb connected ----------------") 
);

// import the models so we can use it in the AdminBro dashboard
const User = require("./models/userModel");
const Appointment = require("./models/appointmentModel");
const Calender = require("./models/calenderModel");
const Package = require("./models/packageModel");
const Service = require("./models/serviceModel");
const ResetPassword = require("./models/resetPasswordModel");

// add the models to AdminBro dashboard
const adminBro = new AdminBro({
    resources: [User, Appointment, Calender, Package, Service,ResetPassword],
    rootPath: '/admin',
})

// use the dependecies
app.use(adminBro.options.rootPath, AdminBroExpressjs.buildRouter(adminBro))
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
// Routes
app.use('/api/user', require("./routes/users"));
app.use('/api/email', require('./routes/email'));
app.use('/api/package', require('./routes/packages'));
app.use('/api/appointments', require('./routes/appointments'));


// listen on port 5000
app.listen(PORT, () => console.log(`---------- Server Running on Port: ${PORT} ----------`));

// deploy to server
const path = require('path')
app.use(express.static(path.join(__dirname , "build")));
app.get("*" , (req,res ) =>{
res.sendFile(path.join(__dirname , "build" , "index.html"))
})