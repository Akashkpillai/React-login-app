const express= require('express')
const router = express.Router()
const userHelper = require('../Helpers/userHelper')
const User = require('../model/UserModle')
const jwt = require('jsonwebtoken')


router.post('/signin',(req,res)=>{
    let userdata = req.body
    userHelper.userSignin(userdata).then((result)=>{
        if(result.ExsitingUser){
            console.log(result)
            let Exerro = "User alredy exist"
             res.json({status:'false',data : Exerro})
        }else{
            res.json({status:'ok'})
        }
    }).catch((err)=>{
    // res.json({status:'false'})
        console.log(err)
    })
})

router.post('/login',async(req,res)=>{
    let Logdata = req.body
  
    const user = await User.findOne({
        email:Logdata.email,
        password:Logdata.password
    })
    if(user){
        // console.log(user)
        const token = jwt.sign({
             user:user.user,
             email:user.email
        },'secreat1234')
        res.json({status:'ok', user : token})
    }else{
        let validation = "Check Email/Password"
        res.json({status:'false',data:validation})
    }
})

module.exports = router