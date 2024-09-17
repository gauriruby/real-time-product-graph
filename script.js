let products = [];

// Helper function to update the graphs
function updateGraphs() {
    const priceGraph = document.getElementById('price-graph');
    const ratingGraph = document.getElementById('rating-graph');
    
    // Clear the current graph display
    priceGraph.innerHTML = '';
    ratingGraph.innerHTML = '';

    // Populate the graphs with updated product data
    products.forEach(product => {
        const priceBar = document.createElement('div');
        const ratingBar = document.createElement('div');
        
        priceBar.classList.add('bar');
        priceBar.style.height = `${product.price * 2}px`;  // Adjust height based on price
        priceBar.innerHTML = `<span>${product.price}</span><div class="bar-label">${product.name}</div>`;
        
        ratingBar.classList.add('bar');
        ratingBar.style.height = `${product.rating * 40}px`;  // Adjust height based on rating (scaled)
        ratingBar.innerHTML = `<span>${product.rating}</span><div class="bar-label">${product.name}</div>`;

        priceGraph.appendChild(priceBar);
        ratingGraph.appendChild(ratingBar);
    });
}

// Add product when button is clicked
document.getElementById('add-product-btn').addEventListener('click', () => {
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const rating = parseFloat(document.getElementById('product-rating').value);

    if (name && !isNaN(price) && !isNaN(rating)) {
        products.push({ name, price, rating });
        updateGraphs();
        
        // Clear input fields after adding product
        document.getElementById('product-name').value = '';
        document.getElementById('product-price').value = '';
        document.getElementById('product-rating').value = '';
    } else {
        alert('Please enter valid product details.');
    }
});

// Sort by price
document.getElementById('sort-price-btn').addEventListener('click', () => {
    products.sort((a, b) => a.price - b.price);
    updateGraphs();
});

// Sort by rating
document.getElementById('sort-rating-btn').addEventListener('click', () => {
    products.sort((a, b) => a.rating - b.rating);
    updateGraphs();
});
