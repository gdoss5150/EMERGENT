export const mockData = {
  character: {
    sex: ['male', 'female', 'androgynous'],
    skinTones: [
      'porcelain', 'fair', 'olive', 'caramel', 'bronze', 
      'brown_sugar', 'mocha', 'espresso', 'ebony', 'albino'
    ],
    hairStyles: [
      'taper_fade', 'cornrows', 'dreads_short', 'dreads_long', 
      'box_braids', 'chrome_dome', 'tribal_scalp_ink', 'afro', 
      'sleek_ponytail', 'wet_look', 'pixie_cut', 'space_buns', 
      'fire_curls', 'fiber_optic_locs', 'bubble_ponytail', 'braided_crown'
    ]
  },
  
  vehicles: [
    // Luxury Cars
    { id: 1, name: 'Lamborghini Urus', brand: 'Lamborghini', category: 'luxury', year: '2025' },
    { id: 2, name: 'Tesla Model X', brand: 'Tesla', category: 'luxury', year: '2025' },
    { id: 3, name: 'Rolls Royce Cullinan', brand: 'Rolls Royce', category: 'luxury', year: '2025' },
    { id: 4, name: 'Bentley Bentayga', brand: 'Bentley', category: 'luxury', year: '2025' },
    { id: 5, name: 'G-Wagon AMG', brand: 'Mercedes', category: 'luxury', year: '2025' },
    
    // Classic Cars
    { id: 6, name: 'Chevrolet Chevette', brand: 'Chevrolet', category: 'classic', year: '1985' },
    { id: 7, name: 'Buick Regal GN', brand: 'Buick', category: 'classic', year: '1987' },
    { id: 8, name: 'Monte Carlo SS', brand: 'Chevrolet', category: 'classic', year: '1988' },
    { id: 9, name: 'Cadillac Fleetwood', brand: 'Cadillac', category: 'classic', year: '1990' },
    { id: 10, name: 'Oldsmobile Cutlass', brand: 'Oldsmobile', category: 'classic', year: '1985' },
    
    // SUVs & Trucks
    { id: 11, name: 'Dodge Charger Hellcat', brand: 'Dodge', category: 'suv', year: '2025' },
    { id: 12, name: 'Camaro ZL1', brand: 'Chevrolet', category: 'suv', year: '2025' },
    { id: 13, name: 'Range Rover SVR', brand: 'Range Rover', category: 'suv', year: '2025' },
    { id: 14, name: 'Maserati Levante', brand: 'Maserati', category: 'suv', year: '2025' },
    { id: 15, name: 'Escalade ESV', brand: 'Cadillac', category: 'suv', year: '2025' }
  ],
  
  clothing: [
    // High-End Streetwear
    { id: 1, name: 'Supreme Box Logo Hoodie', brand: 'Supreme', category: 'streetwear', style: 'casual', price: '$800' },
    { id: 2, name: 'BAPE Shark Hoodie', brand: 'BAPE', category: 'streetwear', style: 'casual', price: '$450' },
    { id: 3, name: 'Off-White Diagonal Hoodie', brand: 'Off-White', category: 'streetwear', style: 'casual', price: '$600' },
    { id: 4, name: 'Stone Island Cargo Pants', brand: 'Stone Island', category: 'streetwear', style: 'casual', price: '$350' },
    { id: 5, name: 'Fear of God Essentials Tee', brand: 'Fear of God', category: 'streetwear', style: 'casual', price: '$90' },
    
    // Luxury Fashion
    { id: 6, name: 'Gucci Tracksuit', brand: 'Gucci', category: 'luxury', style: 'formal', price: '$2,400' },
    { id: 7, name: 'Prada Nylon Jacket', brand: 'Prada', category: 'luxury', style: 'formal', price: '$1,800' },
    { id: 8, name: 'Louis Vuitton Monogram Shirt', brand: 'Louis Vuitton', category: 'luxury', style: 'formal', price: '$1,200' },
    { id: 9, name: 'Balenciaga Oversized Blazer', brand: 'Balenciaga', category: 'luxury', style: 'formal', price: '$2,900' },
    { id: 10, name: 'Versace Medusa Chain Shirt', brand: 'Versace', category: 'luxury', style: 'formal', price: '$1,500' },
    
    // Footwear
    { id: 11, name: 'Jordan 11 Bred', brand: 'Nike', category: 'footwear', style: 'sneakers', price: '$220' },
    { id: 12, name: 'Yeezy Boost 350 V2', brand: 'Adidas', category: 'footwear', style: 'sneakers', price: '$220' },
    { id: 13, name: 'Balenciaga Triple S', brand: 'Balenciaga', category: 'footwear', style: 'luxury', price: '$1,050' },
    { id: 14, name: 'Rick Owens Geobaskets', brand: 'Rick Owens', category: 'footwear', style: 'luxury', price: '$1,200' },
    { id: 15, name: 'Timberland Boots', brand: 'Timberland', category: 'footwear', style: 'casual', price: '$200' },
    
    // Accessories
    { id: 16, name: 'Rolex Submariner', brand: 'Rolex', category: 'accessories', style: 'luxury', price: '$8,000' },
    { id: 17, name: 'Cartier Love Bracelet', brand: 'Cartier', category: 'accessories', style: 'luxury', price: '$6,800' },
    { id: 18, name: 'Chrome Hearts Chain', brand: 'Chrome Hearts', category: 'accessories', style: 'luxury', price: '$2,500' },
    { id: 19, name: 'Hermes Belt', brand: 'Hermes', category: 'accessories', style: 'luxury', price: '$800' },
    { id: 20, name: 'Ray-Ban Aviators', brand: 'Ray-Ban', category: 'accessories', style: 'casual', price: '$150' }
  ],
  
  locations: [
    // Urban Environments
    { id: 1, name: 'Warehouse District', description: 'Industrial backdrop with concrete and steel', category: 'urban', vibe: 'gritty' },
    { id: 2, name: 'Rooftop Skyline', description: 'City skyline with dramatic lighting', category: 'urban', vibe: 'dramatic' },
    { id: 3, name: 'Underground Garage', description: 'Moody underground parking structure', category: 'urban', vibe: 'dark' },
    { id: 4, name: 'Neon-Lit Alley', description: 'Vibrant neon lights and urban atmosphere', category: 'urban', vibe: 'electric' },
    { id: 5, name: 'Graffiti Wall', description: 'Street art backdrop with urban culture', category: 'urban', vibe: 'authentic' },
    
    // Luxury Venues
    { id: 6, name: 'Penthouse Suite', description: 'Luxury apartment with floor-to-ceiling windows', category: 'luxury', vibe: 'opulent' },
    { id: 7, name: 'Private Jet Interior', description: 'Exclusive aircraft cabin setting', category: 'luxury', vibe: 'elite' },
    { id: 8, name: 'Yacht Deck', description: 'Luxury yacht with ocean views', category: 'luxury', vibe: 'sophisticated' },
    { id: 9, name: 'Mansion Driveway', description: 'Grand estate entrance', category: 'luxury', vibe: 'prestigious' },
    { id: 10, name: 'VIP Lounge', description: 'Exclusive club atmosphere', category: 'luxury', vibe: 'exclusive' },
    
    // Outdoor Scenes
    { id: 11, name: 'Desert Landscape', description: 'Vast desert with dramatic sky', category: 'outdoor', vibe: 'epic' },
    { id: 12, name: 'Mountain Peak', description: 'Elevated viewpoint with panoramic views', category: 'outdoor', vibe: 'majestic' },
    { id: 13, name: 'Forest Clearing', description: 'Natural woodland environment', category: 'outdoor', vibe: 'organic' },
    { id: 14, name: 'Beach Shore', description: 'Coastal setting with waves', category: 'outdoor', vibe: 'relaxed' },
    { id: 15, name: 'Urban Park', description: 'Green space within city limits', category: 'outdoor', vibe: 'balanced' },
    
    // Exotic Locations
    { id: 16, name: 'Safari Lodge', description: 'African wildlife sanctuary', category: 'exotic', vibe: 'wild' },
    { id: 17, name: 'Tropical Villa', description: 'Paradise island retreat', category: 'exotic', vibe: 'luxurious' },
    { id: 18, name: 'Ancient Temple', description: 'Historical architecture backdrop', category: 'exotic', vibe: 'mystical' },
    { id: 19, name: 'Ice Castle', description: 'Frozen crystalline structure', category: 'exotic', vibe: 'ethereal' },
    { id: 20, name: 'Space Station', description: 'Futuristic orbital setting', category: 'exotic', vibe: 'futuristic' }
  ],
  
  poses: [
    // With Vehicles
    { id: 1, name: 'Lean On Hood', description: 'Back against hood, arms crossed, confident stare', category: 'with_car', vibe: 'classic' },
    { id: 2, name: 'Driver\'s Throne', description: 'Seated in car, one hand on wheel, gold watch visible', category: 'with_car', vibe: 'power' },
    { id: 3, name: 'Lambo Doors Open', description: 'Standing between scissor doors, arms spread', category: 'with_car', vibe: 'flex' },
    { id: 4, name: 'Hood Sit', description: 'Sitting on hood, confident chin-up pose', category: 'with_car', vibe: 'casual' },
    { id: 5, name: 'Trunk Flex', description: 'Sitting in open trunk with money/gear', category: 'with_car', vibe: 'luxury' },
    
    // Without Vehicles
    { id: 6, name: 'Red Carpet Flex', description: 'Foot forward, look over shoulder', category: 'without_car', vibe: 'glamorous' },
    { id: 7, name: 'Throne Room Sit', description: 'Elbows on knees, forward lean, intense stare', category: 'without_car', vibe: 'dominant' },
    { id: 8, name: 'Warehouse Backlight', description: 'Standing in fog, dramatic silhouette', category: 'without_car', vibe: 'mysterious' },
    { id: 9, name: 'Rooftop Prophet', description: 'Arms wide, cape blowing, divine pose', category: 'without_car', vibe: 'epic' },
    { id: 10, name: 'Paparazzi Freeze', description: 'Mid-walk, hand up to camera flashes', category: 'without_car', vibe: 'celebrity' },
    
    // Universal Power Poses
    { id: 11, name: 'Power Lean', description: 'Forward lean, squared shoulders', category: 'universal', vibe: 'confident' },
    { id: 12, name: 'One Knee Down', description: 'Kneeling like a knight, streetwear royalty', category: 'universal', vibe: 'regal' },
    { id: 13, name: 'Leg Crossed Sit', description: 'Chill flex with cigar or vape', category: 'universal', vibe: 'relaxed' },
    { id: 14, name: 'Over-Shoulder Glare', description: 'Half-turned, eyes locked on camera', category: 'universal', vibe: 'intense' },
    { id: 15, name: 'Crucifix Pose', description: 'Arms wide, divine submission', category: 'universal', vibe: 'spiritual' }
  ],
  
  fx: [
    // Cinematic Effects
    { id: 1, name: 'smoke_fx', description: 'Cinematic haze and power aura', category: 'cinematic', useCase: 'Urban/Throne/Warehouse' },
    { id: 2, name: 'ember_trail', description: 'Floating embers for intense aura', category: 'cinematic', useCase: 'Throne/Divine/Savage' },
    { id: 3, name: 'lens_flare', description: 'Flashy sun-hit polish effect', category: 'cinematic', useCase: 'Outdoor/Car shots' },
    { id: 4, name: 'rain_fx', description: 'Gritty, raw, moody atmosphere', category: 'cinematic', useCase: 'Emotional/Rooftop' },
    
    // Power & Energy
    { id: 5, name: 'glowing_eyes', description: 'Supernatural visual domination', category: 'power', useCase: 'Divine/Power poses' },
    { id: 6, name: 'tattoo_glow', description: 'Glowing body ink (tribal, chest)', category: 'power', useCase: 'Shirtless/Chrome Dome' },
    { id: 7, name: 'spark_fx', description: 'Ignition, party energy, chaos', category: 'power', useCase: 'Rooftop/Red Carpet' },
    { id: 8, name: 'fire_reflection', description: 'Flickering flame aura', category: 'power', useCase: 'Apocalyptic/Intense' },
    
    // Environmental
    { id: 9, name: 'neon_rimlight', description: 'Colored edge lighting effect', category: 'environmental', useCase: 'Club/Rave' },
    { id: 10, name: 'halo_glow', description: 'Light ring aura around head', category: 'environmental', useCase: 'Throne/Divine' },
    { id: 11, name: 'liquid_drip_fx', description: 'Moisture FX on skin/outfit', category: 'environmental', useCase: 'Sexy/Wet look' },
    
    // Glamour & Luxury
    { id: 12, name: 'money_rain', description: 'Cash flying - ultimate flex FX', category: 'glamour', useCase: 'Club/Car scenes' },
    { id: 13, name: 'confetti', description: 'Glamour & VIP celebration vibe', category: 'glamour', useCase: 'Award shows/Celebrations' },
    { id: 14, name: 'glitter_trail', description: 'Magic particles, sparkle effect', category: 'glamour', useCase: 'Femme/Glam' }
  ]
};