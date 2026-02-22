// Booking Service for RideGo
// Handles booking creation, retrieval, updates, and cancellations

const BookingService = {
    /**
     * Create a new booking
     */
    create: function(bookingData) {
        try {
            const currentUser = AuthService.getCurrentUser();
            if (!currentUser) {
                return { success: false, error: 'Please login to create a booking' };
            }

            const bookings = JSON.parse(localStorage.getItem('ridego_bookings') || '[]');
            
            // Calculate total amount
            const startDate = new Date(bookingData.startDate);
            const endDate = new Date(bookingData.endDate);
            const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
            
            const subtotal = days * bookingData.dailyRate;
            const gst = subtotal * 0.18; // 18% GST
            const total = subtotal + gst;

            // Create booking object
            const newBooking = {
                id: 'RG' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase(),
                userId: currentUser.id,
                userEmail: currentUser.email,
                userName: `${currentUser.firstName} ${currentUser.lastName}`,
                userPhone: currentUser.phone,
                
                // Bike details
                bikeId: bookingData.bikeId,
                bikeName: bookingData.bikeName,
                bikeCategory: bookingData.bikeCategory,
                bikeImage: bookingData.bikeImage,
                dailyRate: bookingData.dailyRate,
                
                // Booking details
                destination: bookingData.destination,
                destinationName: bookingData.destinationName,
                pickupLocation: bookingData.pickupLocation,
                dropLocation: bookingData.dropLocation,
                
                // Dates and times
                startDate: bookingData.startDate,
                endDate: bookingData.endDate,
                pickupTime: bookingData.pickupTime,
                dropTime: bookingData.dropTime,
                
                // Contact info
                fullName: bookingData.fullName || `${currentUser.firstName} ${currentUser.lastName}`,
                email: bookingData.email || currentUser.email,
                phone: bookingData.phone || currentUser.phone,
                
                // Vendor info
                vendorName: bookingData.vendorName,
                vendorContact: bookingData.vendorContact,
                
                // Payment details
                days: days,
                subtotal: subtotal,
                gst: gst,
                total: total,
                totalAmount: total, // Alias for easier access
                paymentMethod: bookingData.paymentMethod || 'pending',
                paymentStatus: bookingData.paymentStatus || 'pending',
                
                // Status
                status: this.determineStatus(bookingData.startDate, bookingData.endDate),
                
                // Timestamps
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            bookings.push(newBooking);
            localStorage.setItem('ridego_bookings', JSON.stringify(bookings));

            return { 
                success: true, 
                booking: newBooking,
                message: 'Booking created successfully!' 
            };
        } catch (error) {
            console.error('Create booking error:', error);
            return { 
                success: false, 
                error: 'Failed to create booking. Please try again.' 
            };
        }
    },

    /**
     * Determine booking status based on dates
     */
    determineStatus: function(startDate, endDate) {
        const now = new Date();
        const start = new Date(startDate);
        const end = new Date(endDate);

        if (now < start) {
            return 'upcoming';
        } else if (now >= start && now <= end) {
            return 'active';
        } else {
            return 'completed';
        }
    },

    /**
     * Get all bookings for current user
     */
    getUserBookings: function() {
        try {
            const currentUser = AuthService.getCurrentUser();
            if (!currentUser) {
                return [];
            }

            const allBookings = JSON.parse(localStorage.getItem('ridego_bookings') || '[]');
            return allBookings.filter(b => b.userId === currentUser.id);
        } catch (error) {
            console.error('Error getting user bookings:', error);
            return [];
        }
    },

    /**
     * Get bookings by status
     */
    getByStatus: function(status) {
        const userBookings = this.getUserBookings();
        
        if (status === 'all') {
            return userBookings;
        }
        
        return userBookings.filter(b => b.status === status);
    },

    /**
     * Get booking by ID
     */
    getById: function(bookingId) {
        try {
            const bookings = JSON.parse(localStorage.getItem('ridego_bookings') || '[]');
            return bookings.find(b => b.id === bookingId);
        } catch (error) {
            console.error('Error getting booking:', error);
            return null;
        }
    },

    /**
     * Update booking
     */
    update: function(bookingId, updateData) {
        try {
            const bookings = JSON.parse(localStorage.getItem('ridego_bookings') || '[]');
            const index = bookings.findIndex(b => b.id === bookingId);

            if (index === -1) {
                return { success: false, error: 'Booking not found' };
            }

            // Update booking
            bookings[index] = {
                ...bookings[index],
                ...updateData,
                updatedAt: new Date().toISOString()
            };

            localStorage.setItem('ridego_bookings', JSON.stringify(bookings));

            return { 
                success: true, 
                booking: bookings[index],
                message: 'Booking updated successfully!' 
            };
        } catch (error) {
            console.error('Update booking error:', error);
            return { 
                success: false, 
                error: 'Failed to update booking' 
            };
        }
    },

    /**
     * Cancel booking
     */
    cancel: function(bookingId) {
        try {
            const bookings = JSON.parse(localStorage.getItem('ridego_bookings') || '[]');
            const index = bookings.findIndex(b => b.id === bookingId);

            if (index === -1) {
                return { success: false, error: 'Booking not found' };
            }

            // Check if booking can be cancelled
            if (bookings[index].status === 'completed' || bookings[index].status === 'cancelled') {
                return { 
                    success: false, 
                    error: 'This booking cannot be cancelled' 
                };
            }

            // Update status to cancelled
            bookings[index].status = 'cancelled';
            bookings[index].cancelledAt = new Date().toISOString();
            bookings[index].updatedAt = new Date().toISOString();

            localStorage.setItem('ridego_bookings', JSON.stringify(bookings));

            return { 
                success: true, 
                booking: bookings[index],
                message: 'Booking cancelled successfully!' 
            };
        } catch (error) {
            console.error('Cancel booking error:', error);
            return { 
                success: false, 
                error: 'Failed to cancel booking' 
            };
        }
    },

    /**
     * Get active bookings count
     */
    getActiveCount: function() {
        const userBookings = this.getUserBookings();
        return userBookings.filter(b => b.status === 'active').length;
    },

    /**
     * Get upcoming bookings count
     */
    getUpcomingCount: function() {
        const userBookings = this.getUserBookings();
        return userBookings.filter(b => b.status === 'upcoming').length;
    },

    /**
     * Complete payment for booking
     */
    completePayment: function(bookingId, paymentData) {
        try {
            const bookings = JSON.parse(localStorage.getItem('ridego_bookings') || '[]');
            const index = bookings.findIndex(b => b.id === bookingId);

            if (index === -1) {
                return { success: false, error: 'Booking not found' };
            }

            // Update payment details
            bookings[index].paymentMethod = paymentData.method;
            bookings[index].paymentStatus = 'completed';
            bookings[index].paymentId = 'PAY' + Date.now();
            bookings[index].paidAt = new Date().toISOString();
            bookings[index].updatedAt = new Date().toISOString();

            localStorage.setItem('ridego_bookings', JSON.stringify(bookings));

            return { 
                success: true, 
                booking: bookings[index],
                message: 'Payment completed successfully!' 
            };
        } catch (error) {
            console.error('Payment error:', error);
            return { 
                success: false, 
                error: 'Payment failed. Please try again.' 
            };
        }
    },

    /**
     * Get booking statistics
     */
    getStats: function() {
        const userBookings = this.getUserBookings();
        
        return {
            total: userBookings.length,
            active: userBookings.filter(b => b.status === 'active').length,
            upcoming: userBookings.filter(b => b.status === 'upcoming').length,
            completed: userBookings.filter(b => b.status === 'completed').length,
            cancelled: userBookings.filter(b => b.status === 'cancelled').length,
            totalSpent: userBookings
                .filter(b => b.paymentStatus === 'completed')
                .reduce((sum, b) => sum + b.total, 0)
        };
    },

    /**
     * Initialize demo bookings (for testing)
     */
    initializeDemoBookings: function() {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser) return;

        const existingBookings = this.getUserBookings();
        if (existingBookings.length > 0) return;

        const demoBookings = [
            {
                bikeId: 'royal-enfield-himalayan',
                bikeName: 'Royal Enfield Himalayan',
                bikeCategory: 'Adventure Bike',
                bikeImage: 'Royal Enfield Himalayan.png',
                dailyRate: 2500,
                destination: 'manali',
                destinationName: 'Manali',
                pickupLocation: 'Manali Mall Road',
                dropLocation: 'Manali Mall Road',
                startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 2 days from now
                endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
                pickupTime: '10:00',
                dropTime: '18:00',
                vendorName: 'Manali Bike Rentals',
                vendorContact: '+91 9876543216',
                paymentStatus: 'completed',
                paymentMethod: 'card'
            },
            {
                bikeId: 'honda-activa-6g',
                bikeName: 'Honda Activa 6G',
                bikeCategory: 'Scooter',
                bikeImage: 'Honda Activa 6G.png',
                dailyRate: 800,
                destination: 'goa',
                destinationName: 'Goa',
                pickupLocation: 'Panjim City Center',
                dropLocation: 'Calangute Beach',
                startDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Started 2 days ago
                endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Ends in 2 days
                pickupTime: '09:00',
                dropTime: '19:00',
                vendorName: 'Goa Beach Rentals',
                vendorContact: '+91 9876543211',
                paymentStatus: 'completed',
                paymentMethod: 'upi'
            }
        ];

        demoBookings.forEach(booking => {
            this.create(booking);
        });

        console.log('Demo bookings created for current user');
    }
};
