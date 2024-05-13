
const productsDatabase = [
    { id: '1', name: 'Laptop', price: 999.99 },
    { id: '2', name: 'Smartphone', price: 699.99 },
    { id: '3', name: 'Tablet', price: 399.99 },
];

function task2Execute() {
    productId = document.getElementById("productId").value;
    getProductDetailes(productId, 
        (product) => {
            console.log('Деталі товару:', product);
        },
        () => {
            console.log('Товар не знайдено.');
        }
    );
}

function getProductDetailes(productId, successCallback, errorCallback) {
    const product = productsDatabase.find(p => p.id === productId);

    if (product) {
        successCallback(product);
    }
    else {
        errorCallback();
    }
}