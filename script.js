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

// close dropdown menus when clicking outside
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

// Resizing with + and -
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const plusIcon = card.querySelector('.fa-plus');
        const minusIcon = card.querySelector('.fa-minus');
        const cardContainer = card.closest('.card');

        const cardWidthIncrement = 225;

        plusIcon.addEventListener('click', function() {
            const currentWidth = cardContainer.offsetWidth;
            const newWidth = currentWidth + cardWidthIncrement;
            cardContainer.style.width = newWidth + 'px';
        });

        minusIcon.addEventListener('click', function() {
            const currentWidth = cardContainer.offsetWidth;
            const newWidth = Math.max(currentWidth - cardWidthIncrement, 0);
            cardContainer.style.width = newWidth + 'px';
        });
    });
});

