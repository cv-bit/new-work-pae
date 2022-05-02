import styled from "styled-components";

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700px;
    padding: 10px 40px;
    background-color: ${({bg}) => bg || '#fff'};
    color: ${({color}) => color || "#333"};
    margin: 15px;

    a {
        color: #333;
        text-decoration: none;
        font-weight: 600;
    }

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`