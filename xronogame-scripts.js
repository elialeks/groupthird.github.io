        document.addEventListener('DOMContentLoaded', function () {
            const draggableItems = document.querySelectorAll('.draggable');
            const droppableItems = document.querySelectorAll('.droppable');
            const winMessage = document.getElementById('win-message');
            let correctMatches = 0;

            // Shuffle the events to make it harder to guess
            const shuffledEvents = Array.from(droppableItems);
            shuffledEvents.sort(() => Math.random() - 0.5);
            const eventsContainer = document.getElementById('events-container');
            shuffledEvents.forEach(event => {
                eventsContainer.appendChild(event);
            });

            // Set up drag event listeners for draggable items (dates)
            draggableItems.forEach(item => {
                item.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('text', e.target.dataset.id);
                });
            });

            // Set up drop event listeners for droppable items (events)
            droppableItems.forEach(item => {
                item.addEventListener('dragover', (e) => {
                    e.preventDefault(); // Allow drop
                });

                item.addEventListener('drop', (e) => {
                    e.preventDefault();
                    const draggedId = e.dataTransfer.getData('text');
                    const targetId = item.dataset.id;

                    // Check if the date is correct for this event
                    if (draggedId === targetId) {
                        const yearText = document.querySelector(`.draggable[data-id="${draggedId}"]`).textContent;

                        // Create a new element to show the year above the event
                        const yearElement = document.createElement('div');
                        yearElement.classList.add('year');
                        yearElement.textContent = yearText;

                        item.prepend(yearElement); // Insert the year at the top of the event
                        item.classList.add('correct');
                        correctMatches++;

                        // Disable further dragging of this date and remove it from the dates list
                        const draggedElement = document.querySelector(`.draggable[data-id="${draggedId}"]`);
                        draggedElement.setAttribute('draggable', 'false');
                        draggedElement.style.display = 'none';  // Hide the matched year

                        // Check if all events are matched
                        if (correctMatches === droppableItems.length) {
                            winMessage.style.display = 'block';
							//dates-container.style.display = 'none';
                        }
                    } else {
                        // If the match is incorrect, we do not do anything, just prevent the drop
                       // alert('Incorrect match! Try again.');
                    }
                });
            });
        });