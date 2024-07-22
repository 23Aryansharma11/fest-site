
import './App.css'
// import Nav from './components/navbar/nav'
import Home from './pages/Home.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';

function App() {


  return (
    <Router>
    
    <div className="App">
    
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/register" element={<SignUp/>}/>
      <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </div>
    
    </Router>
  )
}

export default App
