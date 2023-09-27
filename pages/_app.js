import React from "react";

import "../styles/globals.css";
import "../public/assets/fonts/fontawesome/fontawesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/assets/libs/@fancyapps/fancybox/dist/jquery.fancybox.min.css";
import "../public/assets/libs/aos/dist/aos.css";
import "../public/assets/libs/choices.js/public/assets/styles/choices.min.css";
import "../public/assets/libs/flickity-fade/flickity-fade.css";
import "../public/assets/libs/flickity/dist/flickity.min.css";
import "../public/assets/libs/highlightjs/styles/vs2015.css";
import "../public/assets/libs/jarallax/dist/jarallax.css";
// import "../public/assets/libs/quill/dist/quill.core.css";
import "../public/assets/css/theme.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </>
  );
}
