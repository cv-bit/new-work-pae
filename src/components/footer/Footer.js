import { StyledFooter } from "./Footer.styled";
import {FiSettings} from 'react-icons/fi'

export default function Footer() {
    return (
        <StyledFooter>
            <h3>Previous</h3>
            <h1>Controls</h1>
            <h3>Next</h3>
            <FiSettings style={{color: "#fff", fontSize: '1.5rem', cursor: 'pointer'}} />
        </StyledFooter>
    )
}