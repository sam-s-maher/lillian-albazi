import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { DataStore } from "@aws-amplify/datastore";
import { Quote as QuoteModel } from "../../models";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import AlbumFeature from "components/album-feature";
import CtaButton from "components/cta-button";
import BackgroundImage from "images/background-image-2560.jpg";
import { SocialsUrls } from "components/socials-list/socials-urls";
import ArticleQuote from "components/article-quote";

const StyledWrapperDiv = Styled.div`
    ${css.centredFlexbox};
    background: ${styles.colours.theme.primaryBase} url(${BackgroundImage}) no-repeat center;
    background-size: cover;
    height: 100vh;
    min-height: ${styles.mediaSize.tablet};
    justify-content: flex-end;
`;

const WrapperDiv = Styled.div`
    ${css.centredFlexbox};
    height: 75%;
    :hover .disc-image {
        transform: translateX(35%) rotate(20deg);
    }
    @media screen and (max-height: ${styles.mediaSize.tablet}) {
        height: 70%;
    }
`;

const StyledPaddedDiv = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.xs} 0;
    flex: 1 1 0;
    min-height: 0;
`;

const StyledPaddedAlbumDiv = Styled(StyledPaddedDiv)`
    flex: 2 1 0;
`;

const StyledButtonDiv = Styled.div`
    ${css.centredFlexbox};
    position: relative;
    bottom: 30px;
`;

const StyledGradientDiv = Styled.div`
    position: absolute;
    height: 100px;
    width: 100%;
    background: -webkit-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1));
    background: -moz-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1));
`;

interface IAlbumFeatureProps {}

export interface QuoteDetail {
    quote: QuoteModel;
}

interface IAlbumCtaState {
    loading: boolean;
    quoteDetails: QuoteDetail[];
}

interface IAlbumCtaProps {
    id?: string;
}

const AlbumCta = (props: IAlbumCtaProps) => {
    const { id } = props;
    const [ state, setState ] = useState<IAlbumCtaState>({ loading: true, quoteDetails: [] })

    async function getQuotes() {
        const quotes = await DataStore.query(QuoteModel);

        const quoteDetails: QuoteDetail[] = quotes.map(function(quote) {

            return {
                quote: quote
            }
        }).sort((a, b) => (a.quote?.Order > b.quote?.Order) ? 1 : -1);

        setState({ loading: false, quoteDetails })
    }

    useEffect(() => {
        const subscription = DataStore.observe(QuoteModel).subscribe(() => getQuotes())

        getQuotes();

        return () => {
            subscription.unsubscribe()
        }
    }, [state]);
    
    return (
        <div>
            <StyledWrapperDiv id={id}>
                <WrapperDiv>
                    <StyledPaddedAlbumDiv>
                        <AlbumFeature quoteDetails={state.quoteDetails}/>
                    </StyledPaddedAlbumDiv>
                    <StyledPaddedDiv>
                        <StyledButtonDiv>
                            <a href={SocialsUrls.Websites.Bandcamp}>
                                <CtaButton
                                    text={'ORDER HERE'}
                                />
                            </a>
                        </StyledButtonDiv>
                    </StyledPaddedDiv>
                </WrapperDiv>
                <StyledGradientDiv />
            </StyledWrapperDiv>
            <ArticleQuote quoteDetails={state.quoteDetails.filter(quote => quote.quote.ShowOnMobile)}/>
        </div>
    );
}

export default AlbumCta;