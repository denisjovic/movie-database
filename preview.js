const slika = document.getElementById('slika-filma');
 slika.addEventListener('input', () => {
     const prev = document.createElement('img');
     prev.src = slika.value;
     preview.appendChild(prev);
 } );