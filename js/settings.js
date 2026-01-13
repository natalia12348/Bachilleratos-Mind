// Settings page functionality
document.addEventListener('DOMContentLoaded', function () {
    const backBtn = document.querySelector('.back-btn');
    const saveBtn = document.querySelector('.save-changes-btn');

    // Back button functionality
    backBtn.addEventListener('click', function () {
        window.history.back();
    });

    // Save changes functionality
    saveBtn.addEventListener('click', function () {
        // Show a simple alert for now - in a real app this would save to backend
        alert('Settings saved successfully!');
    });
});
