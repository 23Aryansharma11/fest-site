import SpinningLogo from "./SpinningLogo";

const UtkarshIntro = () => {
  return (
    <main className=" bg-darkbg text-white flex justify-center gap-16 md:justify-between flex-col md:flex-row h-screen ">
      <section className="flex justify-center items-center w-full md:w-1/2">
        <SpinningLogo />
      </section>
      <section className="w-full md:w-1/2 flex flex-col  justify-center gap-5 md:gap-10 px-5 mr-20 text-left text-pretty">
        <h1 className="text-4xl md:text-6xl font-bold ">Utkarsh</h1>
        <h2 className="text-lg md:text-2xl md:leading-9 cabin">
          Welcome to Utkarsh, the largest techno-cultural fest in Himachal
          Pradesh! Hosted by{" "}
          <span className="text-prim font-bold">
            University Institude of Technology
          </span>
          , HPU, Utkarsh attracts over{" "}
          <span className="text-prim font-bold">5000</span> participants
          from North India. Since 2014, we have proudly completed 8 editions,
          featuring over 25 competitions, lectures, and shows. <br />{" "}
          <span className="text-prim">
            Join us for an unforgettable experience with luminaries from around
            the world.
          </span>
        </h2>
      </section>
    </main>
  );
};

export default UtkarshIntro;
