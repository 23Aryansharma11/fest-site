import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Nav from './components/navbar/nav'
import Home from './pages/Home.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
 

  return (
    <Router>
    
    <div className="App">
    
    <Routes>
     
     <Route exact path="/" element={<Home/>}/>
     
     </Routes>
    </div>
    
    </Router>
  )
}

export default App
