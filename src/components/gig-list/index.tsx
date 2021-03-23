import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import GigListItem from "components/gig-list-item";
import GigListItemHeader from "components/gig-list-item-header";

const StyledGigListDiv = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.xxxl} ${styles.padding.xs};
    background-color: ${styles.colours.theme.secondaryBase};
    color: ${styles.colours.theme.secondaryText};
`;

const StyledListDiv = Styled.div`
    ${css.centredFlexbox};
    width: 100%;
    max-width: ${styles.mediaSize.desktop};
    padding: ${styles.padding.s} 0;
`;

class GigItem {
    date: string;
    text: string;
    url: string;

    constructor(date: string, text: string, url: string) {
        this.date = date;
        this.text = text;
        this.url = url;
    }
}

const gigList: GigItem[] = [
    new GigItem("SAT 26th June", "JAZZLAB, VIC", "https://jazzlab.club/1753-lillian-albazi-after-image-album-launch"),
    new GigItem("SUN 4th July", "Brisbane Jazz Club, QLD", "https://www.google.com"),
    new GigItem("FRI 9th July", "The Wharf, TAS", "https://www.google.com"),
    new GigItem("SAT 10th July", "Pablo's Cocktails and Dreams, TAS", "https://www.google.com"),
    new GigItem("FRI 16th July", "Bendigo Bank Theatre, VIC", "https://www.google.com"),
    new GigItem("FRI 23rd July", "National Press Club, CNBRA", "https://www.google.com"),
    new GigItem("SAT 24th July", "Merrigong Theatre, Music Lounge, Wollongong", "https://www.google.com"),
    new GigItem("SUN 25th July", "Molly, CNBRA", "https://www.google.com"),
    new GigItem("SAT 7th August", "Nineteen Ten, ADELAIDE", "https://www.google.com"),
    new GigItem("SUN 8th August", "Nineteen Ten, ADELAIDE", "https://www.google.com"),
];

interface IGigListProps {
    id?: string;
}

const GigList = (props: IGigListProps) => {
    const { id } = props;

    return (
        <StyledGigListDiv id={id}>
            <StyledListDiv>
                <GigListItemHeader />
                {gigList.map((item, i) =>
                    <GigListItem
                        key={i}
                        date={item.date}
                        text={item.text}
                        url={item.url}
                    />)}
            </StyledListDiv>
        </StyledGigListDiv>
    );
}

export default GigList;