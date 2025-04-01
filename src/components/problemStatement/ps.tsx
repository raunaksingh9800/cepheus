"use client";

import { useState } from "react";
import { BrainCircuit, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

const problemStatements = {
  aiEducation: {
    title: "AI & Education (Sponsor Track)",
    description:
      "AI-generated educational videos can make learning more scalable and accessible.",
    details: `Problem: Revolutionizing Student Education with AI-Generated Video Content.
Creating educational content manually is time-consuming and limits scalability. AI-powered automation could personalize and scale content creation, making education more accessible.

✅ Objective: Develop an AI-driven solution that generates engaging, high-quality educational video content, providing personalized learning experiences across multiple disciplines.
Note: Those who select the Sponsor problem statement will be eligible for a potential internship and prizes.`,
  },
  indiaStack: {
    title: "India Stack & Digital Innovation",
    description:
      "Leverage India's digital transformation to create inclusive solutions.",
    details: `Problem: Leveraging India's Digital Transformation for Inclusive Innovation.
India Stack has revolutionized India's digital infrastructure, enabling seamless, paperless, and cashless service delivery.

✅ Objective: Develop solutions using India Stack components (Aadhaar, UPI, DigiLocker, ONDC, etc.) to improve financial inclusion, healthcare, and digital transactions.`,
  },
  healthcare: {
    title: "Healthcare for All",
    description:
      "Bringing healthcare to underserved communities through technology.",
    details: `Problem: Lack of Access to Healthcare in Underserved Communities.
Many rural areas lack access to basic healthcare services, leading to preventable diseases.

✅ Objective: Develop tech-driven solutions to improve healthcare access in remote areas, aligning with UN SDG 3 (Good Health & Well-being).`,
  },
  agritech: {
    title: "AgriTech & Sustainability",
    description:
      "AI-powered farming solutions to boost crop yields and efficiency.",
    details: `Problem: Harvesting the Future – AI Solutions for Smallholder Farmers.
Smallholder farmers struggle with low yields and inefficient resource use.

✅ Objective: Design AI-based tools for real-time crop monitoring, pest detection, and resource optimization to support smallholder farmers.`,
  },
  openInnovation: {
    title: "Open Innovation (Wildcard Track)",
    description:
      "Innovate freely—solve any problem using technology and creativity.",
    details: `Problem: Have a unique, groundbreaking idea outside these problem statements?
This is your chance to innovate freely!

✅ Objective: Solve a pressing issue of your choice using technology and innovation.`,
  },
};

function GlowingEffectDemoSecond() {
  const [selectedProblem, setSelectedProblem] = useState<
    keyof typeof problemStatements | null
  >(null);

  return (
    <>
      <ul className="grid grid-cols-1 grid-rows-none gap-8 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<BrainCircuit className="h-4 w-4 text-neutral-400" />}
          title={problemStatements.aiEducation.title}
          description={problemStatements.aiEducation.description}
          onClick={() => setSelectedProblem("aiEducation")}
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-4 w-4 text-neutral-400" />}
          title={problemStatements.indiaStack.title}
          description={problemStatements.indiaStack.description}
          onClick={() => setSelectedProblem("indiaStack")}
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-4 w-4 text-neutral-400" />}
          title={problemStatements.healthcare.title}
          description={problemStatements.healthcare.description}
          onClick={() => setSelectedProblem("healthcare")}
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4 text-neutral-400" />}
          title={problemStatements.agritech.title}
          description={problemStatements.agritech.description}
          onClick={() => setSelectedProblem("agritech")}
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4 text-neutral-400" />}
          title={problemStatements.openInnovation.title}
          description={problemStatements.openInnovation.description}
          onClick={() => setSelectedProblem("openInnovation")}
        />
      </ul>

      {/* Drawer for problem details */}
      {selectedProblem && (
        <Drawer
          open={!!selectedProblem}
          onOpenChange={() => setSelectedProblem(null)}
        >
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>
                  {problemStatements[selectedProblem].title}
                </DrawerTitle>
                <DrawerDescription>
                  {problemStatements[selectedProblem].description}
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 text-sm text-black">
                {problemStatements[selectedProblem].details}
              </div>
              <DrawerFooter>
                <Button onClick={() => setSelectedProblem(null)}>Close</Button>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  onClick,
}: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div
        className="relative h-full rounded-3xl border p-2  md:p-3 cursor-pointer"
        onClick={onClick}
      >
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-">
              <h3 className="pt-0.5 text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm text-neutral-400">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const ProblemState_NOT = () => {
  return (
    <div className="w-screen h-auto my-5 flex flex-col justify-center items-center gap-8 bg-white">
      <div className="w-[90vw] sm:w-[70vw] min-h-48 bg-[#f3f5f7] rounded-xl flex flex-col p-8">
        <h1 className="text-black text-2xl font-bold">
          🤖 AI & Education (Sponsor Track)
        </h1>
        <ul className="list-disc text-[#363636] pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b> Revolutionizing Student Education with AI-Generated Video
            Content Creating educational content manually is time-consuming and
            limits scalability. AI-powered automation could personalize and
            scale content creation, making education more accessible.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b> Develop an AI-driven solution that generates engaging, high-quality educational video content, providing personalized learning experiences across multiple disciplines.
          Note: Those who select the Sponsor problem statement will be eligible for a potential internship, and if their solution is good enough, they are eligible to earn an additional prize.
          </li>
        </ul>
      </div>


      <div className="w-[90vw] sm:w-[70vw] min-h-48 bg-[#f3f5f7] rounded-xl flex flex-col p-8">
        <h1 className="text-black text-2xl font-bold">
        🌐 India Stack
        </h1>
        <ul className="list-disc text-[#363636] pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b> Leveraging India's Digital Transformation for Inclusive Innovation
            India Stack, a comprehensive suite of open APIs, has revolutionized India's digital infrastructure, enabling seamless, presence-less, paperless, and cashless service delivery.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b> Develop solutions that leverage both established and emerging components of India Stack—including Aadhaar, eKYC, UPI, DigiLocker, eSign, Bharat Bill Payment System, BharatQR, UMANG, Open Credit Enablement Network (OCEN), Open Network for Digital Commerce (ONDC), Ayushman Bharat Digital Mission, DigiYatra, and Government e Marketplace (GeM)—to address real-world challenges. Participants are encouraged to create applications that enhance financial inclusion, streamline digital identity verification, improve healthcare delivery, and promote secure, efficient digital transactions, thereby contributing to India's digital transformation.
          </li>
        </ul>
      </div>



      <div className="w-[90vw] sm:w-[70vw] min-h-48 bg-[#f3f5f7] rounded-xl flex flex-col p-8">
        <h1 className="text-black text-2xl font-bold">
        🌍 Healthcare for All
        </h1>
        <ul className="list-disc text-[#363636] pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b> Lack of Access to Healthcare in Underserved Communities
            Many rural and remote communities lack access to basic healthcare services, leading to preventable diseases and reduced quality of life. Barriers include poor infrastructure, medical professional shortages, and limited awareness of preventive care.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b>  Develop scalable, sustainable, and tech-driven solutions to improve healthcare access in underserved areas. Your solution should align with UN SDG 3: Good Health and Well-being.

          </li>
        </ul>
      </div>



      <div className="w-[90vw] sm:w-[70vw] min-h-48 bg-[#f3f5f7] rounded-xl flex flex-col p-8">
        <h1 className="text-black text-2xl font-bold">
        🌾 AgriTech & Sustainability
        </h1>
        <ul className="list-disc text-[#363636] pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b> Harvesting the Future – AI Solutions for Smallholder Farmers
            Smallholder farmers lack access to advanced agricultural technologies, leading to low crop yields, inefficient resource use, and climate vulnerability. With AI-powered solutions, farmers can make better decisions and improve productivity.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b>  Design an AI-based system that assists farmers with real-time crop monitoring, pest detection, and resource optimization, ensuring affordable and scalable solutions for developing regions.

          </li>
        </ul>
      </div>


      <div className="w-[90vw] sm:w-[70vw] min-h-48 bg-[#f3f5f7] rounded-xl flex flex-col p-8">
        <h1 className="text-black text-2xl font-bold">
        🎓 AI for Academic Excellence
        </h1>
        <ul className="list-disc text-[#363636] pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b> Students often struggle with keeping track of tasks, setting clear goals, and organizing study content, making regular revision and preparation overwhelming.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b>   Develop an AI-powered solution that streamlines task tracking, goal management, and content organization for students, enhancing their ability to prepare and revise effectively.

          </li>
        </ul>
      </div>


      <div className="w-[90vw] sm:w-[70vw] min-h-48 bg-[#f3f5f7] rounded-xl flex flex-col p-8">
        <h1 className="text-black text-2xl font-bold">
        🎓 AI for Academic Excellence
        </h1>
        <ul className="list-disc text-[#363636] pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b> Students often struggle with keeping track of tasks, setting clear goals, and organizing study content, making regular revision and preparation overwhelming.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b>   Develop an AI-powered solution that streamlines task tracking, goal management, and content organization for students, enhancing their ability to prepare and revise effectively.

          </li>
        </ul>
      </div>


    </div>
  );
};


const ProblemState = () => {
  return (
    <div className="w-full h-auto my-5 flex flex-col ">
      <div className=" backdrop-blur-[50px] w-full h-full  rounded-[20px] md:rounded-[40px] px-16 py-4 border-solid border-white/20 border-[2px]  bg-white/5 flex flex-col justify-between items-center">

      <div className="w-full h-full py-6 mb-4 border-b-2 border-gray-200 ">
       <h1 className="text-white text-2xl font-bold">
       🤖 AI & Education (Sponsor Track)
        </h1>
        <ul className="list-disc text-gray-100 pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b>  Revolutionizing Student Education with AI-Generated Video Content
            Creating educational content manually is time-consuming and limits scalability. AI-powered automation could personalize and scale content creation, making education more accessible.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b> Develop an AI-driven solution that generates engaging, high-quality educational video content, providing personalized learning experiences across multiple disciplines.
          Note: Those who select the Sponsor problem statement will be eligible for a potential internship, and if their solution is good enough, they are eligible to earn an additional prize.
          </li>
        </ul>
      </div>


      <div className="w-full h-full py-6 mb-4 border-b-2 border-gray-100 ">
       <h1 className="text-white text-2xl font-bold">
       🌐 India Stack
        </h1>
        <ul className="list-disc text-gray-200 pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b> Leveraging India's Digital Transformation for Inclusive Innovation
            India Stack, a comprehensive suite of open APIs, has revolutionized India's digital infrastructure, enabling seamless, presence-less, paperless, and cashless service delivery.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b>   Develop solutions that leverage both established and emerging components of India Stack—including Aadhaar, eKYC, UPI, DigiLocker, eSign, Bharat Bill Payment System, BharatQR, UMANG, Open Credit Enablement Network (OCEN), Open Network for Digital Commerce (ONDC), Ayushman Bharat Digital Mission, DigiYatra, and Government e Marketplace (GeM)—to address real-world challenges. Participants are encouraged to create applications that enhance financial inclusion, streamline digital identity verification, improve healthcare delivery, and promote secure, efficient digital transactions, thereby contributing to India's digital transformation.
          </li>
        </ul>
      </div>


      <div className="w-full h-full py-6 mb-4 border-b-2 border-gray-100 ">
       <h1 className="text-white text-2xl font-bold">
        🌍 Healthcare for All
        </h1>
        <ul className="list-disc text-gray-200 pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b>  Lack of Access to Healthcare in Underserved Communities
            Many rural and remote communities lack access to basic healthcare services, leading to preventable diseases and reduced quality of life. Barriers include poor infrastructure, medical professional shortages, and limited awareness of preventive care.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b>   Develop scalable, sustainable, and tech-driven solutions to improve healthcare access in underserved areas. Your solution should align with UN SDG 3: Good Health and Well-being.
          </li>
        </ul>
      </div>


      <div className="w-full h-full py-6 mb-4 border-b-2 border-gray-100 ">
       <h1 className="text-white text-2xl font-bold">
        🌾 AgriTech & Sustainability
        </h1>
        <ul className="list-disc text-gray-200 pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b>Harvesting the Future – AI Solutions for Smallholder Farmers
            Smallholder farmers lack access to advanced agricultural technologies, leading to low crop yields, inefficient resource use, and climate vulnerability. With AI-powered solutions, farmers can make better decisions and improve productivity.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b>  Design an AI-based system that assists farmers with real-time crop monitoring, pest detection, and resource optimization, ensuring affordable and scalable solutions for developing regions.
          </li>
        </ul>
      </div>


      <div className="w-full h-full py-6 mb-4 border-b-2 border-gray-100 ">
       <h1 className="text-white text-2xl font-bold">
       🎓 AI for Academic Excellence
        </h1>
        <ul className="list-disc text-gray-200 pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b>Students often struggle with keeping track of tasks, setting clear goals, and organizing study content, making regular revision and preparation overwhelming.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b> Develop an AI-powered solution that streamlines task tracking, goal management, and content organization for students, enhancing their ability to prepare and revise effectively.
          </li>
        </ul>
      </div>


      <div className="w-full h-full py-6 mb-4 border-b-2 border-gray-100 ">
       <h1 className="text-white text-2xl font-bold">
       💧 Smart Water Management
        </h1>
        <ul className="list-disc text-gray-200 pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b> Inefficient water distribution and management lead to wastage and supply issues in both urban and rural areas. Traditional systems lack automation and real-time adaptability.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b> Create an automated water distribution system using AI to optimize water management, detect leaks, predict demand, and improve overall efficiency.
          </li>
        </ul>
      </div>

      <div className="w-full h-full py-6 mb-4 border-b-2 border-gray-100 ">
       <h1 className="text-white text-2xl font-bold">
       🧱 3D Modeling: From Imagination to Reality
        </h1>
        <ul className="list-disc text-gray-200 pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b>Converting creative visions into tangible 3D models can be a labor-intensive and complex process, often requiring advanced technical skills and precision.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b>Develop an AI-assisted tool that empowers users to craft detailed and precise 3D models by hand, bridging the gap between imaginative ideas and physical design.
          </li>
        </ul>
      </div>

      <div className="w-full h-full py-6 mb-4 border-b-2 border-gray-100 ">
       <h1 className="text-white text-2xl font-bold">
       🏗️ AI for Construction Efficiency
        </h1>
        <ul className="list-disc text-gray-200 pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b>The construction industry faces significant challenges in accurate cost estimation and maintaining strict safety standards, often leading to budget overruns and compromised safety.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b>  Create an AI-powered solution that delivers precise construction cost estimations while simultaneously ensuring safety compliance through real-time data analytics and predictive modeling.
          </li>
        </ul>
      </div>

      <div className="w-full h-full py-6 mb-4 border-b-2 border-gray-100 ">
       <h1 className="text-white text-2xl font-bold">
       📈 AI-Enhanced Digital Marketing Strategy
        </h1>
        <ul className="list-disc text-gray-200 pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b>With the rapid evolution of technology, traditional digital marketing strategies are losing their edge, making it difficult for well-known brands to remain competitive.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b>  Develop a comprehensive, AI-driven digital marketing strategy that leverages advanced analytics and creative automation to redefine a brand’s marketing approach for the next decade.
          </li>
        </ul>
      </div>

      <div className="w-full h-full py-6 mb-4  ">
       <h1 className="text-white text-2xl sm:text-2xl font-bold">
       🌍 Open Innovation (Wildcard Track)
        </h1>
        <ul className="list-disc text-gray-200 pl-4 list-inside">
          <li className="my-4">
            <b>Problem:</b>Have a unique, groundbreaking idea outside these problem statements?<br></br>
            This is your chance to innovate freely! Bring your own problem statement and build something revolutionary.
          </li>
          <li className="my-2">
          ✅ <b>Objective:</b> Solve a pressing issue of your choice using technology and innovation.
          </li>
        </ul>
      </div>

      </div>
    </div>
  )
}


export { GlowingEffectDemoSecond, ProblemState };
