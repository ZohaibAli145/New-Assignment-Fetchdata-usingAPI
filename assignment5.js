document.addEventListener("DOMContentLoaded", function () {
    fetchData();
});

function fetchData() {
    fetch('https://fakestoreapi.com/products?sort=desc')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            renderProducts(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function renderProducts(products) {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = ''; 

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
    <h3>${product.title}</h3>
    <p><strong>Category:</strong> ${product.category}</p>
    <p><strong>Price:</strong> $${product.price}</p>
    <p><strong>Description:</strong> ${product.description}</p>
    <img src="${product.image}" alt="${product.title}" width="200">
`;
        productsContainer.appendChild(productElement);
    });
}