import "./spinningLogo.css";
import img from  "../../assets/atlantus.png"
const SpinningLogo = () => {
  // Todo: Add higher quality logo
  const frontImageUrl =
    "https://res.cloudinary.com/aryansharma/image/upload/v1721474616/UtkarshLogo.png";
  return (
    <div className="flex justify-center items-center h-full">
      <div className="coin relative size-48 md:size-96 transform-style-preserve-3d animate-spin-coin">
        <div className="coin-face coin-front absolute w-full h-full backface-hidden">
          <img
            src={img}
            alt="Front"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="coin-face coin-back absolute w-full h-full backface-hidden transform rotate-y-180">
          <img
            src={img}
            alt="Back"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="coin-edge absolute w-full h-full backface-hidden">
          <div className="edge w-full h-full bg-gray-300 transform rotate-x-90 translate-z-24"></div>
        </div>
      </div>
    </div>
  );
};

export default SpinningLogo;
