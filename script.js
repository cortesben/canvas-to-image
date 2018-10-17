// const imageSource = 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-179494696.jpg';
const imageSource = 'https://cdn.glitch.com/52fb4035-569b-4d6a-9aee-999ae9d8bbc4%2Fgettyimages-179494696.jpg?1539712939599';
const s_wrapper = document.querySelector('.canvas-wrapper');


// window.imageValues = new Promise(getImageValues);

function createImage(imageRequirements) {
    const { canvas, context, imageSource } = imageRequirements;
    const image = document.createElement('img');

    let imageWidth = null;
    let imageHeight = null;
  
    image.setAttribute('crossorigin' ,'');

    /**
    * After we have an image element we assign a load event listner
    * Here we get the width and height of image in memory
    * We then set those demensions to our canvas element that we pass in
    * We assign these messurements to the canvas element to keep our aspect ration distortion free
    */
    console.time('assign image to canvas');
    image.addEventListener('load', event => {
      
        const imageSize = {
          width: image.naturalWidth,
          height: image.naturalHeight
        }

        canvas.width = image.naturalWidth;;
        canvas.height = image.naturalHeight;;

        context.drawImage(image, 0, 0);
      
        window.canvasToDataURI();

//       disable submit untill this call back is done
       console.timeEnd('assign image to canvas');
    });
   
  
    image.src = imageSource;

    return image;
}

function createCanvas(imageSource) {

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const imageRequirements = {
        canvas,
        context,
        imageSource
    }

    const image = createImage(imageRequirements);
  
    canvas.setAttribute('class', 'canvas-image');

    return canvas;
}

function appendToScreen(addOptions) {
    const { destination, sourceElement, imageSource } = addOptions;

    destination.appendChild(sourceElement(imageSource));
}

const addCanvas = {
    destination: s_wrapper,
    sourceElement: createCanvas,
    imageSource
}

appendToScreen(addCanvas);
