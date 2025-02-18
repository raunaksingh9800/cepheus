import React from "react";
import {
  MapPin,
  Calendar,
  Gift,
  Award,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-14 ">
        
        {/* Event Info */}
        <div>
          <h2 className="text-white text-lg md:text-xl mb-4">🚀 CEPHEUS 2025</h2>
          <div className="text-xs md:text-base"><p className="mb-2">
            Google Developer Groups Atria IT X Department of MCA presents <br /> CEPHEUS 2025, where innovation meets impact!
          </p>
          <ul>
            <li className="flex items-center mb-2">
              <Gift className="mr-2" /> Cash Prizes: Up to ₹25K+
            </li>
            <li className="flex items-center mb-2">
              <Award className="mr-2" /> Internship Opportunities
            </li>
            <li className="flex items-center mb-2">
              <Award className="mr-2" /> Certificates for All Participants
            </li>
          </ul></div>
        </div>

        {/* Event Details */}
        <div>
          <h2 className="text-white text-lg md:text-xl mb-4">📅 Event Details</h2>
<div className="text-xs md:text-base">          <ul>
            <li className="flex items-center mb-2">
              <Calendar className="mr-2" /> Date: 7th - 8th March 2025
            </li>
            <li className="flex items-center mb-2">
              <MapPin className="mr-2" /> Atria Institute of Technology, Bangalore
            </li>
            <li className="flex items-center mb-2">
              <Gift className="mr-2" /> Entry Fee: ₹600 per team (Min. 2, Max. 4 members)
            </li>
          </ul>
</div>
        </div>

        {/* Contact Info */}

      </div>

      <div className="text-center text-gray-600 mt-8">
        © {new Date().getFullYear()} CEPHEUS 2025 | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
