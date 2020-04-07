import { isBrowser } from "react-device-detect";

import Button from "../button";

export default function controls({
  currentSlide,
  slides,
  prevSlide,
  nextSlide
}) {
  return (
    <div className="controls">
      <span>
        {currentSlide + 1}
        <span className="faded"> / {slides.length} Images</span>
      </span>
      {isBrowser ? (
        <div className="buttons">
          <div className="button">
            <Button onClick={prevSlide}>Previous</Button>
          </div>
          <div className="button">
            <Button onClick={nextSlide}>Next</Button>
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
          opacity: 0.6;
        }
        .buttons {
          display: flex;
        }
        .button {
          margin-left: 25px;
        }
      `}</style>
    </div>
  );
}
