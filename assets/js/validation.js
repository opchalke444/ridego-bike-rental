// Enhanced Validation Utilities for RideGo
// Additional validation functions to improve form security and UX

const ValidationUtils = {
    /**
     * Validate Aadhar number (12 digits)
     */
    validateAadhar: function(aadhar) {
        const cleaned = aadhar.replace(/\s/g, '');
        if (!/^\d{12}$/.test(cleaned)) {
            return {
                valid: false,
                error: 'Aadhar number must be exactly 12 digits'
            };
        }
        return { valid: true };
    },

    /**
     * Validate Indian phone number
     */
    validatePhone: function(phone) {
        const cleaned = phone.replace(/[\s\-\(\)]/g, '');
        // Indian mobile numbers: 10 digits starting with 6-9
        if (!/^[6-9]\d{9}$/.test(cleaned)) {
            return {
                valid: false,
                error: 'Phone number must be 10 digits starting with 6-9'
            };
        }
        return { valid: true };
    },

    /**
     * Validate email format
     */
    validateEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                valid: false,
                error: 'Please enter a valid email address'
            };
        }
        return { valid: true };
    },

    /**
     * Validate date range
     */
    validateDateRange: function(startDate, endDate, minDays = 1) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (start < today) {
            return {
                valid: false,
                error: 'Start date cannot be in the past'
            };
        }

        if (end <= start) {
            return {
                valid: false,
                error: 'End date must be after start date'
            };
        }

        const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        if (days < minDays) {
            return {
                valid: false,
                error: `Minimum rental period is ${minDays} day(s)`
            };
        }

        return { valid: true, days };
    },

    /**
     * Sanitize input to prevent XSS
     */
    sanitizeInput: function(input) {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    },

    /**
     * Validate and format Indian pincode
     */
    validatePincode: function(pincode) {
        const cleaned = pincode.replace(/\s/g, '');
        if (!/^\d{6}$/.test(cleaned)) {
            return {
                valid: false,
                error: 'Pincode must be exactly 6 digits'
            };
        }
        return { valid: true };
    },

    /**
     * Validate driving license format
     */
    validateLicense: function(license) {
        // Indian DL format: 2 letters (state) + 2 digits + 4 digits + 7 digits
        // Example: DL1420110012345
        const dlPattern = /^[A-Z]{2}[0-9]{13}$/;
        const cleaned = license.replace(/[\s\-]/g, '').toUpperCase();
        
        if (!dlPattern.test(cleaned)) {
            return {
                valid: false,
                error: 'Invalid license format. Example: DL1420110012345'
            };
        }
        return { valid: true };
    },

    /**
     * Validate password strength
     */
    validatePassword: function(password) {
        if (password.length < 8) {
            return {
                valid: false,
                error: 'Password must be at least 8 characters long'
            };
        }

        let strength = 0;
        if (password.match(/[a-z]/)) strength++;
        if (password.match(/[A-Z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[^a-zA-Z0-9]/)) strength++;

        if (strength < 2) {
            return {
                valid: false,
                error: 'Password must contain at least 2 of: lowercase, uppercase, numbers, special characters'
            };
        }

        return { valid: true, strength };
    },

    /**
     * Check if localStorage is available and has space
     */
    checkStorageAvailability: function() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return { available: true };
        } catch (e) {
            return {
                available: false,
                error: 'localStorage is not available. Please enable cookies or use a different browser.'
            };
        }
    },

    /**
     * Show validation error message
     */
    showError: function(fieldId, message) {
        const field = document.getElementById(fieldId);
        if (field) {
            field.style.borderColor = 'var(--error, #DC2626)';
            
            // Remove existing error message
            const existingError = field.parentElement.querySelector('.validation-error');
            if (existingError) {
                existingError.remove();
            }
            
            // Add new error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'validation-error';
            errorDiv.style.color = 'var(--error, #DC2626)';
            errorDiv.style.fontSize = '0.875rem';
            errorDiv.style.marginTop = '0.25rem';
            errorDiv.textContent = message;
            field.parentElement.appendChild(errorDiv);
        }
    },

    /**
     * Clear validation error
     */
    clearError: function(fieldId) {
        const field = document.getElementById(fieldId);
        if (field) {
            field.style.borderColor = '';
            const errorDiv = field.parentElement.querySelector('.validation-error');
            if (errorDiv) {
                errorDiv.remove();
            }
        }
    },

    /**
     * Validate form data before submission
     */
    validateBookingForm: function(formData) {
        const errors = [];

        // Validate dates
        if (formData.startDate && formData.endDate) {
            const dateValidation = this.validateDateRange(formData.startDate, formData.endDate);
            if (!dateValidation.valid) {
                errors.push(dateValidation.error);
            }
        }

        // Validate phone
        if (formData.phone) {
            const phoneValidation = this.validatePhone(formData.phone);
            if (!phoneValidation.valid) {
                errors.push(phoneValidation.error);
            }
        }

        // Validate email
        if (formData.email) {
            const emailValidation = this.validateEmail(formData.email);
            if (!emailValidation.valid) {
                errors.push(emailValidation.error);
            }
        }

        // Validate Aadhar
        if (formData.aadhar) {
            const aadharValidation = this.validateAadhar(formData.aadhar);
            if (!aadharValidation.valid) {
                errors.push(aadharValidation.error);
            }
        }

        // Validate license
        if (formData.license) {
            const licenseValidation = this.validateLicense(formData.license);
            if (!licenseValidation.valid) {
                errors.push(licenseValidation.error);
            }
        }

        return {
            valid: errors.length === 0,
            errors: errors
        };
    }
};

// Check storage availability on load
if (typeof window !== 'undefined') {
    const storageCheck = ValidationUtils.checkStorageAvailability();
    if (!storageCheck.available) {
        console.warn('Storage Warning:', storageCheck.error);
    }
}
