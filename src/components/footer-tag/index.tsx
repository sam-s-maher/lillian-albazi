import React from "react";
import Styled from "styled-components";

import { css } from "styles/styled-css";
import { styles } from "styles/variables";

const StyledContactDiv = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.xxxs} 0;
    background-color: ${styles.colours.theme.tertiaryBase};
    color: ${styles.colours.theme.tertiaryText};
`;

const StyledTagText = Styled.p`
    font-size: ${styles.fontSize.small};
`;

interface IFooterTagProps {}

const FooterTag = (props: IFooterTagProps) => {
    return (
        <StyledContactDiv>
            <StyledTagText>website by <a href="https://www.linkedin.com/in/samuelsmaher">Sam Maher</a></StyledTagText>
        </StyledContactDiv>
    )
};

export default FooterTag;