// Déclaration des variables
const currentYear = new Date().getFullYear();
const spanCurrentYear = document.querySelector('#footerCurrentYear');
// console.log(currentYear);

// Charger l'année réelle en cours 
spanCurrentYear.textContent = currentYear;