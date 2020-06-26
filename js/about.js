var aboutInformation = {
  name: 'Diego Jimenez',
  profession: 'Software Engineer at Capital One',
  hometown: 'Bay Area, CA',
  degree: 'BS in Technology & Information Management',
  instagram: {
    name: 'diego_jimenez_photography',
    url: 'https://www.instagram.com/diego_jimenez_photography'
  },
  contact: 'diegojimenez1023@gmail.com'
}

var createAboutPage = function() {
  console.log('about');
  var $aboutContainer = $('<div class="col-12 col-m-12 about-container">').appendTo($('.main-container'));
  // var $aboutImageContainer = $('<div class="col-6 col-m-6 about-image-container" id="about-image-container">').appendTo($aboutContainer);
  // var $aboutPhoto = $(`<img class="photo" id="about-photo" src="./images/profile.jpg">`).appendTo($aboutImageContainer);
  var $aboutInforContainer = $('<div class="col-6 col-m-6 about-info-container" id="about-info-container">Triple Tree Bakery</div>').appendTo($aboutContainer);
}
