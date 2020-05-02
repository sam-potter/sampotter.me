import gsap from "gsap";
import { Component } from "react";

import ArrowLeft from "../icons/arrow-left";

export default class Toast extends Component {
  componentDidMount() {
    const from = { autoAlpha: 0, x: -3 };
    const to = { delay: this.props.delay, autoAlpha: 1, x: 0 };
    gsap.fromTo(this.refs.toast, 0.2, from, to);
  }

  dismiss = async () => {
    const options = { autoAlpha: 0, ease: "power2.inOut" };
    gsap.to(this.refs.toast, 0.25, options);
  };

  render() {
    const { children } = this.props;

    return (
      <div className="container" ref="toast">
        <div className="icon">
          <ArrowLeft />
        </div>
        <span className="f-reset">{children}</span>
        <style jsx>{`
          .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 6px 15px;
            background: var(--blur-background);
            backdrop-filter: var(--blur-filter);
            color: var(--text-primary);
            border: 0;
            border-radius: 7px;
            outline: 0;
            cursor: pointer;
          }
          .icon {
            display: flex;
            align-items: center;
            margin-right: 15px;
          }
        `}</style>
      </div>
    );
  }
}
