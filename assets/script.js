const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Sélection des éléments des flèches gauche et droite
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// Ajout de l'event listener pour la flèche gauche
leftArrow.addEventListener('click', function() {
    console.log('Flèche gauche cliquée');
});

// Ajout de l'event listener pour la flèche droite
rightArrow.addEventListener('click', function() {
    console.log('Flèche droite cliquée');
});

// Gestion des bullet points (dots)
const dotsContainer = document.querySelector('.dots');

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




