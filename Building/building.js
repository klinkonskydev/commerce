const cardAdd = document.querySelector('#btn-card')


let contador = 0;

const cardNumb = document.querySelector('#number')
cardNumb.innerHTML = contador;

cardAdd.addEventListener('click', function() {
    contador++

    cardNumb.innerHTML = contador;
})