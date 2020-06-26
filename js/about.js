var createAboutPage = function() {
  var $aboutContainer = $('<div class="col-12 col-m-12" id="about-container">').appendTo($('.main-container'));
  var $aboutImageContainer = $('<div class="col-4 col-m-4 about-image-container" id="about-image-container">').appendTo($aboutContainer);
  var $aboutPhoto = $(`<img class="photo" id="about-photo" src="./images/triple_tree_bakery.jpg">`).appendTo($aboutImageContainer);
  var $aboutInforContainer = $('<div class="col-6 col-m-6 about-info-container" id="about-info-container">Some info about the bakery</div>').appendTo($aboutContainer);
  $('<div>Follow us on Instagram: <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tripletreebakery/">Triple Tree Bakery</a></div>').appendTo($aboutContainer);
}
