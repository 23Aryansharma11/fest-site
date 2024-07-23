
import './App.css'
// import Nav from './components/navbar/nav'
import Home from './pages/Home.jsx'
import {
 
  Routes,
  Route,
  
} from "react-router-dom";
import SignUp from './pages/SignUp.jsx';
import {Form} from './pages/Form.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
 

  return (
    <>
    
    <div className="App">
    {/* <Toaster/> */}
    <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route  path="/register" element={<SignUp/>}/>
     <Route  path="/form" element={<Form/>}/>
    
     </Routes>
     
    </div>
    
    </>
    
  )
}

export default App
