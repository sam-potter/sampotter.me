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

const Browser = props => (
  <div className={classes.Wrapper} style={props.style}>
    <div className={classes.Browser}>
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
  constructor(props) {
    super(props);

    let backgrounds = [
      props.backgrounds[props.backgrounds.length - 1],
      ...props.backgrounds,
      props.backgrounds[0]
    ];

    this.state = {
      timeout: undefined,
      currentSlide: 1,
      backgrounds
    };
  }

  componentDidMount() {
    let c = this.refs.carousel;
    c.addEventListener("click", this.handleSlideClick);
  }

  componentWillUnmount() {
    this.refs.carousel.removeEventListener("click", this.handleSlideClick);
    this.stop();
  }

  start = async () => {
    let current = this.state.currentSlide;
    let { duration } = this.state.backgrounds[current];
    let timeout = setTimeout(this.loop, duration);
    this.setState({ timeout });
  };

  loop = () => {
    let current = this.state.currentSlide;
    let { duration } = this.state.backgrounds[current];
    this.nextSlide();
    let timeout = setTimeout(this.loop, duration);
    this.setState({ timeout });
  };

  stop = () => clearTimeout(this.state.timeout);

  changeSlide = slide => {
    let c = this.refs.carousel;

    function noAnimate(pos) {
      // TODO: if mid-animation, get its current pos and use that instead;

      c.style.transition = "none";
      c.style.transform = `translate3d(-${pos}px, 0px, 0px)`;
      // flush pending css
      c.offsetHeight;
      // restore transition
      c.style.transition = "all 700ms";
    }

    // backwards
    if (slide < 1) {
      let pos = (this.state.backgrounds.length - 1) * c.offsetWidth;
      noAnimate(pos);
      slide = this.state.backgrounds.length - 2;
    }

    // forwards
    if (slide >= this.state.backgrounds.length - 1) {
      noAnimate(0);
      slide = 1;
    }

    let pos = slide * c.offsetWidth;
    c.style.transform = `translate3d(-${pos}px, 0px, 0px)`;

    this.setState({ currentSlide: slide });
  };

  nextSlide = () => this.changeSlide(this.state.currentSlide + 1);
  prevSlide = () => this.changeSlide(this.state.currentSlide - 1);

  handleSlideClick = event => {
    let width = this.refs.carousel.offsetWidth;
    let pos = event.layerX + this.state.currentSlide * width;
    pos > width / 2 ? this.nextSlide() : this.prevSlide();

    this.stop();
    this.start();
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
          {this.state.backgrounds.map(({ background, src }, index) => (
            <Browser key={index} style={{ background }}>
              <img className={classes.Image} src={src} alt="" />
            </Browser>
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
