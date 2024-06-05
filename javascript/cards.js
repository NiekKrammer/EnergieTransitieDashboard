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
    e.dataTransfer.setData('text/plain', this.dataset.id); // Set the data being dragged (card ID)
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

function drop(e) {
    e.preventDefault();
    const draggedCardId = e.dataTransfer.getData('text/plain'); // Get the dragged card ID
    const draggedCard = document.querySelector(`.card[data-id="${draggedCardId}"]`);
    const targetCardId = this.dataset.id;
    const parentNode = this.parentNode;

    // Move the dragged card to the target position
    parentNode.insertBefore(draggedCard, this.nextSibling);

    this.classList.remove('drag-over');
}

function dragEnd() {
    this.classList.remove('dragging');
}

// Resizing with + and -
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const cardWidthIncrement = 227;

    cards.forEach((card, index) => {
        const plusIcon = card.querySelector('.fa-plus');
        const minusIcon = card.querySelector('.fa-minus');
        const cardContainer = card.closest('.card');
        
        // Load card width from localStorage
        const savedWidth = localStorage.getItem(`card-width-${index}`);
        if (savedWidth) {
            cardContainer.style.width = savedWidth + 'px';
        }

        plusIcon.addEventListener('click', function() {
            const currentWidth = cardContainer.offsetWidth;
            const newWidth = currentWidth + cardWidthIncrement;
            cardContainer.style.width = newWidth + 'px';

            // Save the new width to localStorage
            localStorage.setItem(`card-width-${index}`, newWidth);
        });

        minusIcon.addEventListener('click', function() {
            const currentWidth = cardContainer.offsetWidth;
            const newWidth = Math.max(currentWidth - cardWidthIncrement, 0);
            cardContainer.style.width = newWidth + 'px';

            // Save the new width to localStorage
            localStorage.setItem(`card-width-${index}`, newWidth);
        });
    });
});

// Change graph with fa-rotate icon 
document.querySelectorAll('.change-graph').forEach(icon => {
    icon.addEventListener('click', function() {
        const card = this.closest('.card');
        const canvas = card.querySelector('canvas');

        // Get the current chart instance associated with the canvas
        const chart = charts.find(chart => chart.canvas === canvas);

        if (chart) {
            // Update the chart type
            const currentIndex = ['bar', 'doughnut', 'line', 'polarArea'].indexOf(chart.config.type);
            const nextIndex = (currentIndex + 1) % 4;
            const nextType = ['bar', 'doughnut', 'line', 'polarArea'][nextIndex];
            chart.config.type = nextType;

            // Update the chart
            chart.update();
        }
    });
});
