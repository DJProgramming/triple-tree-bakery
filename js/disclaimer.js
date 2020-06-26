var createDisclaimerPage = function() {
  var $disclaimerPage = $('<div class="full-screen" id="disclaimer-page">').appendTo($('body'));
  setCurrentPage('disclaimer');
  createDisclaimerComponent();
}

var createDisclaimerComponent = function() {
  var $disclaimerContainer = $('<div class="row" id="disclaimer-container">').appendTo($('#disclaimer-page'));
  var $logo = $('<img id="disclaimer-page-logo" src="images/triple_tree_bakery.jpg"/>').appendTo($disclaimerContainer);
  var $disclaimerContent = $('<div id="disclaimer-content">').appendTo($disclaimerContainer);
  var $disclaimer = $('<p id="disclaimer">We reserve the right to your first born child!</p>').appendTo($disclaimerContent);
  var $enterSiteButton = $('<button id="agree-button" onclick="acceptTerms()">Agree</button>').appendTo($disclaimerContent);
}

var acceptTerms = function() {
  console.log("They're Mine!");
  $('body').css('overflow', 'scroll');
  $('#disclaimer-page').fadeOut(1000);
  setTimeout(() => {
    $('#disclaimer-page').remove();
  }, 1100);
}