
import "./past.css"

// import "./past.css"
export const Past = () => {
  const data=[
    {
      img:"https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/zcmc8bgvorlj71oprsxt.jpg",
      name:"Dilpreet Dhillon"
    },
    {
      img:"https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/oj3tas3sslw8lnaqacf6.jpg",
      name:"the PRATS"
    },
    {
      img:"https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/ycflkahvhfeqaamvppgm.jpg",
      name:"Kumar Sahil"
    },
    {
      img:"https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/ans8xgnaucxzi17cupzm.jpg",
      name:"Kuldeep Sharma"
    },
    {
      img:"https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/u2kyz8ksphb7bdaj7ulv.jpg",
      name:"Arun Justa"
    },
    {
      img:"https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/oj3tas3sslw8lnaqacf6.jpg",
      name:"The PRATS"
    },
    {
      img:"https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/fqwzh06wpqaachgjjetf.jpg",
      name:"Laman Band"
    }
 ,
    {
      img:"https://res.cloudinary.com/dofidva2t/image/upload/f_auto,q_auto/zcmc8bgvorlj71oprsxt.jpg",
      name:"Dilpreet Dhillon"
    },
  ]
  return (
   
    <div className='pt-20'>
        <h1 className="xs:text-3xl font-normal lg:text-5xl past" >
            Past Performers
        </h1>
        
        <div className="pt-4">
          <div className="sliider">
             <div className="slider-track
             d-flex gap-4 w-max">
             

           

     {data.map(d=>{
       return( <div className="slide relative "><img className="w-full h-full object-cover relative" src={d.img}></img> <div className="absolute top-[17rem] text-white  utf flex justify-center items-center w-full text-center"><div className="text-xl">{d.name}</div></div></div>)
     })
     }

             







           
             </div>
          </div>
        </div>
    </div>
    
  )
}
