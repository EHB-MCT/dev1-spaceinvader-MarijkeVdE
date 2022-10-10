"use strict";

alert("Draw your space invader here");

drawLine();


function drawLine(){
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

context.beginPath();
context.fillStyle = "#000000";
context.rect(0, 0, 300, 300);
context.fill(); 

// 2de lijn //

context.fillStyle = "#39FF14";

context.beginPath();
context.rect(25, 75, 50, 50);
context.fill();

context.beginPath();
context.rect(125, 75, 50, 50);
context.fill();

context.beginPath();
context.rect(225, 75, 50, 50);
context.fill();

// 4de lijn //

context.beginPath();
context.rect(25, 175, 50, 50);
context.fill();

context.beginPath();
context.rect(125, 175, 50, 50);
context.fill();

context.beginPath();
context.rect(225, 175, 50, 50);
context.fill();
// 5de lijn //

context.beginPath();
context.rect(75, 225, 50, 50);
context.fill();

context.beginPath();
context.rect(175, 225, 50, 50);
context.fill();
}