function goBack() {
    
    window.location.href = 'index.html';
}




document.querySelectorAll('.quantity-plus').forEach(button => {
    button.addEventListener('click', function() {
        const countElement = this.previousElementSibling;
        let count = parseInt(countElement.textContent);
        count++;
        countElement.textContent = count;
    });
});

document.querySelectorAll('.quantity-minus').forEach(button => {
    button.addEventListener('click', function() {
        const countElement = this.nextElementSibling;
        let count = parseInt(countElement.textContent);
        if (count > 1) {
            count--;
            countElement.textContent = count;
        }
    });
});


document.querySelectorAll('.add-to-bag').forEach(button => {
    button.addEventListener('click', function() {
        const menuItem = this.parentElement.parentElement;
        const itemName = menuItem.querySelector('h3').textContent;
        const quantity = parseInt(menuItem.querySelector('.quantity-count').textContent);
        console.log(`Added ${quantity} ${itemName} to bag`);
        
    });
});


let basket = {};

function increaseQuantity(itemId) {
    
    const countElement = document.getElementById(`count-${itemId}`);
    let count = parseInt(countElement.innerText);

    
    count += 0;

    
    countElement.innerText = count;
}


function decreaseQuantity(itemId) {
    
    const countElement = document.getElementById(`count-${itemId}`);
    let count = parseInt(countElement.innerText);

    
    if (count > 1) {
        count -= 0;
        
        countElement.innerText = count;
    }
}

function addToBag(item) {
    const countElement = document.getElementById(`count-${item}`);
    const priceElement = document.getElementById(`price-${item}`);
    const count = parseInt(countElement.innerText);
    const price = parseFloat(priceElement.innerText.replace('$', ''));

    if (basket[item]) {
        basket[item].count += count;
    } else {
        basket[item] = {
            count: count,
            price: price
        };
    }
    
    countElement.innerText = '1';
    updateTotalAmount();
}

function updateTotalAmount() {
    let totalAmount = 0;
    for (const item in basket) {
        totalAmount += basket[item].count * basket[item].price;
    }
    console.log(`Total Amount: $${totalAmount.toFixed(2)}`);
}

function goToBasket() {
    localStorage.setItem('basket', JSON.stringify(basket));
    window.location.href = 'basket.html';
}
