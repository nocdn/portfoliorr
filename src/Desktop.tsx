import Section from "./components/desktop/Section";
import ProjectsElements from "./components/desktop/ProjectsElements";
import { TimeZoneName } from "./components/desktop/TimeZoneName";

export default function Desktop() {
  return (
    <div className="mx-auto mb-24 flex w-[565px] flex-col gap-12 pt-26">
      <Section
        title="ABOUT"
        className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[7%] group"
      >
        <div>
          Hey there, I'm <TimeZoneName />. I am a front-end developer based in
          the UK, studying computer science at the University of York. I'm
          currently exploring typography, web animations and crafting
          interactions.
        </div>
      </Section>
      <Section
        title="PROJECTS"
        className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[2.5%] motion-delay-100"
      >
        <div className="flex flex-col gap-1">{ProjectsElements()}</div>
      </Section>
    </div>
  );
}
