// Description: This script is responsible for fetching the product data from the server and rendering the products and category filter.
// The product data is stored in products.json
// A json array based on a simulated database output.

// It is definately bloated and could be refactored to be more efficient and readable.
// But it is a good example of web functionalities.

document.addEventListener('DOMContentLoaded', function () {
    fetch('/scripts/products.json')
        .then(response => response.json())
        .then(data => {
            displayProducts(data);
            displayCategories(data);
        })
        .then(createCookie())
        .catch(error => console.error(error));
});

// A simple product filter based on category
document.getElementById('categoryFilter').addEventListener('change', function () {
    const selectedCategory = this.value;
    fetch('/scripts/products.json')
        .then(response => response.json())
        .then(data => displayProducts(data, selectedCategory))
        .catch(error => console.error('Error:', error));
});

// A function to display the catagories within the filter element
function displayCategories(products) {
    const categories = new Set(products.map(product => product.category));
    const categoriesFilter = document.getElementById('categoryFilter');
    categories.forEach(category => {
        categoriesFilter.innerHTML += `<option value="${category}">${category}</option>`;
    });
}

// A function to filter the products based on category
function filterProducts(products, category) {
    return products.filter(product => category === 'all' || product.category === category);
}

// A nice way to display stock levels in e-commerce by using blockouts and "Low Stock" warnings
function stockLevel(product) {
    if (product.stock < 5 && product.stock > 0) {
        return '<strong>Low stock!</strong> Only ' + product.stock + ' left';
    }
    else return product.stock > 0 ? 'In Stock' : '<p style="color:red;"><strong>Out of Stock</strong></p>';
}

// A simple buy button that is disabled when the product is out of stock
function buyButton(product) {
    return product.stock > 0 ? `<button class="btn btn-primary" onClick="buyProduct('${product.name}', '${product.link}', '${product.category}')">Add to cart</button>` : `<button class="btn btn-secondary" disabled>Out of Stock</button>`;
}

function displayProducts(products, category = 'all') {
    const filteredProducts = filterProducts(products, category);
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-4 col-md-6 mb-3';
        colDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <img src="${product.image}" width="374" height="374" class="card-img-top" alt="${product.name}">
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>Price:</strong> $${product.price}</p>
                    <p class="card-text"> ${stockLevel(product)}</p>
                    <div class="star-rating">
                        ${createStars(product.rating)}
                    </div>
                </div>
                <div class="card-footer">
                    ${buyButton(product)}
                </div>
                <div class="d-none">${product.link}
                </div>
            </div>
        `;
        productsContainer.appendChild(colDiv);
    });
}

// A nice little product rating feature
// Not worrying about decimal accuracy, just half star for any decimal.
function createStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            // Full star
            stars += '<span class="fa fa-star checked"></span>';
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            // Half star for decimal part
            stars += '<span class="fa fa-star-half-full checked"></span>';
        } else {
            // Empty star
            stars += '<span class="fa fa-star"></span>';
        }
    }
    return stars;
}
function buyProduct(productName, productLink, productCategory) {
    const cartNum = document.getElementById('cart-badge')
    checkCookies()
    if (productCategory == 'Retro') {
        try {
            alert("May the Schwartz be with you!");
            window.open(productLink, '_blank');


        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        alert(`${productName} added to cart`);

    }

}

const getCookie = (cookieKey) => {
    let cookieName = `${cookieKey}=`;
  
    let cookieArray = document.cookie.split(';');
  
    for (let cookie of cookieArray) {
  
      while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
  
      if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
}

function createCookie() {
    const d = new Date();
    d.setTime(d.getTime() + (10 * 60 * 1000));
    let expires = "expires"+d.toUTCString();
    document.cookie = "cart=" + "1" + ";" + expires + ";path=/";
}

// Doesnt seem to work as of yet. Cookies is run as undefined.
function updateCookie(addval) {
    let name = "cart="
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      
}

function checkCookies() {
    let cartnum = getCookie("cart");
    if (cartnum != "") {
        console.log(updateCookie(1));
    } else {
        createCookie();
    }
}