import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import Heading from "components/heading";
import GigListItem from "components/gig-list-item";
import GigListItemHeader from "components/gig-list-item-header";

const StyledGigListDiv = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.xl} ${styles.padding.xs} ${styles.padding.xl};
    background-color: ${styles.colours.theme.secondaryBase};
    color: ${styles.colours.theme.secondaryText};
`;

const StyledListDiv = Styled.div`
    ${css.centredFlexbox};
    width: 100%;
    max-width: ${styles.mediaWidth.desktop};
    padding: ${styles.padding.s} 0;
`;

interface IGigListProps {}

const GigList = (props: IGigListProps) => {
    return (
        <StyledGigListDiv>
            <StyledListDiv>
                <GigListItemHeader />
                <GigListItem
                    date={"March 10th"}
                    text={"Quartet, Paris Jazz Cat Quintet"}
                />
                <GigListItem
                    date={"April 6th"}
                    text={"Quartet, Paris Jazz Cat Quartet. w/ Hiroki"}
                />
                <GigListItem
                    date={"May 31st"}
                    text={"Quartet, Paris Jazz Cat Trio."}
                />
            </StyledListDiv>
        </StyledGigListDiv>
    );
}

export default GigList;