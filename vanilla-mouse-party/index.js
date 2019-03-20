const mousePosition = {
    x : 0,
    y : 0,
}
var drawId
const getRandomNumber = function(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
};

window.addEventListener("mousemove", function(event) {
    mousePosition.x = event.pageX;
    mousePosition.y = event.pageY;
});


function draw(){
    return setInterval(function(){ //setinterval is a built in js funciton that has a time after it
        const container = document.getElementById("wrap");
        const color = `background:rgb(${getRandomNumber(
            0,
            255
        )},${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)});`;
        const ballSize = getRandomNumber(10, 30);
        const size = `height:${ballSize}px; width:${ballSize}px;`;
        const left = `left:${getRandomNumber(
            mousePosition.x - ballSize,
            mousePosition.x
        )}px;`;
        const top = `top:${getRandomNumber(
            mousePosition.y - ballSize,
            mousePosition.y
        )}px; `;
        const style = `${left}${top}${color}${size}`;

        const ball=document.createElement("div");
            ball.classList.add("ball");
            ball.style=style;

            ball.addEventListener("animationend", function(event){
                event.target.remove();
            });

            container.appendChild(ball);
        }, 1); //sets time for ball refresh or how often we invoke the callback
}

window.addEventListener("mouseover", function() {
    drawId = draw()
});
window.addEventListener("mouseout", function(){
    clearInterval(drawID);
});
