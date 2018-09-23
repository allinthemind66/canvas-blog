// GETTING OUT CANVAS ELEMENT AND SETTING THE CONTEXT
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d")


// //THIS IS A SQUARE
// context.fillStyle = "red";
// context.fillRect(10, 100, 50, 50)
//
// //THIS IS A RECTANGLE
// context.fillStyle = "blue";
// context.fillRect(10, 10, 300, 100);


// //SINGLE LINE
// context.beginPath();
// context.moveTo(10, 10);
// context.lineTo(90, 10);
// context.stroke();


//TRIANLGE
context.beginPath();
context.moveTo(50, 10);
context.lineTo(10, 70);
context.lineTo(90, 70);
context.fill()
