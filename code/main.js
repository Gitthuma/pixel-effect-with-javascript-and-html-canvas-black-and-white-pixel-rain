/*Bring image into the project*/

/*Create a constant myImage and set it to new Image method. This allow myImage to acces the image using the src property*/

const myImage = new Image();

/*Get image using the src propery. Use canvas.toDataURL to convert the image into a url string to avoid cross origin resource errors in some browsers when we scan the image with getImageData later.*/

/*Remove canvas.toDataURL. This will be included later.*/

myImage.src = '../images/disney-junior-T-O-T-S.jpg';

/*Add event listener to myImage. This listens for a load event and pass it to a call back function*/

/*Add code into event listener call back function*/

myImage.addEventListener('load', function() {

    /*Reference canvas using getElementById*/

const canvas = document.getElementById('canvas1');

/*Reference canvas context using getContext 2D. This is to give it access to all 2d drawing methods*/

const ctx = canvas.getContext('2d');

/*Set canvas width and height to be the same as those in css. This is to make sure the scaling is correct*/

canvas.width = 780;
canvas.height = 440;

/*Draw image on canvas using built-in html canvas method drawImage. The method will take five arguments: The first is the image we want to draw,the second and third arguments are the (x,y) cordinates of our drawing starting point and the fourth and fifth arguments are the drawing end points represented as canvas width and height.*/

ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

/*Create a simple particle system that will produce a set of falling particles to flow over the image.*/

/*Create a let variable and assign it an empty array. We use let here so that we can assign it to a new empty array later if we want to */

/*Create a constant variable to represent number of particles and assign it the number of particles*/

let particlesArray = [];
const numberOfParticles = 10000;

/*Create a JavaScript class called Particle(capital p). This will be used to create 10,000 similar particle data objects and push them inside particleArray from line 42*/

/*Add constructor method inside the Particle class. This is a mandatory method inside JavaScript class and it will contain the blue print for each individual particle.*/

/*Set the horizontal x coordinate using this.x inside the constructor method. This will be a random number between 0 and canvas width.*/

/*Set starting point of the particle flow using this.y inside the constructor method. This is set to 0 so that it makes particles to splash over the image from top.*/

/*Set the falling speed of the particles using this.speed inside the constructor method. This will be set to 0 at first.*/

/*Set the velocity of the falling particles using this.velocity inside the constructor method. This will be set to a random number between 0 and 0.5. Here we have falling speed which will be calculated based on the brightness of the background. Particles will fall over black areas very fast and over light areas of the image much slower. Velocity is here to give it some additional randomnes and make it more cooler.*/

/*Set particle size using this.size inside the constructor method. This will be set to a random number between 1 and 2.5.*/

/*Add update method after the constructor method. This will be used to calculate particle position for each frame before we draw it.*/

/*Add an iteration of +1 to the y coordinate inside the update method. This will make the particles fall.*/

/*Add code inside the update method using an if statement, to reset the particles to zero once they fall below the bottom edge of the canvas. The particles will fall again after reset.*/

/*Inside the if statement, give particles different random horizontal x position. This is important because particles will fall slower over light areas of the image and faster over dark areas of the image.*/

/*Inside the if statement, randomize fall speed of the particles by making this.y iterate by this.velocity. Change this.velocity to be a random number between 0 and 3.5.*/

/*Add a custom draw method to draw a circle to represent a particle*/

/*Inside custom draw method, add beginPath method to start drawing on the canvas ctx.*/

/*Inside custom draw method, use fillstyle to define circle color*/

/*Inside custom draw method, use arc to draw a circle in the ctx. Give the arc function five arguments: x and y coordinates, size, start angle and end angle. For the sixe and x and y coordinates, we will use the values in the constructor method.*/

/*Inside custom draw method, call fill method to add fillstyle color into the drawn circle.*/

/*Create custom function init after draw method*/

class Particle {

    constructor() {

        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() * 3.5;
        this.size = Math.random() * 1 + 1.5;

    }

    update() {

        this.y+= this.velocity;
        if (this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
        
    }

    draw() {

        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

    }

    function init() {
        
    }

}

});

