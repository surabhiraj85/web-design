let navImages = document.querySelectorAll('.cloud');
// console.log(navImages);

let mainImage = document.querySelector('.airplane');
// console.log(mainImage);

function lgaImage() {
  mainImage.src = 'images/lga.jpg';
  mainImage.srcset = 'images/lga-2x.jpg 2x';
}

function cdgImage() {
  mainImage.src = 'images/cdg.jpg';
  mainImage.srcset = 'images/cdg-2x.jpg 2x';
}

function nrtImage() {
  mainImage.src = 'images/nrt.jpg';
  mainImage.srcset = 'images/nrt-2x.jpg 2x';
}

navImages[0].addEventListener('click', lgaImage);
navImages[1].addEventListener('click', cdgImage);
navImages[2].addEventListener('click', nrtImage);