const s_canvasImage = document.querySelector('.image-1');
const s_imageWrapper = document.querySelector('.image-wrapper');


// function createImageSimple(imageSource = imageSource){
//   const image = document.createElement('img');

//   image.src = imageSource;
  
//   return image;
// }

// const dataURIFromCanvas = s_canvasImage.toDataURL('image/jpeg', 0.9);

// console.log(dataURIFromCanvas);
// const secondImage = createImageSimple(dataURIFromCanvas);
// console.log(secondImage);
// s_imageWrapper.appendChild(secondImage);



s_canvasImage.toBlob(blob => {
  const newImage = document.createElement('img');
  const blobURL = URL.createObjectURL(blob);
  
  newImage.addEventListener('load', () => URL.revokeObjectURL(blobURL) );

  newImage.src = blobURL;
  s_imageWrapper.appendChild(newImage);
  
  console.log(s_imageWrapper);
});
