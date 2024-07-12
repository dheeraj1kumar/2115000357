import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {Link, Route , Routes} from "react-router-dom";
import Show from './Show';
import Home from './Home';
import Service from './Services';
const Card = () => {




      // const addProducts =()=>{
      //   const api ="https://fakestoreapi.com/products/";
      //   axios.post(api,{
      //     name: 'Test Product',
      //     description: 'This is a test product.',
      //     price: 99.99,
      //     category: 'Electronics',
      //     image: 'https://via.placeholder.com/150',
      //   })
      //    .then((res)=>{
      //     console.log(res);
      //    }).catch((erro)=>console.log(erro))
      //     };
    

// console.log(products);
  
  return (
    <div className='pt-[5%] pl-[5%]' >
    <nav className='flex justify-center gap-10'>
      <Link to="/">Home</Link>
      <Link to="/show">Show</Link>
      <Link to="/service">Service</Link>


    </nav>
     <hr />
     <Routes>
     <Route path="/"element={<Home/>}/>
     <Route path="/show"element={<Show/>}/>
     <Route path="/service"element={<Service/>}/>


      </Routes>
 
    </div>
  
  );


};

export default Card


// Api hame json ke format me data provide karti hai 
//api me do kam karte hai ya data bejte(send) hai ya get karte hai
//button click karne pe data araha hai by default nahi arha hai

//react life cycle
/*
1-component mount-new creation
2-componentupdate-when useState change or change in view then component/state me change hua
3-component unmount-deletion

*/