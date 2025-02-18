import "./App.css";
import Home from "./pages/Home.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import { Form } from "./pages/Form.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/authcontext.jsx";
import EventPage from "./pages/EventPage.jsx";
import { Admin } from "./pages/Admin.jsx";
import { Applied } from "./pages/Applied.jsx";
import EventInfo from "./pages/EventInfo.jsx";
import { data, Developers } from "./pages/Developers.jsx";
import Contact from "./pages/Contact.jsx";
import { About } from "./pages/AboutPage.jsx";
import Gallery from "./pages/Gallery.jsx";
import { Sponsors } from "./pages/Sponsors.jsx";
import { Update } from "./pages/Update.jsx";
import PageNotFOund from "./pages/PageNotFOund.jsx";
import { Tempcard } from "./components/card.jsx";
import { Loading } from "./pages/Loading.jsx";
import ComingSoon from "./pages/ComingSoom.jsx";
import CollaboratorPage from "./pages/Collaborate.jsx";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/register"
          element={authUser ? <Navigate to="/home" /> : <SignUp />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/form/:name"
          element={authUser ? <Form /> : <Navigate to="/register" />}
        />
        <Route path="/events" element={<EventPage />} />
        <Route path="/eventdetail" element={<EventInfo />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/getall"
          element={
            authUser && authUser.isAdmin ? (
              <Admin />
            ) : (
              <>
                <h1 className="text-yellow-500 text-center">
                  Buddy you think you look smart but you are wearing a fucking
                  cape.
                </h1>
              </>
            )
          }
        />
        <Route
          path="/getme"
          element={authUser ? <Applied /> : <Navigate to="/register" />}
        />
        <Route path="/developers" element={<Developers />} />
        <Route path="/about" element={<About value={data} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route
          path="/update/:id"
          element={authUser ? <Update /> : <Navigate to="/register" />}
        />
        <Route path="/hello" element={<Tempcard />} />
        <Route path="/" element={<Loading />} />
        <Route path="*" element={<PageNotFOund />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
        <Route path="/collaborate" element={<CollaboratorPage />} />
      </Routes>

      <Toaster
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
            border: "1px solid #A32CC4",
            borderRadius: "4px"
          },
        }}
      />
    </div>
  );
}

export default App;
