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
    // Vintage American Muscle Cars (1960-1974)
    { id: 1, name: 'AMC AMX', brand: 'AMC', category: 'vintage_muscle', year: '1968-1974', description: 'Two-seat configuration, performance V8s' },
    { id: 2, name: 'Buick Wildcat', brand: 'Buick', category: 'vintage_muscle', year: '1962-1970', description: 'Full-size muscle, distinctive styling' },
    { id: 3, name: 'Chevrolet Camaro SS', brand: 'Chevrolet', category: 'vintage_muscle', year: '1967-1974', description: 'Pony car, Super Sport performance package' },
    { id: 4, name: 'Chevrolet Camaro Z/28', brand: 'Chevrolet', category: 'vintage_muscle', year: '1967-1974', description: 'Trans-Am racing homologation special' },
    { id: 5, name: 'Chevrolet Chevelle SS 454', brand: 'Chevrolet', category: 'vintage_muscle', year: '1970', description: 'Legendary big-block muscle, LS6 engine' },
    { id: 6, name: 'Dodge Charger R/T', brand: 'Dodge', category: 'vintage_muscle', year: '1966-1974', description: 'Iconic fastback design, R/T performance' },
    { id: 7, name: 'Dodge Challenger R/T', brand: 'Dodge', category: 'vintage_muscle', year: '1970-1974', description: 'Pony car, R/T and T/A models, Hemi option' },
    { id: 8, name: 'Dodge Charger Daytona', brand: 'Dodge', category: 'vintage_muscle', year: '1969', description: 'Aerodynamic warrior, wing car for NASCAR' },
    { id: 9, name: 'Plymouth Barracuda', brand: 'Plymouth', category: 'vintage_muscle', year: '1964-1974', description: 'A-body and E-body, Cuda performance models' },
    { id: 10, name: 'Plymouth Road Runner', brand: 'Plymouth', category: 'vintage_muscle', year: '1968-1974', description: 'Budget muscle, beep beep horn, Air Grabber hood' },
    { id: 11, name: 'Plymouth Superbird', brand: 'Plymouth', category: 'vintage_muscle', year: '1970', description: 'Aerodynamic wing car, Charger Daytona sibling' },
    { id: 12, name: 'Pontiac GTO', brand: 'Pontiac', category: 'vintage_muscle', year: '1964-1974', description: 'Started the muscle car trend' },
    { id: 13, name: 'Ford Mustang Boss 302', brand: 'Ford', category: 'vintage_muscle', year: '1970', description: 'Trans-Am inspired, high-performance small-block' },
    { id: 14, name: 'Shelby Mustang GT350', brand: 'Shelby', category: 'vintage_muscle', year: '1965-1970', description: 'Carroll Shelby-tuned performance Mustang' },
    { id: 15, name: 'Shelby Mustang GT500', brand: 'Shelby', category: 'vintage_muscle', year: '1965-1970', description: 'Big-block Shelby, GT500-KR King of the Road' },
    
    // Chevrolet SS Legacy
    { id: 16, name: 'Chevrolet Impala SS', brand: 'Chevrolet', category: 'ss_legacy', year: '1961-1969', description: 'Early full-size performance, 348/409/427 V8' },
    { id: 17, name: 'Chevrolet Nova SS', brand: 'Chevrolet', category: 'ss_legacy', year: '1963-1976', description: 'Compact muscle, various V8 options' },
    { id: 18, name: 'Chevrolet El Camino SS', brand: 'Chevrolet', category: 'ss_legacy', year: '1968-1987', description: 'Truck utility with muscle car power' },
    { id: 19, name: 'Chevrolet Monte Carlo SS', brand: 'Chevrolet', category: 'ss_legacy', year: '1983-1988', description: 'NASCAR-inspired aerodynamics' },
    { id: 20, name: 'Chevrolet Silverado 454 SS', brand: 'Chevrolet', category: 'ss_legacy', year: '1990-1993', description: 'Big-block sport truck, King of the Streets' },
    { id: 21, name: 'Chevrolet SSR', brand: 'Chevrolet', category: 'ss_legacy', year: '2003-2006', description: 'Retro-styled convertible pickup truck' },
    { id: 22, name: 'Chevrolet TrailBlazer SS', brand: 'Chevrolet', category: 'ss_legacy', year: '2006-2009', description: 'Corvette-derived LS2 V8, first SS SUV' },
    { id: 23, name: 'Chevrolet Cobalt SS', brand: 'Chevrolet', category: 'ss_legacy', year: '2005-2010', description: 'Sport compact, supercharged/turbocharged' },
    { id: 24, name: 'Chevrolet Blazer EV SS', brand: 'Chevrolet', category: 'ss_legacy', year: '2025', description: 'First all-electric SS model' },
    
    // Ford Mustang Cobra & Shelby Variants
    { id: 25, name: 'Ford Mustang SVT Cobra', brand: 'Ford', category: 'cobra_legacy', year: '1993', description: 'Fox-Body, upgraded 5.0L V8, unique styling' },
    { id: 26, name: 'Ford Mustang Cobra R', brand: 'Ford', category: 'cobra_legacy', year: '1995', description: 'Track-focused, 5.8L V8, stripped for weight' },
    { id: 27, name: 'Ford Mustang Mystic Cobra', brand: 'Ford', category: 'cobra_legacy', year: '1996', description: 'Color-shifting paint, DOHC 4.6L V8' },
    { id: 28, name: 'Ford Mustang SVT Cobra', brand: 'Ford', category: 'cobra_legacy', year: '1999-2001', description: 'Independent rear suspension, New Edge styling' },
    { id: 29, name: 'Ford Mustang Cobra R', brand: 'Ford', category: 'cobra_legacy', year: '2000', description: '5.4L DOHC V8, aggressive aero, track-ready' },
    { id: 30, name: 'Ford Mustang Terminator Cobra', brand: 'Ford', category: 'cobra_legacy', year: '2003-2004', description: 'Supercharged 4.6L DOHC V8, most formidable' },
    { id: 31, name: 'Ford Mustang Mystichrome Cobra', brand: 'Ford', category: 'cobra_legacy', year: '2004', description: 'Color-shifting paint, interior accents' },
    
    // Pontiac Trans Am Legacy
    { id: 32, name: 'Pontiac Trans Am', brand: 'Pontiac', category: 'trans_am', year: '1969', description: 'Debut model, rear spoiler, functional hood scoops' },
    { id: 33, name: 'Pontiac Trans Am Bandit', brand: 'Pontiac', category: 'trans_am', year: '1976-1978', description: 'Black and gold, Y82/Y88 Special Edition' },
    { id: 34, name: 'Pontiac Trans Am 10th Anniversary', brand: 'Pontiac', category: 'trans_am', year: '1979', description: 'Silver with specific hood bird design' },
    { id: 35, name: 'Pontiac Trans Am Turbo', brand: 'Pontiac', category: 'trans_am', year: '1980-1981', description: 'Turbocharged 301 V8, distinctive hood bulge' },
    { id: 36, name: 'Pontiac Trans Am GTA', brand: 'Pontiac', category: 'trans_am', year: '1987-1992', description: 'Gran Turismo Americano, upgraded suspension' },
    { id: 37, name: 'Pontiac Trans Am 20th Anniversary', brand: 'Pontiac', category: 'trans_am', year: '1989', description: 'Turbo V6, Indianapolis 500 Pace Car' },
    
    // Modern Luxury Sports Cars
    { id: 38, name: 'Lamborghini Urus', brand: 'Lamborghini', category: 'luxury_sports', year: '2025', description: 'Luxury SUV with supercar DNA' },
    { id: 39, name: 'Ferrari F355', brand: 'Ferrari', category: 'luxury_sports', year: '1994-1999', description: 'Mid-engine V8, improved usability' },
    { id: 40, name: 'Porsche 911', brand: 'Porsche', category: 'luxury_sports', year: '2025', description: 'Iconic sports car, hybrid powertrain options' },
    { id: 41, name: 'Aston Martin Vantage', brand: 'Aston Martin', category: 'luxury_sports', year: '2025', description: 'Twin-turbo V8, refined British GT' },
    { id: 42, name: 'McLaren Artura', brand: 'McLaren', category: 'luxury_sports', year: '2025', description: 'Hybrid supercar technology' },
    { id: 43, name: 'Chevrolet Corvette C8', brand: 'Chevrolet', category: 'luxury_sports', year: '2025', description: 'Mid-engine American sports car' },
    { id: 44, name: 'Audi RS e-tron GT', brand: 'Audi', category: 'luxury_sports', year: '2025', description: 'All-electric, 912 hp, 0-60 in 2.4s' },
    { id: 45, name: 'Mercedes-AMG SL', brand: 'Mercedes-Benz', category: 'luxury_sports', year: '2025', description: 'Luxury sports car, plush and punchy' },
    
    // Classic Luxury & GT Cars
    { id: 46, name: 'Jaguar XJ12L', brand: 'Jaguar', category: 'classic_luxury', year: '1974-1979', description: 'Wood-and-leather interior, V12 power' },
    { id: 47, name: 'Maserati Sebring', brand: 'Maserati', category: 'classic_luxury', year: '1967', description: 'Classic Italian GT, elegant styling' },
    { id: 48, name: 'Alfa Romeo 2600 Spider', brand: 'Alfa Romeo', category: 'classic_luxury', year: '1962-1966', description: 'Touring-bodied, DOHC inline-six' },
    { id: 49, name: 'AC Cobra', brand: 'AC Cars', category: 'classic_luxury', year: '1961-1969', description: 'British chassis, American V8 power' },
    { id: 50, name: 'Jensen Interceptor Mk III', brand: 'Jensen', category: 'classic_luxury', year: '1971-1976', description: 'British GT, Chrysler V8, distinctive hatch' },
    
    // Modern SUVs & Trucks
    { id: 51, name: 'G-Wagon AMG', brand: 'Mercedes', category: 'luxury_suv', year: '2025', description: 'Iconic luxury SUV with AMG performance' },
    { id: 52, name: 'Bentley Bentayga', brand: 'Bentley', category: 'luxury_suv', year: '2025', description: 'Ultra-luxury SUV craftsmanship' },
    { id: 53, name: 'Rolls Royce Cullinan', brand: 'Rolls Royce', category: 'luxury_suv', year: '2025', description: 'Pinnacle of luxury SUV segment' },
    { id: 54, name: 'Range Rover SVR', brand: 'Range Rover', category: 'luxury_suv', year: '2025', description: 'Performance-focused luxury SUV' },
    { id: 55, name: 'Escalade ESV', brand: 'Cadillac', category: 'luxury_suv', year: '2025', description: 'American luxury SUV with presence' },
    
    // Modern Performance Cars
    { id: 56, name: 'Dodge Charger Hellcat', brand: 'Dodge', category: 'modern_muscle', year: '2025', description: 'Supercharged modern muscle sedan' },
    { id: 57, name: 'Camaro ZL1', brand: 'Chevrolet', category: 'modern_muscle', year: '2025', description: 'Track-focused modern muscle car' },
    { id: 58, name: 'Ford Mustang Shelby GT500', brand: 'Ford', category: 'modern_muscle', year: '2025', description: 'Supercharged modern Shelby performance' },
    { id: 59, name: 'Challenger SRT Hellcat', brand: 'Dodge', category: 'modern_muscle', year: '2025', description: 'Widebody modern muscle coupe' },
    { id: 60, name: 'Tesla Model S Plaid', brand: 'Tesla', category: 'modern_muscle', year: '2025', description: 'Electric performance sedan' }
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