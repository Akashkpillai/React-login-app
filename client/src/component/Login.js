import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './login.css'

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate();
    const [validation,setValidation] = useState('')

    async function loginUSer(e){
        e.preventDefault();
    
    const response = await fetch("http://localhost:4000/login", {
     method : 'POST',
     headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({
        email,
        password
      }),
    // }).then((res)=>res.json()).then((data)=>{
    //     console.log(data);
    //     if(data.status === 'false'){
    //         console.log(data.validation);
    //         setValidation(data.data)
    //     }else{
    //         navigate('/')
    //     }
     })

       const data = await response.json()
       if(data.user){
         console.log(data.user)
        localStorage.setItem('token',data.user)
        navigate('/home')
       }else{
        setValidation(data.data)
       }
    
    }

  return (
    <div>
       <div className="container login">
            <div className="form-box">
                <div className="header-form">
                    <h4 className="text-primary-login">
                       LOGIN 
                    </h4>
                    <div className="image"><h4>{validation}</h4></div>
                </div>
                <div className="body-form">
                    <form onSubmit={loginUSer}>
                        <div className="input-group mb-3">
                            <input  type="Email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
                            
                        </div>
                        <div className="input-group mb-3">
                            <input type="Password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-secondary btn-block btn-login">LOGIN</button>
                        <div className="message">
                            <div>
                                <a onClick={()=>{
                                    navigate('/signin')
                                }}>SIGN UP</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
