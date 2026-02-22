// Authentication Service for RideGo
// Handles user registration, login, logout, and session management

const AuthService = {
    /**
     * Register a new user
     */
    register: function(userData) {
        try {
            const users = JSON.parse(localStorage.getItem('ridego_users') || '[]');
            
            // Check if email already exists
            if (users.find(u => u.email === userData.email)) {
                return { 
                    success: false, 
                    error: 'Email already registered. Please login instead.' 
                };
            }

            // Create new user object
            const newUser = {
                id: 'U' + Date.now() + Math.random().toString(36).substr(2, 9),
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                phone: userData.phone,
                password: userData.password, // In production, this should be hashed
                role: userData.role || 'user',
                address: userData.address,
                city: userData.city,
                state: userData.state,
                pincode: userData.pincode,
                businessName: userData.businessName || null,
                businessType: userData.businessType || null,
                profilePicture: null,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            // Add to users array
            users.push(newUser);
            localStorage.setItem('ridego_users', JSON.stringify(users));

            return { 
                success: true, 
                user: newUser,
                message: 'Registration successful!' 
            };
        } catch (error) {
            console.error('Registration error:', error);
            return { 
                success: false, 
                error: 'Registration failed. Please try again.' 
            };
        }
    },

    /**
     * Login user
     */
    login: function(email, password, role) {
        try {
            const users = JSON.parse(localStorage.getItem('ridego_users') || '[]');
            
            // Find user with matching credentials
            const user = users.find(u => 
                u.email === email && 
                u.password === password && 
                u.role === role
            );

            if (user) {
                // Create session
                const session = {
                    userId: user.id,
                    email: user.email,
                    role: user.role,
                    loginTime: new Date().toISOString()
                };

                // Store session and current user
                localStorage.setItem('ridego_session', JSON.stringify(session));
                localStorage.setItem('ridego_currentUser', JSON.stringify(user));
                localStorage.setItem('ridego_isLoggedIn', 'true');

                return { 
                    success: true, 
                    user: user,
                    message: 'Login successful!' 
                };
            }

            return { 
                success: false, 
                error: 'Invalid email, password, or role. Please check your credentials.' 
            };
        } catch (error) {
            console.error('Login error:', error);
            return { 
                success: false, 
                error: 'Login failed. Please try again.' 
            };
        }
    },

    /**
     * Logout user
     */
    logout: function() {
        localStorage.removeItem('ridego_session');
        localStorage.removeItem('ridego_currentUser');
        localStorage.removeItem('ridego_isLoggedIn');
    },

    /**
     * Check if user is authenticated
     */
    isAuthenticated: function() {
        return localStorage.getItem('ridego_isLoggedIn') === 'true';
    },

    /**
     * Get current logged-in user
     */
    getCurrentUser: function() {
        try {
            const userStr = localStorage.getItem('ridego_currentUser');
            return userStr ? JSON.parse(userStr) : null;
        } catch (error) {
            console.error('Error getting current user:', error);
            return null;
        }
    },

    /**
     * Update user profile
     */
    updateProfile: function(updatedData) {
        try {
            const currentUser = this.getCurrentUser();
            if (!currentUser) {
                return { success: false, error: 'No user logged in' };
            }

            // Get all users
            const users = JSON.parse(localStorage.getItem('ridego_users') || '[]');
            const userIndex = users.findIndex(u => u.id === currentUser.id);

            if (userIndex === -1) {
                return { success: false, error: 'User not found' };
            }

            // Update user data
            const updatedUser = {
                ...users[userIndex],
                ...updatedData,
                updatedAt: new Date().toISOString()
            };

            // Update in users array
            users[userIndex] = updatedUser;
            localStorage.setItem('ridego_users', JSON.stringify(users));

            // Update current user
            localStorage.setItem('ridego_currentUser', JSON.stringify(updatedUser));

            return { 
                success: true, 
                user: updatedUser,
                message: 'Profile updated successfully!' 
            };
        } catch (error) {
            console.error('Update profile error:', error);
            return { 
                success: false, 
                error: 'Failed to update profile' 
            };
        }
    },

    /**
     * Require authentication - redirect to login if not authenticated
     */
    requireAuth: function(requiredRole = null) {
        if (!this.isAuthenticated()) {
            window.location.href = '../login.html';
            return false;
        }

        if (requiredRole) {
            const user = this.getCurrentUser();
            if (user.role !== requiredRole) {
                alert('Access denied. Insufficient permissions.');
                window.location.href = '../index.html';
                return false;
            }
        }

        return true;
    },

    /**
     * Get session info
     */
    getSession: function() {
        try {
            const sessionStr = localStorage.getItem('ridego_session');
            return sessionStr ? JSON.parse(sessionStr) : null;
        } catch (error) {
            console.error('Error getting session:', error);
            return null;
        }
    },

    /**
     * Initialize demo users (for testing)
     */
    initializeDemoUsers: function() {
        const users = JSON.parse(localStorage.getItem('ridego_users') || '[]');
        
        if (users.length === 0) {
            const demoUsers = [
                {
                    id: 'U1',
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'user@demo.com',
                    phone: '9876543210',
                    password: 'password123',
                    role: 'user',
                    address: '123 Main Street',
                    city: 'Mumbai',
                    state: 'maharashtra',
                    pincode: '400001',
                    businessName: null,
                    businessType: null,
                    profilePicture: null,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                },
                {
                    id: 'V1',
                    firstName: 'Vendor',
                    lastName: 'Demo',
                    email: 'vendor@demo.com',
                    phone: '9876543211',
                    password: 'password123',
                    role: 'vendor',
                    address: '456 Vendor Street',
                    city: 'Goa',
                    state: 'goa',
                    pincode: '403001',
                    businessName: 'Goa Beach Rentals',
                    businessType: 'company',
                    profilePicture: null,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                },
                {
                    id: 'A1',
                    firstName: 'Admin',
                    lastName: 'User',
                    email: 'admin@demo.com',
                    phone: '9876543212',
                    password: 'password123',
                    role: 'admin',
                    address: '789 Admin Street',
                    city: 'Delhi',
                    state: 'delhi',
                    pincode: '110001',
                    businessName: null,
                    businessType: null,
                    profilePicture: null,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                }
            ];

            localStorage.setItem('ridego_users', JSON.stringify(demoUsers));
            console.log('Demo users initialized. Use these credentials to login:');
            console.log('User: user@demo.com / password123');
            console.log('Vendor: vendor@demo.com / password123');
            console.log('Admin: admin@demo.com / password123');
        }
    }
};

// Initialize demo users on load
if (typeof window !== 'undefined') {
    AuthService.initializeDemoUsers();
}
