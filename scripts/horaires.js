

// ce script affiche en vert le jour si ouvert ou rouge si fermé
(function(){
    document.addEventListener('DOMContentLoaded', ()=>{
        let today = new Date();
        let jour = today.getDay();
    
        if(jour === 1 || jour === 4 || jour === 5 || jour === 6){
            ouvert = document.getElementById(jour).style.color = 'green';
            heures = document.getElementById(jour).nextElementSibling;
            heures.style.color = 'green';
        }
        else{
            ouvert = document.getElementById(jour).style.color = 'red';
            heures = document.getElementById(jour).nextElementSibling;
            heures.style.color = 'red';
        }
    
    
    });
})()
