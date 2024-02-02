import React,{useContext, useEffect, useState} from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/firebaseContext';
import { useNavigate } from 'react-router-dom';
import { CardContext } from '../../store/CardContext';


function Posts() {

  const{firebase} = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const {setPostDetails} = useContext(CardContext)
  
  const navigate = useNavigate()

  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allCards = snapshot.docs.map((products)=>
      {
        return{
          ...products.data(), id:products.id
        }
      })
      setProducts(allCards)
    })
  })

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {products.map(product=>{
            
            return <div onClick={()=>{
              setPostDetails(product)
              navigate('/view')
            }} className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.creadAt}</span>
            </div>
          </div>
          })
          
}
        </div>
      </div>
    </div>
  );
}

export default Posts;
