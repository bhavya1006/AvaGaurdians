const Singup = async (req,res)=>{
    const {contact,password,confirmpassword}=req.body
    
    res.send("Singup")
}

const Login = async (req,res)=>{
    res.send("Login")
}

module.exports = {Singup, Login}