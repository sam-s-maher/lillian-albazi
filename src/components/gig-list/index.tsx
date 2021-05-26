import React, { useState, useEffect }  from "react";
import Styled from "styled-components";
import { DataStore } from "@aws-amplify/datastore";
import { Gig } from "../../models";
import moment, { Moment } from 'moment';

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

interface GigDetails {
    gig: Gig;
    moment: Moment;
    dayName: string;
    dateName: string;
}

interface IGigListProps {
    id?: string;
}

interface IGigListState {
    loading: boolean;
    gigDetails: GigDetails[];
}

const GigList = (props: IGigListProps) => {
    const [ state, setState ] = useState<IGigListState>({ loading: true, gigDetails: [] })
    const { id } = props;

    async function getGigs() {
        const gigs = await DataStore.query(Gig);
        
        const gigDetails: GigDetails[] = gigs.map(function(gig) {
            let gigMoment = moment(gig.DateTime)
            return {
                gig: gig,
                moment: gigMoment,
                dayName: gigMoment.format('ddd').toUpperCase(),
                dateName: gigMoment.format('Do MMMM'),
            }
        }).sort((a, b) => a.moment.isAfter(b.moment) ? 1 : -1);

        setState({ loading: false, gigDetails })
    }

    useEffect(() => {
        const subscription = DataStore.observe(Gig).subscribe(() => getGigs())

        getGigs();

        return () => {
            subscription.unsubscribe()
        }
    }, [state]);

    return (
        <StyledGigListDiv id={id}>
            {state.loading ? (
                    <p>loading</p>
                ) : (
                    <StyledListDiv>
                    <GigListItemHeader />
                    {state.gigDetails.map((item, i) =>
                        <GigListItem
                            key={i}
                            date={item.dateName}
                            dayName={item.dayName}
                            text={item.gig.Location}
                            url={item.gig.Url}
                        />)}
                    </StyledListDiv>
                )}
        </StyledGigListDiv>
    );
}

export default GigList;