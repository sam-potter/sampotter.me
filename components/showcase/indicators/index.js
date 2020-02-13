import React from "react";
import classes from "./indicators.module.css";

class Indicators extends React.Component {
  constructor(props) {
    super(props);

    let { slides } = props;

    slides = slides.slice(1, slides.length - 1);

    this.state = { slides, containerWidth: 0 };
  }

  componentDidMount() {
    const containerWidth = this.refs.container.offsetWidth;
    this.setState({ containerWidth });
  }

  render() {
    const { containerWidth, slides } = this.state;
    const { passed, running } = this.props;

    return (
      <div className={classes.Indicators} ref="container">
        {slides.map(({ duration }, index) => (
          <div
            style={{ width: containerWidth / slides.length - 12 }}
            className={classes.Indicator}
            key={index}
          >
            {passed > index ? <div className={classes.BarFull} /> : null}
            {passed === index && running ? (
              <div
                className={classes.BarActive}
                style={{ animationDuration: `${duration}ms` }}
              />
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}

export default Indicators;
