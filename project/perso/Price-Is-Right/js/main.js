// Sélection des éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

// Cacher l'erreur
error.style.display = "none";

// Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

// Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        error.style.display = 'inline';
    }
    else{
        error.style.display = "none";
    }
});

// Agir à l'envoire du formulaire
formulaire.addEventListener('submit', (e) =>{
    e.preventDefault();

    if(isNaN(input.value) || input.value == ""){
        input.style.borderColor = "red";
    }
    else{
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
});

// Créer la fonction vérifier
function verifier(nombre){
    let instructuion = document.createElement('div');

    if(nombre < nombreAleatoire){
        instructuion.textContent = "#" + coups + "(" + nombre + ") C'est Plus !";
        instructuion.className = "instruction plus";
    }
    else if(nombre > nombreAleatoire){
        instructuion.textContent = "#" + coups + "(" + nombre + ") C'est Moins !";
        instructuion.className = "instruction moins";
    }
    else{
        instructuion.textContent = "#" + coups + "(" + nombre + ") Félicitation vous avez trouvé le juste prix !";
        instructuion.className = "instruction fini";
        input.disabled = true;
    }

    document.querySelector("#instructions").prepend(instructuion);
}