const canvas = document.querySelector('canvas')

canvas.width = innerWidth
canvas.height = innerHeight

const ctx = canvas.getContext('2d')

window.addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

function init() {
    animate()
}

class Circle {
    constructor(x, y, radius, color, offset) {
        this.x      = x
        this.y      = y
        this.radius = radius
        this.color  = color
        this.offset = offset
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }

    update() {
        this.draw()
    }
}

// const circle = new Circle(canvas.width / 2, canvas.height /2 , 100, "blue")

let circles = []
setInterval(() => {
    circles = []
    for( let i = 0; i < 100; i++){
        circles.push(new Circle(-10, -10, 100, `hsl(${Math.random() * 255}, 100%, 60%)`, i * 0.01))
    }
    
    // console.log(circles.length)
}, 2000)





// console.log(circles)

let time = 0

function animate() {
    requestAnimationFrame(animate)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.01)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    circles.forEach((circle) => {
        circle.draw()
        // canvas.y = noise(time) 
        circle.x = noise(time + circle.offset + 20) * canvas.width
        circle.y = noise(time + circle.offset + 8) * canvas.height
    })
    // circle.draw()


    time += 0.007
}

init()

