const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection des éléments des flèches gauches et droites
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// Sélection des autres éléments HTML
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');

// Event listener pour la flèche gauche (précédente)
leftArrow.addEventListener('click', function() {
    // Aller à la diapositive précédente si ce n'est pas la première
    if (currentSlide > 0) {
        currentSlide--;  // Aller à la diapositive précédente
        updateSlide(currentSlide);
    }
});

// Event listener pour la flèche droite (suivante)
rightArrow.addEventListener('click', function() {
    // Aller à la diapositive suivante si ce n'est pas la dernière
    if (currentSlide < slides.length - 1) {
        currentSlide++;  // Aller à la diapositive suivante
        updateSlide(currentSlide);
    }
});

// Création des bullet points en fonction du nombre de slides
slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');

    // Si c'est le premier slide, lui ajouter la classe 'dot_selected'
    if (index === 0) {
        dot.classList.add('dot_selected');
    }

    // Ajouter le dot dans le conteneur .dots
    dotsContainer.appendChild(dot);
});

// Variable pour garder la trace de l'index de la diapositive active
let currentSlide = 0;

// Fonction pour mettre à jour l'image, le texte et les bullet points
function updateSlide(index) {
    // Mise à jour de l'image
    bannerImg.setAttribute('src', `./assets/images/slideshow/${slides[index].image}`);

    // Mise à jour du texte
    bannerText.innerHTML = slides[index].tagLine;

    // Mise à jour des bullet points
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('dot_selected');
        if (i === index) {
            dot.classList.add('dot_selected');
        }
    });
}




