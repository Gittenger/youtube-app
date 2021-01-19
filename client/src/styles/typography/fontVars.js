import { css } from "styled-components";

import fontsIndex from "../../assets/fonts/index";
const { yuseiMagic, oswald } = fontsIndex;

export const fontVars = {
	fontMain: css`
		--fontMain: "${yuseiMagic.name}", sans-serif;
		--fontHeading: "${oswald.name}", sans-serif;
	`,
};

export default fontVars;
