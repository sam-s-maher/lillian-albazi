import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import Heading from "components/heading";
import AlbumFeature from "components/album-feature";
import Button from "components/button";


const StyledWrapperDiv = Styled.div`
    ${css.centredFlexbox};
    background: ${styles.colours.theme.primaryBase} url("../rsc/images/background-image-2560.jpg") no-repeat;
    background-size: cover;
`;

const StyledBannerDiv = Styled.div`
    ${css.centredFlexbox};
    min-height: 10vh;
    padding: ${styles.padding.l} ${styles.padding.xxs} 0;
`;

const StyledHeadingDiv = Styled.div`
    color: ${styles.colours.theme.primaryText};
    padding: ${styles.padding.xs} 0;
`;

const StyledSubheadingDiv = Styled.div`
    color: ${styles.colours.theme.primaryHighlight};
    padding: ${styles.padding.xs} 0;
`;

const StyledButtonDiv = Styled.div`
    ${css.centredFlexbox};
`;

interface IAlbumCtaProps {}

const AlbumCta = (props: IAlbumCtaProps) => {
    return (
        <StyledWrapperDiv>
            <StyledBannerDiv>
                <StyledHeadingDiv>
                    <Heading
                        text={'LILLIAN ALBAZI'}
                        type={'h1'}
                        style={'h1'}
                        fontFamily={'scheherazade'}
                    />
                </StyledHeadingDiv>
                <StyledSubheadingDiv>
                    <Heading
                        text={'AFTER IMAGE'}
                        type={'h2'}
                        style={'h2'}
                        fontFamily={'scheherazade'}
                    />
                </StyledSubheadingDiv>
            </StyledBannerDiv>
            <AlbumFeature />
            <StyledButtonDiv>
               <Button />
            </StyledButtonDiv>
        </StyledWrapperDiv>
    );
}

export default AlbumCta;