$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav',
    responsive: [
        {
            breakpoint: 1025, 
            settings: {
                dots: true,
            }
        },
    ]
});
$('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    vertical: true // Yahan vertical property ko true kar do
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the increment and decrement buttons
    const incrementButton = document.querySelector('.increment');
    const decrementButton = document.querySelector('.decrement');
    
    // Get the input field
    const inputField = document.querySelector('input[type="number"]');
    
    // Add click event listener to the increment button
    incrementButton.addEventListener('click', function() {
        // Increment the input value by 1
        inputField.value = parseInt(inputField.value) + 1;
    });
    
    // Add click event listener to the decrement button
    decrementButton.addEventListener('click', function() {
        // Decrement the input value by 1, ensuring it doesn't go below 0
        if (parseInt(inputField.value) > 0) {
            inputField.value = parseInt(inputField.value) - 1;
        }
    });
});


// header

const btnhamburger = document.getElementById('btnhamburger');
const btnCrossSide = document.getElementById('btnCrossSide');
const sideNav = document.getElementById('sidenav');
const sideNavLeft = document.getElementById('sidenavleft');
const sideNavMenuList = document.getElementById('sideNavMenuList');

btnhamburger.onclick = (event) => {
    event.stopPropagation(); // Sidenav click par parent elements ko click event na bheje
    
    sideNav.classList.add('opacity-100', 'pointer-events-auto');
    sideNavLeft.classList.add('translate-x-0');

    // Parent par click karne ke liye event listener
    const closeNavHandler = (event) => {
        // Agar click sidenav ke parent par hua hai
        if (event.target === sideNavLeft.parentElement) {
            sideNavLeft.classList.remove('translate-x-0');
            sideNav.classList.remove('opacity-100', 'pointer-events-auto');
            // Event listener ko remove kardo
            sideNavLeft.parentElement.removeEventListener('click', closeNavHandler);
        }
    };
    // Parent par click event ko sunne ke liye event listener add karo
    sideNavLeft.parentElement.addEventListener('click', closeNavHandler);
};

// side nav cross btn

btnCrossSide.onclick = () => {
    sideNavLeft.classList.remove('translate-x-0');
    sideNav.classList.remove('opacity-100', 'pointer-events-auto');
}

// side nav for menu 

sideNavMenuList.addEventListener('click', function(event) {
    // Step 3: Adding classes to children ul elements
    if(event.target.tagName === 'LI' && event.target.querySelector('ul')) {
        const ulElement = event.target.querySelector('ul');
        ulElement.classList.add('mt-8', 'pl-8', 'h-full');
    }
});



// Product Page Variant DropDown
// JavaScript to toggle the dropdown
const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');
const searchInput = document.getElementById('search-input');
let isOpen = false; // Set to true to open the dropdown by default

// Function to toggle the dropdown state
function toggleDropdown() {
  isOpen = !isOpen;
  dropdownMenu.classList.toggle('hidden', !isOpen);
}

// Set initial state
toggleDropdown();

dropdownButton.addEventListener('click', () => {
  toggleDropdown();
});

// Add event listener to filter items based on input
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const items = dropdownMenu.querySelectorAll('a');

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});