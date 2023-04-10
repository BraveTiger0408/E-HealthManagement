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
    _id: //Gmail field
    {
        type: String,
        require: true
    },
    password:
    {
        type: String,
        require: true
    },
    profile: profileSchema
})

const users = new mongoose.model('user', userSchema);


app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    users.findOne({ _id: email }).then((data) => {
        if (!data) {
            users.create({ _id: email, password: password }).then(() => {
                return res.json({ status: 'done' })
            })
        } else {
            return res.json({ status: 'exist' })
        }
    }).catch(err => console.log(err));
});

app.post("/profile", async (req, res) => {
    const { email, name, mobile, gender, DOB, address } = req.body;
    console.log(email);
    const profile = {
        name: name,
        mobile: mobile,
        gender: gender,
        DOB: DOB,
        address: address
    }
    users.findOneAndUpdate({ _id: email }, { profile: profile }, { new: true }).then(doc => {
        console.log(doc);
        return res.json(doc)
    }).catch(err => console.log(err));

})


app.get("/get", (req, res) => {
    // const { username } = req.body;
    return res.json({ username: "username", secret: "sha256..." });
})

const port = process.env.PORT || "5000";

app.listen(port, () => {
    console.log("Server is Started on PORT: " + port)
})