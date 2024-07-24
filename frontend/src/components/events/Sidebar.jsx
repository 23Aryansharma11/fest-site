import { Link } from "react-router-dom"

export const Sidebar = (props) => {
    console.log(props.props)
    const values=[{
        name:"NFS",
        paragraph:"NFS is a racing game"
    },{
        name:"winshoot",
        paragraph:"Hello"
    },{
        name:"Hackathon",
        paragraph:"Hackahton"
    }]
  return (
    <div className="text-left xs:w-72 md-w-inherit leading-8 " style={{color:"white", paddingLeft:"5rem"}}>
    <h1 className="font-extrabold font-REM text-3xl xs:absolute xs:top-0 md:relative" style={{color:"#FFbd00" }}>EVENTS</h1>
    <h2 className='font-Gantari font-normal text-3xl mt-4'>{values[props.props].name}</h2>
    <div className=" border-l-8 border-warning mt-4 ">
    <p className='text-base ml-3 '>{values[props.props].paragraph}</p>
    </div>
    <div className="mt-3">
    <Link to="/events" className='px-4 py-1 border-2 border-blue-4px-4 py-2 border-2 border-blue-500 text-white   hover:scale-10500 text-white focus:outline-none inline-block'>Explore more</Link>
    </div>
    </div>
  )
}
