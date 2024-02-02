import React, { Fragment, useState, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/firebaseContext'
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState('');
 const date = new Date()
 const navigate = useNavigate()
  const submitHandle = ()=>{
     firebase.storage().ref(`/img/${img.name}`).put(img).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
        navigate('/')
      })
     })
  }
  

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form >
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              id="category"
              name="category"
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input
              className="input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              id="price"
              name="price"
            />
            <br />
            <br />
            <img alt="Posts" width="200px" height="200px" src={img ? URL.createObjectURL(img): ""}></img>
            <br />
            <input onChange={(e) => setImg(e.target.files[0])} type="file" />
            <br />
            <button type="button" onClick={submitHandle} className="uploadBtn">Upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
