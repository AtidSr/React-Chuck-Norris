import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
	}
	body {
        font-family: 'Noto Sans JP', sans-serif;
	}

    p {
        line-height: 200%;
    }

    label {
        font-style:inherit;
        font-size: 1rem;
        padding: 0 1rem;
        font-weight: 100;
        text-transform: uppercase;        
    }

    input {
        font-size: 1rem;
        height: 2rem;
        font-style:inherit;
        font-weight: 400;
        border: none;
    }
    input:focus {
        outline: none;
    }

    input[type=select] {
        font-weight: 900;
    }

    button {
        font-style:inherit;
        padding: .5rem;
        margin-left: 1rem;
        text-transform: uppercase;
    }
`

export default GlobalStyles
