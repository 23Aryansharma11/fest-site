import { useNavigate } from 'react-router-dom';
const Card = ({ title, prize, image ,description}) => {
  const navigate = useNavigate();
 const handleClick =()=>{
  const info = { title: title, prize: prize , image:image ,description :description}; 
  navigate('/eventdetail', { state: info });
 }


  return (
   <div className=" mb-5 mt-3  ">
     <div className="card  shadow-xl h-full mb-5 mx-3 transform transition-transform duration-300 hover:shadow-2xl hover:scale-105 bg-yellow-500" style={{display:'flex',}}>
  <figure style={{maxHeight:"243px" ,minHeight:"232px"}} className='min-h-62 overflow-hidden object-cover'>
    <img style={{height:"243px"}} className='h-full w-full object-cover'
      src={image}
      alt={title} />
  </figure>
  <div className="card-body  text-white">
    <h2 className="card-title">{title}</h2>
    <p className='text-black'>{prize}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={handleClick}>View Details</button>
    </div>
  </div>
</div>
   </div>
  )
}

export default Card
