export default function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;

    function fulfill() {
      if (image.naturalWidth) {
        resolve(image);
      } else {
        reject(image);
      }

      image.removeEventListener('load', fulfill);
      image.removeEventListener('error', fulfill);
    }

    if (image.naturalWidth) {
      resolve(image);
    } else if (image.complete) {
      // If the image is complete but the naturalWidth is 0px it is probably broken
      reject(image);
    } else {
      image.addEventListener('load', fulfill);
      image.addEventListener('error', fulfill);
    }
  });
}
