var main = function() {
  menu();               // show or hide menu
  // toggleVideos();       // show or hide videos
  // togglePhotos();       // show or hide photos
  // toggleAudio();        // show or hide audio
  // showMedia();          // show all media
  // resizeVideoHeight();  // resize video height
  // displayModal();
};

// display navigation menu
var menu = function() {
  $('.menu-icon').click(function() {
    $('#navigation').fadeToggle(500);
  });
};

// Used to set video's height to be a factor of its width
// var resizeVideoHeight = function () {
//     var ratio = 9 / 16, $div = $('.video');
//     $div.height($div.width() * ratio);
//     $(document).bind('resize', function() { $div.height($div.width() * ratio); });
// };

var displayModal = function() {
  var modal = document.getElementById('photoModal');

  var img = document.getElementById('photo');
  var modalImg = document.getElementById('modalImage');

  // console.log(img.src);

  img.onclick = function() {
    // console.log("click");
    modal.style.display = "block";
    modalImg.src = this.src;
  };
};

$(document).ready(main);

// $(window).resize(resizeVideoHeight);

// $(window).on("orientationchange", resizeVideoHeight());
// $(window).orient(resizeVideoHeight);
