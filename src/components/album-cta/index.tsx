import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import AlbumFeature from "components/album-feature";
import CtaButton from "components/cta-button";
import BackgroundImage from "images/background-image-2560.jpg";

const StyledWrapperDiv = Styled.div`
    ${css.centredFlexbox};
    background: ${styles.colours.theme.primaryBase} url(${BackgroundImage}) no-repeat center;
    background-size: cover;
    height: 100vh;
    min-height: ${styles.mediaSize.tablet};
    justify-content: flex-end;
`;

const WrapperDiv = Styled.div`
    ${css.centredFlexbox};
    height: 75%;
    :hover .disc-image {
        transform: translateX(35%) rotate(20deg);
    }
    @media screen and (max-height: ${styles.mediaSize.tablet}) {
        height: 70%;
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