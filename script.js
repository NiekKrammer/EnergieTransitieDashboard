// Function to toggle dropdown menu
function toggleDropdownMenu(icon) {
    let dropdownMenuCard = icon.parentElement.querySelector(".dropdown-menu-card");
    dropdownMenuCard.classList.toggle("show-dropdown-menu-card");
}

// Add event listeners to dropdown icons
let dropdownIcons = document.querySelectorAll(".dropdown-icon");
dropdownIcons.forEach((icon) => {
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleDropdownMenu(icon);
    });
});

// Add event listener to close dropdown menus when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown-menu-card')) {
        let allDropdownMenus = document.querySelectorAll(".dropdown-menu-card");
        allDropdownMenus.forEach((menu) => {
            menu.classList.remove("show-dropdown-menu-card");
        });
    }
});

// Drag and drop
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragenter', dragEnter);
    card.addEventListener('dragover', dragOver);
    card.addEventListener('dragleave', dragLeave);
    card.addEventListener('drop', drop);
    card.addEventListener('dragend', dragEnd);
});

function dragStart(e) {
    this.classList.add('dragging');
    e.dataTransfer.setData('text/plain', ''); 
    // Required for Firefox
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
}

function dragLeave() {
    this.classList.remove('drag-over');
}

function drop() {
    const draggedCard = document.querySelector('.dragging');
    this.parentNode.insertBefore(draggedCard, this.nextSibling);
    this.classList.remove('drag-over');
    
    // Save the order of cards to localStorage
    const cardOrder = [];
    cards.forEach(card => {
        cardOrder.push(card.id);
    });
    localStorage.setItem('cardOrder', JSON.stringify(cardOrder));
}

function dragEnd() {
    this.classList.remove('dragging');
}

// Load card order from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedCardOrder = localStorage.getItem('cardOrder');
    if (storedCardOrder) {
        const cardOrder = JSON.parse(storedCardOrder);
        cardOrder.forEach((cardId, index) => {
            const card = document.getElementById(cardId);
            card.style.order = index + 1;
        });
    }
});


// Resizing
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const plusIcon = card.querySelector('.fa-plus');
        const minusIcon = card.querySelector('.fa-minus');
        const cardContainer = card.closest('.card');

        const cardWidthIncrement = 200;

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
