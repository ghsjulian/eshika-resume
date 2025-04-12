"use strict";
// Defined The Variables...
const menu = document.querySelector("#menu");
const navbtn = document.querySelector("#nav-btn");
const closer = document.querySelector("#nav-closer");

navbtn.onclick = () => {
    menu.classList.toggle("mobile-menu");
    closer.classList.toggle("nav-closer");
};
closer.onclick = () => {
    menu.classList.toggle("mobile-menu");
    closer.classList.toggle("nav-closer");
};

const phrases = [
    "Digital Marketer",
    "SEO Expert",
    "Social Media Marketer",
    "Product Marketer",
    "E-Commerce Marketer"
];
const typingElement = document.getElementById("typing");
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isDeleting) {
        // Remove a character
        currentCharIndex--;
        typingElement.textContent = currentPhrase.substring(
            0,
            currentCharIndex
        );

        if (currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
        }
    } else {
        // Add a character
        currentCharIndex++;
        typingElement.textContent = currentPhrase.substring(
            0,
            currentCharIndex
        );

        if (currentCharIndex === currentPhrase.length) {
            isDeleting = true;
        }
    }

    // Adjust typing speed
    const typingSpeed = isDeleting ? 100 : 100; // Speed for deleting is faster
    setTimeout(type, typingSpeed);
}

type();
