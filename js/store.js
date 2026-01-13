// Store page functionality

// Close toast
function closeToast() {
    const toast = document.getElementById('successToast');
    if (toast) {
        toast.style.display = 'none';
    }
}

// Show toast with auto-hide
function showToast(title) {
    const toast = document.getElementById('successToast');
    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.innerHTML = `<strong>${title}</strong> added to cart`;
    toast.style.display = 'flex';
    toast.style.opacity = '1';

    // Auto-hide after 5 seconds
    clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 300);
    }, 5000);
}

// Initialize initial toast timeout
setTimeout(() => {
    const toast = document.getElementById('successToast');
    if (toast && toast.style.display === 'flex') {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 300);
    }
}, 5000);

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.solid-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const card = button.closest('.product-card');
        const title = card.querySelector('.product-title').textContent;

        // Show toast notification
        showToast(title);

        // Update cart badge
        const cartBadge = document.querySelector('.cart-badge');
        const currentCount = parseInt(cartBadge.textContent);
        cartBadge.textContent = currentCount + 1;

        // Change button to "Go to Cart" with outline style
        button.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Go to Cart';
        button.classList.remove('solid-btn');
        button.classList.add('outline-btn');

        // Replace button to remove old event listeners
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);

        // Add click handler for cart navigation
        newButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'cart.html';
        });
    });
});

// Handle outline buttons that are already in the HTML (like the first card)
document.addEventListener('DOMContentLoaded', function () {
    const outlineButtons = document.querySelectorAll('.outline-btn');
    outlineButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'cart.html';
        });
    });
});

// Search functionality
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            const tag = card.querySelector('.product-tag').textContent.toLowerCase();

            if (title.includes(searchTerm) || tag.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}
