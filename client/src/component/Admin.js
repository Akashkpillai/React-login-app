import React,{useState} from 'react'
import './admin.css'


function Admin() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function admin(e){
        e.preventDefault();
    
        const response = await fetch("http://localhost:4000/admindash", {
     method : 'POST',
     headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({
        email,
        password
      }),
    })

    const data = response.json()
}


  return (
    <div>
      <div className="container login">
            <div className="form-box">
                <div className="header-form">
                    <h4 className="text-primary">
                      ADMIN LOGIN
                    </h4>
                    <div className="image"><h4>{}</h4></div>
                </div>
                <div className="body-form">
                    <form onSubmit={admin} >
                        <div className="input-group mb-3">
                            <input  type="Email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
                            
                        </div>
                        <div className="input-group mb-3">
                            <input type="Password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-secondary btn-block btn-login">LOGIN</button>
                        <div className="message">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin
