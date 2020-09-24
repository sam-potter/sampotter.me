import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

function Image({ src, thumbnail, alt }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            <img
                className="thumb"
                src={thumbnail}
                alt={alt}
                style={{ visibility: loaded ? 'hidden' : 'visible' }}
            />
            <img
                onLoad={() => setLoaded(true)}
                className="full"
                src={src}
                alt={alt}
                style={{ opacity: loaded ? 1 : 0 }}
            />
            <style jsx>{`
                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                .full {
                    transition: opacity 400ms ease 0ms;
                }
                .thumb {
                    filter: blur(20px);
                    transform: scale(1.1);
                    transition: visibility 0ms ease 400ms;
                }
            `}</style>
        </>
    );
}

export default function Container({ height, width, color, ...rest }) {
    const [ref, inView] = useInView({ triggerOnce: true });
    const aspectRatio = (height / width) * 100;

    return (
        <>
            <div ref={ref} className="container">
                <div className="img">{inView ? <Image {...rest} /> : null}</div>
            </div>
            <style jsx>{`
                .container {
                    position: relative;
                    width: 100%;
                    padding-bottom: ${aspectRatio}%;
                    background: #eee;
                    overflow: hidden;
                    background-color: ${color};
                }
                .img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </>
    );
}
