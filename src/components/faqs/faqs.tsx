import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function HackathonFAQ() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="team-size">
          <AccordionTrigger>What is the allowed team size for the hackathon?</AccordionTrigger>
          <AccordionContent>
            Teams must consist of 2 to 4 members.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="registration-cost">
          <AccordionTrigger>Is there a registration fee?</AccordionTrigger>
          <AccordionContent>
            Registration is completely free! However, if your team gets shortlisted, there will be an additional fee of ₹600 per team.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="beginner-friendly">
          <AccordionTrigger>Would it be hard for beginners to participate?</AccordionTrigger>
          <AccordionContent>
            This hackathon is beginner-friendly, and we encourage everyone to participate, no matter their skill level. Yes! Even first-year students are more than welcome to join. 🚀
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="different-colleges">
          <AccordionTrigger>Can the participants of a team be from different colleges?</AccordionTrigger>
          <AccordionContent>
            Yes! Participants in a team can be from different colleges. We welcome interdisciplinary collaboration and encourage teams to bring together diverse perspectives. 🚀
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="solo-participation">
          <AccordionTrigger>Can I participate alone?</AccordionTrigger>
          <AccordionContent>
            No, solo participation is not allowed. You must have at least one teammate (minimum team size: 2).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="accommodation">
          <AccordionTrigger>Will accommodation and food be provided during the hackathon?</AccordionTrigger>
          <AccordionContent>
            Yes! Both accommodation and food will be provided for all shortlisted participants. More details will be shared with selected teams closer to the event. However, we recommend bringing personal essentials like toiletries, a blanket, and a change of clothes for comfort during your stay. 🚀
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="contact">
          <AccordionTrigger>Whom can we contact for further details?</AccordionTrigger>
          <AccordionContent>
            📞 Contact Us
            <br />📱 Phone Contacts:
            <br />📞 Sulaiman Shariff – 8792345338
            <br />📞 Sadiya Fathima – 8904287931
            <br />📧 Got more questions? Reach out to gdg.atria@gmail.com
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
  