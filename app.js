const express = require("express")
const app = express();

app.get("/name", (req, res)=>{
    res.send("Mujahid");
});

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})