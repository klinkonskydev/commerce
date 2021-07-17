const build = {
    open(){
        window.location.href = './building/building.html'
    }
}

function save(){
    let image = document.querySelector('#photo')
    let title = document.querySelector('#title')
    let description = document.querySelector('#description')

    image = image.src;
    title = title.textContent;
    description = description.textContent;
    let saved = `${image} ${title} ${description}`

    return saved
}