import { StyledSideMenu } from "./SideMenu.styled";
import { Tool } from "../../buttons/Tool.styled";
import '../../../App.css'

export default function SideMenu() {

    const createBox = () => {
        console.log("invisible box")
        let div = document.createElement('div')
        div.id = 'pageObj-box'
        div.draggable = true
        document.body.appendChild(div)
    }
    const createText = () => {
        console.log('insert text')
        let div = document.createElement('div')
        div.id = 'pageObj-text'
        div.draggable = true
        document.body.appendChild(div)
    }
    const handleImage = () => {
        console.log('insert image')
        let div = document.createElement('div')
        div.id = 'pageObj-image'
        div.draggable = true
        document.body.appendChild(div)
    }

    const handleVideo = () => {
        console.log('insert video')
        let div = document.createElement('div')
        div.id = 'pageObj-video'
        div.draggable = true
        document.body.appendChild(div)
    }

    const editDetails = () => {
        console.log('edit details')
    }

    return (
        <StyledSideMenu>
            <h3>Tools</h3>
            <Tool onClick={() => createBox()}>Box</Tool>
            <Tool onClick={() => createText()}>Text</Tool>
            <Tool onClick={() => handleImage()}>Image</Tool>
            <Tool onClick={() => handleVideo()}>Video</Tool>
            <Tool onClick={() => editDetails()}>Details</Tool>
        </StyledSideMenu>
    )
}