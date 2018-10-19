const imageSource = 'https://cdn.glitch.com/52fb4035-569b-4d6a-9aee-999ae9d8bbc4%2Fgettyimages-179494696.jpg?1539712939599';
const s_wrapper = document.querySelector('.canvas-wrapper');
  
/**
* We are using both an HTML element
* And the resolved value from a callback after image source loads
* Image element is used
* @return {promise} 
* @return {html element, image width, height and canvas and canvas context} 
*/
const createImagePromise = (imageRequirements) => new Promise( (resolve, reject) => {
    const { canvas, context, imageSource } = imageRequirements;
    const image = document.createElement('img');

    /**
    * After image loads this event fires
    * we pass back an object to resolve our promise
    * the composition of this is done after this resolves inside of our create canvas function
    */
    console.time('assign image to canvas promise');
    image.addEventListener('load', () => {
      
      resolve({
        width: image.naturalWidth,
        height: image.naturalHeight,
        canvas: canvas,
        context: context,
        image: image
      });
      
      console.timeEnd('assign image to canvas promise');
    });
   
    image.setAttribute('crossorigin' ,'');
    image.src = imageSource;

});


function createCanvas(imageSource) {

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const imageRequirements = {
        canvas,
        context,
        imageSource
    }

    const image = createImagePromise(imageRequirements);
  
    /**
    *
    * Here we get the width and height of image in memory
    * We then set those demensions to our canvas element that we pass in
    * This is done keep our aspect ration distortion free
    */
    image.then( imageData => {
      const { width, height, canvas, context, image } = imageData;
      
      canvas.width = width;
      canvas.height = height;
      context.drawImage(image, 0, 0);
    });

    canvas.setAttribute('class', 'canvas-image');

    return {
      canvas,
      image
    }
}

function appendToScreen(addOptions) {
    const { destination, sourceElement, imageSource } = addOptions;
    const callCreateCanvas = sourceElement(imageSource);
  
    callCreateCanvas.image.then( () => {
      window.canvasToBlob();
      window.canvasToDataURI();
    });

    destination.appendChild(callCreateCanvas.canvas);
}

const addCanvas = {
    destination: s_wrapper,
    sourceElement: createCanvas,
    imageSource
}

appendToScreen(addCanvas);
