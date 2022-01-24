let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
let lineColor = 'black';
let lineWidth = 1;
let isMouseDown = false
let mouseX = 0
let mouseY = 0

document.getElementById('color').addEventListener('change', function(){
    lineColor = this.value;
})

document.getElementById('range').addEventListener('change', function(){
    lineWidth = this.value;
})

document.getElementById('save').addEventListener('click', function(){
    this.href = canvas.toDataURL();
})

canvas.addEventListener('mousemove', function(event){

    if (isMouseDown) {
        let x = event.offsetX;
        let y = event.offsetY;
        draw(mouseX, mouseY, x, y)
        mouseX = x;
        mouseY = y;

    }

})
window.addEventListener('mouseup', function(event){
    if (event.button === 0) {
        isMouseDown = false;
    }
})

canvas.addEventListener('mousedown', function(event){
    if (event.button === 0) {
        mouseX = event.offsetX;
        mouseY = event.offsetY;
        isMouseDown = true;
    }
})

function draw(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = lineColor
    ctx.lineCap = "round"
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.closePath()
}