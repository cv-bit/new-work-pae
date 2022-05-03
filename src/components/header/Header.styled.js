import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    padding: 10px 0;
    position: sticky;
    top: 0;

    a {
        color: #fff;
        margin: 0 0 0 15px;
        font-weight: 600;
        font-size: 1.5rem;
        text-decoration: none;
        border: 1px solid #fff;
        border-radius: 5px;
        padding: 5px;
    }
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: ${({theme}) => theme.mobile}){
        ${'' /* margin-bottom: 40px; */}
    }
`