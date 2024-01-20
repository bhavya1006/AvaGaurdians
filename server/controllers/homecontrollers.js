const City = require('../models/citiesModel')
const getReport =(req,res)=>{
  res.send("You got a report")
}

const getCities = async(req,res)=>{
 const input = req.body.input
 const cities = await City.find()
 console.log(cities)
 const filteres_cities = cities.filter(city=> city.city.startsWith(input.toUpperCase()))
 res.send({cities:filteres_cities})
}
module.exports ={getReport,getCities}