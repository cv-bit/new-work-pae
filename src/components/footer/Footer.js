import { StyledFooter } from "./Footer.styled";
import {FiSettings} from 'react-icons/fi'

export default function Footer() {
    return (
        <StyledFooter>
            <h3>Prev</h3>
            <h1>Page # </h1>
            <h3>Next</h3>
            <FiSettings style={{color: "#fff", fontSize: '1.5rem', cursor: 'pointer', margin: '0 10px'}} />
        </StyledFooter>
    )
}