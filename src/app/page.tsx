import { ImageH } from "@/components/Image/image";
import DevfolioBtn from "@/components/applyDevFolio/btn";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

import Menu from "@/components/navMob/Menu";

import { FlipWords } from "@/components/ui/flip-words";
import Rbtn from "@/components/registerBtn/btn";
import { AboutUs, ProblemState } from "@/components/problemStatement/ps";
import Countdown from "@/components/counter/Counter";

import { HackathonFAQ } from "@/components/faqs/faqs";

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
        <div className="w-full h-screen absolute top-0 flex flex-col justify-center items-center">
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
              GDG · On Campus Atria IT x Code Club Presents
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
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
              <div className="flex flex-row items-center justify-center gap-4 md:gap-12">
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
              <a href="https://zoodleme.com/" className=" text-white font-bold text-base md:text-lg" >ZoodleMe</a>
              </div>
              <div className="flex flex-row items-center justify-center gap-4 md:gap-12">
              <p className=" text-white  text-base md:text-lg font-serif" ><b>VR</b> Prints</p>
              
              <a href="https://internshipgate.com" className=" text-white text-base md:text-lg" >Internship<b>Gate</b></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        id="counter"
        className="w-screen h-auto py-10 flex  flex-col items-center justify-center text-black bg-[linear-gradient(180deg,var(--gradient-background-start),var(--gradient-background-end))]"
      >
        <div className="">
          <Countdown targetDate="2025-04-10T23:59:59" />
        </div>
      </section>
      {/* <div className="w-screen h-[2px] bg-[#e0e0e0]"></div> */}

      <div
        id="aboutus"
        className="w-screen h-auto mt-8 flex px-3 md:px-20 lg:px-40 flex-col items-center justify-center  text-white"
      >
        <h1 className="text-2xl mb-4 md:text-3xl font-bold bg-gradient-to-r from-white via-yellow-100 to-gray-400 bg-clip-text text-transparent animate-gradient">
          About Us
        </h1>
        <AboutUs></AboutUs>
      </div>


      <div
        id="statement"
        className="w-screen h-auto mt-8 flex px-3 md:px-20 lg:px-40 flex-col items-center justify-center  text-white"
      >
        <h1 className="text-2xl mb-4 md:text-3xl font-bold bg-gradient-to-r from-white via-yellow-100 to-gray-400 bg-clip-text text-transparent animate-gradient">
          ✏️ Detailed Problem Statements
        </h1>
        <ProblemState></ProblemState>
      </div>x

      <section
        id="FAQs"
        className="w-screen h-auto  flex px-6 md:px-20 lg:px-40 flex-col items-center justify-center  text-white"
      >
        <h1 className="text-2xl my-12 md:text-3xl font-bold bg-gradient-to-r from-white via-yellow-100 to-gray-400 bg-clip-text text-transparent animate-gradient">
          FAQs
        </h1>

        <HackathonFAQ />
      </section>

      <footer id="aboutus" className=" mt-20">
        <Footer />
      </footer>
    </main>
  );
}

/*

*/
