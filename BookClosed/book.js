// Get buttons and book elements
const openButton = document.getElementById('open-book');
const book = document.querySelector('.book');

// Function to open the book in the middle
openButton.addEventListener('click', () => {
    book.classList.add('open'); // Apply the open class to the book
});
