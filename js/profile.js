// Back button functionality
document.addEventListener('DOMContentLoaded', function () {
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function () {
            window.history.back();
        });
    }
});
