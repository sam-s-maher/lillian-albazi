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
        font-family: ${styles.fontFamily.scheherazade};
        src: local(${styles.fontFamily.scheherazade}),
        url(${fontFilePath}/scheheradaze/Scheheradaze-Regular.ttf) format('truetype');
        font-weight: ${styles.fontWeight.regular};
        font-style: normal;
    }
`;