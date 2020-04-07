import { Component } from "react";
import { isBrowser } from "react-device-detect";
import { InView } from "react-intersection-observer";

import Controls from "./controls";
import Image from "../image";
import Toast from "../toast";

export default class Showcase extends Component {
  state = { animating: false, currentSlide: 0, showSwipe: false };

  componentDidMount() {
    this.refs.carousel.addEventListener("click", this.handleClick);
    this.refs.carousel.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    this.refs.carousel.removeEventListener("click", this.handleClick);
    this.refs.carousel.removeEventListener("scroll", this.handleScroll);
  }

  animate = x => {
    if (this.state.animating) return;
    /* eslint-disable */
    const options = {
      duration: 1,
      ease: Power2.easeInOut,
      scrollTo: { x }
    };

    // We must remove the CSS snap property to animate
    this.refs.carousel.classList.remove("snap");
    this.setState({ animating: true });
    gsap.to(this.refs.carousel, options).eventCallback("onComplete", () => {
      this.refs.carousel.classList.add("snap");
      this.setState({ animating: false });
    });
    /* eslint-enable */
  };

  nextSlide = () => {
    const target = this.state.currentSlide + 1;
    if (target > this.props.slides.length - 1) return;
    this.animate(target * this.refs.carousel.offsetWidth);
  };

  prevSlide = () => {
    const target = this.state.currentSlide - 1;
    if (target < 0) return;
    this.animate(target * this.refs.carousel.offsetWidth);
  };

  handleClick = event => {
    const width = this.refs.carousel.offsetWidth;
    event.layerX > width / 2 ? this.nextSlide() : this.prevSlide();
  };

  handleScroll = async event => {
    if (this.state.showSwipe && this.refs.toast) {
      this.refs.toast.dismiss();
      setTimeout(() => this.setState({ showSwipe: false }), 1250);
    }

    const c = this.refs.carousel;
    const newSlide = Math.round(c.scrollLeft / c.offsetWidth);

    // BUG on Mobile Safari: c.scrollLeft
    // will return 0 when the carousel is
    // scrolled right to the very end.
    // This causes the slide number to go
    // back to the start, incorrectly.
    // However, this only occurs when the
    // user taps the image to scroll thru
    // the carousel.

    if (this.state.currentSlide !== newSlide) {
      this.setState({ currentSlide: newSlide });
    }
  };

  handleInView = inView => this.setState({ showSwipe: inView });

  render() {
    const { currentSlide, showSwipe } = this.state;
    const { slides } = this.props;

    return (
      <InView onChange={this.handleInView} threshold={0.8} triggerOnce>
        <div className="showcase">
          <div className="carousel snap" dir="ltr" ref="carousel">
            <div className="swipe">
              {isBrowser ? null : (
                <Toast ref="toast">Swipe between images</Toast>
              )}
            </div>
            {this.props.slides.map(({ background, src }, index) => (
              <div className="slide" key={index} style={{ background }}>
                <div className="img">
                  <Image src={src} style={{ width: "100%" }} />
                </div>
              </div>
            ))}
          </div>
          <Controls
            currentSlide={currentSlide}
            slides={slides}
            prevSlide={this.prevSlide}
            nextSlide={this.nextSlide}
          />
          <style jsx>{`
            .showcase {
              position: relative;
              width: 100%;
              height: 475px;
            }
            .swipe {
              position: absolute;
              z-index: 1;
              left: 15px;
              bottom: 15px;
            }
            .carousel {
              position: relative;
              z-index: 0;
              height: 100%;
              width: 100%;
              display: flex;
              overflow-y: hidden;
              overflow-x: scroll;
              flex: none;
              flex-flow: row nowrap;
              cursor: pointer;
            }
            .snap {
              scroll-snap-type: x mandatory;
            }
            .slide {
              height: 100%;
              width: 100%;
              scroll-snap-align: center;
              flex: none;
            }
            .img {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            ::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </InView>
    );
  }
}
