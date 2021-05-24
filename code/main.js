/*Bring image into the project*/

/*Create a constant myImage and set it to new Image method. This allow myImage to acces the image using the src property*/

const myImage = new Image();

/*Get image using the src propery. Use canvas.toDataURL to convert the image into a url string to avoid cross origin resource errors in some browsers when we scan the image with getImageData later.*/

myImage.src = canvas.toDataURL('../images/disney-junior-T-O-T-S.jpg');

/*Reference canvas using getElementById*/

const canvas = document.getElementById('canvas1');