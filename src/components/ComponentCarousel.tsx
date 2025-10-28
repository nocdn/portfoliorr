import "react";

import { AnimatePresence, motion } from "motion/react";

import animatedCopyButtonImage from "../../public/images/copy.gif";
import cornerComponentImage from "../../public/images/corner-buttons.png";
import animatedTickerImage from "../../public/images/ticker.gif";

export default function ComponentCarousel({
  cardTick,
  isMobile,
}: {
  cardTick: number;
  isMobile: boolean;
}) {
  const components = [
    {
      name: "Cornered Button",
      image: cornerComponentImage,
      imageStyles: "px-8 py-4",
      url: "https://ui.bartoszbak.org/cornered-button",
      description: (
        <>
          Inspired by{" "}
          <a
            href="https://www.twitter.com/aliszu"
            target="_blank"
            className="text-blue-700"
          >
            @aliszu
          </a>{" "}
          and Tailwind CSS docs page. Heavily customizeable with props.
        </>
      ),
    },
    {
      name: "Ticker",
      image: animatedTickerImage,
      imageStyles: "",
      url: "https://ui.bartoszbak.org/ticker",
      description: (
        <>
          Ticker component which smoothly animates when it's text content
          changes.
        </>
      ),
    },
    {
      name: "Animated Copy Button",
      image: animatedCopyButtonImage,
      imageStyles: "",
      url: "https://ui.bartoszbak.org/copy-button",
      description: (
        <>A button that very smoothly transitions between it's two children.</>
      ),
    },
  ];

  const desktopComponentCarouselElements = components.map(
    (component, index) => (
      <motion.div
        key={index}
        className="mr-6 flex items-center gap-3 rounded-xl"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        exit={{ opacity: 0, x: 40, filter: "blur(3px)" }}
      >
        <img
          src={component.image}
          alt={component.name}
          style={{
            minWidth: "200px",
          }}
          className={`box-border h-[100px] rounded-xl border border-gray-200 object-contain object-center ${component?.imageStyles}`}
        />
        <div className="mb-auto flex flex-col gap-1">
          <a
            href={component.url}
            target="_blank"
            className="font-inter cursor-pointer self-start text-[16.5px]"
          >
            {component.name}
          </a>
          <p className="font-inter mb-auto text-[15.5px] leading-normal font-[450] text-gray-700">
            {component.description}
          </p>
        </div>
      </motion.div>
    ),
  );

  const currentCardIndex =
    desktopComponentCarouselElements.length === 0
      ? 0
      : cardTick % desktopComponentCarouselElements.length;

  return isMobile ? (
    <></>
  ) : (
    <div>
      <AnimatePresence mode="popLayout">
        {desktopComponentCarouselElements[currentCardIndex]}
      </AnimatePresence>
    </div>
  );
}
