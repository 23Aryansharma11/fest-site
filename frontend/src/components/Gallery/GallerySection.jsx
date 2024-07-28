import robotImage from "../../assets/robot_spy-B22OfTYi.png";
const GallerySection = () => {
  const images = [
    {
      imgUrl:
        "https://i.pinimg.com/564x/59/4d/dc/594ddc10737934b1dbe7b1b4354aa3ae.jpg",
    },
    {
      imgUrl: robotImage,
    },
    {
      imgUrl:
        "https://i.pinimg.com/564x/c1/3c/c8/c13cc8b2e0c21cf637ec362e1d45718d.jpg",
    },
    // add new after this
  ];
  return (
    <section className="min-h-screen w-full flex justify-center items-center">
      <div className="h-full w-full flex flex-wrap justify-evenly items-center gap-5">
        {images.map((image, key) => (
          <div
            className="rounded-lg h-60 w-80 bg-darkbg flex justify-center items-center p-2"
            key={key}
          >
            <img
              src={image.imgUrl}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {images.map((image, key) => (
          <div
            className="rounded-lg h-60 w-80 bg-darkbg flex justify-center items-center p-2"
            key={key}
          >
            <img
              src={image.imgUrl}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {images.map((image, key) => (
          <div
            className="rounded-lg h-60 w-80 bg-darkbg flex justify-center items-center p-2"
            key={key}
          >
            <img
              src={image.imgUrl}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {images.map((image, key) => (
          <div
            className="rounded-lg h-60 w-80 bg-darkbg flex justify-center items-center p-2"
            key={key}
          >
            <img
              src={image.imgUrl}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {images.map((image, key) => (
          <div
            className="rounded-lg h-60 w-80 bg-darkbg flex justify-center items-center p-2"
            key={key}
          >
            <img
              src={image.imgUrl}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
