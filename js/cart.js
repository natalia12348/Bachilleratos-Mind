// Cart functionality

// Remove item from cart
function removeItem(button) {
    const cartItem = button.closest('.cart-item');
    cartItem.style.opacity = '0';
    cartItem.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        cartItem.remove();
        updateCartTotal();
    }, 300);
}

// Update cart total
function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    const itemCount = cartItems.length;
    const cartSubtitle = document.querySelector('.cart-subtitle');

    if (cartSubtitle) {
        if (itemCount === 0) {
            cartSubtitle.textContent = 'Your cart is empty';
        } else if (itemCount === 1) {
            cartSubtitle.textContent = '1 item in your cart';
        } else {
            cartSubtitle.textContent = `${itemCount} items in your cart`;
        }
    }

    // Calculate total
    let total = 0;
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.cart-item-price').textContent.replace('$', ''));
        total += price;
    });

    // Update total in order summary
    const itemsRow = document.querySelector('.order-summary-row .order-summary-value');
    const totalValue = document.querySelector('.order-summary-total-value');

    if (itemsRow) {
        itemsRow.textContent = '$' + total.toFixed(2);
    }
    if (totalValue) {
        totalValue.textContent = '$' + total.toFixed(2);
    }
}

// Continue shopping button
document.addEventListener('DOMContentLoaded', function () {
    const continueShoppingBtn = document.querySelector('.continue-shopping-btn');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', () => {
            window.location.href = 'store.html';
        });
    }
});
