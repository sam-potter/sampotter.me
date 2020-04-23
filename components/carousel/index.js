import { PureComponent } from "react";
import { isBrowser } from "react-device-detect";
import { InView } from "react-intersection-observer";

import Controls from "./controls";
import Image from "../image";
import Toast from "../toast";

export default class Carousel extends PureComponent {
  state = { animating: false, currentSlide: 0, showSwipe: false };

  componentDidMount() {
    this.refs.carousel.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    this.refs.carousel.removeEventListener("scroll", this.handleScroll);
  }

  animate = (x) => {
    if (this.state.animating) return;
    /* eslint-disable */
    const options = {
      duration: 1,
      ease: Power2.easeInOut,
      scrollTo: { x },
    };

    // Temporarily remove the CSS snap property to animate
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
    if (target > this.props.photos.length - 1) return;
    this.animate(target * this.refs.carousel.offsetWidth);
  };

  prevSlide = () => {
    const target = this.state.currentSlide - 1;
    if (target < 0) return;
    this.animate(target * this.refs.carousel.offsetWidth);
  };

  handleScroll = async (event) => {
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

  handleInView = (inView) => this.setState({ showSwipe: inView });

  render() {
    const { currentSlide, showSwipe } = this.state;
    const { photos } = this.props;

    return (
      <InView onChange={this.handleInView} threshold={1} triggerOnce>
        <div className="container" ref="container">
          {isBrowser ? null : showSwipe ? (
            <div className="swipe">
              <Toast ref="toast" delay={1.3}>
                Swipe between images
              </Toast>
            </div>
          ) : null}
          <div className="carousel snap" dir="ltr" ref="carousel">
            {this.props.photos.map((props) => (
              <div className="slide" key={props.src}>
                <Image {...props} />
              </div>
            ))}
          </div>
        </div>
        <Controls
          currentSlide={currentSlide}
          photos={photos}
          prevSlide={this.prevSlide}
          nextSlide={this.nextSlide}
        />
        <style jsx>{`
          .container {
            position: relative;
            width: 100%;
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
          ::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </InView>
    );
  }
}
