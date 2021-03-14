import { createGlobalStyle } from "styled-components";
import { styles } from "styles/variables";

export const StyledFonts = createGlobalStyle`
    @font-face {
        font-family: ${styles.fontFamily.lora};
        src: local(${styles.fontFamily.lora}),
        url(fonts/lora/Lora-Regular.ttf) format('truetype');
        font-weight: ${styles.fontWeight.regular};
        font-style: normal;
    }

    @font-face {
        font-family: ${styles.fontFamily.lora};
        src: local(${styles.fontFamily.lora}),
        url(fonts/lora/Lora-Bold.ttf) format('truetype');
        font-weight: ${styles.fontWeight.bold};
        font-style: normal;
    }

    @font-face {
        font-family: ${styles.fontFamily.scheherazade};
        src: local(${styles.fontFamily.scheherazade}),
        url(fonts/scheheradaze/Scheheradaze-Regular.ttf) format('truetype');
        font-weight: ${styles.fontWeight.regular};
        font-style: normal;
    }
`;