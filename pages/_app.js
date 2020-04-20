import globalStyles from "../styles/global";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}
