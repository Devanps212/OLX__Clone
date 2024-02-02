import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {FirebaseContext} from '../../store/firebaseContext'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {

  const [email, Setemail] = useState('')
  const [password, SetPassword] = useState('')
  
  const {firebase} = useContext(FirebaseContext)
  const history = useNavigate()
  const handleLogin = (e)=>{
   e.preventDefault()
   firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
    history('/')
   })
   .catch((error)=>{
    alert(error.message)
   }) 
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo'></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(e)=>Setemail(e.target.value)}
            type="email"
            id="fname"
            name="email"
            
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            onChange={(e)=>SetPassword(e.target.value)}
            type="password"
            id="lname"
            name="password"
            
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
