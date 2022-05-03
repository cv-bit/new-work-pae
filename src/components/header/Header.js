import { StyledHeader, Nav } from "./Header.styled";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <StyledHeader>
            <Nav>
                <Link to="">PAE</Link>
            </Nav>
        </StyledHeader>
    )
}