const forma = document.getElementById('forma');
const nazivFilma = document.getElementById('naziv-filma');
const godinaFilma = document.getElementById('godina-filma');
const slikaFilma = document.getElementById('slika-filma');

forma.addEventListener('submit', (e) => {

    //STANDARD FETCH REQUEST

    // fetch('https://baza-filmova.herokuapp.com/dodaj-film', {
    //     method: 'post',
    //     headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ naziv: nazivFilma.value, godina: godinaFilma.value, slika: slikaFilma.value })
    //         .then(res => res.text())
    //         .then(res => console.log(res))
    // })
    
    // e.preventDefault();

    //AXIOS REQUEST

    axios.post('https://baza-filmova.herokuapp.com/dodaj-film', {
    naziv: nazivFilma.value,
    godina: godinaFilma.value,
    slika: slikaFilma.value
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    
})
    
   
