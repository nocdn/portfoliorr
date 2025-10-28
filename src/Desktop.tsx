import { useState } from "react";

import { ArrowRightIcon, ArrowUpRight } from "lucide-react";

import Article from "./components/Article";
import ComponentCarousel from "./components/ComponentCarousel";
import ProjectsElements from "./components/desktop/ProjectsElements";
import Section from "./components/desktop/Section";
import TimeZoneName from "./components/desktop/TimeZoneName";

export default function Desktop() {
  const [componentCardTick, setComponentCardTick] = useState(0);

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
      <Section
        title="COMPONENTS"
        subtitleChildren={
          <div className="flex items-center gap-1">
            SHADCN REGISTRY{" "}
            <ArrowUpRight
              size={16}
              strokeWidth={2.75}
              className="mr-0.5 text-blue-700 opacity-40 transition-all duration-200 group-hover:opacity-60"
            />
          </div>
        }
        subtitleURL="https://ui.bartoszbak.org/"
        secondaryChildren={
          <div className="mr-2 flex items-center gap-2">
            <button
              onClick={() =>
                setComponentCardTick(
                  (componentCardTick) => componentCardTick + 1,
                )
              }
            >
              <ArrowRightIcon
                className="cursor-pointer opacity-100"
                size={18}
              />
            </button>
          </div>
        }
        className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[3.75%] motion-delay-200"
      >
        <ComponentCarousel isMobile={false} cardTick={componentCardTick} />
      </Section>
      <Section
        title="WRITING"
        className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[3.75%] motion-delay-300"
      >
        <div className="mr-2 grid grid-cols-2 gap-2">
          <Article
            title="My take on the Family Drawer"
            date="August 2025"
            href="/writing/family-drawer"
          />
          <Article
            title="Coming soon....."
            date="November 2025"
            disabled={true}
            href="#"
          />
        </div>
      </Section>
    </div>
  );
}
