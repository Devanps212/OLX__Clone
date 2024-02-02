import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Include Routes from react-router-dom

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import SignupPage from './Pages/Signup'
import LoginPage from './Pages/Login'
import {AuthContext, FirebaseContext} from './store/firebaseContext'
import CreatePage from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import { Post } from './store/CardContext';


function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        setUser(user)
      })
    })
  return (
    <div>
      <Post>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/signup' element={<SignupPage/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/view' element={<ViewPost />} />  
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
