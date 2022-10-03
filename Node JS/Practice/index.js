const func = require('./func')
const arr_ = require('lodash')
const express = require('express')
const app = express();
console.log('func : ',func.name);
// console.log('arr_ : ',arr_)

let names = ['arya','arun','arya',1,2,5,'arun',2]
console.log('names : ',names)
let unique = names.lastIndexOf('arya')
console.log('unique : ',unique)
app.listen(5000)

app.get('/',(req,res)=>{
    res.send('Hello Arya!!!')
})

app.use(express.static('public'))
