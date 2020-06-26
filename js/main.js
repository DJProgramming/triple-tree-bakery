var webpageControl = {
  pages: ['store', 'about'],
  currentPage: ''
}

/*
Creates top banner that includes title menu button(s)
*/
var createNavigationBar = function() {
  var $header = $('<header>').appendTo('body');
  var $topBanner = $('<div class="top-banner">').appendTo($header);
  var $titleRow = $('<div class="row">').appendTo($topBanner);
  var $title = $('<h1 class="row" id="title">').appendTo($titleRow);
  $title.text('Triple Tree Bakery');
  var $navBar = $('<nav class="row">').appendTo($topBanner);
  var $menuBar = $('<div class="col-12 menu-bar">').appendTo($navBar);
  var $menu = $('<div id="menu-bar">').appendTo($menuBar);
  var $menuIcon = $('<img class="menu-icon" id="menu" src="images/icons/menu.png" />').appendTo($menu);
  // var $cart = $('<img class="menu-icon" id="cart" src="images/icons/supermarket.svg"/>').appendTo($menuBar);
  var $cart = $('<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >').appendTo($menuBar);
  $('<input type="hidden" name="cmd" value="_s-xclick">').appendTo($cart);
  $('<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">').appendTo($cart);
  $('<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">').appendTo($cart);
  $('<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">').appendTo($cart);
  var $navigationButtons = $('<ul class="navigation-buttons" id="navigation">').appendTo($menu);
  for(let i of webpageControl.pages) {
    var label = i[0].toUpperCase();
    for(var letter = 1; letter < i.length; letter++) { label += i[letter]; }
    $(`<li id="${i}"><b><a class="navigation-button" href="#">${label}</a></b></li>`).appendTo($navigationButtons);
    $(`#${i}`).on('click', () => { changeContnet(i)})
  }
}

var createMainContainer = function() {
  $('<div class="row main-container">').appendTo('body');
}

var emptyMainContainer = function() {
  $('.main-container').empty();
}

var setCurrentPage = function(page) {
  for(let i of webpageControl.pages) {
    webpageControl.currentPage = i === page ? page : webpageControl.currentPage;
  }
}

var createProjectsPage = function() {}

var createLayout = function() {
  createNavigationBar();
  createMainContainer();
  createDisclaimerPage();
  createStorePage();
}

var changeContnet = function(page) {
  // if different page is selected
  if(webpageControl.currentPage !== page) {
    // empty contents of current page
    emptyMainContainer();

    // capitalize first letter of each label
    var label = page[0].toUpperCase();
    for(var letter = 1; letter < page.length; letter++) { label += page[letter]; }
    // run corresponding create page function
    eval(`create${label}Page()`);

    // set new current page
    webpageControl.currentPage = page;
  }
}

function resize() {
  mediaResize();
}

var run = function() {
  createLayout();

  $(window).on('resize', resize);
}

$(function() {
  console.log('main.js loaded');

  run();
})
