import React from "react";
import Styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTicketAlt,
    faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

import { styles } from "styles/variables";
import Heading from "components/heading";
import { 
    StyledItemDiv,
    StyledGigListItemDiv,
    StyledItemInfoDiv
} from "components/gig-list-item";

const StyledItemContentDiv = Styled.div`
    padding: 0 ${styles.padding.s};
    @media screen (max-width: ${styles.mediaSize.phone}) {
        padding: 0;
    }
`;

interface GigListItemHeaderProps {}

const GigListItemHeader = (props: GigListItemHeaderProps) => {

    return (
        <StyledGigListItemDiv>
            <StyledItemInfoDiv>
                <StyledItemDiv justifyContent={"flex-start"}>
                    <StyledItemContentDiv>
                        <FontAwesomeIcon icon={faCalendarAlt} size="2x"/>
                    </StyledItemContentDiv>
                </StyledItemDiv>
                <StyledItemDiv flexGrow={"3"} justifyContent={"flex-center"}>
                    <StyledItemContentDiv>
                        <Heading text={"Gigs"} type={"h1"} style={"h1"}/>
                    </StyledItemContentDiv>
                </StyledItemDiv>
                <StyledItemDiv justifyContent={"flex-end"}>
                    <StyledItemContentDiv>
                        <FontAwesomeIcon icon={faTicketAlt} size="2x"/>
                    </StyledItemContentDiv>
                </StyledItemDiv>
            </StyledItemInfoDiv>
        </StyledGigListItemDiv>
    );
}

export default GigListItemHeader;