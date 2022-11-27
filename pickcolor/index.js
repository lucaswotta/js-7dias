
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
const nameColor = document.querySelector('.color')

btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    nameColor.textContent = colors[randomColor]
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}

