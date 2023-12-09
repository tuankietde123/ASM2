let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Chicken uruguay',
        image: '1.PNG',
        price: 120000
    },
    {
        id: 2,
        name: 'roasted chicken',
        image: '2.PNG',
        price: 120000
    },
    {
        id: 3,
        name: 'salmon salad',
        image: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'Soup Pumpskin Russia',
        image: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: 'Salad ',
        image: '5.PNG',
        price: 320000
    },
    {
        id: 6,
        name: 'Pizza',
        image: '6.PNG',
        price: 120000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}" alt="${value.name}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}

initApp();
function addToCard(key){
    if(listCards[key] == null){
        // Copy product from list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
        listCards[key].image = products[key].image; // Thêm dòng này để sao chép thuộc tính image
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price;
            count += value.quantity;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}" alt="${value.name}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });

    if (count === 0) {
        total.innerText = "No product to pay";
    } else {
        total.innerText = totalPrice.toLocaleString();
    }

    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

total.addEventListener('click', () => {
    if (total.innerText === "No product to pay") {
        alert('No product to pay');
    } else {
        alert('Pay success');
    }
});


