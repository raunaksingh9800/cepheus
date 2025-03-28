"use client"

import { useState, useEffect } from "react";
import ColourfulText from "../ui/colourful-text";

interface CountdownProps {
  targetDate: string; // Format: "YYYY-MM-DDTHH:MM:SS"
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
   
    <div className="text-center text-white p-4">
      <h2 className=" text-sm  pb-4 font-medium text-[#8f8f8f]">Countdown to Event</h2>
      <div className="text-4xl md:text-5xl font-mono font-bold flex gap-4 justify-center">
        <span><ColourfulText text={`${String(timeLeft.days).padStart(2, "0")}d : ${String(timeLeft.hours).padStart(2, "0")}h : ${String(timeLeft.minutes).padStart(2, "0")}m`} /></span>
      </div>
    </div>

  );
};

export default Countdown;
