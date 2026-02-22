// Authentication Guard - Include this in all protected pages
// This script will automatically redirect unauthorized users to login

(function() {
    // Check if user is authenticated
    if (!AuthService || !AuthService.isAuthenticated()) {
        alert('Please login to access this page');
        window.location.href = '../login.html';
        return;
    }

    // Get current user
    const currentUser = AuthService.getCurrentUser();
    
    // Personalize welcome messages if they exist
    const welcomeElement = document.getElementById('welcomeMessage');
    if (welcomeElement && currentUser) {
        const currentText = welcomeElement.textContent;
        if (currentText.includes('Traveler')) {
            welcomeElement.textContent = `Welcome Back, ${currentUser.firstName}!`;
        }
    }

    // Setup logout buttons
    document.addEventListener('DOMContentLoaded', function() {
        const logoutButtons = document.querySelectorAll('#logoutBtn, .logout-btn');
        logoutButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                if (confirm('Are you sure you want to logout?')) {
                    AuthService.logout();
                    alert('You have been logged out successfully');
                    window.location.href = '../login.html';
                }
            });
        });
    });
})();
