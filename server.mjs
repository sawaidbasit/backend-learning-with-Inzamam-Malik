import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res)=>{
    console.log("Hello world")
    res.send("hello Sawaid")
})

app.get('/user', (req, res) => {
    console.log("Hello user")
    res.send("Hello user")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT}`)
})