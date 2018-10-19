/**
* Convert canvas element to file blob
*/
function canvasToBlob(){
  const s_canvasImage = document.querySelector('.canvas-image');
  const s_imageWrapper = document.querySelector('.image-wrapper');

  return s_canvasImage.toBlob(blob => {
    const newImage = document.createElement('img');
    const blobURL = URL.createObjectURL(blob);

    newImage.addEventListener('load', () => {
      URL.revokeObjectURL(blobURL);
    });

    newImage.src = blobURL;
    s_imageWrapper.appendChild(newImage);

  });
}

/**
* creates image element
* @param {string} - imageSource uri to image or data uri
*/
function createImageSimple(imageSource = imageSource){
  const image = document.createElement('img');
  image.setAttribute('crossorigin' ,'');
  image.src = imageSource;
  return image;
}


/**
* take canvas element and convert to data URI
* Write image with data uri as source back to DOM
*/
function canvasToDataURI(){
  const s_canvasImage = document.querySelector('.canvas-image');
  const s_imageWrapper = document.querySelector('.image-wrapper');
  const dataURIFromCanvas = s_canvasImage.toDataURL('image/jpeg', 1);
  const secondImage = createImageSimple(dataURIFromCanvas);

  s_imageWrapper.appendChild(secondImage);
}
