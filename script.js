// Function to toggle dropdown menu
function toggleDropdownMenu(icon) {
    let dropdownMenuCard = icon.parentElement.querySelector(".dropdown-menu-card");
    dropdownMenuCard.classList.toggle("show-dropdown-menu-card");
}

let dropdownIcons = document.querySelectorAll(".dropdown-icon");
dropdownIcons.forEach((icon) => {
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleDropdownMenu(icon);
    });
});

// Close dropdown menus when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown-menu-card')) {
        let allDropdownMenus = document.querySelectorAll(".dropdown-menu-card");
        allDropdownMenus.forEach((menu) => {
            menu.classList.remove("show-dropdown-menu-card");
        });
    }
});

// Active state dropdown menu buttons
const dropdownButtons = document.querySelectorAll('.dropdown-btn');

dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
        dropdownButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});


// Dark Light Mode
document.querySelector(".toggle-btn").addEventListener("click", event => {
    document.body.classList.toggle("lightMode");

    // Save the current mode in localStorage
    const isLightMode = document.body.classList.contains("lightMode");
    localStorage.setItem("isLightMode", isLightMode);
});

// Load the mode from localStorage and apply it
window.onload = () => {
    const isLightMode = localStorage.getItem("isLightMode") === "true";
    document.body.classList.toggle("lightMode", isLightMode);

    // Load card widths from localStorage
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        const savedWidth = localStorage.getItem(`card-width-${index}`);
        if (savedWidth) {
            card.style.width = savedWidth + 'px';
        }
    });
};
