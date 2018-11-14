// Uzimamo podatke iz API-ja i smestamo ih u HTML koji dinamicki kreiramo

const div = document.getElementById('div');


fetch('https://baza-filmova.herokuapp.com/filmovi/')
    .then (response => response.json())
    .then (data => {

        for(let i=0; i<data.length; i++) {

            div.innerHTML += `<p>${data[i].naziv}</p>`;
            div.innerHTML += `<p>${data[i].godina}</p>`;
            const slika = data[i].slika;

            const slike = document.createElement('img');
            slike.src = slika;
            div.appendChild(slike);
            
            
            
            }
    })


    
