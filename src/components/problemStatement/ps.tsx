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

export function GlowingEffectDemoSecond() {
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
        <Drawer open={!!selectedProblem} onOpenChange={() => setSelectedProblem(null)}>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>{problemStatements[selectedProblem].title}</DrawerTitle>
                <DrawerDescription>{problemStatements[selectedProblem].description}</DrawerDescription>
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

const GridItem = ({ area, icon, title, description, onClick }: GridItemProps) => {
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
              <h3 className="pt-0.5 text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm text-neutral-400">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
