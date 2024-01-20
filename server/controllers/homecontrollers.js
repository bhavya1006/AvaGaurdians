const cities =["a","ab","ac","ad","aed","afg"]
const getReport =(req,res)=>{
  res.send("You got a report")
}

const getCities = (req,res)=>{
 const input = req.body.input
 const filteres_cities = cities.filter(city=> city.startsWith(input.toLowerCase()))
 res.send({cities:filteres_cities})
}
module.exports ={getReport,getCities}