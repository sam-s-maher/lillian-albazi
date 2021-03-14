import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import Heading from "components/heading";
import AlbumFeature from "components/album-feature";
import CtaButton from "components/cta-button";
import BackgroundImage from "images/background-image-2560.jpg";

const StyledWrapperDiv = Styled.div`
    ${css.centredFlexbox};
    justify-content: space-around; 
    background: ${styles.colours.theme.primaryBase} url(${BackgroundImage}) no-repeat center;
    background-size: cover;
    padding: 14vh 0 12vh;
    height: 70vh;
`;

const StyledBannerDiv = Styled.div`
    ${css.centredFlexbox};
`;

const StyledHeadingDiv = Styled.div`
    color: ${styles.colours.theme.primaryText};
`;

const StyledSubheadingDiv = Styled.div`
    color: ${styles.colours.theme.primaryHighlight};
    padding-top: ${styles.padding.xxxs};
`;

const StyledButtonDiv = Styled.div`
    ${css.centredFlexbox};
`;

interface IAlbumCtaProps {
    id?: string;
}

const AlbumCta = (props: IAlbumCtaProps) => {
    const { id } = props;
    
    return (
        <StyledWrapperDiv id={id}>
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
               <CtaButton
                    text={'ORDER HERE'}
               />
            </StyledButtonDiv>
        </StyledWrapperDiv>
    );
}

export default AlbumCta;