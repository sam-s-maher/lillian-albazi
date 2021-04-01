import React from "react";
import Styled from "styled-components";

import { css } from "styles/styled-css";
import { styles } from "styles/variables";
import Heading from "components/heading";
import SocialsList from "components/socials-list";
// import { SocialsUrls } from "components/socials-list/socials-urls";
import ContactBackground from "images/contact-background-1024.jpg";

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
    max-width: 500px;
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
    flex: 1 1 0;
    padding: 0 ${styles.padding.xxs};
    max-width: 80%;
    @media screen and (max-width: ${styles.mediaSize.tablet}) {
        order: ${(props: IStyledSectionDivProps) => (props.tabletFlexOrder ||  props.flexOrder)};
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

const friendsList: any = {
    "Great ~ Falls": "https://greatfallsaus.bandcamp.com/",
    "Robert Albazi": "https://www.robertalbazi.com/",
    "Kade Brown": "https://kadebrown.bandcamp.com/album/frictions",
    "Shaun Rammers": "https://shaunrammers.net/",
    "Oscar Neyland": "https://www.oscarneylandmusic.com/",
    "Tom Allen-Graham": "https://tomallen-graham.bandcamp.com/",
    "Holly Moore": "https://www.hollymooremusic.com/about"
};

const friendsListItems = () => {
    return Object.keys(friendsList).map((key) => {
        const friendUrl = friendsList[key];
        return <FriendsLi key={key}><a href={friendUrl}>{key}</a></FriendsLi>;
    })
}

interface IContactProps {
    id?: string;
}

const Contact = (props: IContactProps) => {
    const { id } = props;

    return (
        <StyledContactBackgroundDiv id={id}>
            <StyledContactDiv>
                {/* <StyledSectionDiv flexOrder={1}>
                    <StyledHeadingDiv>
                        <Heading text={"Bookings"} type={"h3"} style={"h3"}/>
                    </StyledHeadingDiv>
                    <StyledContentDiv>
                        <StyledEmailDiv>
                            <a href={"mailto:" + SocialsUrls.Email} target="_blank"><u>albazi.music@gmail.com</u></a>
                        </StyledEmailDiv>
                    </StyledContentDiv>
                </StyledSectionDiv> */}
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
                        <FriendsUl>
                            {friendsListItems()}
                        </FriendsUl>
                    </StyledContentDiv>
                </StyledSectionDiv>
            </StyledContactDiv>
        </StyledContactBackgroundDiv>
    )
};

export default Contact;