import React from "react";
import Styled from "styled-components";

import { css } from "styles/styled-css";
import { styles } from "styles/variables";
import Heading from "components/heading";
import SocialsList from "components/socials-list";
import Friends from "components/friends";

const StyledContactDiv = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.xxxl} 0 ${styles.padding.l};
    background: ${styles.colours.theme.primaryBase} url("../rsc/images/contact-background-960.jpg") no-repeat center;
    background-size: cover;
    color: ${styles.colours.theme.backgroundText};
`;

const EmailDiv = Styled.div`
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

const SocialsListDiv = Styled.div`
    padding: ${styles.padding.m} 0;
`;

interface IContactProps {
    id?: string;
}

const Contact = (props: IContactProps) => {
    const { id } = props;

    return (
        <StyledContactDiv id={id}>
            <div>
                <Heading text={"Bookings"} type={"h3"} style={"h3"}/>
            </div>
            <EmailDiv>
                <p>For bookings email me at <u>lillianalbazi@gmail.com</u>.</p>
            </EmailDiv>
            <StyledHeadingDiv>
                <Heading text={"Social"} type={"h3"} style={"h3"} />
            </StyledHeadingDiv>
            <SocialsListDiv>
                <SocialsList />
            </SocialsListDiv>
            <Friends />
        </StyledContactDiv>
    )
};

export default Contact;