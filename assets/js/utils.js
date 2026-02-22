// Utility Functions for RideGo
// Common helper functions used across the application

const Utils = {
    /**
     * Format date to readable string
     */
    formatDate: function(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-IN', options);
    },

    /**
     * Format date and time
     */
    formatDateTime: function(dateString, timeString) {
        const date = this.formatDate(dateString);
        return `${date}, ${timeString}`;
    },

    /**
     * Calculate days between two dates
     */
    calculateDays: function(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    },

    /**
     * Format currency (Indian Rupees)
     */
    formatCurrency: function(amount) {
        return '₹' + amount.toLocaleString('en-IN');
    },

    /**
     * Generate unique ID
     */
    generateId: function(prefix = '') {
        return prefix + Date.now() + Math.random().toString(36).substr(2, 9);
    },

    /**
     * Validate email
     */
    validateEmail: function(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },

    /**
     * Validate phone number (Indian)
     */
    validatePhone: function(phone) {
        const regex = /^[6-9]\d{9}$/;
        return regex.test(phone);
    },

    /**
     * Validate pincode (Indian)
     */
    validatePincode: function(pincode) {
        const regex = /^[1-9][0-9]{5}$/;
        return regex.test(pincode);
    },

    /**
     * Show success message
     */
    showSuccess: function(message, duration = 3000) {
        this.showNotification(message, 'success', duration);
    },

    /**
     * Show error message
     */
    showError: function(message, duration = 3000) {
        this.showNotification(message, 'error', duration);
    },

    /**
     * Show notification
     */
    showNotification: function(message, type = 'info', duration = 3000) {
        // Remove existing notifications
        const existing = document.querySelector('.ridego-notification');
        if (existing) {
            existing.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `ridego-notification ridego-notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${this.getNotificationIcon(type)}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;

        // Add styles if not already present
        if (!document.getElementById('ridego-notification-styles')) {
            const style = document.createElement('style');
            style.id = 'ridego-notification-styles';
            style.textContent = `
                .ridego-notification {
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    z-index: 10000;
                    min-width: 300px;
                    max-width: 500px;
                    padding: 1rem 1.5rem;
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                    animation: slideIn 0.3s ease;
                    font-family: 'Inter', sans-serif;
                }
                
                @keyframes slideIn {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                .ridego-notification-success {
                    background: #D1FAE5;
                    color: #065F46;
                    border-left: 4px solid #10B981;
                }
                
                .ridego-notification-error {
                    background: #FEE2E2;
                    color: #991B1B;
                    border-left: 4px solid #DC2626;
                }
                
                .ridego-notification-info {
                    background: #DBEAFE;
                    color: #1E3A8A;
                    border-left: 4px solid #2563EB;
                }
                
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                
                .notification-icon {
                    font-size: 1.25rem;
                }
                
                .notification-message {
                    flex: 1;
                    font-size: 0.938rem;
                    font-weight: 500;
                }
                
                .notification-close {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: inherit;
                    padding: 0;
                    line-height: 1;
                    opacity: 0.7;
                    transition: opacity 0.2s;
                }
                
                .notification-close:hover {
                    opacity: 1;
                }
            `;
            document.head.appendChild(style);
        }

        // Add to page
        document.body.appendChild(notification);

        // Auto remove after duration
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    },

    /**
     * Get notification icon based on type
     */
    getNotificationIcon: function(type) {
        const icons = {
            success: '✓',
            error: '✕',
            info: 'ℹ'
        };
        return icons[type] || icons.info;
    },

    /**
     * Get status badge HTML
     */
    getStatusBadge: function(status) {
        const badges = {
            active: '<span class="status-badge status-active">Active</span>',
            upcoming: '<span class="status-badge status-upcoming">Upcoming</span>',
            completed: '<span class="status-badge status-completed">Completed</span>',
            cancelled: '<span class="status-badge status-cancelled">Cancelled</span>',
            pending: '<span class="status-badge status-pending">Pending</span>'
        };
        return badges[status] || badges.pending;
    },

    /**
     * Debounce function
     */
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Convert image to base64
     */
    imageToBase64: function(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    },

    /**
     * Format file size
     */
    formatFileSize: function(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    },

    /**
     * Get greeting based on time
     */
    getGreeting: function() {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 17) return 'Good Afternoon';
        return 'Good Evening';
    },

    /**
     * Capitalize first letter
     */
    capitalize: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    /**
     * Get user initials from name
     */
    getInitials: function(firstName, lastName) {
        return (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();
    },

    /**
     * Sort array by key
     */
    sortBy: function(array, key, order = 'asc') {
        return array.sort((a, b) => {
            if (order === 'asc') {
                return a[key] > b[key] ? 1 : -1;
            } else {
                return a[key] < b[key] ? 1 : -1;
            }
        });
    },

    /**
     * Filter array by search term
     */
    filterBySearch: function(array, searchTerm, keys) {
        const term = searchTerm.toLowerCase();
        return array.filter(item => {
            return keys.some(key => {
                const value = item[key];
                return value && value.toString().toLowerCase().includes(term);
            });
        });
    },

    /**
     * Get days until date
     */
    getDaysUntil: function(dateString) {
        const date = new Date(dateString);
        const today = new Date();
        const diffTime = date - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    },

    /**
     * Check if date is today
     */
    isToday: function(dateString) {
        const date = new Date(dateString);
        const today = new Date();
        return date.toDateString() === today.toDateString();
    },

    /**
     * Check if date is in past
     */
    isPast: function(dateString) {
        const date = new Date(dateString);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    },

    /**
     * Scroll to top
     */
    scrollToTop: function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    /**
     * Copy to clipboard
     */
    copyToClipboard: function(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                this.showSuccess('Copied to clipboard!');
            });
        } else {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            this.showSuccess('Copied to clipboard!');
        }
    },

    /**
     * Export data to JSON file
     */
    exportToJSON: function(data, filename) {
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(url);
    },

    /**
     * Clear all app data (for testing/demo)
     */
    clearAllData: function() {
        if (confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
            localStorage.removeItem('ridego_users');
            localStorage.removeItem('ridego_bookings');
            localStorage.removeItem('ridego_session');
            localStorage.removeItem('ridego_currentUser');
            localStorage.removeItem('ridego_isLoggedIn');
            this.showSuccess('All data cleared successfully!');
            setTimeout(() => {
                window.location.href = '/';
            }, 1500);
        }
    }
};

// Add status badge styles
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
        .status-badge {
            display: inline-block;
            padding: 0.375rem 0.875rem;
            border-radius: 20px;
            font-size: 0.813rem;
            font-weight: 600;
            text-transform: capitalize;
        }
        
        .status-active {
            background: #D1FAE5;
            color: #065F46;
        }
        
        .status-upcoming {
            background: #DBEAFE;
            color: #1E3A8A;
        }
        
        .status-completed {
            background: #E5E7EB;
            color: #374151;
        }
        
        .status-cancelled {
            background: #FEE2E2;
            color: #991B1B;
        }
        
        .status-pending {
            background: #FEF3C7;
            color: #92400E;
        }
    `;
    document.head.appendChild(style);
}
