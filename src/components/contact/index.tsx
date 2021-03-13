import React from "react";
import Styled from "styled-components";

import { css } from "styles/styled-css";
import { styles } from "styles/variables";
import Heading from "components/heading";
import SocialsList from "components/socials-list";

const StyledContactDiv = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.m} 0 0;
    background-color: ${styles.colours.theme.backgroundBase};
    color: ${styles.colours.theme.backgroundText};
`;

const EmailDiv = Styled.div`
    padding: ${styles.padding.s} 0;
`;

const StyledHeadingDiv = Styled.div`
    ${css.centredFlexbox};
    flex-direction: row;
    padding: ${styles.padding.s} 0 0;
    p {
        white-space: pre;
    }
`;

const SocialsListDiv = Styled.div`
    padding: ${styles.padding.xs} 0;
`;

interface IContactProps {}

const Contact = (props: IContactProps) => {
    return (
        <StyledContactDiv>
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
        </StyledContactDiv>
    )
};

export default Contact;