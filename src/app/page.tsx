
import ColourfulText from "@/components/ui/colourful-text";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <div className="w-fit h-fit flex flex-row justify-center items-center text-3xl">
      <text className=" opacity-45 font-medium">Coming Soon</text>
      <div className=" font-bold"><ColourfulText text=" Cepheus" /></div>
      </div>
      <div className=" text-xs mt-4 opacity-40">By GDG · On Campus <a href="https://atria.edu/home.php" className=" text-red-600 underline">Atria IT</a> x MCA Dept</div>
    </div>
  );
}
