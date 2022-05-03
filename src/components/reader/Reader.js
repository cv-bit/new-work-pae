import { StyledReader } from "./Reader.styled";
import Page from "./readercomponents/Page";
import SideMenu from "./readercomponents/SideMenu";
import { FiSave } from "react-icons/fi";

export default function Reader() {

    const Pages = [1]

    const handleSave = () => {
        console.log('save')
    }

    return (
        <StyledReader>
            <SideMenu />
            {Pages.map((page, index) => {
                return (
                    <Page key={index}/>
                )
            })}
            <FiSave onClick={() => handleSave()} style={{fontSize: '3rem', margin: '10px', cursor: 'pointer'}} />
        </StyledReader>
    )
}