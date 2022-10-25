const express = require("express")
const config = require("dotenv").config()
const PORT = process.env.PORT || 4000;
const db = require("./con")
const app = express()

db.connectToServer(() => { })

app.get("/editcreate/", async function (req, res) {
    console.log(req.query);
    const dbConnect = db.getDb().collection("Person");
    const person = await dbConnect.findOne({ email: req.query.email });
    if (person == null) {
        await dbConnect.insertOne({ email: req.query.email, devices: [] },
            function (err, result) {
                if (err) {
                    res.status(400).send("Error inserting matches!");
                } else {
                    console.log(`Added a new match with id ${result.insertedId}`);
                    res.status(204).send();
                }
            })
    }
    else {
        if (req.query.device in person.devices) { res.status(400).send("Already is there"); }
        else if ( req.query.device !=null ){
            person.devices.push(req.query.device);
            res.status(204).send();
            dbConnect.updateOne(
                { email: person.email },
                {
                    $set: {
                        devices: person.devices
                    }
                }
            )
        }
    }
});

app.get("/removedelete/", async function (req, res) {
    console.log(req.query);
    const dbConnect = db.getDb().collection("Person");
    const person = await dbConnect.findOne({ email: req.query.email });
    console.log(person);
    if (req.query.del == true) {
        dbConnect.deleteOne({ email: req.query.email },
            function (err, result) {
                if (err) {
                    res.status(400).send("Something Happened");
                } else {
                    res.status(204).send("OK");
                }
            })
    }
    else if (req.query.device) {
        if (req.query.device in person.devices) {
            var deviceIndex = person.devices.indexOf(req.query.device);
            person.devices = person.devices.splice(deviceIndex, 1);
            res.status(204).send("OK");
            await dbConnect.updateOne(
                { email: person.email },
                {
                    $set: {
                        devices: person.devices
                    }
                }
            )
        }
        else {
            res.status(400).send("not there");
        }
    }
});


app.get("/devices", async function (req, res) {
    let dbArray = []

    const dbConnect = db.getDb().collection("Person");
    const person = await dbConnect.findOne({ email: req.query.email });
    const dbConnectdev = db.getDb().collection("devices");
    person.devices.forEach(async (element) =>{
        const dev = await dbConnectdev.findOne({ uid: element })
        .then((result) => {
            dbArray.push(result)
        }).catch((err) => {
            
        });
    })
    setTimeout(()=>{
        res.json({data: dbArray})
    }, 10000)
});




app.listen(PORT, () => {

    console.log(`server is running at :http://localhost:` + PORT)
})