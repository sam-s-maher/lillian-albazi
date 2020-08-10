import React from "react";
import Styled, { css } from "styled-components";

import { styles } from "styles/variables"; 

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4';

interface IHeadingProps {
    text: string;
    type: HeadingType;
    style: HeadingType;
}

const Heading = (props: IHeadingProps) => {
    const { text, type, style } = props;

    const HeadingElement = GetStyledHeadingComponent(type, style);
    
    return <HeadingElement>{text}</HeadingElement>;
}

function GetStyledHeadingComponent(
    headingElementType: HeadingType,
    headingStyleType: HeadingType) {

    const css = GetCssForHeadingType(headingStyleType);

    switch(headingElementType) {
        case 'h1':
            return Styled.h1`${css}`;
        case 'h2':
            return Styled.h2`${css}`;
        case 'h3':
            return Styled.h3`${css}`;
        case 'h4':
            return Styled.h4`${css}`;
    }
}

function GetCssForHeadingType(headingType: HeadingType) {
    switch(headingType) {
        case 'h1':
            return css`font-size: ${styles.fontSize.largest}`;
        case 'h2':
            return css`font-size: ${styles.fontSize.larger}`;
        case 'h3':
            return css`font-size: ${styles.fontSize.large}`;
        case 'h4':
            return css`font-size: ${styles.fontSize.default}`;
    }
}

export default Heading;