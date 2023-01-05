var adresse = document.getElementById('adresse');
    ville = document.getElementById('ville');

var button = document.getElementById('button');

alert('cc');


button.addEventListener('click', function(event){

    event.preventDefault();
    

if(adresse.value == "")
    {
        adresse.innerHTML = "Champ vide !!";
        console.log("ERROR adresse");
    }
    else
    {
        adresse.innerHTML = '😊';
        console.log('OK')
    }


    
    if(ville.value == "")
    {
        ville.innerHTML = "Champ vide !!";
        console.log("ERROR ville");
    }
    else
    {
        adresse.innerHTML = '😊';
        console.log('OK')
    }



})