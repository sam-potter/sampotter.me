import { isBrowser } from "react-device-detect";
import ArrowLeft from "../icons/arrow-left";
import ArrowRight from "../icons/arrow-right";

const Controls = ({ currentSlide, photos, prevSlide, nextSlide }) => (
  <div className="controls-container">
    {isBrowser ? (
      <div className="blur-container">
        <div className="buttons">
          <div className="button" onClick={prevSlide}>
            <ArrowLeft />
          </div>
          <div className="button" onClick={nextSlide}>
            <ArrowRight />
          </div>
        </div>
      </div>
    ) : null}
    <div className="blur-container">
      <span className="current-slide">
        {currentSlide + 1}
        <span className="faded"> / {photos.length}</span>
      </span>
    </div>
    <style jsx>{`
      .controls-container {
        position: absolute;
        top: 5px;
        right: 5px;
        display: flex;
        justify-content: flex-end;
      }
      .blur-container {
        display: flex;
        background: var(--blur-background);
        backdrop-filter: var(--blur-filter);
        padding: 4px 6px;
        border-radius: 7px;
        font-size: 14px;
      }
      .blur-container:first-child {
        margin-right: 5px;
      }
      .faded {
        color: var(--text-muted);
      }
      .buttons {
        display: flex;
      }
      .button {
        cursor: pointer;
        display: flex;
        align-items: center;
      }
      .button:last-child {
        margin-left: 10px;
      }
      .current-slide {
        min-width: 29px;
        text-align: right;
      }
      @media screen and (max-width: 816px) {
        .blur-container:first-child {
          margin-right: 0;
        }
      }
    `}</style>
  </div>
);

export default Controls;
