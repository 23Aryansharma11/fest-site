import React from 'react'

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
    <button className='mt-4'>Explore more</button></div>
  )
}
