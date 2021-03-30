import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import StyledImg from "styles/styled-components/styled-img";
import AlbumArtMedium from "images/album-art-512.jpg";

const StyledAlbumFeatureDiv = Styled.div`
    ${css.centredFlexbox};
    height: 100%;
    color: ${styles.colours.theme.primaryText};
`;

const StyledAlbumDiv = Styled.div`
    ${css.centredFlexbox}
    height: 100%;
    max-height: 512px;
`;

const StyledAlbumImg = Styled(StyledImg)`
    height: 100%;
    width: auto;
    max-height: 100vw;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;

interface IAlbumFeatureProps {}

const AlbumFeature = (props: IAlbumFeatureProps) => {
    return (
        <StyledAlbumFeatureDiv>
            <StyledAlbumDiv>
                <StyledAlbumImg
                    src={AlbumArtMedium}
                    alt="Website logo"
                />
            </StyledAlbumDiv>
        </StyledAlbumFeatureDiv>
    );
}

export default AlbumFeature;