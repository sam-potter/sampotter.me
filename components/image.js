import { useInView } from "react-intersection-observer";

export default function Image({ src, width, height, ...rest }) {
  const [ref, inView] = useInView({ triggerOnce: true });
  const aspectRatio = (height / width) * 100;

  return (
    <>
      <div ref={ref} className="container">
        {inView ? <img className="img" src={src} alt="" {...rest} /> : null}
      </div>
      <style jsx>{`
        .container {
          display: block;
          width: 100%;
          padding-bottom: ${aspectRatio}%;
          background: #eee;
        }
        .img {
          position: absolute;
        }
      `}</style>
    </>
  );
}
