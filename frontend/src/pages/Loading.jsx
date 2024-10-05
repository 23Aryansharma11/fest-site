import React, { useEffect, useRef } from 'react'
import "./Loading.scss"
import  "letteringjs"
import { useNavigate } from 'react-router-dom'
import { Particles } from '../components/Particles/Particles'
// import "./Loading.js"

// const splitIntoWords = (text) => {
//     return text.split(' ').map((word, index) => (
//       <span key={index} className={`word word${index + 1}`}>
//         {word.split('').map((letter, letterIndex) => (
//           <span key={letterIndex} className="letter">
//             {letter}
//           </span>
//         ))}
//       </span>
//     ));
//   };
export const Loading = () => {
    const navigate=useNavigate()
    const splitText = (text,index) => {
      
        return text.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="word ">
            {word.split('').map((letter, letterIndex) => (
              <span key={letterIndex} className="letter ">{letter}</span>
            ))}
          </span>
        ));
      };
    const phrasesRef = useRef(null);
    const phrases = [
        "WTF",
        "It\'s",
        "UTF",
       
      ];
    
      useEffect(() => {
        // const $phrases = $(phrasesRef.current).find('h2');
    
        // Equivalent jQuery code in React
        $("#os-phrases > h2")
        .css('opacity', 1).lettering( 'words' )
        .children( "span" ).lettering()
        .children( "span" ).lettering(); 
        setTimeout(()=>{
    navigate("/home")
        },9000)
    //    navigate("/home")
      }, []);
    
  return (
    <div style={{zIndex:"1000"}} className="w-full h-screen absolute bg-black">	
    {/* <Particles/> */}
    <div className="os-phrases" id="os-phrases">
    {phrases.map((phrase, index) => (
          <h2 key={index} className={`phrase xs:text-[4rem] md:text-[8rem] text-center flex justify-center phrase-${index}`}>
            {splitText(phrase,index)}
          </h2>
        ))}
    </div>
</div>

  )
}
