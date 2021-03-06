const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function(e){
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})

class Button{
    constructor(x,y, width,height,baseX){
        this.x = x;
        this.y= y;
        this.width = width;
        this.height = height;
        this.baseX =x;
    }
    update(){
        let directionX = 2.2;
        if ((mouse.x < this.x + this.width && mouse.x > this.x &&
             mouse.y< this.y + this.height &&mouse.y > this.y) &&
              (this.x > this.baseX - 50)){
                  //animate button to the left
                  this.x -= directionX;
                  this.width += directionX;

             } else if (this.x < this.baseX && this.width >200)
             {
                this.x += directionX
                this.width -= directionX
             }
    }
    draw(){
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    }
}

const buttons = [];
function createButtons(){
    for (let i = 0; i < 5; i++) {
        let topMargin = 160
        let buttonMargin = 5
        let x = 150
        let y = topMargin + ((50 + buttonMargin) * i);   
        let height = 50;
        let width = 200;
        buttons.push(new Button(x, y, width,height))
    }
}
createButtons()

function drawButtons(){
    for (let i =0; i < bottons.length; i++){
        buttons[i].update();
        buttons[i].draw();
    }
}

//handle water particles

//animate canvas
function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    drawButtons()
    requestAnimationFrame(animate);
}
animate()

window.addEventListener('resize', function(e){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})