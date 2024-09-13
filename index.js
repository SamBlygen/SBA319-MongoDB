import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'

const app = express()
const PORT = 5000;

app.use(express.json())

app.get('/', (req,res)=>{
  console.log('Welcome to my mongoose project!')
  res.send('Welcome to my mongoose project!')
})

app.listen(PORT, ()=>{
  console.log('Listening on port:'+ PORT)
})