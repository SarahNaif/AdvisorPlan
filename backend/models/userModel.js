const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    role: {
        default: "user",
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        lowercase: true,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        default: "https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png",
        type: String,
    },
    phone: {
        type: String,
    },
    address: String,
    packeges: [{
        packege: { type: mongoose.Schema.Types.ObjectId, ref: 'package' },
        date: {
            default: new Date(),
            type: Date,
        },
        status: {
            default: 0,
            type: Number,
        }
    }],
    appointments: {
        default: [],
        type: Array
    }


}, { timestamps: true })


userSchema.statics.createSecure = (firstName, lastName, email, username, password, phone, cb) => {
    bcrypt.genSalt(function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            var user = {
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: hash,
                phone: phone
            };
            User.create(user, cb);
        });
    });
};

userSchema.statics.authenticate = function (email, password, cb) {
    // find user by email entered at log in
    this.findOne({ email: email }, function (err, user) {
        // throw error if can't find user
        if (user === null) {
            cb("Can\'t find user with that email", null);
            // if found user, check if password is correct
        } else if (user.checkPassword(password)) {
            // the user is found & password is correct, so execute callback
            // pass no error, just the user to the callback
            cb(null, user);
        } else {
            // user found, but password incorrect
            cb("password incorrect", null);
        }
    });
};

// compare password user enters with hashed password (`passwordDigest`)
userSchema.methods.checkPassword = function (password) {
    // run hashing algorithm (with salt) on password to compare with stored `passwordDigest`
    // `compareSync` is like `compare` but synchronous
    // returns true or false
    return bcrypt.compareSync(password, this.password);
};


const User = mongoose.model('user', userSchema)
module.exports = User
