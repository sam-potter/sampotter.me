import React from "react";
import propTypes from "prop-types";
import classes from "./indicators.module.css";

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

export default Indicators;
