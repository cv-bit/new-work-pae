import { StyledReader } from "./Reader.styled";
import Page from "./readercomponents/Page";
import SideMenu from "./readercomponents/SideMenu";
import { FiSave } from "react-icons/fi";
import ToolFunctions from './readerFunctions/ToolFunctions'

export default function Reader() {

    const Pages = [1]

    return (
        <StyledReader>
            <SideMenu createBox={ToolFunctions.createBox} createText={ToolFunctions.createText} handleImage={ToolFunctions.handleImage} handleVideo={ToolFunctions.handleVideo} editDetails={ToolFunctions.editDetails} />
            {Pages.map((page, index) => {
                return (
                    <Page key={index} page={page}/>
                )
            })}
            <FiSave onClick={() => ToolFunctions.handleSave()} style={{fontSize: '3rem', margin: '10px', cursor: 'pointer'}} />
        </StyledReader>
    )
}