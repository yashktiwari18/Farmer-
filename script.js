// Product Data (Yeh database se bhi fetch ho sakta hai future me)
const products = [
    { name: "Fresh Tomatoes", price: "₹40/kg" },
    { name: "Organic Carrots", price: "₹50/kg" },
    { name: "Farm Fresh Milk", price: "₹60/ltr" },
    { name: "Pure Honey", price: "₹250/bottle" },
    { name: "Organic Wheat", price: "₹35/kg" }
];

// Cart array to store selected products
let cart = [];

// Function to load products dynamically
function loadProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="btn add-to-cart" data-index="${index}">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    document.querySelector(".featured-products").classList.add("show-products");

    // Attach event listeners to all "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", addToCart);
    });
}

// Function to add product to cart
function addToCart(event) {
    const productIndex = event.target.dataset.index;
    const selectedProduct = products[productIndex];
    cart.push(selectedProduct);
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");

    cartItems.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((product, index) => {
        totalPrice += parseInt(product.price.replace(/₹|\/kg|\/ltr|\/bottle/g, ""));

        const li = document.createElement("li");
        li.innerHTML = `
            ${product.name} - ${product.price}
            <button class="cart-item-remove" data-index="${index}">X</button>
        `;
        cartItems.appendChild(li);
    });

    cartTotal.innerText = totalPrice;
    cartCount.innerText = cart.length;

    // Add event listeners to remove buttons
    document.querySelectorAll(".cart-item-remove").forEach(button => {
        button.addEventListener("click", removeFromCart);
    });
}

// Function to remove item from cart
function removeFromCart(event) {
    const productIndex = event.target.dataset.index;
    cart.splice(productIndex, 1);
    updateCart();
}

// Function to clear cart
document.getElementById("clear-cart").addEventListener("click", () => {
    cart = [];
    updateCart();
});

// Toggle Cart Visibility
document.getElementById("cart-toggle").addEventListener("click", () => {
    document.querySelector(".cart-container").classList.toggle("hidden");
});

// Load products on page load
window.onload = loadProducts;

document.addEventListener("DOMContentLoaded", function () {
    // Dono forms ko by default hide karna
    document.getElementById("farmer-form").style.display = "none";
    document.getElementById("buyer-form").style.display = "none";

    // Function to toggle forms
    window.showForm = function (userType) {
        if (userType === "farmer") {
            document.getElementById("farmer-form").style.display = "block";
            document.getElementById("buyer-form").style.display = "none";
        } else if (userType === "buyer") {
            document.getElementById("farmer-form").style.display = "none";
            document.getElementById("buyer-form").style.display = "block";
        }
    };

    // Farmer Registration Form Submission
    document.getElementById("farmer-register-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let farmerData = {
            name: document.getElementById("farmer-name").value,
            age: document.getElementById("farmer-age").value,
            aadhar: document.getElementById("farmer-aadhar").value,
            location: document.getElementById("farmer-location").value,
            contact: document.getElementById("farmer-contact").value,
            plot: document.getElementById("farmer-plot").value
        
        };

        let aadhar = document.getElementById("farmer-aadhar").value;
        if (aadhar.length !== 12 || isNaN(aadhar)) {
            alert("Aadhar Number must be 12 digits!");
            event.preventDefault();
        }

        console.log("✅ Farmer Registered:", farmerData);
        alert("Farmer Registered Successfully!");
        this.reset();
        document.getElementById("farmer-form").style.display = "none"; // Hide after submit
    });

    // Buyer Registration Form Submission
    document.getElementById("buyer-register-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let buyerData = {
            name: document.getElementById("buyer-name").value,
            age: document.getElementById("buyer-age").value,
            aadhar: document.getElementById("buyer-aadhar").value,
            location: document.getElementById("buyer-location").value,
            contact: document.getElementById("buyer-contact").value
        };
        console.log("✅ Buyer Registered:", buyerData);
        alert("Buyer Registered Successfully!");
        this.reset();
        document.getElementById("buyer-form").style.display = "none"; // Hide after submit
    });
});



// GSAP Animation for Smooth Entry
document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".feature-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3
    });
});

// 🎨 Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});


function showForm(type) {
    document.getElementById("farmer-form").style.display = type === "farmer" ? "block" : "none";
    document.getElementById("buyer-form").style.display = type === "buyer" ? "block" : "none";
}

const products = [
    { name: "Fresh Tomatoes", price: "₹50/kg", image: "tomatoes.jpg" },
    { name: "Organic Potatoes", price: "₹40/kg", image: "potatoes.jpg" }
];

const productList = document.getElementById("product-list");
products.forEach(product => {
    const productCard = `<div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Add to Cart</button>
    </div>`;
    productList.innerHTML += productCard;
});




