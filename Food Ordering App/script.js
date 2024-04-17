document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartLink = document.getElementById('cart');
    const loginLink = document.getElementById('login');
    const cartItems = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    cartLink.addEventListener('click', showCart);
    loginLink.addEventListener('click', showLogin);

    function addToCart(event) {
        const button = event.target;
        const item = button.parentElement;
        const itemName = item.querySelector('.item-name').innerText;
        const itemPrice = parseFloat(item.querySelector('.item-price').innerText);

        const cartItem = {
            name: itemName,
            price: itemPrice
        };

        cartItems.push(cartItem);
        updateCartUI();
    }

    function updateCartUI() {
        // Update UI to display cart contents
        const cartContainer = document.getElementById('cart-container');
        cartContainer.innerHTML = ''; // Clear previous content

        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.textContent = ${item.name} - $${item.price};
            cartContainer.appendChild(cartItemElement);
        });
    }

    function showCart() {
        // Show cart contents
        const cartContainer = document.getElementById('cart-container');
        if (cartContainer.style.display === 'none' || cartContainer.style.display === '') {
            cartContainer.style.display = 'block';
        } else {
            cartContainer.style.display = 'none';
        }
    }

    function showLogin() {
        // Show login form
        alert('Login form will be shown here.');
    }
});