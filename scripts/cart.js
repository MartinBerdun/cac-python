// Toggle bar menu
const btnCart = document.querySelector('.cont__icon__cart');
const containerCartItems = document.querySelector('.cont__cart__products');

btnCart.addEventListener('click', () => {
    containerCartItems.classList.toggle('hidden__cart');
})

// Add products to bar menu
const cartInfo = document.querySelector('.cart__product');
const rowProduct = document.querySelector('.row__product');

// Cards container
const productsList = document.querySelector('.cards__section');

// Products Array
let allProducts = [];

const totalValor = document.querySelector('.total__pay');
const countProducts = document.querySelector('#counter__products');

const cartEmpty = document.querySelector('.cart__empty');
const cartTotal = document.querySelector('.total__cart');

productsList.addEventListener('click', e => {
    if ( e.target.classList.contains('btn__add__cart') ) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h4').textContent,
            price: product.querySelector('p').textContent,
        }

        const exist = allProducts.some( product => product.title === infoProduct.title );

        if ( exist ) {
            const products = allProducts.map( product => {
                if ( product.title === infoProduct.title ) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            } )
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();
    }
});

rowProduct.addEventListener('click', e => {
    if ( e.target.classList.contains('icon__close') ) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter( product => product.title !== title );

        showHTML();
    }
})

// Show HTML Function
const showHTML = () => {

    if ( !allProducts.length ) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

    // Cleaning HTML
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach( product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart__product');
        containerProduct.innerHTML = 
        `
        <div class="info__cart__product">
            <span class="cart__product__store">${product.quantity}</span>
            <p class="cart__product__title">${product.title}</p>
            <span class="cart__product__price">${product.price}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon__close">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        `;

        rowProduct.append(containerProduct);

        total = total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;

    });

    totalValor.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
};