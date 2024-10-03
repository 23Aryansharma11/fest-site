import { useNavigate } from "react-router-dom";
import "./card.css";
const Card = ({ title, fees, image, description }) => {
  const navigate = useNavigate();
  let smalldesc = description?.slice(0, 100);
  const handleClick = () => {
    const info = {
      title: title,
      fees: fees,
      image: image,
      description: description,
    };
    navigate("/eventdetail", { state: info });
  };
  return (
    <div className="h-80 w-60 relative outer overflow-hidden rounded-xl peer gradient-border">
      <img className="h-full w-full object-cover object-center" src={image} />
      <div
        style={{ transition: "1s ease-in-out" }}
        className="absolute w-full h-full top-0  inner translate-y-96 peer-hover:translate-y-0  "
      ></div>
      <div className="text w-full h-full p-2 bg-transparent opacity-100">
        <h1 className="text-2xl">{title}</h1>
        <p>{smalldesc}</p>
        <p className="text-center">
          <span className="text-yellow-500 text-center ">Fees:</span>
          {fees}
        </p>
        <button className="btn btn-warning btn-outline" onClick={handleClick}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
