import { Link } from "react-router-dom"

export const Sidebar = ({value}) => {
    // console.log(props.props)
   
  return (
    <div className="text-left xs:w-72 lg:w-4/6 md-w-inherit leading-8 xs:pl-0 md:pl-20 " style={{color:"white"}}>
    <h1 className="font-extrabold md:text-left    font-REM text-3xl xs:absolute xs:top-0 md:relative" style={{color:"#FFbd00" }}>EVENTS</h1>
    <h2 className='font-Gantari font-normal text-3xl mt-4'>{value.name}</h2>
    <div className=" border-l-8 border-warning mt-4 ">
    <p className='text-base ml-3 '>{value.description}</p>
    </div>
    <div className="mt-3">
    <Link to="/events" className='px-4 py-1 border-2 border-blue-4px-4 py-2 border-2 border-blue-500 text-white   hover:scale-10500 text-white focus:outline-none inline-block'>Explore more</Link>
    </div>
    </div>
  )
}
