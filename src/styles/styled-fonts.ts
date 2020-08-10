import { createGlobalStyle } from "styled-components";

import { styles } from "styles/variables";
 
const fontFilePath = "../../rsc/fonts/";

export const StyledFonts = createGlobalStyle`
    @font-face {
        font-family: ${styles.fontFamily.lora};
        src: local(${styles.fontFamily.lora}),
        url(${fontFilePath}/lora/Lora-Regular.ttf) format('truetype');
        font-weight: ${styles.fontWeight.regular};
        font-style: normal;
    }

    @font-face {
        font-family: ${styles.fontFamily.lora};
        src: local(${styles.fontFamily.lora}),
        url(${fontFilePath}/lora/Lora-Bold.ttf) format('truetype');
        font-weight: ${styles.fontWeight.bold};
        font-style: normal;
    }

    @font-face {
        font-family: ${styles.fontFamily.roboto};
        src: local(${styles.fontFamily.roboto}),
        url(${fontFilePath}/roboto/Roboto-Regular.ttf) format('truetype');
        font-weight: ${styles.fontWeight.regular};
        font-style: normal;
    }
`;