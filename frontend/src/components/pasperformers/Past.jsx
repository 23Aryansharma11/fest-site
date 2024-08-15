import Img from "./prats.jpeg"
import "./past.css"
import dilpreet from "./dilpreet.jpeg"
export const Past = () => {
  return (
   
    <div className='pt-20'>
        <h1 className="xs:text-3xl font-normal lg:text-5xl tra" style={{color:"#FFbd00" }}>
            Past Performers
        </h1>
        
        <div className="pt-4">
          <div className="sliider">
             <div className="slider-track
             d-flex gap-4 w-max">
              <div className="slide w-48"><img className="w-full h-full" src={Img}></img></div>
              <div className="slide"><img className="w-full h-full" src={dilpreet}></img></div>
              <div className="slide"><img className="w-full h-full" src={Img}></img></div>
              <div className="slide"><img className="w-full h-full" src={Img}></img></div>
              <div className="slide"><img className="w-full h-full" src={Img}></img></div>
              <div className="slide"><img className="w-full h-full" src={Img}></img></div>
              <div className="slide"><img className="w-full h-full" src={Img}></img></div>
              <div className="slide"><img className="w-full h-full" src={Img}></img></div>
              <div className="slide"><img className="w-full h-full" src={Img}></img></div>
              <div className="slide"><img className="w-full h-full" src={Img}></img></div>
             </div>
          </div>
        </div>
    </div>
    
  )
}
