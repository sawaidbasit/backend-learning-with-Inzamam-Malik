import express from 'express';
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();

const app = express()
app.use(express.json()) // body parser
// app.use(cors())

// app.get('/', (req, res)=>{
//     console.log("Hello world")
//     res.send("hello Sawaid")
// })

app.get('/user', (req, res) => {
    console.log("Hello user")
    res.send("Hello user")
})

app.get('/weather/:cityName', (req, res) => {
    console.log("Weather");
    console.log("req.query.unit", req.query.unit)
    console.log("req.query.side" ,req.query.side);
    console.log("req.query.age", req.query.age);

    console.log("req.body.name", req.body.name);
    console.log("req.body.class", req.body.class);
    console.log("req.body.rollNumber", req.body.rollNumber)

    let weatherData = {
        karachi:{
            city: "karachi",
            tempInC: 30,
            humidity: 56,
            high: 32,
            low: 18
        },
        lahore:{
            city: "lahore",
            tempInC: 40,
            humidity: 65,
            high: 42,
            low: 25
        }
    }
    
    let userInputVal = req.params.cityName.toLowerCase();
    let weatherDataToSend = weatherData[userInputVal];
    if (weatherDataToSend) {
        res.send(weatherDataToSend)
    }
    else{
        res.status(404)
        .send(`response data is not available for this ${req.params.cityName}`)
    }
})

let Comments = []

app.post('/comment/:name', (req, res, next) => {
    const name = req.params.name;
    const comment = req.body.comment;
    console.log(name, comment)
    Comments.push({
        name: name,
        comment: comment
    })
    res.send({
        message: "comment posted successfully"
    })
})

app.get('/comments', (req, res, next) => {
    res.send(Comments)
})

app.use('/', express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 3000; 

app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT}`)
})