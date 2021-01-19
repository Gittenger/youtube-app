import { createGlobalStyle } from "styled-components";

import fontFaces from "./typography/fontFaces";

const GlobalStyles = createGlobalStyle`
${fontFaces}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
	${({ theme: { css } }) => css.flexCenterCol};
    font-size: 1.8rem;
    width: 100vw;
}

#root {
	${({ theme: { css } }) => css.flexCenterCol};
    
    /* set font vars in root */
    ${({ theme: { typography } }) => typography.fontVars.fontMain};
}

/* set shared typography styles */
  ${({ theme: { typography } }) => typography.sharedStyles};

a {
    text-decoration: none;
}

a:link,
a:visited{
    color: unset;
}

ul, li {
    list-style: none;
}

button {
    font-family: inherit;
}
`;

export default GlobalStyles;
