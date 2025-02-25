import * as React from "react";

import { isServer } from "@/utils/helpers";

export function useWindowWidth(debounce = 500): number {
  const server = isServer();
  const [width, setWidth] = React.useState(server ? 0 : window.innerWidth);

  // execute on resizing
  React.useEffect(() => {
    if (server) return;

    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => setWidth(window.innerWidth), debounce);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [debounce, server]);

  return width;
}
