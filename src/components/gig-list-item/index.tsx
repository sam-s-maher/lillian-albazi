import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";

export const StyledGigListItemDiv = Styled.div`
    ${css.centredFlexbox};
    width: 100%;
    padding-bottom: ${styles.padding.s};
`;

export const StyledItemInfoDiv = Styled.div`
    ${css.centredFlexbox};
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 ${styles.padding.s} ${styles.padding.s};
    box-sizing: border-box;
    @media screen and (max-width: ${styles.mediaSize.phone}) {
        padding-left: 0;
        padding-right: 0;
    }
`;

interface IStyledItemDivProps {
    justifyContent: string;
    flexGrow?: string;
    textAlign?: string;
}

export const StyledItemDiv = Styled.div`
    ${css.centredFlexbox};
    flex-direction: row;
    flex: ${(props: IStyledItemDivProps) => props.flexGrow || "1"} 1 0;
    justify-content: ${(props: IStyledItemDivProps) => props.justifyContent};
    text-align: ${(props: IStyledItemDivProps) => props.textAlign || "left"};
`;

interface IStyledItemContentDivProps {
    colour: string;
    backgroundColour?: string;
    fontWeight?: string;
    fontSize?: string;
}

const StyledItemContentDiv = Styled.div`
    color: ${(props: IStyledItemContentDivProps) => props.colour};
    background-color: ${(props: IStyledItemContentDivProps) => props.backgroundColour};
    font-weight: ${(props: IStyledItemContentDivProps) => props.fontWeight};
    font-size: ${(props: IStyledItemContentDivProps) => props.fontSize};
`;

const StyledDayNameDiv = Styled.div`
    color: ${styles.colours.base.grey};
    font-size: ${styles.fontSize.default};
    padding-top: ${styles.padding.xxxxs};
`;

const StyledItemButtonDiv = Styled(StyledItemContentDiv)`
    ${css.centredFlexbox}
    min-height: 50px;
    min-width: 70px;
    cursor: pointer;
    transition: font-size ${styles.transitionTime.fastest};
    padding: 0 ${styles.padding.xxxxs};
    &:hover {
        font-size: 110%;
    }
    @media screen and (max-width: ${styles.mediaSize.phoneSmall}) {
        font-size: ${styles.fontSize.small};
        padding: 0;
    }
`;

const StyledHrDiv = Styled.div`
    width: 100%;
`;

const StyledHr = Styled.hr`
    color: ${styles.colours.theme.secondaryText};
    height: 2px;
    border-width: 0;
    background-color: ${styles.colours.theme.secondaryText};
`;

interface IGigListItemProps {
    date: string;
    dayName: string;
    text: string;
    url: string;
    buttonText?: string;
}

const GigListItem = (props: IGigListItemProps) => {
    const {
        date,
        dayName,
        text,
        buttonText,
        url
    } = props;

    var buttonTextToDisplay = buttonText || "Tickets";

    return (
        <StyledGigListItemDiv>
            <StyledItemInfoDiv>
                <StyledItemDiv justifyContent={"flex-start"}>
                    <StyledItemContentDiv
                        colour={styles.colours.theme.secondaryText}
                        fontWeight={styles.fontWeight.bold}
                        fontSize={styles.fontSize.large}>
                        <div>{date}</div>
                        <StyledDayNameDiv>{dayName}</StyledDayNameDiv>
                    </StyledItemContentDiv>
                </StyledItemDiv>
                <StyledItemDiv flexGrow={"2"} justifyContent={"center"} textAlign={"center"}>
                    <StyledItemContentDiv
                        colour={styles.colours.theme.secondaryText}>
                        <p>{text}</p>
                    </StyledItemContentDiv>
                </StyledItemDiv>
                <StyledItemDiv justifyContent={"flex-end"}>
                    <a href={url}>
                        <StyledItemButtonDiv
                            colour={styles.colours.theme.tertiaryText}
                            backgroundColour={styles.colours.theme.tertiaryBase}>
                            {buttonTextToDisplay}
                        </StyledItemButtonDiv>
                    </a>
                </StyledItemDiv>
            </StyledItemInfoDiv>
            <StyledHrDiv>
                <StyledHr />
            </StyledHrDiv>
        </StyledGigListItemDiv>
    );
}

export default GigListItem;