let TRANSITION_TIME = 300;
let TRANSITION_DELAY = 305;

var filterControl = {
  categories: ['all', 'edibles', 'cartridges'],
  cartridgeCategories: ['all', 'sativa', 'indica', 'hybrid'],
  currentFilter: '',
  strainFilter: '',
}

var createStorePage = function() {
  var $home = $('<div class="col-12 col-m-12 store-container">').appendTo($('.main-container'));
  setCurrentPage('home');
  createProductComponent();
  updateFilter('all');
}

var updateFilter = function(filter) {
  console.log("filter:", filter);
  filterControl.currentFilter = filter;
  for(let i in filterControl.categories) {
    $(`#filter-${filterControl.categories[i]}`).css("text-decoration", "none");
  }
  $(`#filter-${filter}`).css("text-decoration", "underline");

  filterStore("");
  if(filter === 'cartridges') {
    updateStrainFilter("all");
  }
}

updateStrainFilter = function(filter) {
  console.log('strain:', filter);
  filterControl.strainFilter = filter;
  for(let i in filterControl.cartridgeCategories) {
    $(`#filter-strain--${filterControl.cartridgeCategories[i]}`).css("text-decoration", "none");
  }
  $(`#filter-strain--${filter}`).css("text-decoration", "underline");

  filterStore("strain");
}

var filterStore = function(type) {
  if(type === "") {
    switch (filterControl.currentFilter) {
      case "all":
        $(`.product-category--treat`).fadeOut(TRANSITION_TIME);
        $(`.product-category--cart`).fadeOut(TRANSITION_TIME);
        setTimeout(() => {
          $(`.product-category--treat`).fadeIn(TRANSITION_TIME);
          $(`.product-category--cart`).fadeIn(TRANSITION_TIME);
        }, TRANSITION_DELAY);
        $('#cartrige-category-list').slideUp(TRANSITION_TIME);
        break;
      case "edibles":
        console.log('edibles');
        $(`.product-category--treat`).fadeOut(TRANSITION_TIME);
        $(`.product-category--cart`).fadeOut(TRANSITION_TIME);
        setTimeout(() => {
          $(`.product-category--treat`).fadeIn(TRANSITION_TIME);
        }, TRANSITION_DELAY);
        $('#cartrige-category-list').slideUp(TRANSITION_TIME);
        break;
      case "cartridges":
        $(`.product-category--treat`).fadeOut(TRANSITION_TIME);
        $(`.product-category--cart`).fadeOut(TRANSITION_TIME);
        setTimeout(() => {
          $(`.product-category--cart`).fadeIn(TRANSITION_TIME);
        }, TRANSITION_DELAY);
        $('#cartrige-category-list').slideDown(TRANSITION_TIME);
        break;
      default:
        break;
    }
  } else {
    switch (filterControl.strainFilter) {
      case "all":
        $(`.strain--sativa`).fadeOut(TRANSITION_TIME);
        $(`.strain--indica`).fadeOut(TRANSITION_TIME);
        $(`.strain--hybrid`).fadeOut(TRANSITION_TIME);
        setTimeout(() => {
          $(`.strain--sativa`).fadeIn(TRANSITION_TIME);
          $(`.strain--indica`).fadeIn(TRANSITION_TIME);
          $(`.strain--hybrid`).fadeIn(TRANSITION_TIME);
        }, TRANSITION_DELAY);
        break;
      case "sativa":
        $(`.strain--sativa`).fadeOut(TRANSITION_TIME);
        $(`.strain--indica`).fadeOut(TRANSITION_TIME);
        $(`.strain--hybrid`).fadeOut(TRANSITION_TIME);
        setTimeout(() => {
          $(`.strain--sativa`).fadeIn(TRANSITION_TIME);
        }, TRANSITION_DELAY);
        break;
      case "indica":
        $(`.strain--sativa`).fadeOut(TRANSITION_TIME);
        $(`.strain--indica`).fadeOut(TRANSITION_TIME);
        $(`.strain--hybrid`).fadeOut(TRANSITION_TIME);
        setTimeout(() => {
          $(`.strain--indica`).fadeIn(TRANSITION_TIME);
        }, TRANSITION_DELAY);
        break;
      case "hybrid":
        $(`.strain--sativa`).fadeOut(TRANSITION_TIME);
        $(`.strain--indica`).fadeOut(TRANSITION_TIME);
        $(`.strain--hybrid`).fadeOut(TRANSITION_TIME);
        setTimeout(() => {
          $(`.strain--hybrid`).fadeIn(TRANSITION_TIME);
        }, TRANSITION_DELAY);
        break;
      default:
        break;
    }
  }
}

var toggleCartFilter = function() {
  var cartFilter = $('<ul')
}

var createProductComponent = function() {
  var $categoriesContainer = $('<div class="row" id="categories-bar">').appendTo($('.store-container'));
  var $categoriesList = $('<ul class="filter-bar" id="categories-list">Filter:</ul>').appendTo($categoriesContainer);
  for(let i of filterControl.categories) {
    var category = i[0].toUpperCase();
    for(var letter = 1; letter < i.length; letter++) { category += i[letter]; }
    $(`<li class="category" id="filter-${i}" onClick="updateFilter(\'${category.toLowerCase()}\')"><b>${category}</b></li>`).appendTo($categoriesList);
    // $(`#${i}`).on('click', () => { changeContnet(i)})
  }
  var $strainFilter = $('<ul class="filter-bar" id="cartrige-category-list"></ul>').appendTo($('#categories-bar'));
  for(let i of filterControl.cartridgeCategories) {
    var cartCategory = i[0].toUpperCase();
    for(var letter = 1; letter < i.length; letter++) { cartCategory += i[letter]; }
    $(`<li class="cartridge-category" id="filter-strain--${i}" onClick="updateStrainFilter(\'${cartCategory.toLowerCase()}\')"><b>${cartCategory}</b></li>`).appendTo($strainFilter);
  }
  var $productsContainer = $('<div id="products-container">').appendTo($('.store-container'))
  var $products = $('<div id="products">').appendTo($productsContainer);
  for(let product of productArray) {
    var strain = '';
    if(product.strain) {
      strain = `strain--${product.strain}`;
    }
    $productContainer = $(`<div class="product-container product-category--${product.category} ${strain}">`).appendTo($products);
    $pic = $(`<img class="product treat" id=${product.name} src=${product.url}>`).appendTo($productContainer);
    $productName = $(`<h2 class="product-name">${product.name}</h2>`).appendTo($productContainer);
    if(product.strain) {
      $productStrain = $(`<h5 class="product-strain">${product.strain}</h5>`).appendTo($productContainer);
    }
    if(product.strength) {
      $productStrength = $(`<h5 class="product-strength">${product.strength}%</h5>`).appendTo($productContainer);
    }
      if(!product.options) {
        $productPrice = $(`<h4 class="product-price">$${product.price}</h4>`).appendTo($productContainer);
      }
      if(product.paypalProductCode) {
        $buy = $(`<form class="add-to-cart--form product-add-to-cart" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">`).appendTo($($productContainer));
        $('<input type="hidden" name="cmd" value="_s-xclick">').appendTo($buy);
        $(`<input type="hidden" name="hosted_button_id" value="${product.paypalProductCode}">`).appendTo($buy);
        if(product.options && product.options[1]) {
          var $table = $('<table class="buy-table">').appendTo($buy);
          $('<tr><td><input type="hidden" name="on0" value="Quantity">Quantity</td></tr><tr><td>').appendTo($table);
          var $select = $('<select class="select-menu" name="os0">').appendTo($table);
          for(let i in product.options) {
            $(`<option value="${product.options[i][0]}">${product.options[i][1]}</option>`).appendTo($select);
          }
          $('<input type="hidden" name="currency_code" value="USD">').appendTo($buy);
        }
        $('<div class="center"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></div>').appendTo($buy);
        // $('<div class="center"><input class="add-to-cart--button" type="button" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">Add to cart</input></div>').appendTo($buy);
        $('<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">').appendTo($buy);
      }
    // $addToCart = $('<button class="product-add-to-cart">Add To Cart</button>').appendTo($productContainer);
  }
}
