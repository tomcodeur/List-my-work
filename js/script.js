// Récupération des mes éléments HTMl

let input = document.querySelector('.input');
let button = document.querySelector('.--valider');
let textMessage = document.querySelector('.text__body');
let containerComplet = document.querySelector('.container.is-max-desktop');
let notif = document.querySelector('.notification.is-success');
let exitNotif = document.querySelector('.delete');

// Initialisation de mes variables résultat et compteur de tâche

let inputResultat;
let posts = 0;

// Bouton désactivé de base

button.disabled = true;

// Si input est vide, il est impossible d'ajouter une tâche (bouton désactivé)

input.addEventListener('keyup', () => {

    
    if(input.value != "") {

        button.disabled = false;


    } else {

        button.disabled = true;

    }

});

// Au click sur le bonton Ajouter


button.addEventListener('click', () => {
    
    let containerMessage = document.createElement('div');
    containerMessage.className = "notification is-info";

    notif.style.display = "block";
    posts ++;
    inputResultat = input.value;
    containerMessage.innerHTML = "<p>" + posts + " " + " # " + inputResultat + "</p>";
    document.querySelector('.--bottom').prepend(containerMessage);
    input.value = "";

    // Supprimer une tâche présente dans la liste

    containerMessage.addEventListener('click', () => {
        
        containerMessage.remove();
        posts --;

    })    

});

// Au click sur la croix de la notification d'ajout

exitNotif.addEventListener('click', () => {

    notif.style.display = "none";

});




