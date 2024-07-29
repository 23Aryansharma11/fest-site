import React from "react";
import Nav from "../components/navbar/Nav";
import hackathon from "../assets/hackathon.jpg";
import Footer from "../components/Footer/Footer";

export const About = () => {
  return (
    <>
      <Nav />
      <div className="text-white p-2">
        <div>
          <h1 className="text-left text-3xl md:text-5xl text-prim py-3">
            University Institute of Technology
          </h1>
          <p className="text-justify">
            The University Institute of Technology (UIT) in Shimla stands as a premier institution dedicated to excellence in science and information technology. It fosters professionals and leaders imbued with the ideals of entrepreneurship, ethics, and social responsibility. Since 2000, UIT has operated under the auspices of the executive council of Himachal Pradesh University. The institution attracts students from all over the nation, offering a B.Tech. Degree in Information Technology, Computer Science Engineering, Electronics and Communications Engineering, Electrical Engineering, and Civil Engineering. These programs aim to develop skilled, motivated engineers who are also visionary leaders, thinkers, and scientists. The All India Council of Technical Education has accredited UIT's academic programs, ensuring high standards of education.
          </p>
        </div>


        <div className="pt-5">
          <h1 className="text-left text-3xl md:text-5xl text-prim py-3">
            Utkarsh
          </h1>
          <p className="text-justify">
            UIT Shimla emphasizes holistic development through various extracurricular activities, technical festivals, and industry collaborations, providing students with ample opportunities to enhance their practical skills and professional network. UIT's Utkarsh is the largest annual techno-cultural fest in Himachal Pradesh featuring a plethora of events, attracting participants from all over the northern India, and luminaries from all around the world.
          </p>
          <br />
          <p className="text-justify">
            Events like Dexteria, Atlantus, traditional dances, and Star Nights are the highlights of Utkarsh.
          </p>
        </div>

        <br />

        <div className="pt-4">
          <h1 className="text-left text-2xl md:text-4xl text-prim py-3">
            Dexteria
          </h1>
          <p className="text-justify">
            It comprises events like competitions, hackathons, lectures, and workshops that aim to provide a platform for the students to develop and showcase their technical prowess.
          </p>
          <br />
          <section className="p-3 flex flex-col items-center justify-center md:flex-row">
            <h1 className="text-center text-xl md:text-3xl text-prim p-3 md:hidden">
              Hackathon: Code. Create. Conquer.
            </h1>
            <img src={hackathon} className="rounded-2xl w-8/12 md:w-72" />
            <div className="flex flex-col items-center md:items-start">
              <h1 className="hidden md:block text-left text-xl md:text-3xl text-prim p-3">
                Hackathon: Code. Create. Conquer.
              </h1>
              <p className="text-justify p-3">
                Unleash your creativity and coding prowess at our premier Hackathon! Whether you're a seasoned coder or a newbie with a passion for tech, this is your chance to shine. Collaborate, compete, and showcase your talents for a shot at exciting prizes and unparalleled glory. Ready to make your mark? Join us and let's code the future!
              </p>
            </div>
          </section>

          <br />

          <div className="border-t border-prim px-5"></div>

          <br />

          <section className="p-3 flex flex-col items-center justify-center md:flex-row-reverse">
            <h1 className="text-center text-xl md:text-3xl text-prim p-3 md:hidden">
            Quibble: Sharpen Your Mind, Win the Challenge!
            </h1>
            <img src="https://img.freepik.com/free-vector/quiz-show-concept-illustration_114360-9751.jpg" className="rounded-2xl w-8/12 md:w-72" />
            <div className="flex flex-col items-center md:items-start">
              <h1 className="hidden md:block text-left text-xl md:text-3xl text-prim p-3">
                Quibble: Sharpen Your Mind, Win the Challenge!
              </h1>
              <p className="text-justify p-3">
              Gear up for Quibble, the ultimate quiz showdown that tests your wits and reflexes! Dive into a thrilling, fast-paced competition where quick thinking and sharp knowledge are your best allies. Designed to challenge and inspire, Quibble is your chance to showcase your intellect and compete branch-wise for the glory. Ready to prove you're the smartest in the room? Join us, flex your mental muscles, and let the quizzing begin!
              </p>
            </div>
          </section>
        </div>

        <br />

        <div className="pt-4">
          <h1 className="text-left text-2xl md:text-4xl text-prim py-3">
            Atlantus
          </h1>
          <p className="text-justify">
            This is an esports event bringing together top games like CSGO, Valorant, FIFA, and NFS for an epic showdown of skill and strategy.
          </p>
          <br />
          <section className="p-3 flex flex-col items-center justify-center md:flex-row">
            <h1 className="text-center text-xl md:text-3xl text-prim p-3 md:hidden">
              Need For Speed
            </h1>
            <img src="https://w0.peakpx.com/wallpaper/246/961/HD-wallpaper-need-for-speed-heat-2021-need-for-speed-heat-need-for-speed-games-2021-games.jpg" className="rounded-2xl w-8/12 md:w-72" />
            <div className="flex flex-col items-center md:items-start">
              <h1 className="hidden md:block text-left text-xl md:text-3xl text-prim p-3">
                Need For Speed
              </h1>
              <p className="text-justify p-3">
              Rev your engines and burn rubber in a high-octane race to victory! Challenge your rivals and showcase your driving skills in an adrenaline-pumping competition.
              </p>
            </div>
          </section>

          <br />

          <div className="border-t border-prim px-5"></div>

          <br />

          <section className="p-3 flex flex-col items-center justify-center md:flex-row-reverse">
            <h1 className="text-center text-xl md:text-3xl text-prim p-3 md:hidden">
            FIFA
            </h1>
            <img src="https://w0.peakpx.com/wallpaper/453/948/HD-wallpaper-video-game-fifa-22-kylian-mbappe.jpg" className="rounded-2xl w-8/12 md:w-72" />
            <div className="flex flex-col items-center md:items-start">
              <h1 className="hidden md:block text-left text-xl md:text-3xl text-prim p-3">
                FIFA
              </h1>
              <p className="text-justify p-3">
              tep onto the virtual pitch and showcase your football prowess in a dynamic tournament! Outmaneuver your rivals and score your way to the top in this electrifying soccer showdown.
              </p>
            </div>
          </section>
        </div>

        <br />

        <div className="pt-4">
          <h1 className="text-left text-2xl md:text-4xl text-prim py-3">
            Cultural Event
          </h1>
          <p className="text-justify">
            Immerse yourself in a vibrant celebration of arts, traditions, and performances that showcase the rich tapestry of diverse cultures.
          </p>
          <br />
          <section className="p-3 flex flex-col items-center justify-center md:flex-row">
            <h1 className="text-center text-xl md:text-3xl text-prim p-3 md:hidden">
              Bharatnatyam
            </h1>
            <img src="https://st2.depositphotos.com/1267105/11252/i/450/depositphotos_112529256-stock-photo-indian-bharatanatyam-dancer.jpg" className="rounded-2xl w-8/12 md:w-72" />
            <div className="flex flex-col items-center md:items-start">
              <h1 className="hidden md:block text-left text-xl md:text-3xl text-prim p-3">
                Bharatnatyam
              </h1>
              <p className="text-justify p-3">
                Experience the grace and artistry of this classical dance form as performers bring ancient traditions to life with stunning moves and expressive storytelling. Dive into the rich heritage of Bharatnatyam and witness a mesmerizing fusion of rhythm and elegance.
              </p>
            </div>
          </section>

          <br />

          <div className="border-t border-prim px-5"></div>

          <br />

          <section className="p-3 flex flex-col items-center justify-center md:flex-row-reverse">
            <h1 className="text-center text-xl md:text-3xl text-prim p-3 md:hidden">
              Modelling
            </h1>
            <img src="https://img.freepik.com/free-vector/fashion-show-runway-flat-design_23-2148821131.jpg" className="rounded-2xl w-8/12 md:w-72" />
            <div className="flex flex-col items-center md:items-start">
              <h1 className="hidden md:block text-left text-xl md:text-3xl text-prim p-3">
                Modelling
              </h1>
              <p className="text-justify p-3">
              Strut on the runway and showcase your style in a glamorous display of fashion and flair! Shine under the spotlight and captivate the audience with your confidence and unique presence in this high-energy modelling event.
              </p>
            </div>
          </section>
        </div>

        <div className="pt-5">
          <h1 className="text-left text-3xl md:text-5xl text-prim py-3">
            And Who are We?
          </h1>
          <p className="text-justify">
            We are the Technical Team of UIT Shimla, the driving force behind the techfest. From orchestrating seamless event operations to crafting innovative solutions, we blend our skills and enthusiasm to bring you an unforgettable experience. Our mission is to ensure every detail is perfect and every challenge is met with expertise, making the techfest a showcase of creativity and technological excellence.
          </p>
        </div>

      </div>
      <Footer/>
    </>
  );
};
