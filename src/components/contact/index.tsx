import React, { useState, useEffect }  from "react";
import Styled from "styled-components";
import { DataStore } from "@aws-amplify/datastore";

import { css } from "styles/styled-css";
import { styles } from "styles/variables";
import Heading from "components/heading";
import SocialsList from "components/socials-list";
import ContactBackground from "images/contact-background-1024.jpg";
import { Friend } from "../../models";

const StyledContactBackgroundDiv = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.xxxl} 0 ${styles.padding.l};
    background: ${styles.colours.theme.primaryBase} url(${ContactBackground}) no-repeat center;
    color: ${styles.colours.theme.backgroundText};
    background-size: cover;
`;

const StyledContactDiv = Styled.div`
    ${css.centredFlexbox};
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    max-width: ${styles.mediaSize.tablet};
    justify-content: space-between;
    @media screen and (max-width: ${styles.mediaSize.tablet}) {
        flex-direction: column;
        align-items: center;
    }
`;

interface IStyledSectionDivProps {
    flexOrder: number;
    tabletFlexOrder?: number;
}

const StyledSectionDiv = Styled.div`
    ${css.centredFlexbox};
    /* flex: 1 1 0; */
    width: 250px;
    @media screen and (max-width: ${styles.mediaSize.tablet}) {
        order: ${(props: IStyledSectionDivProps) => (props.tabletFlexOrder ||  props.flexOrder)};
        max-width: 80%;
    }
`;

const StyledContentDiv = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.m} 0;
`;

const StyledHeadingDiv = Styled.div`
    ${css.centredFlexbox};
    flex-direction: row;
    padding: ${styles.padding.m} 0 0;
    p {
        white-space: pre;
    }
`;

const StyledEmailDiv = Styled.div`
    font-size: 16px;
    text-align: center;
    line-height: 2rem;
`;

const FriendsUl = Styled.ul`
    ${css.centredFlexbox};
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const FriendsLi = Styled.li`
    ${css.centredFlexbox};
    margin: ${styles.padding.xxxs};
    font-size: ${styles.fontSize.small};
    :hover {
        color: ${styles.colours.theme.primaryHighlight};
    }
`;

interface IContactProps {
    id?: string;
}

interface IContactState {
    loading: boolean;
    friendList: Friend[];
}

const Contact = (props: IContactProps) => {
    const [ state, setState ] = useState<IContactState>({ loading: true, friendList: [] })
    const { id } = props;

    async function getFriends() {
        const friends = await DataStore.query(Friend);
        
        const friendList = friends.sort((a, b) => a.Index > b.Index ? 1 : -1);

        setState({ loading: false, friendList })
    }

    useEffect(() => {
        const subscription = DataStore.observe(Friend).subscribe(() => getFriends())

        getFriends();

        return () => {
            subscription.unsubscribe()
        }
    }, [state]);

    return (
        <StyledContactBackgroundDiv id={id}>
            <StyledContactDiv>
                <StyledSectionDiv flexOrder={2} tabletFlexOrder={-1}>
                    <StyledHeadingDiv>
                        <Heading text={"Social"} type={"h3"} style={"h3"} />
                    </StyledHeadingDiv>
                    <StyledContentDiv>
                        <SocialsList />
                    </StyledContentDiv>
                </StyledSectionDiv>
                <StyledSectionDiv flexOrder={3}>
                    <StyledHeadingDiv>
                        <Heading text={"Friends"} type={"h3"} style={"h3"} />
                    </StyledHeadingDiv>
                    <StyledContentDiv>
                    {state.loading ? (
                        <p>finding friends...</p>
                    ) : (
                        <FriendsUl>
                            {state.friendList.map((item, i) => <FriendsLi key={i}><a href={item.Url}>{item.Name}</a></FriendsLi>)}
                        </FriendsUl>
                    )}
                    </StyledContentDiv>
                </StyledSectionDiv>
            </StyledContactDiv>
        </StyledContactBackgroundDiv>
    )
};

export default Contact;