import { StyledReader } from "./Reader.styled";
import ReaderPage from './ReaderPage'

export default function Page() {

    const Pages = [1,2,3,4,5,6,7]

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