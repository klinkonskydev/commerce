let cartAdd = document.querySelector('#btn-card')

let cartNumb = document.querySelector('#number')

let car = document.querySelector('#car')

let modal = document.querySelector('#modal')

let itemsModal = document.querySelector('#modal-items')

let modalPrice = document.querySelector('#modal-price')

let removeButton = document.querySelector('#remove-item')

// Criou o contador 
let contador = 0;
// colocou ele no cart-number
cartNumb.innerHTML = contador;

// addEventListerner ao clicar no cart

const Modal = {
    toggleShop(){
        modal.classList.toggle('active')
        
        itemsModal.innerHTML = contador

        modalPrice.innerHTML = this.toMoney();
    },
    
    counteradd(){
        ++contador;
        cartNumb.innerHTML = contador;

        modalPrice.innerHTML = this.toMoney();
    },

    addModal(){
        ++contador
        itemsModal.innerHTML = contador
        cartNumb.innerHTML = contador;

        modalPrice.innerHTML = this.toMoney();

              
        if (removeButton.hasAttribute('disabled') && contador > 0 ){   
            removeButton.removeAttribute('disabled')
        }
    }, 
    
    decreaseModal(){

        if( contador > 0 )
        {
            --contador
            itemsModal.innerHTML = contador
            cartNumb.innerHTML = contador;

            modalPrice.innerHTML = this.toMoney();

        } 
        if( contador <= 0 ) {
            removeButton.setAttribute('disabled', 'disabled')
        }
    },

    toMoney()
    {
        let price = document.querySelector('#price')
        price = price.textContent
        price = price.replace( 'R$ ', '')
        price = price.replace( ',', '.' )
        price = +price

    
        let modalTotal = contador * price;
        modalTotal = modalTotal.toFixed(2)
        return modalTotal
    }
}