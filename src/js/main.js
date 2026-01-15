// ---------------- [1] sidebar ----------------------
class Slider {
  constructor() {
    // --------------- Initialization ------------------
    this.headerMenuBtn = document.getElementById("header-menu-btn");
    this.sidebarOverlay = document.getElementById("sidebar-overlay");
    this.sidebar = document.getElementById("sidebar");
    this.sidebarCloseBtn = document.getElementById("sidebar-close-btn");

    this.searchFiltersSection = document.getElementById(
      "search-filters-section"
    );
    this.mealCategoriesSection = document.getElementById(
      "meal-categories-section"
    );
    this.allRecipesSection = document.getElementById("all-recipes-section");
    this.mealDetails = document.getElementById("meal-details");
    this.productsSection = document.getElementById("products-section");
    this.foodlogSection = document.getElementById("foodlog-section");
    // --------------- Event ---------------------------
    this.headerMenuBtn.addEventListener("click", this.openSidebar.bind(this));
    this.sidebarCloseBtn.addEventListener(
      "click",
      this.closeSidebar.bind(this)
    );
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
    this.sidebarOverlay.classList.add("active");
    this.sidebar.classList.add("open");
  }
  closeSidebar() {
    console.log("closeSidebar");
    document.body.style.overflow = "";
    this.sidebarOverlay.classList.remove("active");
    this.sidebar.classList.remove("open");
  }
  mealsAndRecipesTAB() {
    console.log("mealsAndRecipesTAB");
    this.searchFiltersSection.style = "";
    this.mealCategoriesSection.style = "";
    this.allRecipesSection.style = "";
    this.mealDetails.style = "display: none;";
    this.productsSection.style = "display: none;";
    this.foodlogSection.style = "display: none;";
  }
  productScannerTAB() {
    console.log("productScannerTAB");
    this.searchFiltersSection.style = "display: none;";
    this.mealCategoriesSection.style = "display: none;";
    this.allRecipesSection.style = "display: none;";
    this.mealDetails.style = "display: none;";
    this.productsSection.style = "";
    this.foodlogSection.style = "display: none;";
  }
  foodLogTAB() {
    console.log("foodLogTAB");
    this.searchFiltersSection.style = "display: none;";
    this.mealCategoriesSection.style = "display: none;";
    this.allRecipesSection.style = "display: none;";
    this.mealDetails.style = "display: none;";
    this.productsSection.style = "display: none;";
    this.foodlogSection.style = "";
  }
}
const sidebar = new Slider();
// ----------------------------------------------------------
// ---------------- [2] Recipe Details ----------------------
class RecipeDetails {
  constructor() {
    // --------------- Initialization ------------------
    this.mealDetails = document.getElementById("meal-details");
    // --------------- Event ---------------------------
    var allRecipes = document.querySelectorAll(".recipe-card");
    allRecipes.forEach((recipe) => {
        recipe.addEventListener("click", this.recipeDetailsSection.bind(this));
        // console.log(i);
    });
  }
  recipeDetailsSection() {
    console.log("recipeDetailsSection");
    this.searchFiltersSection.style = "display: none;";
    this.mealCategoriesSection.style = "display: none;";
    this.allRecipesSection.style = "display: none;";
    this.mealDetails.style = "";
    this.productsSection.style = "display: none;";
    this.foodlogSection.style = "display: none;";
  }
}
const recipeDetails = new RecipeDetails();
