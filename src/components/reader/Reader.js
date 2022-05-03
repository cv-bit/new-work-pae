import { StyledReader } from "./Reader.styled";
import ReaderPage from './ReaderPage'

export default function Page() {

    const Pages = [1]

    return (
        <StyledReader>
            {Pages.map((page, index) => {
                return (
                    "hello"
                )
            })}
        </StyledReader>
    )
}