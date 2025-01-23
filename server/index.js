const express = require ('express');
const cors = require('cors')
const bodyParser = require ('body-parser')
const upevents = require ('./mongoose.js')
const sneakpeak = require ('./mongoose.js')
const experience = require ('./mongoose.js')
const image = require('./mongoose.js')




const app = express()
app.use(cors());
app.use(bodyParser.json());

const port = 5001;
app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})


app.get('/upevents', async(req,res)=>{
    const upevent = await upevents.upevents.find();
    res.send(upevent)
  })

  app.get('/sneakpeaks', async(req,res)=>{
    const sneakpeaks = await sneakpeak.sneakpeak.find()
    res.send(sneakpeaks)
  }) 
  
  app.get('/experience', async(req,res)=>{
    const exp = await experience.experience.find();
    res.send(exp)
  })

  app.post("/experience", async(req,res)=>{
    const exp = {
      Name:req.body.Name,
      Batch:req.body.Batch,
      Exp: req.body.Exp
    }
  
    await experience.experience.insertMany(exp)
  })
  
  app.get('/events', async(req,res)=>{
  
    const event = await image.image.find();
    
    res.send(event)
  })