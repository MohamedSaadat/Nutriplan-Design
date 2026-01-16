// --------------- [0] Initialization ------------------
var headerMenuBtn = document.getElementById("header-menu-btn");
var sidebarOverlay = document.getElementById("sidebar-overlay");
var sidebar = document.getElementById("sidebar");
var sidebarCloseBtn = document.getElementById("sidebar-close-btn");
var searchFiltersSection = document.getElementById("search-filters-section");
var mealCategoriesSection = document.getElementById("meal-categories-section");
var allRecipesSection = document.getElementById("all-recipes-section");
var mealDetails = document.getElementById("meal-details");
var productsSection = document.getElementById("products-section");
var foodlogSection = document.getElementById("foodlog-section");
var mealDetails = document.getElementById("meal-details");
var backToMealsBTN = document.getElementById("back-to-meals-btn");
var getAllAreas = document.getElementById("GetAllAreas");
var categoriesGrid = document.getElementById("categories-grid");
var recipesGrid = document.getElementById("recipes-grid");
var appLoadingOverlay = document.getElementById("app-loading-overlay");
var recipeHeroSection = document.getElementById("recipeHeroSection");
var gridViewBTN = document.getElementById("grid-view-btn");
var listViewBTN = document.getElementById("list-view-btn");
var productsGrid = document.getElementById("products-grid");

// ---------------- [1] sidebar ----------------------
class Slider {
  constructor() {
    // --------------- Event ---------------------------
    headerMenuBtn.addEventListener("click", this.openSidebar.bind(this));
    sidebarCloseBtn.addEventListener("click", this.closeSidebar.bind(this));
    var mainMenuTABs = document.querySelectorAll(".nav-link");
    // bg-emerald-50 text-emerald-700
    // text-gray-600 hover:bg-gray-50
    // text-gray-600 hover:bg-gray-50
    mainMenuTABs.forEach((tab, i) => {
      switch (i) {
        case 0:
          tab.addEventListener("click", this.mealsAndRecipesTAB.bind(this));
          break;
        case 1:
          tab.addEventListener("click", this.productScannerTAB.bind(this));
          break;
        default:
          tab.addEventListener("click", this.foodLogTAB.bind(this));
          break;
      }
    });
  }
  openSidebar() {
    console.log("openSidebar");
    document.body.style.overflow = "hidden";
    sidebarOverlay.classList.add("active");
    sidebar.classList.add("open");
  }
  closeSidebar() {
    console.log("closeSidebar");
    document.body.style.overflow = "";
    sidebarOverlay.classList.remove("active");
    sidebar.classList.remove("open");
  }
  mealsAndRecipesTAB() {
    console.log("mealsAndRecipesTAB");
    searchFiltersSection.style = "";
    mealCategoriesSection.style = "";
    allRecipesSection.style = "";
    mealDetails.style = "display: none;";
    productsSection.style = "display: none;";
    foodlogSection.style = "display: none;";
  }
  productScannerTAB() {
    console.log("productScannerTAB");
    searchFiltersSection.style = "display: none;";
    mealCategoriesSection.style = "display: none;";
    allRecipesSection.style = "display: none;";
    mealDetails.style = "display: none;";
    productsSection.style = "";
    foodlogSection.style = "display: none;";
  }
  foodLogTAB() {
    console.log("foodLogTAB");
    searchFiltersSection.style = "display: none;";
    mealCategoriesSection.style = "display: none;";
    allRecipesSection.style = "display: none;";
    mealDetails.style = "display: none;";
    productsSection.style = "display: none;";
    foodlogSection.style = "";
  }
}
var sideBar = new Slider();
// ----------------------------------------------------------
// ---------------- [2] Recipe Details ----------------------
function openRecipeDetails(arr) {
  class RecipeDetails {
    constructor() {
      // --------------- Event ---------------------------
      var allRecipes = document.querySelectorAll(".recipe-card");
      allRecipes.forEach((recipe, i) => {
        recipe.addEventListener("click", () => {
          this.recipeDetailsOpen(i);
        });
      });
      backToMealsBTN.addEventListener("click", () => {
        this.recipeDetailsClose();
      });
    }
    recipeDetailsOpen(x) {
      console.log("recipeDetailsOpen", x);
      searchFiltersSection.style = "display: none;";
      mealCategoriesSection.style = "display: none;";
      allRecipesSection.style = "display: none;";
      mealDetails.style = "";
      productsSection.style = "display: none;";
      foodlogSection.style = "display: none;";
      recipeHeroSection.innerHTML = `
        <div class="relative h-80 md:h-96">
          <img src="${arr[x].thumbnail}"
            alt="${arr[x].name}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-8">
            <div class="flex items-center gap-3 mb-3">
              <span class="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">${
                arr[x].category
              }</span>
              <span class="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">${
                arr[x].area
              }</span>
              ${
                arr[x].tags.length > 0
                  ? `<span class="px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full">${arr[x].tags}</span>`
                  : ""
              }
            </div>
            <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
              ${arr[x].name}
            </h1>
            <div class="flex items-center gap-6 text-white/90">
              <span class="flex items-center gap-2">
                <i class="fa-solid fa-clock"></i>
                <span>30 min</span>
              </span>
              <span class="flex items-center gap-2">
                <i class="fa-solid fa-utensils"></i>
                <span id="hero-servings">4 servings</span>
              </span>
              <span class="flex items-center gap-2">
                <i class="fa-solid fa-fire"></i>
                <span id="hero-calories">485 cal/serving</span>
              </span>
            </div>
          </div>
        </div>
      `;
    }
    recipeDetailsClose() {
      console.log("recipeDetailsClose");
      searchFiltersSection.style = "";
      mealCategoriesSection.style = "";
      allRecipesSection.style = "";
      mealDetails.style = "display: none;";
      productsSection.style = "display: none;";
      foodlogSection.style = "display: none;";
    }
  }
  var recipeDetails = new RecipeDetails();
  gridViewBTN.addEventListener("click", () => {
    recipesGrid.classList.remove("grid-cols-2", "gap-4");
    recipesGrid.classList.add("grid-cols-4", "gap-5");
    console.log("grid");
  });

  listViewBTN.addEventListener("click", () => {
    recipesGrid.classList.remove("grid-cols-4", "gap-5");
    recipesGrid.classList.add("grid-cols-2", "gap-4");
    console.log("list");
  });
}

// ---------------- [3] Browse by country -------------------
// API
async function allAreas() {
  var allAreasHTTP = await fetch(
    "https://nutriplan-api.vercel.app/api/meals/areas"
  );
  var allAreasHttpResponse = await allAreasHTTP.json();
  return allAreasHttpResponse;
}
allAreas().then((data) => {
  var allAreasBTNs = ``;
  for (let i = 0; i < 10; i++) {
    allAreasBTNs += `
      <button
        class="area-filter-btn px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap hover:bg-gray-200 transition-all bg-gray-100 text-gray-700"
        data-area="">
        ${data.results[i].name}
      </button>
    `;
  }
  getAllAreas.innerHTML += allAreasBTNs;
  addAppLoadingOverlay();
});

// ---------------- [4] Browse by Meal Type -----------------
// API
async function allMealsType() {
  var allMealsTypeHTTP = await fetch(
    "https://nutriplan-api.vercel.app/api/meals/categories"
  );
  var allMealsTypeHttpResponse = allMealsTypeHTTP.json();
  return allMealsTypeHttpResponse;
}
allMealsType().then((data) => {
  var allMealsTypeBTNs = ``;
  for (let i = 0; i < 12; i++) {
    allMealsTypeBTNs += `
      <div
        class="category-card bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 border border-emerald-200 hover:border-emerald-400 hover:shadow-md cursor-pointer transition-all group"
        data-category="${data.results[i].name}">
        <div class="flex items-center gap-2.5">
          <div
            class="text-white w-9 h-9 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
            <i class="fa-solid fa-drumstick-bite"></i>
          </div>
          <div>
            <h3 class="text-sm font-bold text-gray-900">${data.results[i].name}</h3>
          </div>
        </div>
      </div>
    `;
  }
  categoriesGrid.innerHTML = allMealsTypeBTNs;
  addAppLoadingOverlay();
});

// ---------------- [5] All Recipes Showing 25 recipes ------
// API
async function showAllRecipes() {
  var showAllRecipesHTTP = await fetch(
    "https://nutriplan-api.vercel.app/api/meals/search?q=chicken&page=1&limit=25"
  );
  var showAllRecipesHttpResponse = showAllRecipesHTTP.json();
  return showAllRecipesHttpResponse;
}
showAllRecipes().then((data) => {
  var dataArray = [];
  dataArray.push(...data.results);
  var allrecipescards = ``;
  for (let i = 0; i < dataArray.length; i++) {
    allrecipescards += `
      <div
        class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
        data-meal-id="${data.results[i].id}">
        <div class="relative h-48 overflow-hidden">
          <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            src="${data.results[i].thumbnail}" alt="${data.results[i].name}"
            loading="lazy" />
          <div class="absolute bottom-3 left-3 flex gap-2">
            <span class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700">
              ${data.results[i].category}
            </span>
            <span class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white">
              ${data.results[i].area}
            </span>
          </div>
        </div>
        <div class="p-4">
          <h3
            class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">
            ${data.results[i].name}
          </h3>
          <p class="text-xs text-gray-600 mb-3 line-clamp-2">
            ${data.results[i].instructions}
          </p>
          <div class="flex items-center justify-between text-xs">
            <span class="font-semibold text-gray-900">
              <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
              ${data.results[i].category}
            </span>
            <span class="font-semibold text-gray-500">
              <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
              ${data.results[i].area}
            </span>
          </div>
        </div>
      </div>
    `;
  }
  recipesGrid.innerHTML = allrecipescards;
  addAppLoadingOverlay();
  openRecipeDetails(dataArray);
});
// ---------------- [6] App Loading Overlay -----------------
function addAppLoadingOverlay() {
  appLoadingOverlay.classList.add("loading");
}
// ---------------- [7] Product Search & Barcode Scanner ------
// API
async function productSearch(parm) {
  console.log(parm);
  var productSearchHTTP = await fetch(
    `https://nutriplan-api.vercel.app/api/products/search?q=${parm}}`
  );
  var productSearchHttpResponse = productSearchHTTP.json();
  return productSearchHttpResponse;
}
productSearch("q").then((data) => {
  var dataArray = [];
  dataArray.push(...data.results);
  console.log(dataArray[0].image);
  var allProduct = ``;
  for (let i = 0; i < dataArray.length; i++) {
    allProduct += `
      <div
        class="product-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
        data-barcode="7613034626844">
        <div class="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
          <img class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            src="https://images.openfoodfacts.org/images/products/316/893/015/9742/front_fr.54.400.jpg"
            alt="Product Name" loading="lazy" />

          <!-- Nutri-Score Badge -->
          <div
            class="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded uppercase">
            Nutri-Score A
          </div>

          <!-- NOVA Badge -->
          <div
            class="absolute top-2 right-2 bg-lime-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
            title="NOVA 2">
            2
          </div>
        </div>

        <div class="p-4">
          <p class="text-xs text-emerald-600 font-semibold mb-1 truncate">
            Brand Name
          </p>
          <h3 class="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
            Product Name
          </h3>

          <div class="flex items-center gap-3 text-xs text-gray-500 mb-3">
            <span><i class="fa-solid fa-weight-scale mr-1"></i>250g</span>
            <span><i class="fa-solid fa-fire mr-1"></i>350 kcal/100g</span>
          </div>

          <!-- Mini Nutrition -->
          <div class="grid grid-cols-4 gap-1 text-center">
            <div class="bg-emerald-50 rounded p-1.5">
              <p class="text-xs font-bold text-emerald-700">8.5g</p>
              <p class="text-[10px] text-gray-500">Protein</p>
            </div>
            <div class="bg-blue-50 rounded p-1.5">
              <p class="text-xs font-bold text-blue-700">45.2g</p>
              <p class="text-[10px] text-gray-500">Carbs</p>
            </div>
            <div class="bg-purple-50 rounded p-1.5">
              <p class="text-xs font-bold text-purple-700">12.3g</p>
              <p class="text-[10px] text-gray-500">Fat</p>
            </div>
            <div class="bg-orange-50 rounded p-1.5">
              <p class="text-xs font-bold text-orange-700">18.5g</p>
              <p class="text-[10px] text-gray-500">Sugar</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  productsGrid.innerHTML = allProduct;
  addAppLoadingOverlay();
});