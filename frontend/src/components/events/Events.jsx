import React from 'react'
import NFS from "./nfs.jpeg"
import PUBG from "./pubg.jpeg"
import Hack from "./hackathon.jpg"
import { Sidebar } from './Sidebar'
const Events = () => {
  return (
    <div className="container" style={{margin:"0,auto",width:"100%" ,display:"flex",}}>
    <div style={{maxWidth:'400px',minWidth:"400px"}} id="carouselExample" className="carousel slide">
  <div  className="carousel-inner">
    <div className="carousel-item active" >
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
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Sidebar/>
</div>
  )
}

export default Events