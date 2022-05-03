import { StyledSideMenu } from "./SideMenu.styled";
import { Tool } from "../../buttons/Tool.styled";

export default function SideMenu() {
    return (
        <StyledSideMenu>
            <Tool>Draw</Tool>
            <Tool>Text</Tool>
            <Tool>Image</Tool>
            <Tool>Video</Tool>
        </StyledSideMenu>
    )
}