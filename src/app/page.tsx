import { ImageH } from "@/components/Image/image";
import DevfolioBtn from "@/components/applyDevFolio/btn";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

import Menu from "@/components/navMob/Menu";

import { FlipWords } from "@/components/ui/flip-words";
import Rbtn from "@/components/registerBtn/btn";
import {
  CalendarCheck,
  MapPin,
  User2,
} from "lucide-react";
// import { TimelineDemo } from "@/components/timeline/tl";
import Footer from "@/components/footer/footer";

export default function Home() {
  const words = [
    "Code. Build. Debug. Collaborate. Innovate. Compete. Conquer!",
    "Dream. Code. Break. Fix. Launch. Disrupt. Repeat!",
    "Ideate. Prototype. Pivot. Build. Scale. Win!",
  ];
  return (
    <main>
      <div className="w-screen h-screen overflow-x-hidden overflow-y-hidden">
        <BackgroundGradientAnimation></BackgroundGradientAnimation>
        <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center">
          <nav className="absolute top-4 md:top-4 lg:top-4 w-[85vw] md:w-[70vw] lg:w-[60vw] h-14  rounded-3xl md:rounded-3xl px-4 py-2 border-solid border-white/5 border-[2px]  bg-white/5 flex flex-row justify-between items-center">
            <div
              id="leftSec"
              className="text-white/80 text-base md:text-lg font-medium"
            >
              Welcome <b>Hacker</b>
            </div>
            <div id="rightSec" className=" text-white/70">
              <Menu />
            </div>
          </nav>

          <div className="w-auto h-auto   flex flex-col text-white items-center justify-center">
            <p className=" text-[0.68rem] md:text-sm mb-1 text-white/50 ">
              GDG · On Campus Atria IT x MCA Dept Presents
            </p>
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-white via-yellow-100 to-gray-400 bg-clip-text text-transparent animate-gradient">
              Cepheus
            </h1>

            <div className="text-[0.9rem] md:text-lg text-center w-[70%] lg:w-[100%]  lg:text-lg font-medium mt-4 ">
              <FlipWords
                words={words}
                className=" text-white/80 text-base md:text-lg font-medium text-center"
              />
            </div>
            <Rbtn />

            <div className=" absolute top-0 -z-40 opacity-0">
              <DevfolioBtn />
            </div>

            <p className=" text-xs underline mt-2 font-medium opacity-40">
              <a href="#aboutus">Know More</a>
            </p>
          </div>
          <div className=" absolute bottom-0 flex flex-col justify-center z-10 items-center mb-6 ">
            <div className=" text-xs md:text-sm mb-4  text-white/60 ">
              In sponsorship with
            </div>
            <div className="flex flex-row items-center justify-center gap-6">
              <ImageH
                src="/Devfolio_Logo-White.svg"
                alt="DEVFOLIO LOGO"
                width={80}
                height={40}
                className="md:w-[100px] md:h-[50px]"
                href="https://devfolio.co"
              />
              <ImageH
                src="/ethindia-light.svg"
                alt="ETHINDIA LOGO"
                width={80}
                height={40}
                className="md:w-[100px] md:h-[50px]"
                href="https://ethindia.co"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="aboutus"
        className="w-screen h-auto border-solid border-black/10 border-2 overflow-x-hidden overflow-y-hidden bg-white flex flex-col  md:items-center"
      >
        <div className=" text-purple-900 text-3xl md:text-5xl font-semibold mt-16 md:mt-24 flex flex-row text-center w-screen items-center  justify-center">
          About Us
        </div>
        <div className=" text-black/60 text-lg md:text-center mx-6 md:mx-32 mt-8 md:mt-12">
          Join us in supporting the future of innovation at the Cepheus
          Hackathon on March 7-8, 2025! This 24- hour coding marathon brings
          together talented developers, designers, and problem-solvers to tackle
          cutting-edge challenges and create groundbreaking solutions. As a
          sponsor, you&apos;ll have the opportunity to engage with top tech talent,
          showcase your brand, and contribute to the advancement of technology.
          Be a part of this dynamic event where creativity meets collaboration,
          and help shape the next wave of innovation!.
        </div>
        <div className=" flex flex-col md:flex-row gap-6 md:gap-12 mt-10 md:mt-12 mx-6 md:mx-0 text-base font-semibold text-purple-900 mb-12 md:mb-24 ">
          <div className=" flex flex-row gap-3">
            <CalendarCheck /> 10th March 2025
          </div>
          <div className=" flex flex-row gap-3">
            <MapPin />{" "}
            <a href="https://g.co/kgs/a7mjqRS">Atria Institute of Technology</a>
          </div>
          <div className=" flex flex-row gap-3">
            <User2 /> 150+{" "}
          </div>
        </div>
      </div>
      <div
        id="contactus"
        className="w-screen h-auto border-solid border-black/10 border-2 overflow-x-hidden overflow-y-hidden bg-white flex flex-col  md:items-center"
      >
        <div className=" text-purple-900 text-3xl md:text-5xl font-semibold mt-16 md:mt-24 flex flex-row text-center w-screen items-center  justify-center">
          Contact Us
        </div>
        <div className=" text-black/60 text-lg md:text-center mx-6 md:mx-32 mt-8 md:mt-12 mb-24">

📞 For Queries: <br />
📌 Sadiya: <b>8904287931</b>  <br />
📌 Harshit: <b>6207656024</b> <br />
📌 Sulaiman: <b>8792345338</b> <br />
📌 Indrajit: <b>7899818522</b> <br />
<br /> 
⚡ Innovate. Compete. Win. See you at CEPHEUS 2025! 🚀
        </div>

      </div>
      {/* <div id="" className="w-screen h-auto  ">
        <TimelineDemo />
      </div> */}

      <footer className="w-screen h-[30vh] bg-black">
        <Footer />
      </footer>
    </main>
  );
}

/*

*/
