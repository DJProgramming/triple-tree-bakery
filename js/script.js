var main = function() {
  menu();               // show or hide menu
  toggleVideos();       // show or hide videos
  togglePhotos();       // show or hide photos
  toggleAudio();        // show or hide audio
  showMedia();          // show all media
  resizeVideoHeight();  // resize video height
  // displayModal();
};

// display navigation menu
var menu = function() {
  $('.menu-icon').click(function() {
    $('#navigation').fadeToggle(500);
  });
};

// show only videos
var toggleVideos = function() {
  resizeVideoHeight();
  $('#videoToggle').click(function() {
    $('.videos').fadeIn(1000);
    $('.audio').fadeOut(1000);
    $('.photos').fadeOut(1000);
  });
}

// show only photos
var togglePhotos = function() {
  resizeVideoHeight();
  $('#photoToggle').click(function() {
    $('.photos').fadeIn(1000);
    $('.videos').fadeOut(1000);
    $('.audio').fadeOut(1000);
  });
};

// show only photos
var toggleAudio = function() {
  resizeVideoHeight();
  $('#audioToggle').click(function() {
    $('.audio').fadeIn(1000);
    $('.videos').fadeOut(1000);
    $('.photos').fadeOut(1000);
  });
};

// shows all photos & videos
var showMedia = function() {
  resizeVideoHeight();
  $('#mediaToggle').click(function() {
    $('.photos').fadeIn(1000);
    $('.videos').fadeIn(1000);
    $('.audio').fadeIn(1000);
  });
};

// Used to set video's height to be a factor of its width
var resizeVideoHeight = function () {
    var ratio = 9 / 16, $div = $('.video');
    $div.height($div.width() * ratio);
    $(document).bind('resize', function() { $div.height($div.width() * ratio); });
};

var displayModal = function() {
  var modal = document.getElementById('photoModal');

  var img = document.getElementById('photo');
  var modalImg = document.getElementById('modalImage');

  console.log(img.src);

  img.onclick = function() {
    console.log("click");
    modal.style.display = "block";
    modalImg.src = this.src;
  };
};

$(document).ready(main);

$(window).resize(resizeVideoHeight);

$(window).on("orientationchange", resizeVideoHeight());
// $(window).orient(resizeVideoHeight);
