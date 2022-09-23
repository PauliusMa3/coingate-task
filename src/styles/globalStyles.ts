import { createGlobalStyle } from 'styled-components';
import { breakpoints } from './constants';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    :root {
        --space-unit: 1rem;
        --space-xxs: calc(0.25 * var(--space-unit));
        --space-xs: calc(0.5 * var(--space-unit));
        --space-sm: calc(0.75 * var(--space-unit));
        --space-md: calc(1.6 * var(--space-unit));
        --space-lg: calc(2 * var(--space-unit));
        --space-xl: calc(3.25 * var(--space-unit));
        --space-xxl: calc(5.25 * var(--space-unit));


        --box-shadow-offset-x: 0px;
        --box-shadow-offset-y: 5px;
        --box-shadow-blur: 11px;
        --box-shadow-color: rgba(29, 0, 62, 0.07);


        --image-card-width: 227px;
        --image-card-height: 147px;

        --main-card-width: 26.3rem;
        --main-card-height: 17rem;

        @media screen and (max-width: ${breakpoints.xs}) {
		    --image-card-width: 147px;
            --image-card-height: 93px;
		}
    }

    html {
        font-size: 62.5%;
        
        --max-width-page: 1210px;

        --color-background-primary: #EEF6FD;
        --color-white: #FFFFFF;
        --color-black:#000000;
        --color-text: #4B546D;
        --color-text-label: #3A3A3A;
        --color-subtle-text-label: #97B6CC;
        --color-green: #16DFB5;
        --color-gray-500: #7F88A0;
        --color-gray-600: #5F5F5F;
        --color-gray-700: #4B546D;
        --color-gray-900: #11193B;

        --box-shadow-primary: 0px 5px 11px rgba(29, 0, 62, 0.07);
    }

    html,
    body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        font-family: 'Archivo', sans-serif;
    }

    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }

    input,
    button,
    textarea,
    select,
    small {
        font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

    h1 {
        font-weight: 600;
        font-size: 10rem;
        line-height: 108%;
        letter-spacing: 0.1em;
    }

    h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 115%;
        color: var(--color-gray-900);

        @media screen and (max-width: ${breakpoints.md}) {
			font-size: 3rem;
		}
    }

    h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 115%;
        color: var(--color-subtle-text-label);
        text-transform: uppercase;
    }

    p, span, summary {
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 160%;
        color: var(---color-text);
    }

    a,
    a:hover,
    a:focus,
    a:active {
        text-decoration: none;
        cursor: pointer;
    }

    button {
        border: none;
        font-size: 2.4rem;
        line-height: 140%;
        font-weight: 500;
        color: inherit;

        @media (pointer: coarse) {
            min-height: 4.4rem;
        }
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    #__next {
        width: 100%;
        height: 100%;
    }

    #root,
    #__next {
        isolation: isolate;
    }
`;
