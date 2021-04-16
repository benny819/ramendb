const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const Place = require('../database/place.js')
const parser = require('body-parser')
app.use(parser.json());

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static(path.join(__dirname,'..','client','dist')))

// on database


app.get('/api/place', (req,res) =>{
  console.log('in server GET Places loop');
  Place.find()
  .then((data) => {
    console.log("sending get Places data to client")
    res.send(data);
  })
  .catch((e) =>{
    console.log("error in get request: "+ e)
  })
})

app.post('/api/place', (req,res)=>{
  console.log('in server Post review loop')
  let placeid = req.body.id;
  let obj = {
    'ramen':req.body.ramen,
    'typeRamen': req.body.type,
    'soup': req.body.soup,
    'score': req.body.score,
    'comment': req.body.comment
  }

  Place.findByIdAndUpdate(
    {_id: placeid},
    {$push: {"reviews": obj}}
  )
  .then(() => res.sendStatus(202))
  .catch((e)=> {
    console.log("error in post: "+e)
    res.sendStatus(404)})

})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
//push to template
