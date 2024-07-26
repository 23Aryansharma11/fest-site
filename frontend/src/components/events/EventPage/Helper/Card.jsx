import { useNavigate } from 'react-router-dom';
const Card = ({ title, prize, image ,description}) => {
  const navigate = useNavigate();
 const handleClick =()=>{
  const info = { title: title, prize: prize , image:image ,description :description}; 
  navigate('/eventdetail', { state: info });
 }


  return (
   <div className="md:flex md:w-1/3 mb-5 mt-3 ">
     <div className="card bg-base-100  w-full shadow-xl h-full mb-5 mx-3 transform transition-transform duration-300 hover:shadow-2xl hover:scale-105" style={{display:'flex',}}>
  <figure>
    <img
      src={image}
      alt={title} />
  </figure>
  <div className="card-body">
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
