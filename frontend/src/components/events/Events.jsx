import React, { useState } from 'react'
import NFS from "./nfs.jpeg"
import PUBG from "./pubg.jpeg"
import Hack from "./hackathon.jpg"
import { Sidebar } from './Sidebar'
const Events = () => {
    let [count,setCount]=useState(0)
    const increaseCount=()=>{
        console.log("function called")
        if(count==2){
            setCount(0);
        }else{
        setCount((count)=>count+1)
        }
    }
    const decreaseCount=()=>{
        if(count==0){
            setCount(2)
        }else{
        setCount((count)=>count-1)
        }
    }
  return (
    <div className="container xs:mx-auto relative xs:flex-col  md:flex-row lg:mx-0 lg:ml-24 xs:p-0 sm:justify-center" style={{margin:"auto" ,display:"flex",alignItems:'center',justifyContent:"flexStart"}}>
    <div style={{maxWidth:'400px'}} id="carouselExample" className="carousel slide md:pt-0 xs:pt-40 xs:w-screen">
  <div  className="carousel-inner w-full">
    <div className="carousel-item active w-full" >
      <img src={NFS} className="d-block w-100" alt="..."
      />
    
    </div>
    <div className="carousel-item">
      <img src={PUBG} className="d-block w-100" alt="..."
      />
    </div>
    <div className="carousel-item">
      <img src={Hack} className="d-block w-100" alt="..."
      />
    </div>
  </div>
  <button onClick={decreaseCount} className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button  onClick={increaseCount} className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    <span>{count}</span>
  </button>
</div>
<Sidebar props={count}/>
</div>
  )
}

export default Events