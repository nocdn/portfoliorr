import { useState } from "react";

import { ArrowRightIcon, ArrowUpRight, CornerDownRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Article from "./components/Article";
import ComponentCarousel from "./components/ComponentCarousel";
import ProjectsElements from "./components/desktop/ProjectsElements";
import Section from "./components/desktop/Section";
import TimeZoneName from "./components/desktop/TimeZoneName";
import { MaterialSymbolsArrowRightAlt } from "./components/icons/arrowRight";

export default function Desktop() {
  const [componentCardTick, setComponentCardTick] = useState(0);
  const [hoveringTwitter, setHoveringTwitter] = useState(false);
  const [showingCopied, setShowCopied] = useState(false);

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
      <Section
        title="CONTACT"
        className="motion-blur-in-[2px] motion-opacity-in-0 motion-translate-y-in-[3.75%] motion-delay-400"
      >
        <div className="flex gap-8">
          <div
            className="font-neue-montreal"
            style={{
              fontWeight: 500,
              fontSize: "18px",
            }}
          >
            <div className="flex items-center gap-2.5">
              <p>Twitter</p>
              <MaterialSymbolsArrowRightAlt
                className="size-5"
                strokeWidth={2.85}
              />
              <a
                href="https://twitter.com/nocdns"
                className="relative mb-0.5 text-gray-500 transition-colors hover:text-blue-800"
                onMouseEnter={() => {
                  setHoveringTwitter(true);
                  setTimeout(() => setHoveringTwitter(false), 300);
                }}
              >
                <p className="font-open-runde">
                  <span className="mr-px text-[16.5px]">@</span>
                  <span
                    style={{
                      letterSpacing: "-0.5px",
                      fontWeight: 500,
                      fontSize: "17.5px",
                    }}
                  >
                    nocdns
                  </span>
                </p>
                <AnimatePresence>
                  {hoveringTwitter && (
                    <motion.div
                      initial={{ opacity: 0, y: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        y: -32,
                        x: 27,
                        rotate: 8.5,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        filter: "blur(1px)",
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.215, 0.61, 0.355, 1],
                      }}
                      className="pointer-events-none absolute top-1/2 left-[calc(50%-1px)] -translate-x-1/2 -translate-y-1/2 text-[16px] font-semibold whitespace-nowrap text-blue-600/50 select-none"
                    >
                      building in public
                    </motion.div>
                  )}
                </AnimatePresence>
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <p>Github</p>
              <MaterialSymbolsArrowRightAlt
                className="size-5"
                strokeWidth={2.85}
              />
              <a
                href="https://github.com/nocdn"
                className="relative mb-0.5 text-gray-500 transition-colors hover:text-blue-800"
              >
                <p className="font-open-runde">
                  <span className="mr-px text-[16.5px]">@</span>
                  <span
                    style={{
                      letterSpacing: "-0.5px",
                      fontWeight: 500,
                      fontSize: "17.5px",
                    }}
                  >
                    nocdn
                  </span>
                </p>
              </a>
            </div>
          </div>
          <div className="mb-auto flex flex-col">
            <div className="flex items-center gap-2.5">
              <p className="text-[18px]">Email</p>
              <MaterialSymbolsArrowRightAlt
                className="size-5"
                strokeWidth={2.85}
              />
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText("contact@bartoszbak.org");
                  setShowCopied(true);
                  setTimeout(() => setShowCopied(false), 1000);
                }}
                href="mailto:contact@bartoszbak.org"
                className="font-open-runde mb-0.5 text-[16.5px] text-gray-500 transition-colors hover:text-pink-800"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={showingCopied ? "copied" : "copy"}
                    initial={{ opacity: 0.5, filter: "blur(1px)", y: -2 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    exit={{ opacity: 0, filter: "blur(1px)", y: 2 }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                    className="inline-block cursor-pointer"
                  >
                    {showingCopied ? (
                      <>
                        <span className="text-blue-600/90">[ copied ]</span>
                      </>
                    ) : (
                      <p className="flex">
                        <span className="mr-1">[</span>
                        <span>copy</span>
                        <span className="ml-1">]</span>
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <CornerDownRight
                className="size-3.5 text-gray-500 opacity-70"
                strokeWidth={2.65}
              />
              <p
                className="font-geist-mono text-[16.5px] font-[460] text-gray-500 opacity-70"
                style={{ lineHeight: "1.4" }}
              >
                contact@bartoszbak.org
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
