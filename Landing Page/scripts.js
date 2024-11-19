// scripts.js

// Feature: Scroll to sections when clicking navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Offset for smooth scroll
                behavior: 'smooth'
            });
        }
    });
});

// Feature: Button click animations
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 300);
    });
});

// Feature: Display a welcome alert when "Get Started" is clicked
const getStartedButton = document.getElementById('get-started');
if (getStartedButton) {
    getStartedButton.addEventListener('click', () => {
        alert('Welcome to Byte Babes & Guy! Start your journey today.');
    });
}

// Feature: Update the date in the footer dynamically
const footer = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} Byte Babes & Guy. All rights reserved.`;

// Feature: Affirmation generator (placeholder affirmations)
const affirmations = [
    "You are capable of achieving great things!",
    "Believe in yourself, and you can do anything.",
    "Today is full of possibilities.",
    "Your journey matters, take one step at a time.",
    "You are stronger than you think."
];

const affirmationButton = document.getElementById('sign-up');
if (affirmationButton) {
    affirmationButton.addEventListener('click', () => {
        const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
        alert(`Daily Affirmation: ${randomAffirmation}`);
    });
}
