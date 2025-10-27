import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function DesktopSection({
  children,
  className,
  title,
  subtitleChildren,
  secondaryChildren,
  subtitleURL,
}: {
  children: React.ReactNode;
  className?: string;
  title: string;
  subtitleChildren?: React.ReactNode;
  secondaryChildren?: React.ReactNode;
  subtitleURL?: string;
}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      style={{
        fontFamily: "var(--font-neue-montreal)",
        fontWeight: 500,
        lineHeight: "30px",
        fontSize: "19px",
      }}
      className={`${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="font-geist-mono relative mb-1 flex items-center text-[16px] font-semibold text-gray-500/60"
        style={{
          transform: isHovering ? "translateX(3px)" : "translateX(0px)",
          transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1)",
          fontWeight: isHovering ? 650 : 600,
        }}
      >
        {title}
        <AnimatePresence>
          {subtitleChildren && isHovering && (
            <motion.div
              tabIndex={0}
              className="group ml-2 flex cursor-pointer items-center font-mono text-[16px] font-semibold text-blue-700/40 transition-colors duration-200 hover:text-blue-700/60"
              initial={{ opacity: 0, filter: "blur(2px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(1.5px)" }}
              transition={{
                opacity: { duration: 0.2 },
              }}
              onClick={() => {
                window.open(subtitleURL, "_blank");
              }}
            >
              [{subtitleChildren}]
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className="ml-auto cursor-pointer text-gray-500 transition-colors duration-200 hover:text-gray-700"
          style={{
            transform: isHovering ? "translateX(-3px)" : "translateX(0px)",
            transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1)",
          }}
        >
          {secondaryChildren}
        </div>
      </div>
      {children}
    </div>
  );
}
