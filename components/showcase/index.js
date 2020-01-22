import React, { Component } from "react";
import propTypes from "prop-types";
import { InView } from "react-intersection-observer";
import classes from "./showcase.module.css";

class Indicators extends Component {
  state = { containerWidth: 0 };

  componentDidMount() {
    const containerWidth = this.refs.container.offsetWidth;
    this.setState({ containerWidth });
  }

  render() {
    const { containerWidth } = this.state;
    const { backgrounds, currentSlide, running } = this.props;

    return (
      <div className={classes.Indicators} ref="container">
        {backgrounds.map((background, index) => (
          <div
            style={{ width: containerWidth / backgrounds.length - 12 }}
            className={classes.Indicator}
            key={index}
          >
            <div className={classes.Bar} />
          </div>
        ))}
      </div>
    );
  }
}

Indicators.propTypes = {
  backgrounds: propTypes.array.isRequired
};

class Showcase extends Component {
  state = { currentSlide: 0, timeout: undefined };

  componentDidMount() {
    this.refs.carousel.addEventListener("click", this.handleSlideClick);
  }

  componentWillUnmount() {
    this.refs.carousel.removeEventListener("click", this.handleSlideClick);
    clearTimeout(this.state.timeout);
  }

  start = async () => {
    let current = this.state.currentSlide;
    let { duration } = this.props.backgrounds[current];

    this.nextSlide();
    let timeout = setTimeout(this.start, duration);
    this.setState({ timeout });
  };

  stop = () => clearTimeout(this.state.timeout);

  reset = () => {
    clearTimeout(this.state.timeout);
    let { duration } = this.props.backgrounds[this.state.currentSlide];
    let timeout = setTimeout(this.start, duration);
    this.setState({ timeout });
  };

  changeSlide = slide => {
    if (slide >= this.props.backgrounds.length || slide < 0) return;

    let pos = slide * this.refs.carousel.offsetWidth;
    this.refs.carousel.style.transform = `translate3d(-${pos}px, 0px, 0px)`;
    this.setState({ currentSlide: slide });
  };

  nextSlide = () => this.changeSlide(this.state.currentSlide + 1);
  prevSlide = () => this.changeSlide(this.state.currentSlide - 1);

  handleSlideClick = event => {
    let width = this.refs.carousel.offsetWidth;

    console.dir(event);

    if (event.layerX > width / 2) {
      this.nextSlide();
      console.log("Next slide...", event.layerX, width / 2);
    } else {
      this.prevSlide();
      console.log("Prev slide...", event.layerX, width / 2);
    }

    this.reset();
    return;

    event.layerX > width / 2 ? this.nextSlide() : this.prevSlide();
    this.reset();
  };

  handleScroll = inView => (inView ? this.start() : this.stop());

  render() {
    return (
      <InView
        as="section"
        className={classes.Showcase}
        onChange={this.handleScroll}
        threshold={1}
      >
        <div className={classes.Carousel} ref="carousel">
          {this.props.backgrounds.map(({ background, src }, index) => (
            <div className={classes.ImageWrapper} style={{ background }}>
              <img className={classes.Image} src={src} key={index} alt="" />
            </div>
          ))}
        </div>
      </InView>
    );
  }
}

Showcase.propTypes = {
  backgrounds: propTypes.array.isRequired
};

Showcase.defaultProps = {
  backgrounds: []
};

export default Showcase;
