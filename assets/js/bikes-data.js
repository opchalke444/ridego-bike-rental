// Centralized Bike & Destination Data for RideGo Platform

// Reviews Database - Unique reviews for each bike
const bikeReviewsData = {
    'bajaj-avenger-cruise-220': [
        {
            title: 'Perfect Cruiser!',
            rating: 5,
            text: 'The Avenger is incredibly comfortable for long rides. Took it from Goa to Hampi and back - no back pain at all. The relaxed seating position is a game changer.',
            author: 'Karthik Menon'
        },
        {
            title: 'Great for Highway Cruising',
            rating: 5,
            text: 'Loved the smooth engine and comfortable ride. Perfect for coastal highways in Goa. The vendor was professional and bike was well-maintained.',
            author: 'Sneha Patel'
        },
        {
            title: 'Value for Money',
            rating: 4,
            text: 'Good bike for the price. Comfortable seating and decent power. Would recommend for leisure rides and touring.',
            author: 'Rajesh Kumar'
        }
    ],
    
    'honda-activa-6g': [
        {
            title: 'Best for City Rides',
            rating: 5,
            text: 'Super fuel efficient and easy to handle. Perfect for exploring Kochi\'s narrow streets and markets. The storage space is really helpful.',
            author: 'Divya Nair'
        },
        {
            title: 'Reliable Scooter',
            rating: 5,
            text: 'Used it for 5 days in Goa. Amazing fuel economy and very comfortable. Great for couples and short trips to beaches.',
            author: 'Amit Sharma'
        },
        {
            title: 'Convenient & Practical',
            rating: 4,
            text: 'Very practical for daily use and local sightseeing. Smooth ride and adequate power for city traffic. Highly recommend!',
            author: 'Priya Singh'
        }
    ],
    
    'honda-unicorn-160': [
        {
            title: 'Excellent Bike!',
            rating: 5,
            text: 'Perfect bike for my trip. Handled all terrains beautifully. The fuel efficiency is outstanding - got over 60 km/l on highways!',
            author: 'Rahul Verma'
        },
        {
            title: 'Smooth Ride',
            rating: 4,
            text: 'Very refined engine and comfortable for long distances. Used it in Varanasi for temple visits. Well-maintained by the vendor.',
            author: 'Meera Krishnan'
        },
        {
            title: 'Reliable Commuter',
            rating: 5,
            text: 'Great bike for daily use. Comfortable, economical, and easy to ride. The CBS braking system is very effective. Highly recommended!',
            author: 'Vikram Joshi'
        }
    ],
    
    'ktm-390-adventure': [
        {
            title: 'Adventure Beast!',
            rating: 5,
            text: 'This bike is a monster! Took it to Leh Ladakh and it handled everything like a champ. The suspension is incredible for rough terrains.',
            author: 'Arjun Reddy'
        },
        {
            title: 'Worth Every Penny',
            rating: 5,
            text: 'Perfect for Manali to Spiti adventure. The TFT display and features are top-notch. Power delivery is smooth yet aggressive when needed.',
            author: 'Siddharth Malhotra'
        },
        {
            title: 'Dream Adventure Bike',
            rating: 5,
            text: 'Absolutely loved riding this in the Himalayas. Off-road capability is exceptional. The bike feels premium and performs brilliantly.',
            author: 'Rohan Desai'
        }
    ],
    
    'ktm-duke-200-bs6': [
        {
            title: 'Street Fighter!',
            rating: 5,
            text: 'What a machine! Super agile and fun to ride. The power-to-weight ratio is amazing. Perfect for spirited rides in Goa.',
            author: 'Aditya Kapoor'
        },
        {
            title: 'Thrilling Experience',
            rating: 5,
            text: 'The Duke never disappoints. Sharp handling, aggressive styling, and great brakes. Had an amazing time riding through Goa coastal roads.',
            author: 'Neha Gupta'
        },
        {
            title: 'Performance King',
            rating: 4,
            text: 'Excellent performance and build quality. The naked bike design looks stunning. A bit aggressive for beginners but perfect for experienced riders.',
            author: 'Kabir Shah'
        }
    ],
    
    'royal-enfield-classic-350': [
        {
            title: 'Timeless Beauty',
            rating: 5,
            text: 'The Classic 350 is pure nostalgia on wheels. Perfect for Royal Rajasthan tour. The thumping engine sound is mesmerizing!',
            author: 'Varun Khanna'
        },
        {
            title: 'Comfortable Cruiser',
            rating: 5,
            text: 'Took it from Jaipur to Varanasi. Super comfortable for long rides. The retro design turns heads everywhere. Highly recommended!',
            author: 'Anjali Mehta'
        },
        {
            title: 'Royal Experience',
            rating: 4,
            text: 'Classic Royal Enfield experience. Comfortable seating, good power, and that iconic thump. Great for leisure touring and photography trips.',
            author: 'Sameer Rao'
        }
    ],
    
    'royal-enfield-himalayan': [
        {
            title: 'Mountain Conqueror',
            rating: 5,
            text: 'Built for the Himalayas! Tackled Manali-Leh highway with ease. The long travel suspension soaks up everything. Best adventure bike for Indian conditions.',
            author: 'Harsh Vardhan'
        },
        {
            title: 'Adventure Ready',
            rating: 5,
            text: 'Perfect for off-road adventures. Rode through Spiti Valley - the bike handled rocks, water crossings, and high altitude like a pro!',
            author: 'Tanya Saxena'
        },
        {
            title: 'Reliable Companion',
            rating: 5,
            text: 'Took it to Ladakh and back. Zero issues. The bike is rugged, reliable, and built for Indian adventure touring. Absolutely loved it!',
            author: 'Kunal Bhatia'
        }
    ],
    
    'yamaha-fz-rave': [
        {
            title: 'Stylish Performer',
            rating: 5,
            text: 'The FZ looks amazing and rides even better. Great for city commutes and weekend rides. The LED headlamp is super bright.',
            author: 'Ritesh Agarwal'
        },
        {
            title: 'Fun to Ride',
            rating: 4,
            text: 'Muscular design and good performance. Fuel efficiency is impressive. Used it in Kochi for daily rides - very comfortable and agile.',
            author: 'Deepa Iyer'
        },
        {
            title: 'Great Street Bike',
            rating: 5,
            text: 'Perfect balance of style, performance, and comfort. The digital console is clear and informative. Excellent bike for urban exploration.',
            author: 'Manish Tiwari'
        }
    ],
    
    'royal-enfield-hunter-350': [
        {
            title: 'Compact & Fun',
            rating: 5,
            text: 'The Hunter is surprisingly fun! Nimble handling makes it perfect for Goa\'s narrow roads. Modern features with classic RE charm.',
            author: 'Ishaan Malhotra'
        },
        {
            title: 'Modern Classic',
            rating: 4,
            text: 'Love the compact design. Easy to maneuver in traffic. The Tripper navigation is very useful. Great for short tours and daily rides.',
            author: 'Pooja Reddy'
        },
        {
            title: 'Perfect Roadster',
            rating: 5,
            text: 'Best of both worlds - classic RE feel with modern ergonomics. Lightweight and comfortable. Explored Kochi backroads with ease!',
            author: 'Aryan Sen'
        }
    ]
};

// Helper function to get reviews for a bike
function getReviewsForBike(bikeId) {
    return bikeReviewsData[bikeId] || [
        {
            title: 'Great Experience',
            rating: 5,
            text: 'Excellent bike rental service. The bike was in perfect condition and the vendor was very helpful throughout.',
            author: 'Anonymous User'
        }
    ];
}

// Bikes Database
const bikesData = {
    'bajaj-avenger-cruise-220': {
        id: 'bajaj-avenger-cruise-220',
        name: 'Bajaj Avenger Cruise 220',
        category: 'Cruiser Bike',
        image: 'Bajaj Avenger Cruise 220.png',
        dailyRate: 2200,
        rating: 4.5,
        reviews: 156,
        engine: '220cc',
        mileage: '35 km/l',
        seating: '2 Persons',
        locations: ['Goa', 'Jaipur', 'Alibaug'],
        features: [
            'Comfortable Cruiser Seating',
            'Digital Console',
            'Disc Brakes',
            'Long Distance Touring',
            'Halogen Headlamp'
        ],
        description: 'The Bajaj Avenger Cruise 220 is perfect for comfortable long-distance touring with its relaxed riding position and smooth engine.'
    },
    
    'honda-activa-6g': {
        id: 'honda-activa-6g',
        name: 'Honda Activa 6G',
        category: 'Scooter',
        image: 'Honda Activa 6G.png',
        dailyRate: 800,
        rating: 4.6,
        reviews: 342,
        engine: '109.51cc',
        mileage: '45 km/l',
        seating: '2 Persons',
        locations: ['Goa', 'Kochi', 'Jaipur', 'Alibaug'],
        features: [
            'Fuel Efficient',
            'Comfortable Seat',
            'LED Headlamp',
            'Digital Analog Meter',
            'External Fuel Filler'
        ],
        description: 'India\'s most trusted scooter, perfect for city rides and short trips with excellent fuel efficiency and comfortable ride.'
    },
    
    'honda-unicorn-160': {
        id: 'honda-unicorn-160',
        name: 'Honda Unicorn 160',
        category: 'Commuter Bike',
        image: 'Honda Unicorn 160.png',
        dailyRate: 1200,
        rating: 4.4,
        reviews: 198,
        engine: '162.71cc',
        mileage: '60 km/l',
        seating: '2 Persons',
        locations: ['Goa', 'Alibaug', 'Jaipur', 'Ooty'],
        features: [
            'Refined Engine',
            'Comfortable Ride',
            'Disc Brake',
            'CBS',
            'Halogen Headlamp'
        ],
        description: 'A reliable commuter bike with excellent fuel efficiency and comfortable riding position for daily use.'
    },
    
    'ktm-390-adventure': {
        id: 'ktm-390-adventure',
        name: 'KTM 390 Adventure',
        category: 'Adventure Bike',
        image: 'KTM 390 Adventure.png',
        dailyRate: 3500,
        rating: 4.9,
        reviews: 89,
        engine: '373.3cc',
        mileage: '25 km/l',
        seating: '2 Persons',
        locations: ['Leh Ladakh', 'Manali', 'Darjeeling', 'Ooty'],
        features: [
            'Off-Road Capability',
            'TFT Display',
            'Dual Channel ABS',
            'LED Headlamp',
            'Long Travel Suspension'
        ],
        description: 'The KTM 390 Adventure is built for serious adventure riders who want performance and capability on and off-road.'
    },
    
    'ktm-duke-200-bs6': {
        id: 'ktm-duke-200-bs6',
        name: 'KTM Duke 200 (BS6)',
        category: 'Naked Bike',
        image: 'KTM Duke 200 (BS6).png',
        dailyRate: 2800,
        rating: 4.7,
        reviews: 215,
        engine: '199.5cc',
        mileage: '35 km/l',
        seating: '2 Persons',
        locations: ['Goa', 'Kochi', 'Jaipur'],
        features: [
            'Aggressive Styling',
            'Digital Console',
            'ABS',
            'LED Headlamp',
            'Upside Down Forks'
        ],
        description: 'The Duke 200 offers thrilling performance with sharp handling, perfect for spirited riding through city and highways.'
    },
    
    'royal-enfield-classic-350': {
        id: 'royal-enfield-classic-350',
        name: 'Royal Enfield Classic 350',
        category: 'Classic Bike',
        image: 'Royal Enfield Classic 350.png',
        dailyRate: 2000,
        rating: 4.6,
        reviews: 487,
        engine: '349cc',
        mileage: '35 km/l',
        seating: '2 Persons',
        locations: ['Jaipur', 'Kochi', 'Goa', 'Ooty'],
        features: [
            'Classic Retro Design',
            'Thumping Engine',
            'Disc Brakes',
            'Single Channel ABS',
            'Round Headlamp'
        ],
        description: 'The timeless Royal Enfield Classic 350 combines vintage styling with modern reliability for a pure motorcycling experience.'
    },
    
    'royal-enfield-himalayan': {
        id: 'royal-enfield-himalayan',
        name: 'Royal Enfield Himalayan',
        category: 'Adventure Bike',
        image: 'Royal Enfield Himalayan.png',
        dailyRate: 2500,
        rating: 4.8,
        reviews: 127,
        engine: '411cc',
        mileage: '30 km/l',
        seating: '2 Persons',
        locations: ['Manali', 'Leh Ladakh', 'Darjeeling', 'Ooty'],
        features: [
            'ABS Braking System',
            'Digital Speedometer',
            'LED Headlamps',
            'Disc Brakes (Front & Rear)',
            'Long Range Fuel Tank'
        ],
        description: 'The Royal Enfield Himalayan is the perfect companion for mountain adventures. Built for rough terrains and long journeys, this bike offers reliability, comfort, and performance in challenging conditions.'
    },

    'yamaha-fz-rave': {
    id: 'yamaha-fz-rave',
    name: 'Yamaha FZ Rave',
    category: 'Naked Bike',
    image: 'Yamaha FZ Rave.png',
    dailyRate: 2000,
    rating: 4.6,
    reviews: 184,
    engine: '149cc',
    mileage: '45 km/l',
    seating: '2 Persons',
    locations: ['Goa', 'Kochi', 'Jaipur', 'Alibaug'],
    features: [
        'Muscular Street Design',
        'Single Channel ABS',
        'Digital Instrument Console',
        'LED Headlamp',
        'Wide Radial Tyres'
    ],
    description: 'The Yamaha FZ Rave is a stylish and powerful street bike designed for city rides and short tours. It offers great handling, comfort, and fuel efficiency, making it ideal for urban exploration.'
    },
    
    'royal-enfield-hunter-350': {
        id: 'royal-enfield-hunter-350',
        name: 'Royal Enfield Hunter 350',
        category: 'Roadster',
        image: 'Royal Enfield Hunter 350.png',
        dailyRate: 1800,
        rating: 4.5,
        reviews: 156,
        engine: '349cc',
        mileage: '36 km/l',
        seating: '2 Persons',
        locations: ['Goa', 'Kochi', 'Jaipur', 'Alibaug'],
        features: [
            'Compact Design',
            'Tripper Navigation',
            'Disc Brakes',
            'LED Tail Lamp',
            'Lightweight'
        ],
        description: 'The Hunter 350 is a nimble roadster perfect for urban exploration and weekend getaways with classic Royal Enfield charm.'
    }
};

// Destinations Database
const destinationsData = {
    'leh-ladakh': {
        id: 'leh-ladakh',
        name: 'Leh Ladakh',
        image: 'Leh Ladakh.png',
        description: 'High altitude desert mountains',
        state: 'Ladakh',
        pickupLocations: [
            { id: 'leh-main', name: 'Leh Main Market', address: 'Main Bazaar, Leh' },
            { id: 'leh-fort', name: 'Near Leh Palace', address: 'Leh Palace Road' }
        ]
    },
    
    'goa': {
        id: 'goa',
        name: 'Goa',
        image: 'Goa.png',
        description: 'Beaches, nightlife, and Portuguese heritage',
        state: 'Goa',
        pickupLocations: [
            { id: 'goa-panjim', name: 'Panjim City Center', address: 'MG Road, Panjim' },
            { id: 'goa-calangute', name: 'Calangute Beach', address: 'Calangute Beach Road' },
            { id: 'goa-anjuna', name: 'Anjuna Beach', address: 'Anjuna, North Goa' }
        ]
    },
    
    'jaipur': {
        id: 'jaipur',
        name: 'Jaipur',
        image: 'Jaipur.png',
        description: 'The Pink City - Forts and palaces',
        state: 'Rajasthan',
        pickupLocations: [
            { id: 'jaipur-mi', name: 'MI Road', address: 'MI Road, Jaipur' },
            { id: 'jaipur-amer', name: 'Near Amer Fort', address: 'Amer, Jaipur' },
            { id: 'jaipur-station', name: 'Jaipur Railway Station', address: 'Station Road, Jaipur' }
        ]
    },
    
    'manali': {
        id: 'manali',
        name: 'Manali',
        image: 'Manali.png',
        description: 'Himalayan adventure paradise',
        state: 'Himachal Pradesh',
        pickupLocations: [
            { id: 'manali-mall', name: 'Manali Mall Road', address: 'Mall Road, Manali' },
            { id: 'manali-old', name: 'Old Manali', address: 'Old Manali Village' },
            { id: 'manali-vashisht', name: 'Vashisht', address: 'Vashisht Village' }
        ]
    },
    
    'kochi': {
        id: 'kochi',
        name: 'Kochi',
        image: 'Kochi.png',
        description: 'Backwaters and colonial charm',
        state: 'Kerala',
        pickupLocations: [
            { id: 'kochi-fort', name: 'Fort Kochi', address: 'Fort Kochi Beach Road' },
            { id: 'kochi-marine', name: 'Marine Drive', address: 'Marine Drive, Ernakulam' }
        ]
    },
    
    'alibaug': {
        id: 'alibaug',
        name: 'Alibaug',
        image: 'Alibaug.png',
        description: 'Coastal beaches near Mumbai',
        state: 'Maharashtra',
        pickupLocations: [
            { id: 'alibaug-beach', name: 'Alibaug Beach', address: 'Alibaug Beach Road' },
            { id: 'alibaug-mandwa', name: 'Mandwa Jetty', address: 'Mandwa, Alibaug' }
        ]
    },
    
    'ooty': {
        id: 'ooty',
        name: 'Ooty',
        image: 'Ooty.png',
        description: 'Queen of Hill Stations',
        state: 'Tamil Nadu',
        pickupLocations: [
            { id: 'ooty-main', name: 'Ooty Main Market', address: 'Commercial Road, Ooty' },
            { id: 'ooty-lake', name: 'Ooty Lake Area', address: 'Ooty Lake Road' }
        ]
    },
    
    'darjeeling': {
        id: 'darjeeling',
        name: 'Darjeeling',
        image: 'Darjeeling.png',
        description: 'Tea gardens and mountain views',
        state: 'West Bengal',
        pickupLocations: [
            { id: 'darjeeling-main', name: 'Darjeeling Main Market', address: 'Chowrasta, Darjeeling' },
            { id: 'darjeeling-station', name: 'Near Railway Station', address: 'Hill Cart Road, Darjeeling' }
        ]
    }
};

// Vendor Data by Destination
const vendorsData = {
    'leh-ladakh': { name: 'Ladakh Bike Expeditions', rating: 4.9, reviews: 278, contact: '+91 9876543215' },
    'goa': { name: 'Goa Beach Rentals', rating: 4.9, reviews: 567, contact: '+91 9876543211' },
    'jaipur': { name: 'Jaipur Riders', rating: 4.8, reviews: 234, contact: '+91 9876543213' },
    'manali': { name: 'Manali Bike Rentals', rating: 4.9, reviews: 456, contact: '+91 9876543216' },
    'kochi': { name: 'Kerala Bike Tours', rating: 4.7, reviews: 156, contact: '+91 9876543214' },
    'alibaug': { name: 'Alibaug Beach Riders', rating: 4.6, reviews: 145, contact: '+91 9876543220' },
    'ooty': { name: 'Ooty Hill Riders', rating: 4.7, reviews: 189, contact: '+91 9876543221' },
    'darjeeling': { name: 'Darjeeling Bike Rentals', rating: 4.7, reviews: 134, contact: '+91 9876543210' }
};

// Helper Functions
function getBikeById(bikeId) {
    return bikesData[bikeId] || null;
}

function getDestinationById(destId) {
    if (!destId) return null;
    const lowerDestId = destId.toLowerCase();
    return destinationsData[lowerDestId] || null;
}

function getVendorByDestination(destId) {
    if (!destId) return { name: 'RideGo Partner', rating: 4.5, reviews: 100, contact: '+91 9324072928' };
    const lowerDestId = destId.toLowerCase();
    return vendorsData[lowerDestId] || { name: 'RideGo Partner', rating: 4.5, reviews: 100, contact: '+91 9324072928' };
}

function getBikesByDestination(destId) {
    if (!destId) return Object.values(bikesData);
    
    return Object.values(bikesData).filter(bike => 
        bike.locations.some(loc => loc.toLowerCase() === destId.toLowerCase())
    );
}

function getAllDestinations() {
    return Object.values(destinationsData);
}

function getAllBikes() {
    return Object.values(bikesData);
}

// Export for use in HTML files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        bikesData,
        destinationsData,
        vendorsData,
        bikeReviewsData,
        getBikeById,
        getDestinationById,
        getVendorByDestination,
        getBikesByDestination,
        getAllDestinations,
        getAllBikes,
        getReviewsForBike
    };
}
