import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import Heading from "components/heading";
import SocialsList, { SocialIcon } from "components/socials-list";
import DefaultBackgroundImage from "images/default-background-image.png";

const StyledDiv = Styled.div`
    ${css.centredFlexbox};
    width: 100%;
    background-color: ${styles.colours.theme.backgroundBase};
    color: ${styles.colours.theme.backgroundText};
`;

const StyledArticleDiv = Styled.div`
    padding: ${styles.padding.m} ${styles.padding.xs};
    @media only screen and (max-width: ${styles.mediaWidth.phone}) {
        padding: ${styles.padding.xs};
    }
`;

const StyledContentDiv = Styled.div`
    ${css.centredFlexbox};
    background-image: url(${DefaultBackgroundImage});
    background-size: auto 100%;
    background-repeat: no-repeat;
    width: 100%;
    max-width: ${styles.mediaWidth.desktopWide};
    height: 100%;
    background-position: 50% 0;
    justify-content: space-around;
    padding: ${styles.padding.l} ${styles.padding.xxs};
`;

interface IStyledBlurredDivProps {
    borderSize: string;
    fontSize?: string;
}

const StyledBlurredDiv = Styled.div`
    ${css.centredFlexbox};
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    padding: ${styles.padding.m};
    border: solid white ${(props: IStyledBlurredDivProps) => props.borderSize};
    text-align: center;
    p {
        font-size: ${styles.fontSize.large};
    }
    @media only screen and (max-width: ${styles.mediaWidth.phone}) {
        padding: ${styles.padding.m} ${styles.padding.xs};
    }
`;

const StyledSocialsDiv = Styled(StyledBlurredDiv)`
    min-height: 100px; 
    padding: 0;
    border: 0;
`;

const StyledHeadingDiv = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.xxs};
    text-align: center;
`;

interface IWebsiteUnderConstructionProps {}

const WebsiteUnderConstruction = (props: IWebsiteUnderConstructionProps) => {
    return (
        <StyledDiv>
            <StyledContentDiv>
                <StyledArticleDiv>
                    <StyledBlurredDiv borderSize={"5px"}>
                        <StyledHeadingDiv>
                            <Heading text={"LILLIAN ALBAZI"} type={"h1"} style={"h1"} />
                        </StyledHeadingDiv>
                        <div>
                            <Heading text={"Australian Jazz Musician"} type={"h2"} style={"h4"} />
                        </div>
                    </StyledBlurredDiv>
                </StyledArticleDiv>
                <StyledArticleDiv>
                    <StyledBlurredDiv borderSize={"1px"}>
                        <p>New Website Under Construction!</p>
                    </StyledBlurredDiv>
                </StyledArticleDiv>
                <StyledArticleDiv>
                    <StyledSocialsDiv borderSize={"1px"}>
                        <SocialsList exclude={[SocialIcon.Bandcamp, SocialIcon.Spotify]}/>
                    </StyledSocialsDiv>
                </StyledArticleDiv>
            </StyledContentDiv>
        </StyledDiv>
    );
}

export default WebsiteUnderConstruction;