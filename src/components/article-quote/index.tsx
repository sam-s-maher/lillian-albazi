import React from "react";
import Styled from "styled-components";
import { QuoteDetail } from "../album-cta";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";

const Wrapper = Styled.div`
    ${css.centredFlexbox};
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: none;
    @media screen and (max-width: ${styles.mediaSize.desktop}) {
        display: flex;
    }
`;

interface IStyledQuoteWrapperProps {}

const ArticleQuoteWrapper = Styled.div`
    ${css.centredFlexbox};
    flex-flow: row nowrap;
    width: 100%;
    width: 340px;
    flex-flow: column wrap;
    justify-content: flex-start;
`;

const StyledQuoteDiv = Styled.div`
    color: ${styles.colours.theme.primaryText};
    text-align: center;
    line-height: 1.6rem;
    padding-bottom: ${styles.padding.l};
`

const QuoteTextDiv = Styled.div`
    font-size: ${styles.fontSize.default};
    line-height: 2.2rem;
    font-style: italic;
    padding-bottom: ${styles.padding.xxs};
`

const QuoteAttributionDiv = Styled.div`
    font-size: ${styles.fontSize.small};
    color: ${styles.colours.theme.primaryHighlight};
`
interface IQuoteProps {
    quoteDetails: QuoteDetail[];
}

const ArticleQuote = (props: IQuoteProps) => {
    const { quoteDetails } = props;

    return (
        <Wrapper>
            <ArticleQuoteWrapper>
                {
                    quoteDetails.map((item: QuoteDetail, i) =>
                        <StyledQuoteDiv key={item.quote.Order}>
                            <QuoteTextDiv>"{item.quote.Text}"</QuoteTextDiv>
                            <QuoteAttributionDiv>{item.quote.Attribution}</QuoteAttributionDiv>
                        </StyledQuoteDiv>)
                }
            </ArticleQuoteWrapper>
        </Wrapper>
    );
}

export default ArticleQuote;