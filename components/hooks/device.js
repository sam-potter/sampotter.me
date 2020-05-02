import { useState, useLayoutEffect } from "react";
import { isMobile as mobile } from "react-device-detect";

const isMobile = () => {
  const [isMobileAfterMount, update] = useState(false);

  useLayoutEffect(() => {
    update(mobile);
  }, []);

  return isMobileAfterMount;
};

export { isMobile };
