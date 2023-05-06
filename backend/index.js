const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
require("dotenv").config()

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });


// Patient Operations

const profileSchema = new mongoose.Schema({
    name: new mongoose.Schema({
        FName: String,
        LName: String,
    }),
    mobile: Number,
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Transgender', 'Other']
    },
    DOB: Date,
    address: new mongoose.Schema({
        street: String,
        city: String,
        state: String,
        pin: Number
    })
})

const healthReportSchema = new mongoose.Schema({
    basic: [{
        name: String,
        value: String,
        date: Date
    }],
    all: {
        name: [String],
        date: [Date],
        data: [Buffer]
    }
})

const patientSchema = new mongoose.Schema({
    email:
    {
        type: String,
        require: true
    },
    password:
    {
        type: String,
        require: true
    },
    sessionKey: String,
    profile: profileSchema,
    healthReport: healthReportSchema
})

const patients = new mongoose.model('patient', patientSchema);

app.post("/patient/register", async (req, res) => {
    const { email, password } = req.body;
    patients.findOne({ email: email }).then((data) => {
        if (!data) {
            patients.create({ email: email, password: password }).then(() => {
                return res.json({ status: 'done' })
            })
        } else {
            return res.json({ status: 'exist' })
        }
    }).catch(err => console.log(err));
});

app.post("/patient/profile", async (req, res) => {
    const { email, sessionKey, name, mobile, gender, DOB, address } = req.body;
    const profile = {
        name: name,
        mobile: mobile,
        gender: gender,
        DOB: DOB,
        address: address
    }
    await patients.findOneAndUpdate({ email: email }, { sessionKey: sessionKey, profile: profile }, { new: true }).then(doc => {
        console.log(doc);
        return res.json(doc)
    }).catch(err => console.log(err));
})

app.post("/patient/session", async (req, res) => {
    const { email, sessionKey } = req.body;
    await patients.findOne({ email: email }).then(data => {
        if (data.sessionKey == sessionKey) {
            return res.json({ data: data, status: "authenticated" })
        } else return res.json({ status: "unauthenticated" });
    })
})

app.post("/patient/login", async (req, res) => {
    const { email, password } = req.body;
    await patients.findOne({ email: email }).then(data => {
        if (data) {
            if (data.password == password) {
                return res.json({ data: data, status: "authenticated" })
            } else return res.json({ status: "wrongPassword" });
        } else return res.json({ status: "emailNotRegistered" });
    })
})


// Doctor Operations

const doctorProfileSchema = new mongoose.Schema({
    name: new mongoose.Schema({
        FName: String,
        LName: String,
    }),
    mobile: Number,
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Transgender', 'Other']
    },
    DOB: Date,
    address: new mongoose.Schema({
        street: String,
        city: String,
        state: String,
        pin: Number
    })
})

const doctorSchema = new mongoose.Schema({
    email:
    {
        type: String,
        require: true
    },
    password:
    {
        type: String,
        require: true
    },
    sessionKey: String,
    profile: doctorProfileSchema,
})

const doctors = new mongoose.model('doctor', doctorSchema);

app.post("/doctor/register", async (req, res) => {
    const { email, password } = req.body;
    doctors.findOne({ email: email }).then((data) => {
        if (!data) {
            doctors.create({ email: email, password: password }).then(() => {
                return res.json({ status: 'done' })
            })
        } else {
            return res.json({ status: 'exist' })
        }
    }).catch(err => console.log(err));
});

app.post("/doctor/profile", async (req, res) => {
    const { email, sessionKey, name, mobile, gender, DOB, address } = req.body;
    const profile = {
        name: name,
        mobile: mobile,
        gender: gender,
        DOB: DOB,
        address: address
    }
    await doctors.findOneAndUpdate({ email: email }, { sessionKey: sessionKey, profile: profile }, { new: true }).then(doc => {
        console.log(doc);
        return res.json(doc)
    }).catch(err => console.log(err));
})

app.post("/doctor/session", async (req, res) => {
    const { email, sessionKey } = req.body;
    await doctors.findOne({ email: email }).then(data => {
        if (data.sessionKey == sessionKey) {
            return res.json({ data: data, status: "authenticated" })
        } else return res.json({ status: "unauthenticated" });
    })
})

app.post("/doctor/login", async (req, res) => {
    const { email, password } = req.body;
    await doctors.findOne({ email: email }).then(data => {
        if (data) {
            if (data.password == password) {
                return res.json({ data: data, status: "authenticated" })
            } else return res.json({ status: "wrongPassword" });
        } else return res.json({ status: "emailNotRegistered" });
    })
})



const port = process.env.PORT || "5000";
app.listen(port, () => {
    console.log("Server is Started on PORT: " + port)
})