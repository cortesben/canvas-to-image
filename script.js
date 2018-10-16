  const imageSource = 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-179494696.jpg';
const s_wrapper = document.querySelector('.canvas-wrapper');


function createImage(imageRequirements) {
    const { canvas, context, imageSource } = imageRequirements;
    const image = document.createElement('img');

    let imageWidth = null;
    let imageHeight = null;

    /**
    * After we have an image element we assign a load event listner
    * Here we get the width and height of image in memory
    * We the set those demensions to our canvas element that we pass in with imageRequirments object
    */
    image.addEventListener('load', () => {
        imageWidth = image.naturalWidth;
        imageHeight = image.naturalHeight;

        canvas.width = imageWidth;
        canvas.height = imageHeight;

        context.drawImage(image, 0, 0);
    });
  
    image.src = imageSource;

    return image;
}

function createImageSimple(imageSource = imageSource) {
    const image = document.createElement('img');
    image.src = imageSource;
    return image;
}

let count = 0;
function createCanvas(imageSource) {

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const imageRequirements = {
        canvas,
        context,
        imageSource
    }

    const image = createImage(imageRequirements);

    count++;
    canvas.setAttribute('class', `image-${count}`);

    context.drawImage(image, 0, 0);

    return canvas;
}

function appendToScreen(addOptions) {
    const { destination, sourceElement, imageSource } = addOptions;

    destination.appendChild(sourceElement(imageSource));
}

const addImage = {
    destination: s_wrapper,
    sourceElement: createImageSimple,
    imageSource,
}

const addCanvas = {
    destination: s_wrapper,
    sourceElement: createCanvas,
    imageSource
}

appendToScreen(addCanvas);
// appendToScreen(addImage);