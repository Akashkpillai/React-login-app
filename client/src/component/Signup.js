import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import "./signup.css";

function Signup() {
  const [user, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[validation,setValidation] = useState('')
  let navigate = useNavigate();

 async function registerUser(e) {
    e.preventDefault();

const response = await fetch("http://localhost:4000/signin", {
     method : 'POST',
     headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({
        user,
        email,
        password
      }),
    })

    .then((res)=>
      res.json()
    ).then((data)=>{
      if(data.status === 'false'){
        setValidation(data.data)
      }else{
        navigate('/login')
      }
    })
      
    // console.log(data);
  }
  return (
    <div>
      <div className="container signup">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary-signin">SIGN IN</h4>
                
            <div className="image"><h4>{validation}</h4></div>
          </div>
          <div className="body-form">
            <form onSubmit={registerUser}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={user}
                  placeholder="Username"
                 onChange={(e)=>
                  { 
                    setUsername (e.target.value)
                  }}
                />
                 <input
                  type="email"
                  className="form-control"
                  value={email}
                  placeholder="Email"
                  onChange = {(e) => {
                    setEmail(e.target.value);
                  }}
                />
                 <input
                  type="password"
                  className="form-control"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-secondary btn-block btn-login"
              >
                SIGN IN
              </button>
              <div className="message">
                            <div >
                                <a onClick={()=>{
                                  navigate('/login')
                                }}>LOGIN</a>
                            </div>
                        </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
