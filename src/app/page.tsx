
import { ImageH } from "@/components/Image/image";
import DevfolioBtn from "@/components/applyDevFolio/btn";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

import Menu from "@/components/navMob/Menu";

import { FlipWords } from "@/components/ui/flip-words"

export default function Home() {
  const words = ["Code. Build. Debug. Collaborate. Innovate. Compete. Conquer!", "Dream. Code. Break. Fix. Launch. Disrupt. Repeat!" ,"Ideate. Prototype. Pivot. Build. Scale. Win!"];
  return (
    <main>
      <div className="w-screen h-screen overflow-x-hidden overflow-y-hidden">
        <BackgroundGradientAnimation></BackgroundGradientAnimation>
        <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center">
          <nav className="absolute top-4 md:top-4 lg:top-4 w-[85vw] md:w-[70vw] lg:w-[60vw] h-14  rounded-3xl md:rounded-3xl px-4 py-2 border-solid border-white/5 border-[2px]  bg-white/5 flex flex-row justify-between items-center">
            <div id="leftSec" className="text-white/80 text-base md:text-lg font-medium" >
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
            <FlipWords words={words} className=" text-white/80 text-base md:text-lg font-medium text-center" />

            </div>

            <a href="https://cepheus.devfolio.co" className="mt-6 px-6 py-2 border-solid border-[1px] bg-white text-black border-white rounded-3xl font-medium">
              Register Now!
              
            </a>
            
            <div className=" absolute top-0 -z-40 opacity-0"><DevfolioBtn /></div>
            
            <p className=" text-xs underline mt-2 font-medium opacity-40">Know More</p>
            
          </div>
          <div className=" absolute bottom-0 flex flex-col justify-center items-center mb-4 md:mb-6">
            <div className=" opacity-60 text-xs md:text-sm mb-4  text-white">
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
    </main>
  );
}

/*

*/
