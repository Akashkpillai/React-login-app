const mongoose =require('mongoose')
const { resolve } = require('path')
const User = require('../model/UserModle')

exports.userSignin = (userdata)=>{
    let validation = {
        ExsitingUser : false,
    }
    return new Promise (async(resolve,reject)=>{
        let user = await User.findOne({email:userdata.email})
        if(!user){
            const UserData = new User(userdata)
            // console.log(UserData)
            UserData.save()
            .then((res)=>{
                resolve({status:'ok'})
                console.log(res)

            }).catch((err)=>{
                console.log(err)
                reject(err)
            })
        }else{
            validation.ExsitingUser = true
            resolve(validation)
            console.log('User alredy exist')
        }

    })
},

exports.userLogin = (Logdata)=>{
    console.log(Logdata)
    let validation = {
        passErr : false,
    }
    return new Promise ((resolve,reject)=>{
         User.findOne({email:Logdata.email}).then((value)=>{
            console.log(value)
            if(value){
                resolve({status:'ok',})
                console.log("Login success");
            }else{
                validation.passErr = true
                resolve({status:'false'})
                resolve(validation)
                console.log("Login failed")
            }
        }).catch((err)=>{
            reject(err)
            console.log(err);
        })
    })
}
