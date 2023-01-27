import styled from 'styled-components';

interface ButtonProps{
    outlined?: boolean;
}

export const Button = styled.button<ButtonProps>`
    background: ${props => props.outlined ? "transparent" : "var(--twitter)"};
    color: ${props => props.outlined ? "var(--twitter)" : "var(--white)" } ;
    border: ${props => props.outlined ? "1px solid var(--twitter)" : "none"};

    border-radius: 25px;
    padding: 16px;

    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    outline: 0;

    &:hover{
        background: ${props => props.outlined ? "var(--twitter-dark-hover)" : "var(--twitter-light-hover)"};
    }

`