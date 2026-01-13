// Notification dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const notificationBtn = document.querySelector('.notification-btn');
    const notificationDropdown = document.getElementById('notificationDropdown');
    const closeBtn = document.querySelector('.close-dropdown-btn');

    if (notificationBtn && notificationDropdown) {
        notificationBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            notificationDropdown.classList.toggle('show');
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                notificationDropdown.classList.remove('show');
            });
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!notificationDropdown.contains(e.target) && !notificationBtn.contains(e.target)) {
                notificationDropdown.classList.remove('show');
            }
        });
    }

    // Mark all as read functionality
    const markReadLink = document.querySelector('.mark-read-link');
    if (markReadLink) {
        markReadLink.addEventListener('click', function(e) {
            e.preventDefault();
            const notificationItems = document.querySelectorAll('.notification-item');
            notificationItems.forEach(item => {
                const indicator = item.querySelector('.notification-indicator');
                if (indicator) {
                    indicator.style.display = 'none';
                }
            });
            const notificationCount = document.querySelector('.notification-count');
            if (notificationCount) {
                notificationCount.textContent = '0 unread';
            }
            const notificationBadge = document.querySelector('.notification-badge');
            if (notificationBadge) {
                notificationBadge.style.display = 'none';
            }
        });
    }
});
