import { createGlobalStyle } from "styled-components";
import { styles } from "styles/variables";

import LoraRegular from "fonts/lora/Lora-Regular.ttf";
import LoraBold from "fonts/lora/Lora-Bold.ttf";
import ScheherazadeRegular from "fonts/scheherazade/Scheherazade-Regular.ttf";

export const StyledFonts = createGlobalStyle`
    @font-face {
        font-family: ${styles.fontFamily.lora};
        src: local(${styles.fontFamily.lora}),
        url(${LoraRegular}) format('truetype');
        font-weight: ${styles.fontWeight.regular};
        font-style: normal;
    }

    @font-face {
        font-family: ${styles.fontFamily.lora};
        src: local(${styles.fontFamily.lora}),
        url(${LoraBold}) format('truetype');
        font-weight: ${styles.fontWeight.bold};
        font-style: normal;
    }

    @font-face {
        font-family: ${styles.fontFamily.scheherazade};
        src: local(${styles.fontFamily.scheherazade}),
        url(${ScheherazadeRegular}) format('truetype');
        font-weight: ${styles.fontWeight.regular};
        font-style: normal;
    }
`;