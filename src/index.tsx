import React from "react";
import ReactDom from "react-dom";
import { Normalize } from "styled-normalize";

import { StyledReset } from "styles/styled-reset";
import { StyledGlobal } from "styles/styled-global";
import { StyledFonts } from "styles/styled-fonts";
import App from "components/app";

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const StyledApp = () => (
    <>
        <Normalize />
        <StyledReset />
        <StyledFonts />
        <StyledGlobal />
        <App/>
    </>
);

ReactDom.render(
    <StyledApp />,
    document.getElementById("root")
);