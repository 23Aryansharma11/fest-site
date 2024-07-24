import "./App.css";
// import Nav from './components/navbar/nav'
import Home from "./pages/Home.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import { Form } from "./pages/Form.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/authcontext.jsx";
import EventPage from "./components/events/EventPage/EventPage.jsx";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={authUser ? <Navigate to="/form" /> : <SignUp />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/form" /> : <Login />}
        />
        <Route
          path="/form"
          element={authUser ? <Form /> : <Navigate to="/register" />}
        />
        <Route
          path="/events"
          element={<EventPage/>}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
