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

}

/*Create custom function init after draw method. Init is short for initialize.*/

/*Inside init function, create a for loop. The loop will run as many times depending on the number of particle variable, in our case 10,000.*/

/*Remove init function from inside Particle class.*/

/*Inside for loop, call built in push method on particle array from line 42. Push method places whatever we pass to it at the end of the array, in our case we will place a new particle from our Particle class. The new key word will trigger the Particle class constructor on line 89. It will create one new blank particle object and assign it properties and randomized values based on the class blue print. For loop will run 10,000 times filling particle array with 10,000 randomized particle objects.*/

function init() {

    for (let i = 0; i < numberOfParticles; i++){
        particlesArray.push(new Particle);
    }
        
}

/*Call the init function to fill in the array*/

init();

/*Create a custom function animate. This will be our main animation loop.*/

/*Draw a semi transparent black triangle over the canvas for every frame. This will give particles fading trails. To do this:*/

/*Set ctx transparency using globalAlpha*/

/*Set ctx color using fillstyle*/

/*Draw rectangle using built in method fillRect. This method takes four arguments: The first two are x and y starting points and the last two are x and y end points.*/

/*Create a for loop to cycle through the particleArray we created in the init function.*/

/*Inside the for loop, call the update method from line 91 and the draw method from line 101 for each particle object. This for loop will cycle through the 10,000 particles for each frame of animation. It will recalculate their position using the update method and it will draw them at their new coordinates with the draw method.*/

/*Inside the animate function, call requestAnimationFrame method and pass it the argument animate. requestAnimationFrame is a built-in JavaScript method which when I pass it the argument animate, the name of its parent function from line 148, it will make the function run its code again when the loop terminates. This will allow us to run the loop again and again when we call the animate function later. This is a programing principle called recursion.*/

function animate() {

    ctx.globalAlpha = 0.05;
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(); //Corrected update method syntax
        particlesArray[i].draw(); //Corrected draw method syntax
    }

    requestAnimationFrame(animate);

}

/*Call animate to kick off animation loop*/

animate();
    
});

