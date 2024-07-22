
import './App.css'
// import Nav from './components/navbar/nav'
import Home from './pages/Home.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignUp from './pages/SignUp.jsx';

function App() {
 

  return (
    <Router>
    
    <div className="App">
    
    <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/register" element={<SignUp/>}/>
     </Routes>
    </div>
    
    </Router>
  )
}

export default App
