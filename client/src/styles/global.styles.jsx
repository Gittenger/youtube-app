import { createGlobalStyle } from 'styled-components'

import fontFaces from './typography/fontFaces'

const GlobalStyles = createGlobalStyle`
${fontFaces}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    width: 100vw;
    overflow-x: hidden;
}

body {
    ${({ theme: { styles } }) => styles.flexCenterCol};
	${({ theme: { styles } }) => styles.scrollBarStyles};
    
    font-size: 1.8rem;
    max-width: 100%;
    padding-right: 10px;
}

#root {
	${({ theme: { styles } }) => styles.flexCenterCol};
    
    /* set font vars in root */
    ${({ theme: { typography } }) => typography.fontVars.fontMain};
    max-width: 100%;
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
`

export default GlobalStyles
