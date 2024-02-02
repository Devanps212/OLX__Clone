import React, { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/firebaseContext';
import {useNavigate} from 'react-router-dom'


export default function Signup() {
  const history = useNavigate()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [ph, setPh] = useState('');
  const [password, setPassword] = useState('');

  const {firebase} = useContext(FirebaseContext)

  const signupHandle = (e) => {
    e.preventDefault();
    console.log(firebase)
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:ph
        }).then(()=>{
          history('/login')
        })
      })
    })
    
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo' />
        <form onSubmit={signupHandle}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            name="username"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            value={ph}
            onChange={(e) => setPh(e.target.value)}
            type="text"
            id="phone"
            name="phone"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
