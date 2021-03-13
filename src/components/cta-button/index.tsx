import React from "react";
import Styled from "styled-components";

import { css } from "styles/styled-css";
import { styles } from "styles/variables";

const StyledWrapperDiv = Styled.div`
    ${css.centredFlexbox}
    min-width: 240px;
    min-height: 60px;
    background-color: ${styles.colours.theme.tertiaryBase};
    color: ${styles.colours.theme.tertiaryText};
    border: solid ${styles.colours.theme.tertiaryText} 1px;
    font-size: ${styles.fontSize.default};
    cursor: pointer;
    transition: color ${styles.transitionTime.fastest};
    &:hover {
        background-color: ${styles.colours.theme.tertiaryText};
        color: ${styles.colours.theme.tertiaryBase};
        border-color: ${styles.colours.theme.tertiaryBase};
    }
`;

const StyledButtonDiv = Styled.div``;

interface ICtaButtonProps {
    text: string;
    textColour?: string;
    backgroundColour?: string;
    textHoveredColour?: string;
}

const CtaButton = (props: ICtaButtonProps) => {
    const { text } = props;

    return (
        <StyledWrapperDiv>
            <StyledButtonDiv>{text}</StyledButtonDiv>
        </StyledWrapperDiv>
    )
};

export default CtaButton;