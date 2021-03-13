import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import StyledImg from "styles/styled-components/styled-img";
import AlbumArt from "images/album-art-512.png";

const StyledAlbumFeatureDiv = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.m} 0;
    color: ${styles.colours.theme.primaryText};
`;

const StyledAlbumDiv = Styled.div`
    padding: ${styles.padding.xs};
`;

const StyledAlbumImg = Styled(StyledImg)`
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;

interface IAlbumFeatureProps {}

const AlbumFeature = (props: IAlbumFeatureProps) => {
    return (
        <StyledAlbumFeatureDiv>
            <StyledAlbumDiv>
                <StyledAlbumImg
                    src={AlbumArt}
                    alt="Website logo"
                />
            </StyledAlbumDiv>
        </StyledAlbumFeatureDiv>
    );
}

export default AlbumFeature;