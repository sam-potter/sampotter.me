import { Component } from "react";

import Close from "./icons/close";

export default class Toast extends Component {
  componentDidMount() {
    /* eslint-disable */
    const from = { autoAlpha: 0, x: -3 };
    const to = { delay: this.props.delay, autoAlpha: 1, x: 0 };
    gsap.fromTo(this.refs.toast, 0.2, from, to);
    /* eslint-enable */
  }

  dismiss = async () => {
    /* eslint-disable */
    const options = {
      autoAlpha: 0,
      x: -3,
      ease: Power1.easeOut,
    };
    gsap.to(this.refs.toast, 0.25, options);
    /* eslint-enable */
  };

  render() {
    const { children } = this.props;

    return (
      <button onClick={this.dismiss} ref="toast">
        <span className="f-reset">{children}</span>
        <div className="icon">
          <Close />
        </div>
        <style jsx>{`
          button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px;
            background: #fff;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
            border: 0;
            border-radius: 8px;
            outline: 0;
            cursor: pointer;
          }
          .icon {
            width: 24px;
            height: 24px;
            padding: 3px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0070f3;
            margin-left: 10px;
          }
        `}</style>
      </button>
    );
  }
}
