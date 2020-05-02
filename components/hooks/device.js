import { useState, useLayoutEffect } from "react";
import { isMobile as moble, isBrowser as brwsr } from "react-device-detect";

export default function useDevice() {
  const defaults = { isMobile: false, isBrowser: false };
  const [state, update] = useState(defaults);

  useLayoutEffect(() => {
    update({ isMobile: moble, isBrowser: brwsr });
  }, []);

  return state;
}
