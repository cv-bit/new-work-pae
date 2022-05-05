const handleSave = () => {
    console.log('save')
    console.log(document.querySelectorAll('#pageObj-box'))
    console.log(document.querySelectorAll('#pageObj-text'))
    console.log(document.querySelectorAll('#pageObj-image'))
    console.log(document.querySelectorAll('#pageObj-video'))
}

const handleDrag = (e, div) => {
    
    div.style.left =  e.screenX + "px"
    div.style.top = e.screenY + "px"
}

const handleDrop = (e, div) => {
    console.log(e)
    div.style.left =  e.offsetX + "px"
    div.style.top = e.offsetY + "px"
    
}

const createBox = () => {
    let page = document.getElementById('page')
    console.log("invisible box")
    let div = document.createElement('div')
    div.id = 'pageObj-box'
    div.draggable = true
    div.ondrag = (e) => handleDrag(e, div)
    div.ondragend = (e) => handleDrop(e, div)
    page.appendChild(div)
}

const createText = () => {
    const handleText = (e, p) => {
        p.innerHTML = e.target.value
    }

    console.log('insert text')
    let page = document.getElementById('page')
    let div = document.createElement('div')
    let input = document.createElement('input')
    let p = document.createElement('p')
    input.style.width = "100%"
    input.style.height = "25px"
    input.setAttribute('type', 'textbox')
    input.onchange = (e) => handleText(e, p)
    p.style.color ='#000'
    p.style.opacity = 1
    div.append(input)
    div.appendChild(p)
    div.id = 'pageObj-text'
    div.draggable = true
    div.ondrag = (e) => handleDrag(e, div)
    div.ondragstop = (e) => handleDrop(e, div)

    page.appendChild(div)
}
const handleImage = () => {
    console.log('insert image')
    let div = document.createElement('div')
    div.id = 'pageObj-image'
    div.draggable = true
    let img = document.createElement('img')
    img.setAttribute('alt', 'testing image')
    img.setAttribute('src', 'https://source.unsplash.com/random')
    img.style.width = '90%'
    img.style.height = '90%'
    div.appendChild(img)
    div.ondrag = (e) => handleDrag(e, div)
    div.ondragend = (e) => handleDrop(e, div)
    document.body.appendChild(div)
}

const handleVideo = () => {
    console.log('insert video')
    let div = document.createElement('div')
    div.id = 'pageObj-video'
    div.draggable = true
    let video = document.createElement('video')
    video.setAttribute('controls', 'true')
    div.appendChild(video)
    div.ondrag = (e) => handleDrag(e, div)
    div.ondragend = (e) => handleDrop(e, div)
    document.body.appendChild(div)
}

const editDetails = () => {
    console.log('edit details')
}

const ToolFunctions = {
    handleSave,
    createBox,
    createText,
    handleImage,
    handleVideo,
    editDetails,
}

export default ToolFunctions