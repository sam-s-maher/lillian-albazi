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
    dayName: string;
    text: string;
    url?: string;

    constructor(date: string, dayName: string, text: string, url?: string) {
        this.date = date;
        this.dayName = dayName;
        this.text = text;
        this.url = url;
    }
}

const gigList: GigItem[] = [
    new GigItem("26th June", "SAT", "Jazzlab, VIC", null),
    new GigItem("4th July", "SUN", "Brisbane Jazz Club, QLD", null),
    new GigItem("9th July", "FRI", "The Wharf, TAS", null),
    new GigItem("10th July", "SAT", "Pablo's Cocktails and Dreams, TAS", null),
    new GigItem("11th July", "SUN", "MONA, TAS", "https://jazzlab.club/1753-lillian-albazi-after-image-album-launch"), 
    new GigItem("16th July", "FRI", "Bendigo Bank Theatre, VIC", null),
    new GigItem("23rd July", "FRI", "National Press Club, ACT", null),
    new GigItem("24th July", "SAT", "Music Lounge, Merrigong Theatre, NSW", null),
    new GigItem("25th July", "SUN", "Molly, ACT", null),
    new GigItem("7th August", "SAT", "Nineteen Ten, SA", "https://www.eventbrite.com.au/e/lillian-albazi-after-image-album-tour-tickets-149809260531"),
    new GigItem("8th August", "SUN", "Nineteen Ten, SA", "https://www.eventbrite.com.au/e/lillian-albazi-after-image-album-tour-tickets-149809260531"),
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
                        dayName={item.dayName}
                        text={item.text}
                        url={item.url}
                    />)}
            </StyledListDiv>
        </StyledGigListDiv>
    );
}

export default GigList;