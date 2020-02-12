import React from "react";

export default class SmoothScroll extends React.Component {
  componentDidMount() {
    this.el = document.documentElement;
    this.pos = this.el.scrollTop;
    this.speed = 150;
    this.smooth = 6;
    this.moving = false;
    this.isSafari =
      navigator.vendor &&
      navigator.vendor.indexOf("Apple") > -1 &&
      navigator.userAgent &&
      navigator.userAgent.indexOf("CriOS") == -1 &&
      navigator.userAgent.indexOf("FxiOS") == -1;

    let opt = { passive: false };
    this.el.addEventListener("mousewheel", this.scrolled, opt);
    this.el.addEventListener("DOMMouseScroll", this.scrolled, opt);
  }

  componentWillUnmount() {
    let opt = { passive: false };
    this.el.removeEventListener("mousewheel", this.scrolled, opt);
    this.el.removeEventListener("DOMMouseScroll", this.scrolled, opt);
  }

  scrolled = e => {
    if (!this.isSafari) {
      e.preventDefault(); // disable default scrolling
    }

    let delta = this.normalizeWheelDelta(e);

    this.pos += -delta * this.speed;
    this.pos = Math.max(
      0,
      Math.min(this.pos, this.el.scrollHeight - this.el.clientHeight)
    ); // limit scrolling

    if (!this.moving) {
      this.update();
    }
  };

  normalizeWheelDelta = e => {
    if (e.detail) {
      if (e.wheelDelta) {
        return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1); // Opera
      } else {
        return -e.detail / 3; // Firefox
      }
    }

    return e.wheelDelta / 500; // IE, Safari, Chrome
  };

  update = () => {
    this.moving = true;
    let delta = (this.pos - this.el.scrollTop) / this.smooth;
    this.el.scrollTop += delta;

    var requestFrame = (function() {
      // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    })();

    if (Math.abs(delta) > 0.5) {
      requestFrame(this.update);
    } else {
      this.moving = false;
    }
  };

  render() {
    return <div />;
  }
}
