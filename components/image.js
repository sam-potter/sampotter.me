import useNativeLazyLoading from "@charlietango/use-native-lazy-loading";
import { useInView } from "react-intersection-observer";

const LazyImage = ({ src, ...rest }) => {
  const supportsLazyLoading = useNativeLazyLoading();
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });

  if (inView || supportsLazyLoading) {
    return (
      <img
        {...rest}
        src={src}
        loading="lazy"
        ref={supportsLazyLoading ? undefined : ref}
      />
    );
  }

  return null;
};

export default LazyImage;
