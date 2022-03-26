import React from "react";
import Styled from "styled-components";
import { QuoteDetail } from "components/album-cta";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";

const Wrapper = Styled.div`
    display: block;
    ${css.centredFlexbox};
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 0 ${styles.padding.l};
    z-index: 10;
    @media screen and (max-width: ${styles.mediaSize.tablet}) {
        padding-top: 0;
    }
    @media screen and (max-width: ${styles.mediaSize.desktop}) {
        display: none;
    }
`;

interface IStyledQuoteWrapperProps {
    side: 'left' | 'right';
}

const SideQuoteWrapper = Styled.div`
    ${css.centredFlexbox};
    flex-flow: row nowrap;
    width: 100%;
    width: 240px;
    flex-flow: column wrap;
    justify-content: flex-start;
    max-width: ${styles.mediaSize.desktop};
    align-items: ${(props: IStyledQuoteWrapperProps) => props.side == 'left' ? "flex-end" : "flex-start"}
`;

interface IStyledQuoteDivProps {
    showOnMobile: boolean;
}

const StyledQuoteDiv = Styled.div`
    color: ${styles.colours.theme.primaryText};
    text-align: center;
    line-height: 1.6rem;
    @media screen and (max-width: ${styles.mediaSize.tablet}) {
        width: 80%;
        display: ${(props: IStyledQuoteDivProps) => props.showOnMobile ? "block" : "none"}
    }
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
    side: 'left' | 'right';
    quoteDetails: QuoteDetail[];
}

const SideQuote = (props: IQuoteProps) => {
    const { side, quoteDetails } = props;

    return (
        <Wrapper>
            <SideQuoteWrapper side={side}>
                {
                    quoteDetails.map((item: QuoteDetail, i) =>
                        <StyledQuoteDiv key={item.quote.Order} showOnMobile={item.quote.ShowOnMobile}>
                            <QuoteTextDiv>"{item.quote.Text}"</QuoteTextDiv>
                            <QuoteAttributionDiv>{item.quote.Attribution}</QuoteAttributionDiv>
                        </StyledQuoteDiv>)
                }
            </SideQuoteWrapper>
        </Wrapper>
    );
}

export default SideQuote;