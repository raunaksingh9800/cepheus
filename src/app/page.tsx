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

          <div className="w-auto h-auto flex flex-col text-white items-center justify-center">
            <p className=" text-xs mb-2 opacity-60">GDG · On Campus Atria IT x MCA Dept Presents</p>
            <h1 className=" text-9xl font-bold">Cepheus</h1>
            <p className=" text-lg font-medium mt-4">Code. Build. Debug. Collaborate. Innovate. Compete. Conquer!</p>
            <button className=" mt-8 px-6 py-4 bg-slate-400">Register Now!</button>
          </div>
        </div>
      </div>
    </main>
  );
}
