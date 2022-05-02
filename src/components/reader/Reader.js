import { StyledReader } from "./Reader.styled";
import ReaderPage from './ReaderPage'

export default function Page() {

    const Pages = [1]

    return (
        <StyledReader>
            {Pages.map((page, index) => {
                return (
                    <ReaderPage key={index} page={page}/>
                )
            })}
        </StyledReader>
    )
}