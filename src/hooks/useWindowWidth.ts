import { isServer } from "@/utils/helpers";
import * as React from "react";

export function useWindowWidth(debounce = 500): number {
  const [width, setWidth] = React.useState(isServer() ? 0 : window.innerWidth);

  // execute on resizing
  React.useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => setWidth(window.innerWidth), debounce);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [debounce]);

  return width;
}
