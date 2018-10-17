// window.imageValues.then( response => console.log(response));

// setTimeout(()=>{
  

  const s_canvasImage = document.querySelector('.canvas-image');
  const s_imageWrapper = document.querySelector('.image-wrapper');
  
  // const width="1415";
  const height="2122"
  

  /**
  * Convert canvas element to blob
  */
  s_canvasImage.toBlob(blob => {
    const newImage = document.createElement('img');
    const blobURL = URL.createObjectURL(blob);

    newImage.addEventListener('load', e => {
      console.log(e);
      URL.revokeObjectURL(blobURL) 
    });

    // newImage.width = width;
    // newImage.height = height;

    newImage.src = blobURL;
    s_imageWrapper.appendChild(newImage);

    console.log(s_imageWrapper);
  });


  /**
  * creates image element
  * @param {string} - imageSource uri to image or data uri
  */
  function createImageSimple(imageSource = imageSource){
    const image = document.createElement('img');
    
    image.setAttribute('crossorigin' ,'');
    // image.width = width;
    // image.height = height;
    image.src = imageSource;
    return image;
  }


  /**
  * take canvas element and convert to data URI
  * Write image with data uri as source back to DOM
  */
  function canvasToDataURI(){
    const dataURIFromCanvas = s_canvasImage.toDataURL('image/jpeg', 1);
    const secondImage = createImageSimple(dataURIFromCanvas);

    console.log(secondImage);
    console.log(dataURIFromCanvas);
    s_imageWrapper.appendChild(secondImage);
  }
  
  // canvasToDataURI();

// },300);