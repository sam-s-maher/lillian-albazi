import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { DataStore } from "@aws-amplify/datastore";
import { Quote as QuoteModel } from "../../models";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import StyledImg from "styles/styled-components/styled-img";
import AlbumArtImageMedium from "images/album-art-512.jpg";
import DiscImage from "images/disc-512.png";
import SideQuote from "components/side-quote";
import { QuoteDetail } from "components/album-cta"; 

const StyledAlbumFeatureDiv = Styled.div`
    ${css.centredFlexbox};
    flex-flow: row nowrap;
    align-items: flex-start;
    height: 100%;
    color: ${styles.colours.theme.primaryText};
`;

const StyledAlbumDiv = Styled.div`
    ${css.centredFlexbox}
    height: 100%;
    max-height: 512px;
    position: relative;
`;

const StyledAlbumImg = Styled(StyledImg)`
    height: 100%;
    width: auto;
    max-width: none;
    max-height: 100vw;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    z-index: 2;
`;

const StyledDiscImage = Styled.img`
    position: absolute;
    top: 2.5%;
    height: 100%;
    width: auto;
    transition-duration: ${styles.transitionTime.fast};
    z-index: 1;
`;

interface IAlbumFeatureProps {
    quoteDetails: QuoteDetail[];
}

const AlbumFeature = (props: IAlbumFeatureProps) => {
    const { quoteDetails } = props;

    const quoteDetailsLength = quoteDetails.length;
    const halfQuotesLength = Math.ceil(quoteDetailsLength / 2);
    const leftQuoteDetails =  quoteDetails ? quoteDetails.slice(0, halfQuotesLength) : null;
    const rightQuoteDetails = quoteDetails ? quoteDetails.slice(halfQuotesLength) : null;

    const leftQuotes = leftQuoteDetails && <SideQuote side='left' quoteDetails={leftQuoteDetails} />
    const rightQuotes = rightQuoteDetails && <SideQuote side='right' quoteDetails={rightQuoteDetails} />

    return (
        <StyledAlbumFeatureDiv>
            {leftQuotes}
            <StyledAlbumDiv>
                <StyledAlbumImg
                    src={AlbumArtImageMedium}
                    alt="Website logo"
                />
                <StyledDiscImage className="disc-image" src={DiscImage} alt="Disc image" />
            </StyledAlbumDiv>
            {rightQuotes}
        </StyledAlbumFeatureDiv>
    );
}

export default AlbumFeature;