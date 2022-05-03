import { StyledReader } from "./Reader.styled";
import Page from "./readercomponents/Page";
import SideMenu from "./readercomponents/SideMenu";

export default function Reader() {

    const Pages = [1]

    return (
        <StyledReader>
            <SideMenu />
            {Pages.map((page, index) => {
                return (
                    <Page key={index}/>
                )
            })}
        </StyledReader>
    )
}