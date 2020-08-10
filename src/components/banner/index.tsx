import React from "react";
import Styled from "styled-components"; 

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import StyledImg from "styles/styled-components/styled-img";

import Logo from "images/logo.png";

const StyledBannerDiv = Styled.div`
    ${css.centredFlexbox};
    min-height: 10vh;
    background-color: ${styles.colours.theme.primaryBase};
    padding: ${styles.padding.m} ${styles.padding.xxs} 0;
`;

const StyledAlbumImg = Styled(StyledImg)`
    max-width: ${styles.mediaWidth.phone};
`;

interface IBannerProps {}

const Banner = (props: IBannerProps) => {
    return (
        <StyledBannerDiv>
            <StyledAlbumImg
                src={Logo}
                alt="Website logo"
            />
        </StyledBannerDiv>
    );
}

export default Banner;