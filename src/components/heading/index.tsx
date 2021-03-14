import React from "react";
import Styled, { FlattenSimpleInterpolation, css } from "styled-components";

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

    const HeadingElement = GetStyledHeadingComponent(className, type, style, fontFamily);
    
    return HeadingElement(text);
}

interface IStyledHeadingProps {
    css: FlattenSimpleInterpolation;
}

const StyledH1 = Styled.h1`${(props: IStyledHeadingProps) => props.css};`;
const StyledH2 = Styled.h2`${(props: IStyledHeadingProps) => props.css};`;
const StyledH3 = Styled.h3`${(props: IStyledHeadingProps) => props.css};`;
const StyledH4 = Styled.h4`${(props: IStyledHeadingProps) => props.css};`;

function GetStyledHeadingComponent(
    className: string,
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
            return (text: string) => <StyledH1 className={className} css={headingCss}>{text}</StyledH1>;
        case 'h2':
            return (text: string) => <StyledH2 className={className} css={headingCss}>{text}</StyledH2>;
        case 'h3':
            return (text: string) => <StyledH3 className={className} css={headingCss}>{text}</StyledH3>;
        case 'h4':
            return (text: string) => <StyledH4 className={className} css={headingCss}>{text}</StyledH4>;
    }
}

export default Heading;