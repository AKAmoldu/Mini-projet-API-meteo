
let villeChoisie ="barcelone";
recevoirTemperature(villeChoisie);
 
let changerVille = document.querySelector('#changer');
changerVille.addEventListener('click',()=>{

    let villeChoisie =  prompt('Veuillez indiquez une ville : ');
    recevoirTemperature(villeChoisie);
     
 });

function recevoirTemperature(ville){

    const url =" https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=0f409fb9a6957a851fe7a84c3a4abbab&units=metric";

    let requete = new XMLHttpRequest();


    requete.open('GET',url);


    requete.responseType = 'json';

    requete.send();

    requete.onload = function (){

        if(requete.readyState === XMLHttpRequest.DONE){

            if(requete.status === 200){

                let reponse = requete.response;
                let ville = reponse.name;

                let degres = reponse.main.temp;
                document.querySelector('#temperature_label').textContent = degres;
                document.querySelector('#ville').textContent = ville;
            }else{
                alert('Veuillez reesayez plus tard.')
            }
        }
    }

};





 
 