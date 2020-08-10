import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import StyledImg from "styles/styled-components/styled-img";

import Heading from "components/heading";

const StyledButtonCard = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.xxs};
`;

const StyledButtonHeadingDiv = Styled.div`
    padding: ${styles.padding.xs};
`;

interface IStyledLogoButtonProps {
    backgroundColour: string;
}

const StyledLogoButtonDiv = Styled.div`
    ${css.centredFlexbox};
    min-width: 124px;
    padding: ${styles.padding.xxs} ${styles.padding.s};
    background-color: ${(props: IStyledLogoButtonProps) => props.backgroundColour};
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

interface IButtonCardProps {
    text?: string;
    imgSrc: string;
    imgAlt: string;
    backgroundColour: string;
}

const ButtonCard = (props: IButtonCardProps) => {
    const { text, imgSrc, imgAlt, backgroundColour } = props;

    return (
        <StyledButtonCard>
            {text && (
                <StyledButtonHeadingDiv>
                    <Heading
                        text={text}
                        type={'h3'}
                        style={'h3'}
                    />
                </StyledButtonHeadingDiv>
            )}
            <StyledLogoButtonDiv backgroundColour={backgroundColour}>
                <StyledImg
                    src={imgSrc}
                    alt={imgAlt}
                />
            </StyledLogoButtonDiv>
        </StyledButtonCard>
    );
}

export default ButtonCard;