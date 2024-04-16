/*partie pop-up*/
document.addEventListener("DOMContentLoaded",function(){
    for (let i = 0; i < 5; i++) {
        document.getElementsByClassName("bouton")[i].addEventListener("click",function(){
            document.getElementsByClassName("pop-up")[i].classList.add("active");
        });
        document.getElementsByClassName("bouton_retour")[i].addEventListener("click",function(){
            document.getElementsByClassName("pop-up")[i].classList.remove("active");
        });
    }
});

/* partie selection de place*/
const bouton = document.querySelectorAll('.bouton');
const prixElements = document.querySelectorAll('.prix');
const places = document.querySelectorAll('.place:not(.reserve)');




Array.from(bouton).forEach((button, index) => {
    button.addEventListener('click', function() {
        let prix_total = 0;
        let nombre_place = 0;

        const prixText = prixElements[index].textContent;
        prix = parseFloat(prixText.match(/\d+/));

        const nombre = document.getElementsByClassName('nombre')[index];
        const Totale= document.getElementsByClassName('Totale')[index];

        Array.from(places).forEach((place, index) => {
            place.addEventListener('click', e => {
                if (e.target.classList.contains('place') && !e.target.classList.contains('reserve')) {
                    e.target.classList.toggle('select');
                    if (e.target.classList.contains('select')) {
                        nombre_place++;
                        prix_total += prix;
                    } else {
                        nombre_place--;
                        prix_total -= prix;
                        
                    }
                    Totale.textContent =  prix_total;
                    nombre.textContent = nombre_place;
                    
                }
            });
        });
    });
});

// Réinitialiser les sélections lorsque le bouton retour est cliqué
for (let i = 0; i < 5; i++) {
    const bouton_retour = document.getElementsByClassName("bouton_retour")[i];
    bouton_retour.addEventListener('click', function() {
        const placesSelectionnees = document.querySelectorAll('.place.select');
        placesSelectionnees.forEach(place => {
            place.classList.remove('select');
    });
});
}



