import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const Show = () => {
    const [products ,setproducts] =useState([]);
    const getProducts =()=>{
      const api ="https://fakestoreapi.com/products/";
      axios.get(api)
       .then((products)=>{
        // console.log(products);
        setproducts(products.data);
       }).catch((erro)=>console.log(erro))
        };

  return (
    <>

      <button onClick={getProducts} className='px-5 py-2 bg-red-300'>Call product api</button>
    
    <hr />
    <div>
        <ul>
        {products.length>0?(
          products.map((p)=>(
        <li key={p.id} className='mb-2 p-5 bg-red-200 rounded'>
          {p.title}
          </li>

        ))
        ):(
<h1>Loading ..</h1>
        )}     
        
       

      </ul>
    </div>

    </>
  )
}

export default Show