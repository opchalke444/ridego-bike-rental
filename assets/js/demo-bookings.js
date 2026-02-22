// Demo Bookings Initialization
// This file creates sample bookings for demo purposes

function initializeDemoBookings() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
        console.log('No user logged in, skipping demo bookings');
        return;
    }

    // Check if user already has bookings
    const existingBookings = BookingService.getUserBookings();
    if (existingBookings.length > 0) {
        console.log('User already has bookings, skipping demo');
        return;
    }

    console.log('Creating demo bookings for new user...');

    // Demo Booking 1 - Upcoming
    const booking1 = {
        bikeId: 'royal-enfield-himalayan',
        bikeName: 'Royal Enfield Himalayan',
        bikeCategory: 'Adventure Bike',
        bikeImage: 'Royal Enfield Himalayan.png',
        dailyRate: 2500,
        destination: 'Manali, HP',
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
        paymentMethod: 'Card'
    };

    // Demo Booking 2 - Active
    const booking2 = {
        bikeId: 'honda-activa-6g',
        bikeName: 'Honda Activa 6G',
        bikeCategory: 'Scooter',
        bikeImage: 'Honda Activa 6G.png',
        dailyRate: 800,
        destination: 'Goa',
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
        paymentMethod: 'UPI'
    };

    // Create demo bookings
    BookingService.create(booking1);
    BookingService.create(booking2);

    console.log('✅ Demo bookings created successfully!');
}

// Auto-initialize on page load (only for logged-in users)
if (typeof AuthService !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        if (AuthService.getCurrentUser()) {
            initializeDemoBookings();
        }
    });
}
