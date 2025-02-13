import ColourfulText from "@/components/ui/colourful-text";
import { ImageH } from "@/components/Image/image";
import DevfolioBtn from "@/components/applyDevFolio/btn";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { div, main } from "motion/react-client";

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen">
        <BackgroundGradientAnimation></BackgroundGradientAnimation>
        <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center">
          <nav className=" absolute top-0 md:top-4 lg:top-4 w-screen md:w-[70vw] lg:w-[60vw] h-14 backdrop:blur-xs md:rounded-3xl px-4 py-2 border-solid md:border-white/5 md:border-[2px]  bg-slate-50/5 flex flex-row justify-between items-center">
            <div id="leftSec">left</div>
            <div id="rightSec">right</div>
          </nav>

          <div className="w-auto h-auto   flex flex-col text-white items-center justify-center">
            <p className=" text-[0.7rem] text-sm mb-1 opacity-60">GDG · On Campus Atria IT x MCA Dept Presents</p>
            <h1 className=" text-7xl md:text-9xl font-bold">Cepheus</h1>
            <p className="text-[0.9rem] md:text-lg text-center w-[70%] lg:w-[100%]  lg:text-lg font-medium mt-4 ">Code. Build. Debug. Collaborate. Innovate. Compete. Conquer!</p>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  Register Now!
  </span>
</button>
            <button className="mt-6 px-6 py-2 border-solid border-[1px] bg-white text-black border-white rounded-3xl font-medium">Register Now!</button>
          </div>
        </div>
      </div>
    </main>
  );
}


/*

*/