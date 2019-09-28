import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Button from "../components/Button";

function Contact() {
  let input = React.createRef();
  let sendMessage = _ => {
    console.log(input.current.value);
  };

  useEffect(() => {
    // Write out initial characters
    let m = "\n\nHey Sam,\n\n\n";
    let i = 0;
    let interval = setInterval(_ => {
      if (i >= m.length - 1) {
        input.current.focus();
        clearInterval(interval);
      }

      input.current.value = m.substr(0, i);
      i++;
    }, 100);
  }, []);

  return (
    <div>
      <Head>
        <title>Sam Potter | Contact</title>
      </Head>

      <div className="container">
        <div className="inputContainer">
          <textarea ref={input} type="text" />
        </div>
        <div className="buttonContainer">
          <Button onClick={sendMessage}>Send</Button>
          <Link href="/">
            <a className="cancelButton">Cancel</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        a {
          color: rgb(255, 30, 0);
          text-decoration: none;
          transition: all 200ms ease;
          padding: 0.3rem 0.6rem;
          margin: -0.3rem -0.6rem;
          border-radius: 7px;
          background-color: transparent;
        }
        .bubble {
          padding: 0.3rem 0.6rem;
          margin: -0.3rem -0.6rem;
          border-radius: 7px;
          background-color: transparent;
        }
        a:hover {
          background: rgba(255, 80, 0, 0.1);
        }

        .container {
          padding: 0 140px;
        }
        .inputContainer {
          max-width: 100vw;
          height: calc(100vh - 250px);
        }
        textarea {
          display: block;
          width: 100%;
          height: 100%;
          margin: 0;
          border: none;
          font-size: 56px;
          color: #333;
          resize: none;
        }
        textarea:active,
        textarea:focus {
          outline: none;
          border: none;
        }
        .buttonContainer {
          display: flex;
          align-items: center;
          height: 250px;
          width: 100%;
        }
        .cancelButton {
          margin-left: 50px;
        }
      `}</style>
    </div>
  );
}

export default Contact;
