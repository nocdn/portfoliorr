import { useEffect, useState } from "react";

import Desktop from "./Desktop";
import Mobile from "./Mobile";

function App() {
  const mobileBreakpoint = 768;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < mobileBreakpoint);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth < mobileBreakpoint);
      });
    };
  }, [mobileBreakpoint]);

  return isMobile ? <Mobile /> : <Desktop />;
}

export default App;
