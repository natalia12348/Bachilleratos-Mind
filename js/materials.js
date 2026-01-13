// Download functionality
document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('.material-download');
    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const materialItem = button.closest('.material-item');
            const materialName = materialItem.querySelector('.material-name').textContent;

            // Show a download notification
            alert(`Downloading: ${materialName}`);

            // In a real application, this would trigger an actual file download
            // For demo purposes, we're just showing an alert
        });
    });
});
