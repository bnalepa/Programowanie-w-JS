//import { Square } from "./square.js";

class Square{
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    charactersLength = this.characters.length;
    speed = 0;
    constructor(canvas, color, size, dy, difficult) {
        this.canvas = canvas;
        this.dy = dy;
        this.color = color;
        this.size = size;
        this.ctx = canvas.getContext("2d");
        this.difficult = difficult;
        this.random();
        ctx.font = `${size/2}px Arial`;
    }

    move(){
        this.y += this.dy + this.speed;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size); 
        ctx.fillStyle = "black";
        ctx.fillText(this.letter, this.x + this.size*2/5 , this.y + this.size*2/3);    
        this.ctx.fill();
        this.ctx.closePath();
    }
    random()
    {
        this.letter = this.characters.charAt(Math.floor(Math.random() * this.charactersLength));
        this.x = this.size + Math.floor(Math.random() * (this.canvas.width - 2*this.size));
        this.y = 0;
        console.log(this.x)
    }

    
    endGame(raf){
        if (this.x + this.size > this.canvas.width
            || this.y + this.size > this.canvas.height){
            console.log("Game over");
            window.cancelAnimationFrame(raf);
            return true;
        }
    }
}

const canvas = document.getElementById("canvas");
const points = document.getElementsByTagName("points")[0];
const button = document.getElementsByTagName("button")[0];
let level = document.getElementById("level");
let ctx;
let square;
let raf;


function startGame(){
    level = parseInt(level.value);
    init();
    document.addEventListener("keydown", (e) => {
            check(e.key);        
      });
    
}
const squares = [];

button.addEventListener("click", startGame);

function check(e){
    let status = false;
    for(let square of squares)
    {
        if(e.toUpperCase() == square.letter)
        {
            let newPoints = parseFloat(points.innerHTML) + 1;
            points.innerHTML = newPoints;
            square.speed = parseInt(newPoints/10);
            square.random();
            status = true;
        } 
    }
    if(!status)
    points.innerHTML = parseFloat(points.innerHTML) - level;

        
}


function clear(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

function init(){
    ctx = canvas.getContext("2d");
    for(let i = 0; i< level; i++){
        squares[i] = new Square(canvas, "lightblue", 40, 2, level);   
    }
   
    raf = window.requestAnimationFrame(draw);
}

function draw(){
    clear();  
    for(let square of squares)
    {
        square.move();                                    //przesuniecie obiektu
        square.draw();                               //odrysowanie obiektu
        if(square.endGame(raf))
            ctx = null;
        }
    raf = window.requestAnimationFrame(draw);       //ponowne wywołanie funkcji draw przy kolejnym oodrysowaniu okna przeglądarki
}




