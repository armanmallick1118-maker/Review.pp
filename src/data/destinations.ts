import { Sector } from '../types';

export const SECTORS_DATA: Sector[] = [
  {
    id: 'lonavala-plot',
    name: 'Lonavala Hill Station Plot',
    region: 'Sky Cities',
    locationTag: 'Pune, Maharashtra',
    intensity: 'Novice',
    
    // Real Estate Metrics
    roadCondition: '40ft Tar Road, Excellent',
    nearbySchool: 'DPS Lonavala - 3km',
    nearbyStation: 'Lonavala Station - 5km',
    nearbyDairy: 'Amul Dairy Outlet - 1km',
    discountPercent: 15,

    estimatedPrice: '₹1.2 Cr - ₹1.8 Cr',
    
    expertRating: 4.8,
    expertVerdict: 'An exceptional investment for a weekend home. The infrastructure is developing rapidly, and the plot is NA cleared, making it ready for immediate construction.',
    pros: ['Excellent climate year-round', 'Clear title and NA status', 'Close to Mumbai-Pune Expressway'],
    cons: ['Heavy traffic during monsoon weekends', 'High maintenance cost for villas'],

    imgUrl: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2574&auto=format&fit=crop',
    heroImgUrl: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2574&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2400&auto=format&fit=crop'
    ],
    altText: 'Lush green hill station plot in Lonavala',
    description: 'A beautiful valley-facing NA plot in Lonavala. Ready for immediate villa construction. Close to the Mumbai-Pune expressway with premium amenities nearby.',
  },
  {
    id: 'marine-drive-apartment',
    name: 'Marine Drive Sea-Facing Apartment',
    region: 'Deep Sea Habs',
    locationTag: 'Mumbai, Maharashtra',
    intensity: 'Extreme',
    
    // Real Estate Metrics
    roadCondition: 'Cement Concrete, VVIP Area',
    nearbySchool: 'Campion School - 1.5km',
    nearbyStation: 'Churchgate Station - 500m',
    nearbyDairy: 'Gokul Dairy - 200m',
    discountPercent: 5,

    estimatedPrice: '₹25.0 Cr - ₹40.0 Cr',
    
    expertRating: 4.9,
    expertVerdict: 'The ultimate luxury address in India. Properties here rarely hit the open market. Unmatched sea views and heritage value, though the price per sq ft is astronomical.',
    pros: ['Unobstructed Arabian Sea view', 'VVIP neighborhood', 'High heritage and prestige value'],
    cons: ['Extremely high entry barrier', 'Older building structures require audits'],

    imgUrl: 'https://images.unsplash.com/photo-1567159664453-90d235c0245a?q=80&w=2574&auto=format&fit=crop',
    heroImgUrl: 'https://images.unsplash.com/photo-1567159664453-90d235c0245a?q=80&w=2574&auto=format&fit=crop',
    altText: 'Marine Drive skyline at night',
    description: 'Experience the pinnacle of luxury living with a 4BHK sea-facing apartment at Marine Drive. Uninterrupted Arabian Sea views in Mumbai\'s most prestigious zip code.',
  },
  {
    id: 'whitefield-plot',
    name: 'Whitefield Tech-Park Plot',
    region: 'Forest Nodes',
    locationTag: 'Bangalore, Karnataka',
    intensity: 'Veteran',
    
    // Real Estate Metrics
    roadCondition: '60ft Peripheral Ring Road',
    nearbySchool: 'Inventure Academy - 4km',
    nearbyStation: 'Whitefield Railway Station - 2km',
    nearbyDairy: 'Nandini Milk Booth - 100m',
    discountPercent: 12,

    estimatedPrice: '₹3.5 Cr - ₹5.0 Cr',
    
    expertRating: 4.5,
    expertVerdict: 'A solid play for rental yield or building a tech-worker hostel. Proximity to major IT parks ensures zero vacancy, but be prepared for intense traffic bottlenecks.',
    pros: ['Guaranteed high rental demand', 'Proximity to major IT hubs', 'Metro connectivity nearby'],
    cons: ['Severe traffic congestion during peak hours', 'Groundwater table issues'],

    imgUrl: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=2574&auto=format&fit=crop',
    heroImgUrl: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=2574&auto=format&fit=crop',
    altText: 'Plot near tech park in Bangalore',
    description: 'Premium residential plot situated right next to major IT parks in Whitefield. High rental yield and massive appreciation potential for builders.',
  },
  {
    id: 'shimla-retreat',
    name: 'Himalayan View Retreat',
    region: 'Orbital Shards',
    locationTag: 'Shimla, Himachal Pradesh',
    intensity: 'Novice',
    
    // Real Estate Metrics
    roadCondition: 'Mountain Pass, Motorable',
    nearbySchool: 'Bishop Cotton School - 8km',
    nearbyStation: 'Shimla Railway Station - 10km',
    nearbyDairy: 'Local Mountain Dairy - 2km',
    discountPercent: 20,

    estimatedPrice: '₹80 L - ₹1.5 Cr',
    
    expertRating: 4.2,
    expertVerdict: 'Perfect for a summer retreat. However, buyers must verify Section 118 of the HP Tenancy Act which restricts non-agriculturists from buying land without permission.',
    pros: ['Stunning snow-capped mountain views', 'Pristine air quality', 'Great potential for AirBnb'],
    cons: ['Strict state laws for non-domicile buyers', 'Accessibility issues during heavy snowfall'],

    imgUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2569&auto=format&fit=crop',
    heroImgUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2569&auto=format&fit=crop',
    altText: 'Snow covered cottage in Shimla',
    description: 'Build your dream holiday home in the serene hills of Shimla. Overlooking the snow-capped Himalayan ranges, offering complete peace and tranquility.',
  },
  {
    id: 'jubilee-hills-plot',
    name: 'Jubilee Hills Mansion Plot',
    region: 'Forest Nodes',
    locationTag: 'Hyderabad, Telangana',
    intensity: 'Extreme',
    
    // Real Estate Metrics
    roadCondition: '80ft Main Road, VIP Zone',
    nearbySchool: 'Oakridge International - 5km',
    nearbyStation: 'Secunderabad Station - 15km',
    nearbyDairy: 'Vijaya Dairy - 1km',
    discountPercent: 0,

    estimatedPrice: '₹15.0 Cr - ₹25.0 Cr',
    
    expertRating: 4.7,
    expertVerdict: 'The Beverly Hills of Hyderabad. Buying land here is a status symbol. Excellent civic infrastructure and massive plot sizes make it ideal for legacy mansions.',
    pros: ['Highest status neighborhood in Telangana', 'Excellent civic infrastructure', 'Large plot dimensions'],
    cons: ['Astronomical prices', 'Rare availability of clear title open plots'],

    imgUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2575&auto=format&fit=crop',
    heroImgUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2575&auto=format&fit=crop',
    altText: 'Luxury mansion in Jubilee Hills',
    description: 'An ultra-premium open plot in the heart of Jubilee Hills. Surrounded by homes of celebrities and top industrialists. The ultimate address.',
  },
  {
    id: 'dlf-cyber-city-penthouse',
    name: 'DLF Cyber City Penthouse',
    region: 'Sky Cities',
    locationTag: 'Gurgaon, Haryana',
    intensity: 'Veteran',
    
    // Real Estate Metrics
    roadCondition: 'Multi-lane Highway Access',
    nearbySchool: 'Shri Ram School - 3km',
    nearbyStation: 'Gurgaon Railway Station - 12km',
    nearbyDairy: 'Mother Dairy - 500m',
    discountPercent: 8,

    estimatedPrice: '₹12.0 Cr - ₹18.0 Cr',
    
    expertRating: 4.6,
    expertVerdict: 'A top-tier investment for corporate executives. Unbeatable proximity to Fortune 500 offices and premium dining. Air quality is a major detractor.',
    pros: ['Walk to work for major corporate hubs', 'Ultra-modern condo amenities', 'High expat rental demand'],
    cons: ['Severe air pollution in winter (AQI 400+)', 'High maintenance charges'],

    imgUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2574&auto=format&fit=crop',
    heroImgUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2574&auto=format&fit=crop',
    altText: 'Modern penthouse interior',
    description: 'A sprawling 5BHK penthouse overlooking the Cyber City skyline. Features a private terrace pool, private elevator, and smart-home automation.',
  },
  {
    id: 'ecr-beachfront-villa',
    name: 'ECR Beachfront Villa',
    region: 'Deep Sea Habs',
    locationTag: 'Chennai, Tamil Nadu',
    intensity: 'Novice',
    
    // Real Estate Metrics
    roadCondition: 'East Coast Road, Smooth',
    nearbySchool: 'Vaels International - 6km',
    nearbyStation: 'Chennai Central - 25km',
    nearbyDairy: 'Aavin Parlour - 2km',
    discountPercent: 10,

    estimatedPrice: '₹4.5 Cr - ₹7.0 Cr',
    
    expertRating: 4.4,
    expertVerdict: 'East Coast Road remains the preferred weekend getaway for Chennai elites. Watch out for CRZ (Coastal Regulation Zone) clearance issues before buying.',
    pros: ['Direct private beach access', 'Scenic drive along the coast', 'Great weekend rental market'],
    cons: ['High salt corrosion for electronics/cars', 'Potential CRZ regulatory hurdles'],

    imgUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2574&auto=format&fit=crop',
    heroImgUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2574&auto=format&fit=crop',
    altText: 'Beachfront villa overlooking ocean',
    description: 'A stunning coastal villa located on the East Coast Road. Features a private infinity pool blending into the Bay of Bengal horizon.',
  },
  {
    id: 'ooty-tea-estate',
    name: 'Ooty Tea Estate Plot',
    region: 'Orbital Shards',
    locationTag: 'Ooty, Tamil Nadu',
    intensity: 'Novice',
    
    // Real Estate Metrics
    roadCondition: 'Winding Ghat Roads',
    nearbySchool: 'Good Shepherd International - 5km',
    nearbyStation: 'Udhagamandalam Station - 8km',
    nearbyDairy: 'Local Farm Fresh - 1km',
    discountPercent: 15,

    estimatedPrice: '₹2.0 Cr - ₹4.0 Cr',
    
    expertRating: 4.3,
    expertVerdict: 'A serene investment for those looking to retire in the Nilgiris. You get a slice of a working tea garden. Permissions for commercial construction are strict.',
    pros: ['Breathtaking tea garden views', 'Pleasant year-round climate', 'Income from tea leaves yield'],
    cons: ['Very strict local building codes', 'Wildlife interference (elephants/bison)'],

    imgUrl: 'https://images.unsplash.com/photo-1526649721759-43cce0c279a0?q=80&w=2574&auto=format&fit=crop',
    heroImgUrl: 'https://images.unsplash.com/photo-1526649721759-43cce0c279a0?q=80&w=2574&auto=format&fit=crop',
    altText: 'Rolling green tea estates in Ooty',
    description: 'Own a 1-acre plot amidst a working tea estate in the Nilgiri hills. Build an eco-friendly wooden cabin and wake up to the smell of fresh tea leaves.',
  },
  {
    id: 'new-town-lakeview',
    name: 'New Town Lakeview Condo',
    region: 'Sky Cities',
    locationTag: 'Kolkata, West Bengal',
    intensity: 'Veteran',
    
    // Real Estate Metrics
    roadCondition: 'Six-lane Arterial Road',
    nearbySchool: 'Delhi Public School New Town - 2km',
    nearbyStation: 'Howrah Station - 20km (Metro nearby)',
    nearbyDairy: 'Mother Dairy - 500m',
    discountPercent: 25,

    estimatedPrice: '₹1.0 Cr - ₹1.8 Cr',
    
    expertRating: 4.1,
    expertVerdict: 'New Town is the most planned satellite city in Eastern India. Excellent roads and IT hubs make this a safe, steady investment with good discounts currently.',
    pros: ['Excellent urban planning and wide roads', 'Proximity to IT Sector V', 'Affordable luxury compared to other metros'],
    cons: ['Distance from old Kolkata heritage areas', 'Oversupply of apartments in the area'],

    imgUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2574&auto=format&fit=crop',
    heroImgUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2574&auto=format&fit=crop',
    altText: 'Modern high-rise condo near lake',
    description: 'Premium 3BHK condominium overlooking the New Town Eco Park lake. Comes with a state-of-the-art clubhouse and smart home features.',
  },
  {
    id: 'candolim-beach-resort',
    name: 'Candolim Beach Resort Plot',
    region: 'Deep Sea Habs',
    locationTag: 'Goa',
    intensity: 'Novice',
    
    // Real Estate Metrics
    roadCondition: 'Narrow Coastal Road',
    nearbySchool: 'St. Theresa - 4km',
    nearbyStation: 'Thivim Railway Station - 20km',
    nearbyDairy: 'Goa Dairy - 3km',
    discountPercent: 5,

    estimatedPrice: '₹5.0 Cr - ₹8.0 Cr',
    
    expertRating: 4.8,
    expertVerdict: 'One of the highest ROI investments if converted into a boutique resort or luxury AirBnb. Candolim has year-round tourist footfall. Title search is critical in Goa.',
    pros: ['Massive tourism rental yield potential', 'Walking distance to the beach', 'Vibrant nightlife and dining nearby'],
    cons: ['Very complex land title verification in Goa', 'High competition from established hotels'],

    imgUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e4f2?q=80&w=2574&auto=format&fit=crop',
    heroImgUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e4f2?q=80&w=2574&auto=format&fit=crop',
    altText: 'Tropical resort plot in Goa',
    description: 'A commercial-approved plot just 500 meters from Candolim beach. Ideal for developing a luxury boutique resort or a complex of private pool villas.',
  }
];
