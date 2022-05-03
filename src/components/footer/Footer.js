import { StyledFooter } from "./Footer.styled";
import {FiSettings} from 'react-icons/fi'

export default function Footer() {

    const handleSettings = () => {
        console.log('display settings')
    }

    const handlePrev = () => {
        console.log('previous page')
    }

    const handleNext = () => {
        console.log('next page')
    }

    return (
        <StyledFooter>
            <h3 onClick={() => handlePrev()}>Prev</h3>
            <h1>Page # </h1>
            <h3 onClick={() => handleNext()}>Next</h3>
            <FiSettings onClick={() => handleSettings()} style={{color: "#fff", fontSize: '1.5rem', cursor: 'pointer', margin: '0 10px'}} />
        </StyledFooter>
    )
}