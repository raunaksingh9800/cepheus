"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

import { ClipLoader } from "react-spinners";
import { XIcon } from "lucide-react";



function Rbtn() {
    const [s, ss] = useState<boolean>(false);
    const [showCloseIcon, setShowCloseIcon] = useState<boolean>(false);
    const r = useRouter();
    const gradientRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let position = 0;
        const animateGradient = () => {
            position += 0.5; // Faster animation
            if (position > 100) position = 0;
            if (gradientRef.current) {
                gradientRef.current.style.backgroundPosition = `${position}% 50%`;
            }
            requestAnimationFrame(animateGradient);
        };
        animateGradient();
    }, []);

    const handler = () => {
        ss(!s);
        setShowCloseIcon(false);
        setTimeout(() => {
            setShowCloseIcon(true);
        }, 2000); // Show close icon after 5 seconds

        setTimeout(() => {
            ss(!s);
            // Redirect after 2 seconds
            r.push("https://cepheus.devfolio.co");
        }, 1000);
    };

    return (
        <div>
            <div
                id="loader_block"
                className={`${
                    !s ? "hidden" : "block "
                } ${s ? "opacity-100" : ""}`}
            >
                <div className="position-relative blur-2xl fixed top-0 right-0 w-screen h-screen bg-black/20 z-50 backdrop-blur-3xl flex flex-row justify-center items-center ">
                    <div className="gradient-border " ref={gradientRef}></div>
                </div>
                <div className="fixed top-0 right-0 w-screen h-screen z-50 flex flex-col justify-center items-start  text-5xl  lg:text-8xl px-10 md:px-20 lg:px-40 opacity-60 font-bold">
                    {showCloseIcon && (
                        <button className="absolute top-8 right-12" onClick={() => { ss(!s); setShowCloseIcon(false); }}>
                            <XIcon />
                        </button>
                    )}
                    <div className=" mb-4">
                    <ClipLoader speedMultiplier={0.7} cssOverride={{ borderWidth: "5px" }} color="white" />
                    </div>

                    <p>Your</p>
                    <div className="w-[90%] h-1 md:h-2 bg-white/70 rounded-full my-6 md:my-8"></div>
                    <p className=" my-3 md:my-4">code could </p>
                    <p className="my-3 md:my-4">change the world.</p>

                </div>
            </div>

            <button
                onClick={handler}
                className="mt-6 px-6 py-2 border-solid border-[1px] bg-white text-black border-white rounded-3xl font-medium flex flex-row"
            >
                {"Register Now!"}
            </button>
        </div>
    );
}

export default Rbtn;
