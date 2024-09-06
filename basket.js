function goBack() {
    
    window.location.href = 'index.html';
}

function loadBasket() {
    const basket = JSON.parse(localStorage.getItem('basket'));
    const basketItemsContainer = document.getElementById('basket-items');
    const totalAmountElement = document.getElementById('total-amount');

    let totalAmount = 0;

    for (const item in basket) {
        const basketItem = basket[item];
        const itemElement = document.createElement('div');
        itemElement.classList.add('basket-item');
        itemElement.innerHTML = `
            <h3>${item}</h3>
            <p>Quantity: ${basketItem.count}</p>
            <p>Price: $${(basketItem.price * basketItem.count).toFixed(2)}</p>
        `;
        basketItemsContainer.appendChild(itemElement);

        totalAmount += basketItem.count * basketItem.price;
    }

    totalAmountElement.innerText = `$${totalAmount.toFixed(2)}`;
}

function checkout() {
    
    alert('Checkout functionality not implemented yet');
}


window.onload = loadBasket;
