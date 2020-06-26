let TRANSITION_TIME = 300;
let TRANSITION_DELAY = 305;

var updateFilter = function(filter) {
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