// Get buttons and book elements
const openButton = document.getElementById('open-book');
const resetButton = document.getElementById('reset-book');
const pages = document.querySelectorAll('.page, .cover');

// Function to open the book
openButton.addEventListener('click', () => {
    let delay = 0;
    pages.forEach((page) => {
        setTimeout(() => {
            page.classList.add('turn');
        }, delay);
        delay += 150; // Stagger each page by 150ms
    });
});

// Function to reset the book
resetButton.addEventListener('click', () => {
    pages.forEach((page) => {
        page.classList.remove('turn');
    });
});
