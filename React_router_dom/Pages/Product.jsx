import React from 'react'
import { productlist } from './Productlist';
import { Link, useNavigate } from 'react-router-dom';

export default function Product() {
    
    console.log("productlist",productlist);

    const navigate = useNavigate()

  return (
    <>
      <div className="container">
        <h1 className='mb-3'>Product</h1>
        <hr />
        {
            productlist.map((item)=>{
                const{id,name,Description,Price} = item;
                return (
                  <div  
                  className='p-3 shadow border-1 d-flex justify-content-between'>
                    <h4>{name}</h4>
                    <button onClick={()=>navigate(`/product/${id}`,{state:item})} className='btn btn-primary'>View Details</button>
                    {/* <Link to={`/product/${id}`}>View Details</Link> */}
                  </div>
                );
            })
        }
      </div>
    </>
  );
}
