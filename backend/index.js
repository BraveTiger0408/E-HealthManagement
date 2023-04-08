const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    return res.json({ username: username, secret: "sha256..." });
});


app.get("/get", (req, res) => {
    // const { username } = req.body;
    return res.json({ username: "username", secret: "sha256..." });
})

const port = process.env.PORT || "5000";

app.listen(port, () => {
    console.log("Server is Started on PORT: " + port)
})