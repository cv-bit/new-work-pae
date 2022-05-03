import styled from "styled-components";

export const StyledSideMenu = styled.div`
    position: absolute;
    left: 0;
    height: 100%;
    width: 100px;
    background-color: ${({theme}) => theme.colors.header};
`