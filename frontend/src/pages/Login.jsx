import LoginForm from "../components/Forms/LoginForm";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Nav from "../components/navbar/Nav";
const Login = () => {
  const navigate = useNavigate();
  const imageUrl =
    "https://res.cloudinary.com/aryansharma/image/upload/v1721474616/UtkarshLogo.png";
  return (
    <>
      <Nav />

      <main className="bg-darkbg text-white min-h-screen w-full flex items-center justify-center md:justify-around relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-3 top-[5rem] border-gray"
        >
          <IoIosArrowBack />
        </button>
        <section className="">
          <LoginForm />
        </section>
        <section className="hidden md:block">
          {/* Todo: Change image */}
          <img src={imageUrl} alt="Logo" className=" size-80" />
        </section>
      </main>
    </>
  );
};

export default Login;
