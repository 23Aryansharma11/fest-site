import { useNavigate } from 'react-router-dom';
import "./card.css"
const Card = ({ title, fees, image ,description}) => {
  const navigate = useNavigate();
  let smalldesc=description?.slice(0,100)
 const handleClick =()=>{
  const info = { title: title, fees: fees , image:image ,description :description}; 
  navigate('/eventdetail', { state: info });
 }


  return (
//    <div className=" mb-5 mt-3  ">
//      <div className="card  shadow-xl h-full mb-5 mx-3 transform transition-transform duration-300 hover:shadow-2xl hover:scale-105 bg-darkbg border-yellow-500" style={{display:'flex',}}>
//   <figure style={{maxHeight:"243px" ,minHeight:"232px"}} className='min-h-62 overflow-hidden object-cover'>
//     <img style={{height:"243px"}} className='h-full w-full object-cover'
//       src={image}
//       alt={title} />
//   </figure>
//   <div className="card-body  text-white">
//     <h2 className="card-title">{title}</h2>
//     <p className='text-yellow-500'>Fees : {fees}</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-outline btn-warning" onClick={handleClick}>View Details</button>
//     </div>
//   </div>
// </div>
//    </div>
//    )
//   }
 <div className="h-80 w-60 relative outer overflow-hidden rounded-xl peer">
<img className="h-full w-full object-cover object-center" src={image}/>
    <div style={{transition:"1s ease-in-out"}} className='absolute w-full h-full top-0  inner translate-y-96 peer-hover:translate-y-0  '>

    </div>
    <div className="text w-full h-full p-2 bg-transparent opacity-100">
       <h1 className='text-2xl'>{title}</h1>
       <p>{smalldesc}</p>
       <p className='text-center'><span className='text-yellow-500 text-center '>Fees:</span>{fees}</p>
       <button className='btn btn-warning btn-outline' onClick={handleClick}>View Details</button>
       </div>
  </div> 

  )
}

export default Card
