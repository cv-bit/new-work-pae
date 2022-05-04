import { StyledSideMenu } from "./SideMenu.styled";
import { Tool } from "../../buttons/Tool.styled";
import '../../../App.css'

export default function SideMenu({...props}) {

    return (
        <StyledSideMenu>
            <h3>Tools</h3>
            <Tool onClick={() => props.createBox()}>Box</Tool>
            <Tool onClick={() => props.createText()}>Text</Tool>
            <Tool onClick={() => props.handleImage()}>Image</Tool>
            <Tool onClick={() => props.handleVideo()}>Video</Tool>
            <Tool onClick={() => props.editDetails()}>Details</Tool>
        </StyledSideMenu>
    )
}