// Get buttons and book elements
const openButton = document.getElementById('open-book');
const resetButton = document.getElementById('reset-book');
const book = document.querySelector('.book');
const pages = document.querySelectorAll('.page, .cover');

// Function to open the book in the middle
openButton.addEventListener('click', () => {
    book.classList.add('open'); // Apply the open class to the book
});

// Function to reset the book
resetButton.addEventListener('click', () => {
    book.classList.remove('open'); // Remove the open class to reset the book
});
