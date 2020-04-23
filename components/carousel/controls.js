import { isBrowser } from "react-device-detect";

import Button from "../button";

export default function Controls({
  currentSlide,
  slides,
  prevSlide,
  nextSlide,
}) {
  const firstSlide = currentSlide === 0;
  const lastSlide = currentSlide === slides.length - 1;

  return (
    <div className="controls">
      <span>
        {currentSlide + 1}
        <span className="faded"> / {slides.length} Images</span>
      </span>
      {isBrowser ? (
        <div className="buttons">
          <div className="button">
            <Button onClick={prevSlide} disabled={firstSlide}>
              Previous
            </Button>
          </div>
          <div className="button">
            <Button onClick={nextSlide} disabled={lastSlide}>
              Next
            </Button>
          </div>
        </div>
      ) : null}
      <style jsx>{`
        .controls {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 15px 0 30px 0;
        }
        .faded {
          color: var(--text-muted);
        }
        .buttons {
          display: flex;
        }
        .button {
          margin-left: 25px;
        }
        @media screen and (max-width: 816px) {
          .controls {
            padding: 15px 0;
          }
        }
      `}</style>
    </div>
  );
}
