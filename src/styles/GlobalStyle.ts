import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--white);
    }

    html, border-style, #root{
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
    }

    *, button, input{
        border: 0;
        background: none;
        font-family: -apple-system, system-ui, sans-serif;
    }
    
    html{
        background: var(--primary);
    }
    
    :root{
        --primary: #000;
        --secondary: #15181C; 
        --search: #202327;
        --white: #d9d9d9;
        --gray: #7A7A7A;
        --outline: #2f3336;
        --retweet: #00c06b;
        --like: #e8265e;
        --twitter: #33a1f2;
        --twitter-dark-hover: #011017;
        --twiter-light-hover: #2c8ed6;
    }
`