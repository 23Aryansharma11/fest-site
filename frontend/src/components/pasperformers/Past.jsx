import Img from "./prats.jpeg"
import "./past.css"
import dilpreet from "./dilpreet.jpeg"
// import "./past.css"
export const Past = () => {
  return (
   
    <div className='pt-20'>
        <h1 className="xs:text-3xl font-normal lg:text-5xl past" >
            Past Performers
        </h1>
        
        <div className="pt-4">
          <div className="sliider">
             <div className="slider-track
             d-flex gap-4 w-max">
              <div className="slide "><img className="w-full h-full object-cover object-center" src="https://res.cloudinary.com/dofidva2t/image/upload/v1728230471/zcmc8bgvorlj71oprsxt.jpg"></img></div>
              <div className="slide"><img className="w-full h-full object-center object-cover" src="https://res.cloudinary.com/dofidva2t/image/upload/v1728230473/ans8xgnaucxzi17cupzm.jpg"></img></div>
              <div className="slide relative"><img className="w-full h-full object-cover relative" src="https://res.cloudinary.com/dofidva2t/image/upload/v1728233440/oj3tas3sslw8lnaqacf6.jpg"></img><div className=" absolute mx-auto text-center z-10">
              <p className="text-center absolute" >PRATS</p></div></div>

              <div className="slide"><img className="w-full h-full object-cover" src="https://res.cloudinary.com/dofidva2t/image/upload/v1728230472/fqwzh06wpqaachgjjetf.jpg"></img></div>
              <div className="slide"><img className="w-full h-full object-cover" src="https://res.cloudinary.com/dofidva2t/image/upload/v1728234741/u2kyz8ksphb7bdaj7ulv.jpg"></img></div>
              <div className="slide "><img className="w-full h-full object-cover object-center" src="https://res.cloudinary.com/dofidva2t/image/upload/v1728230471/zcmc8bgvorlj71oprsxt.jpg"></img></div>
              <div className="slide"><img className="w-full h-full  object-cover" src="https://res.cloudinary.com/dofidva2t/image/upload/v1728230473/ans8xgnaucxzi17cupzm.jpg"></img></div>
              <div className="slide relative"><img className="w-full h-full object-cover relative" src="https://res.cloudinary.com/dofidva2t/image/upload/v1728233440/oj3tas3sslw8lnaqacf6.jpg"></img><div className=" absolute mx-auto text-center z-10">
              <p className="text-center absolute" >PRATS</p></div></div>

              <div className="slide"><img className="w-full h-full object-cover" src="https://res.cloudinary.com/dofidva2t/image/upload/v1728230472/fqwzh06wpqaachgjjetf.jpg"></img></div>
              <div className="slide"><img className="w-full h-full object-cover" src="https://res.cloudinary.com/dofidva2t/image/upload/v1728234741/u2kyz8ksphb7bdaj7ulv.jpg"></img></div>
             </div>
          </div>
        </div>
    </div>
    
  )
}
