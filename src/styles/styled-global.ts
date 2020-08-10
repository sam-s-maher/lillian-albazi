import { createGlobalStyle } from "styled-components";

import { styles } from "styles/variables";

export const StyledGlobal = createGlobalStyle`
    body {
        background-color: ${styles.colours.base.black};
        font-family: ${styles.fontFamily.lora};
        font-size: ${styles.fontSize.default};
    }`;