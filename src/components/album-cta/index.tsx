import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import Heading from "components/heading";
import AlbumFeature from "components/album-feature";
import CtaButton from "components/cta-button";
import BackgroundImage from "images/background-image-2560.jpg";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";

const StyledWrapperDiv = Styled.div`
    ${css.centredFlexbox};
    background: ${styles.colours.theme.primaryBase} url(${BackgroundImage}) no-repeat center;
    background-size: cover;
    height: 100vh;
    min-height: ${styles.mediaSize.tablet};
`;

const WrapperDiv = Styled.div`
    ${css.centredFlexbox};
    height: 70%;
    :hover .disc-image {
        transform: translateX(35%) rotate(20deg);
    }
    @media screen and (max-height: ${styles.mediaSize.tablet}) {
        height: 80%;
    }
`;

const StyledPaddedDiv = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.xs} 0;
    flex: 1 1 0;
    min-height: 0;
`;

const StyledPaddedAlbumDiv = Styled(StyledPaddedDiv)`
    flex: 2 1 0;
`;

const StyledBannerDiv = Styled.div`
    ${css.centredFlexbox};
`;

const StyledHeadingDiv = Styled.div`
    color: ${styles.colours.theme.primaryText};
    padding-top: 4vh;
    text-align: center;
`;

const StyledSubheadingDiv = Styled.div`
    color: ${styles.colours.theme.primaryHighlight};
    padding-top: ${styles.padding.xxxs};
`;

const StyledButtonDiv = Styled.div`
    ${css.centredFlexbox};
    position: relative;
    bottom: 30px;
`;

interface IAlbumCtaProps {
    id?: string;
}

const AlbumCta = (props: IAlbumCtaProps) => {
    const { id } = props;
    
    return (
        <StyledWrapperDiv id={id}>
            {/* <StyledPaddedDiv>
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
                            text={'AFTER-IMAGE'}
                            type={'h2'}
                            style={'h2'}
                            fontFamily={'scheherazade'}
                        />
                    </StyledSubheadingDiv>
                </StyledBannerDiv>
            </StyledPaddedDiv> */}
            <WrapperDiv>
                <StyledPaddedAlbumDiv>
                    <AlbumFeature />
                </StyledPaddedAlbumDiv>
                <StyledPaddedDiv>
                    <StyledButtonDiv>
                        <CtaButton
                                text={'ORDER HERE'}
                        />
                    </StyledButtonDiv>
                </StyledPaddedDiv>
            </WrapperDiv>
        </StyledWrapperDiv>
    );
}

export default AlbumCta;