import React from "react";
import Styled from "styled-components";

import { css } from "styles/styled-css";
import { styles } from "styles/variables";

const StyledWrapperDiv = Styled.div`
    ${css.centredFlexbox}
    min-width: 232px;
    min-height: 76px;
    background-color: ${styles.colours.theme.tertiaryBase};
    border: solid ${styles.colours.theme.primaryHighlight} 1px;
    color: ${styles.colours.theme.primaryHighlight};
    font-size: ${styles.fontSize.large};
    cursor: pointer;
    transition: color ${styles.transitionTime.faster};
    &:hover {
        background-color: ${styles.colours.theme.primaryHighlight};
        color: ${styles.colours.theme.tertiaryBase};
        border-color: ${styles.colours.theme.tertiaryBase};

        & .small-text {
            color: ${styles.colours.theme.secondaryText}
        }
    }
`;

const StyledTextDiv = Styled.div`
    text-align: center;
    font-size: ${styles.fontSize.largish};
    padding: ${styles.padding.xs} 0;
`

const StyledSmallTextDiv = Styled(StyledTextDiv)`
    font-size: ${styles.fontSize.small};
    color: ${styles.colours.theme.secondaryBase};
    padding-bottom: 0;
`

const StyledButtonDiv = Styled.div``;

interface ICtaButtonProps {
    smallText?: string;
    text: string;
    textColour?: string;
    backgroundColour?: string;
    textHoveredColour?: string;
}

const CtaButton = (props: ICtaButtonProps) => {
    const { smallText, text } = props;

    return (
        <StyledWrapperDiv>
            <StyledButtonDiv>
                {smallText && <StyledSmallTextDiv className='small-text'>{smallText}<br /></StyledSmallTextDiv>}
                <StyledTextDiv>{text}</StyledTextDiv>
            </StyledButtonDiv>
        </StyledWrapperDiv>
    )
};

export default CtaButton;