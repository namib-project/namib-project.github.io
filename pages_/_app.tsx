import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/tw.css";
import React from "react";
import "typeface-inter";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported in tw.css

const MyApp = ({ Component, pageProps }) => {
    return (
        <Component { ...pageProps } />
    );
};

export default MyApp;
