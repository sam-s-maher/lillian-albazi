import React from "react";
import Styled, { css } from "styled-components";

import { styles } from "styles/variables"; 

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4';
type FontFamily = 'lora' | 'scheherazade';

interface IHeadingProps {
    className?: string;
    text: string;
    type: HeadingType;
    style: HeadingType;
    fontFamily?: FontFamily;
}

const Heading = (props: IHeadingProps) => {
    const { className, text, type, style, fontFamily } = props;

    const HeadingElement = GetStyledHeadingComponent(type, style, fontFamily);
    
    return <HeadingElement className={className}>{text}</HeadingElement>;
}

function GetStyledHeadingComponent(
    headingElementType: HeadingType,
    headingStyleType: HeadingType,
    fontFamily?: FontFamily) {

    function GetHeadingTypeCss() {
        switch(headingStyleType) {
            case 'h1':
                return `font-size: ${styles.fontSize.largest};`;
            case 'h2':
                return `font-size: ${styles.fontSize.larger};`;
            case 'h3':
                return `font-size: ${styles.fontSize.large};`;
            case 'h4':
                return `font-size: ${styles.fontSize.default};`;
        }
    }

    function GetFontFamilyCss() {
        switch(fontFamily) {
            case 'lora':
                return `font-family: ${styles.fontFamily.lora};`;
            case 'scheherazade':
                return `font-family: ${styles.fontFamily.scheherazade};`;
            default:
                return ``;
        }
    }

    const headingCss = css`${GetHeadingTypeCss()} ${GetFontFamilyCss()}`;

    switch(headingElementType) {
        case 'h1':
            return Styled.h1`${headingCss}`;
        case 'h2':
            return Styled.h2`${headingCss}`;
        case 'h3':
            return Styled.h3`${headingCss}`;
        case 'h4':
            return Styled.h4`${headingCss}`;
    }
}

export default Heading;