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

// Dark Light Mode
document.querySelector(".toggle-btn").addEventListener("click", event => {
    document.body.classList.toggle("lightMode");
  
    const isLightMode = document.body.classList.contains("lightMode");
    localStorage.setItem("isLightMode", isLightMode);
  });
  
  window.onload = () => {
    const isLightMode = localStorage.getItem("isLightMode") === "true";
    document.body.classList.toggle("lightMode", isLightMode);
  };
  