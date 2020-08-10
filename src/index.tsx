import React from "react";
import ReactDom from "react-dom";
import { Normalize } from "styled-normalize";

import { StyledReset } from "styles/styled-reset";
import { StyledGlobal } from "styles/styled-global";
import { StyledFonts } from "styles/styled-fonts";
import App from "components/app";

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