
import ColourfulText from "@/components/ui/colourful-text";
import {ImageC , ImageH}  from "@/components/Image/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <div className="mt-5 mr-5 absolute top-0 right-0 bg-[#3770FF] flex flex-row justify-center items-center gap-2 p-2 rounded-md">
        <div className=" text-white text-sm font-semibold">Apply with </div>
        <ImageC             
        src="/DEV.png"
            alt="DEVFOLIO LOGO"
            width={70}
            height={35}
          />
      </div>
      <div className="w-fit h-fit flex flex-row justify-center items-center text-3xl">
        <div className=" opacity-45 font-medium">Coming Soon</div>
        <div className=" font-bold">
          <ColourfulText text=" Cepheus" />
        </div>
      </div>
      <div className=" text-xs mt-4 opacity-40">
        By GDG · On Campus{" "}
        <a
          href="https://atria.edu/home.php"
          className=" text-red-600 underline"
        >
          Atria IT
        </a>{" "}
        x MCA Dept
      </div>

      <div className=" absolute bottom-0 flex flex-col justify-center items-center mb-6">
        <div className=" text-sm mb-4 opacity-45">In sponsorship with</div>
        <div className="flex flex-row items-center justify-center gap-6">
          <ImageH
            src="/DEVFOLIO.png"
            alt="DEVFOLIO LOGO"
            width={100}
            height={50}
           
            herf="https://devfolio.co" // Loads the image faster
          />
          <ImageH
            src="/POLYGON.png"
            alt="POLYGON LOGO"
            width={100}
            height={50}
            herf="https://polygon.technology/"
          />
          <ImageH src="/ETH.png"
            alt="ETHINDIA LOGO"
            width={100}
            height={50} herf="https://ethindia.co" />
        </div>
      </div>
    </div>
  );
}
