document.addEventListener('DOMContentLoaded', (event) => {
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
  
      // Update the order in localStorage
      const updatedCards = document.querySelectorAll('.card');
      const cardIds = Array.from(updatedCards).map(card => card.dataset.id);
      localStorage.setItem('cardOrder', JSON.stringify(cardIds));
    }
  
    function dragEnd() {
      this.classList.remove('dragging');
    }
  
    // Restore card order from localStorage on page load
    function restoreCardOrder() {
      const cardOrder = JSON.parse(localStorage.getItem('cardOrder'));
      if (cardOrder && cardOrder.length === cards.length) {
        const cardMap = new Map();
        cards.forEach(card => cardMap.set(card.dataset.id, card));
  
        cardOrder.forEach((cardId, index) => {
          const card = cardMap.get(cardId);
          if (card) {
            const parentNode = card.parentNode;
            parentNode.insertBefore(card, parentNode.children[index]);
          }
        });
      }
    }
  
    restoreCardOrder(); 
  });