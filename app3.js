let filteredArray = '';
let originalArray = '';
const target = document.getElementById('unos');
const div = document.getElementById('div');
const notification = document.getElementById('notification');
const ws = new WebSocket('ws://baza-filmova.herokuapp.com/filmovi')

ws.addEventListener('message', e => {
  notification.innerText = e.data;
  notification.style.display = 'block';
})

//homework: dodati notifikaciju HTML dodaj i zvuk :)

fetch('https://baza-filmova.herokuapp.com/filmovi/')
    .then(res => res.json())
    .then(data => {
        originalArray = data;
        init();

    });



function filter() {


    filteredArray = originalArray.filter(film => film.naziv.toLowerCase().includes(target.value.toLowerCase()));
    render(filteredArray);
}

function render(niz) {
    div.innerHTML = '';
    for (let i = 0; i < niz.length; i++) {
        const naziv = document.createElement('h3');
        const content = document.createTextNode(`${niz[i].naziv}`)
        naziv.appendChild(content);
        div.appendChild(naziv);

        const godina = document.createElement('h3');
        const content1 = document.createTextNode(`${niz[i].godina}`)
        godina.appendChild(content1);
        div.appendChild(godina);

        const button = document.createElement('button');
        button.innerText = 'x';
        div.appendChild(button);
        button.addEventListener('click', function () {
            obrisi(niz[i]._id)
        })

        const slike = niz[i].slika;
        const slika = document.createElement('img');
        slika.src = slike;
        div.appendChild(slika);
    }
}

function init() {
    render(originalArray)
}





function obrisi(id) {

    fetch('https://baza-filmova.herokuapp.com/obrisi-film/'
        , {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id })
        })
        .then(res => res.text())
        .then(res => {
          alert(res)
        window.location.reload();
        }) 


}

target.addEventListener('change', filter);