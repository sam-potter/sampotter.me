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

const Computer = props => (
  <div className={classes.Wrapper} style={props.style}>
    <div className={classes.Computer}>
      <div className={classes.Bar}>
        <div className={classes.Dot} style={{ background: "#EA4F49" }} />
        <div className={classes.Dot} style={{ background: "#F7BC33" }} />
        <div className={classes.Dot} style={{ background: "#69CA43" }} />
      </div>
      {props.children}
    </div>
  </div>
);

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
    let pos = event.layerX + this.state.currentSlide * width;
    pos > width / 2 ? this.nextSlide() : this.prevSlide();
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
            <Computer key={index} style={{ background }} order={index}>
              <img className={classes.Image} src={src} alt="" />
            </Computer>
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
