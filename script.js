const sliderContent = document.getElementById("slider-content");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
const totalSlides = document.querySelectorAll(".slide").length;

function showSlides() {
  const slideWidth = document.querySelector(".slide").offsetWidth;
  sliderContent.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlides();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlides();
}

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

// Automatic slide change every 5 seconds
setInterval(showNext, 6000);

const menu_btn = document.querySelector(".ri-menu-line");
const menu_close_btn = document.querySelector(".ri-close-line");
const search_btn = document.querySelector(".ri-search-2-line");
const search_close = document.querySelector(".ri-close-fill");
const searchInput = document.querySelector('input[type="text"]');
const nav_menu = document.querySelector(".navbar");
const productItems = document.querySelectorAll('.product-container .boxes');

menu_btn.addEventListener("click", () => {
    console.log('Menu button clicked');
    nav_menu.classList.add("nav_menu_active");
});

menu_close_btn.addEventListener("click", () => {
    console.log('Close button clicked');
    nav_menu.classList.remove("nav_menu_active");
    search_close.style.display = 'none';
    toggleProductVisibility(true);
    searchInput.value = ''; // Clear the search input
});

search_close.addEventListener("click", () => {
    console.log('Search close button clicked');
    nav_menu.classList.remove("search_active");
    search_close.style.display = 'none';
    toggleProductVisibility(true);
    searchInput.value = ''; // Clear the search input
});

function toggleProductVisibility(showAll) {
    productItems.forEach(item => {
        item.style.display = showAll ? 'block' : 'none';
    });
}

function filterProductItems(searchTerm) {
    const formattedSearchTerm = searchTerm.toLowerCase().replace(/\s+/g, ''); // Remove spaces from search term
    productItems.forEach(item => {
        const itemName = item.querySelector('.bx-heading h2').textContent.toLowerCase().replace(/\s+/g, ''); // Remove spaces from product name
        const displayStyle = itemName.includes(formattedSearchTerm) ? 'block' : 'none';
        item.style.display = displayStyle;
    });
}


search_btn.addEventListener("click", () => {
    console.log('Search button clicked');
    nav_menu.classList.add("search_active");
    search_close.style.display = 'block';
});

menu_close_btn.addEventListener("click", () => {
    console.log('Close button clicked');
    nav_menu.classList.remove("search_active");
    search_close.style.display = 'none';
    toggleProductVisibility(true);
    searchInput.value = ''; // Clear the search input
});

search_close.addEventListener("click", () => {
    console.log('Search close button clicked');
    nav_menu.classList.remove("search_active");
    search_close.style.display = 'none';
    toggleProductVisibility(true);
    searchInput.value = ''; // Clear the search input
});

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim();
    console.log('Search input changed:', searchTerm);

    if (searchTerm) {
        nav_menu.classList.add("search_active");
        search_close.style.display = 'block';
        toggleProductVisibility(false);
        filterProductItems(searchTerm);
    } else {
        nav_menu.classList.remove("search_active");
        search_close.style.display = 'none';
        toggleProductVisibility(true);
    }
});
const productsContainer = document.querySelector('.product-container');
searchInput.addEventListener('focus', () => {
    productsContainer.scrollIntoView({ behavior: 'smooth' });
});

const loader = document.querySelector(".preloader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});