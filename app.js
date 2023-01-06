var adresse = document.getElementById('adresse');
    error_adresse = document.getElementById('error_adresse');

    ville = document.getElementById('ville');
    error_ville = document.getElementById('error_ville');


var button = document.getElementById('button');




button.addEventListener('click', function(event){

    event.preventDefault();
    // alert('Votre formulaire a bien été envoyer !');
    

if(adresse.value == "")
    {
        error_adresse.innerHTML = "Champ vide !!";
        console.log("ERROR adresse");
    }
    else
    {
        error_adresse.innerHTML = '😊';
        console.log('OK')
    }


    
    if(ville.value == "")
    {
        error_ville.innerHTML = "Champ vide !!";
        console.log("ERROR ville");
    }
    else
    {
        error_ville.innerHTML = '😊';
        console.log('OK')
    }



})