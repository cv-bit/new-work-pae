import styled from "styled-components";

export const Tool = styled.button`
    background-color: ${({theme}) => theme.colors.header};
    color: #fff;
    width: 80px;
    padding: 5px;
    margin: 5px;
    border: 1px solid #fff;
    cursor: pointer;
`