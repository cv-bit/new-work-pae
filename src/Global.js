import { createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.15;
        margin: 0;
        min-width: 100vw;
    }

    p {
        opacity: 0.6;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }
`

export default GlobalStyles