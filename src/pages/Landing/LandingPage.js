import {StyledLandingPage} from './LandingPage.styled'
import { Container } from '../../components/Container.styled'
import { Button } from '../../components/buttons/Button.styled'
import { FlexDiv } from '../../components/Flex.styled'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <StyledLandingPage>
            <FlexDiv>
                <h1>Landing Page</h1>
                <Button>
                    <Link to="/samplereader">Go to Sample Reader</Link>
                </Button>
                <Button>
                    <Link to="/sampleauthor">Go to Sample Authoring</Link>
                </Button>
            </FlexDiv>
        </StyledLandingPage>
    )
}