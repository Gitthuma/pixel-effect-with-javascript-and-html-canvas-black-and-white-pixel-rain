/*Bring image into the project*/

/*Create a constant myImage and set it to new Image method. This allow myImage to acces the image using the src property*/

const myImage = new Image();

/*Get image using the src propery. Use canvas.toDataURL to convert the image into a url string to avoid cross origin resource errors in some browsers when we scan the image with getImageData later.*/

myImage.src = canvas.toDataURL('../images/disney-junior-T-O-T-S.jpg');

/*Reference canvas using getElementById*/

const canvas = document.getElementById('canvas1');

/*Reference canvas context using getContext 2D. This is to give it access to all 2d drawing methods*/

const ctx = canvas.getContext('2d');

/*Set canvas width and height to be the same as those in css. This is to make sure the scaling is correct*/

canvas.width = 780;
canvas.height = 440;

/*Draw image on canvas using built-in html canvas method drawImage. The method will take five arguments: The first is the image we want to draw,the second and third arguments are the (x,y) cordinates of our drawing starting point and the fourth and fifth arguments are the drawing end points represented as canvas width and height.*/

ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

/*Add event listener to myImage. This listens for a load event and pass it to a call back function*/

myImage.addEventListener('load', function() {
    
});

