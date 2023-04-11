const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

mongoose.connect("mongodb+srv://MrSagarBiswas:sagar123@cluster0.lhx35.mongodb.net/EHMS", { useNewUrlParser: true });

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

const userSchema = new mongoose.Schema({
    email: //Gmail field
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
    profile: profileSchema
})

const users = new mongoose.model('user', userSchema);


app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    users.findOne({ email: email }).then((data) => {
        if (!data) {
            users.create({ email: email, password: password }).then(() => {
                return res.json({ status: 'done' })
            })
        } else {
            return res.json({ status: 'exist' })
        }
    }).catch(err => console.log(err));
});

app.post("/profile", (req, res) => {
    const { email, sessionKey, name, mobile, gender, DOB, address } = req.body;
    const profile = {
        name: name,
        mobile: mobile,
        gender: gender,
        DOB: DOB,
        address: address
    }
    users.findOneAndUpdate({ email: email }, { sessionKey: sessionKey, profile: profile }, { new: true }).then(doc => {
        console.log(doc);
        return res.json(doc)
    }).catch(err => console.log(err));

})


app.post("/session", (req, res) => {
    const { email, sessionKey } = req.body;
    users.findOne({ email: email }).then(data => {
        if (data.sessionKey == sessionKey) {
            return res.json({ data: data, status: "authenticated" })
        } else return res.json({ status: "unauthenticated" });
    })
})

app.post("/patient/login", (req, res) => {
    const { email, password } = req.body;
    users.findOne({ email: email }).then(data => {
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