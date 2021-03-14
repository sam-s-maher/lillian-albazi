import React from "react";
import Styled from "styled-components";

import { css } from "styles/styled-css";
import { styles } from "styles/variables";
import Heading from "components/heading";
import SocialsList from "components/socials-list";
import { SocialsUrls } from "components/socials-list/socials-urls";

const StyledContactBackgroundDiv = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.xxxl} 0 ${styles.padding.l};
    background: ${styles.colours.theme.primaryBase} url("../rsc/images/contact-background-960.jpg") no-repeat center;
    color: ${styles.colours.theme.backgroundText};
    background-size: cover;
`;

const StyledContactDiv = Styled.div`
    ${css.centredFlexbox};
    flex-direction: row;
    align-items: flex-start;
    max-width: 768px;
`;

const StyledSectionDiv = Styled.div`
    ${css.centredFlexbox};
    flex: 1 1 0;
    padding: 0 ${styles.padding.xxs};
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
`;

interface IContactProps {
    id?: string;
}

const Contact = (props: IContactProps) => {
    const { id } = props;

    return (
        <StyledContactBackgroundDiv id={id}>
            <StyledContactDiv>
                <StyledSectionDiv>
                    <StyledHeadingDiv>
                        <Heading text={"Bookings"} type={"h3"} style={"h3"}/>
                    </StyledHeadingDiv>
                    <StyledContentDiv>
                        <StyledEmailDiv>
                            For bookings email me at <a href={"mailto:" + SocialsUrls.Email} target="_blank"><u>lillianalbazi@gmail.com</u></a>.
                        </StyledEmailDiv>
                    </StyledContentDiv>
                </StyledSectionDiv>
                <StyledSectionDiv>
                    <StyledHeadingDiv>
                        <Heading text={"Social"} type={"h3"} style={"h3"} />
                    </StyledHeadingDiv>
                    <StyledContentDiv>
                        <SocialsList />
                    </StyledContentDiv>
                </StyledSectionDiv>
                <StyledSectionDiv>
                    <StyledHeadingDiv>
                        <Heading text={"Friends"} type={"h3"} style={"h3"} />
                    </StyledHeadingDiv>
                    <StyledContentDiv>
                        <FriendsUl>
                            <FriendsLi>Alima Parkes</FriendsLi>
                            <FriendsLi>Aisling Adam</FriendsLi>
                            <FriendsLi>Nisha Mccann</FriendsLi>
                            <FriendsLi>Mica Knapp</FriendsLi>
                            <FriendsLi>Jevan Garett</FriendsLi>
                        </FriendsUl>
                    </StyledContentDiv>
                </StyledSectionDiv>
            </StyledContactDiv>
        </StyledContactBackgroundDiv>
    )
};

export default Contact;