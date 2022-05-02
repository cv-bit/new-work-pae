import styled from "styled-components"

export const StyledFooter = styled.div`
    width: 100vw;
    background-color: ${({theme}) => theme.colors.footer};
    padding: 25px;
    position: sticky;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        color: #fff;
        margin: 0;
        text-align: center;
        padding: 0 25px;
    }

    h3 {
        color: #fff;
        margin: 0 15px;
        cursor: pointer;
        border: 1px solid #fff;
        padding: 5px 10px;
        border-radius: 5px;
    }
`