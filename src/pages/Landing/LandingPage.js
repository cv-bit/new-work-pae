import {StyledLandingPage} from './LandingPage.styled'
import { FlexDiv } from '../../components/Flex.styled'
import BookCard from '../books/BookCard'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <StyledLandingPage>
            <h1>view book</h1>
            <FlexDiv>
                <Link to="/author-tool"><BookCard /></Link>
            </FlexDiv>
        </StyledLandingPage>
    )
}