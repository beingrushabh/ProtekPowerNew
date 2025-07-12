export const products = [
    // Batteries
    {
        id: 'b1',
        name: 'High-Capacity Power Bank',
        price: 12999,
        image: '/assets/images/power-bank.jpeg',
        category: 'Batteries',
        slug: 'high-capacity-power-bank',
        description: 'Reliable power storage solution for extended backup times.',
        fullDescription: 'Our High-Capacity Power Bank provides industry-leading power storage capabilities with advanced lithium-ion technology. Designed for both residential and commercial applications, this power bank offers reliable backup during outages and efficient power management for your critical equipment.',
        sku: 'BAT-HC1000',
        rating: 4.7,
        reviewCount: 124,
        isNew: true,
        isBestseller: true,
        isOnSale: false,
        images: [
            { url: '/assets/images/power-bank.jpeg', alt: 'High-Capacity Power Bank - Front View' },
            { url: '/assets/images/power-bank.jpeg', alt: 'High-Capacity Power Bank - Side View' },
            { url: '/assets/images/power-bank.jpeg', alt: 'High-Capacity Power Bank - Rear View' },
            { url: '/assets/images/power-bank.jpeg', alt: 'High-Capacity Power Bank - Connector Detail' }
        ],
        features: [
            'Quick charging capability with 85% efficiency',
            'High-density energy storage',
            'Advanced Battery Management System (BMS)',
            'LED status indicators for easy monitoring',
            'Maintenance-free operation',
            'Compatible with solar charging systems'
        ],
        applicationAreas: [
            'Home backup power systems',
            'Small offices',
            'Medical equipment backup',
            'Telecommunications',
            'Remote field operations'
        ],
        specifications: {
            'Capacity': '10,000 mAh',
            'Technology': 'Lithium-ion Phosphate',
            'Cycle Life': '3000+ cycles',
            'Charging Time': '4-6 hours',
            'Max Discharge Rate': '30A continuous',
            'Operating Temperature': '-10°C to 50°C',
            'Weight': '8.5 kg',
            'Dimensions': '32 x 17 x 22 cm',
            'Warranty': '5 years'
        },
        warranty: {
            period: '5-Year',
            type: 'Limited',
            coverage: 'Covers manufacturing defects and normal performance degradation beyond rated specifications.'
        },
        reviews: [
            {
                author: 'Rahul Sharma',
                date: '2023-12-15',
                rating: 5,
                comment: 'Excellent power bank! Has been running my essential home equipment during power cuts without any issues. The build quality is excellent.',
                verifiedPurchase: true
            },
            {
                author: 'Priya Patel',
                date: '2023-11-28',
                rating: 4.5,
                comment: 'Great product, very reliable. The only small issue is that it takes a bit longer to charge than advertised.',
                verifiedPurchase: true
            },
            {
                author: 'Amit Kumar',
                date: '2023-10-05',
                rating: 5,
                comment: 'Using this for my small office. During power cuts, it keeps all our essential equipment running smoothly. Worth the investment!',
                verifiedPurchase: true
            },
            {
                author: 'Deepak Verma',
                date: '2023-09-22',
                rating: 4,
                comment: 'Good product overall. Battery life as promised. The LED indicators are very helpful to monitor the charge status.',
                verifiedPurchase: false
            }
        ]
    },

    // Add similar detailed data for other products...

    // Example for one more product
    {
        id: 'i1',
        name: 'Pure Sine Wave Inverter',
        price: 24999,
        originalPrice: 29999,
        image: '/assets/images/products/inverter.jpg',
        category: 'Inverters',
        slug: 'pure-sine-wave-inverter',
        description: 'Clean power output for sensitive equipment.',
        fullDescription: 'The Pure Sine Wave Inverter delivers stable and clean power output, making it ideal for sensitive electronic equipment. Unlike modified sine wave inverters, our pure sine wave technology provides power that matches or exceeds the quality of grid electricity, ensuring your devices operate efficiently and safely.',
        sku: 'INV-PS2000',
        rating: 4.9,
        reviewCount: 89,
        isNew: false,
        isBestseller: true,
        isOnSale: true,
        images: [
            { url: '/assets/images/products/inverter.jpg', alt: 'Pure Sine Wave Inverter - Front View' },
            { url: '/assets/images/products/inverter-side.jpg', alt: 'Pure Sine Wave Inverter - Side View' },
            { url: '/assets/images/products/inverter-panel.jpg', alt: 'Pure Sine Wave Inverter - Control Panel' },
            { url: '/assets/images/products/inverter-installation.jpg', alt: 'Pure Sine Wave Inverter - Installation Example' }
        ],
        features: [
            'Pure sine wave output (<3% THD)',
            'High efficiency power conversion (>90%)',
            'LCD display with system information',
            'Multiple protection systems: overload, short circuit, over-temperature',
            'Low power consumption in standby mode',
            'Compatible with all types of loads'
        ],
        applicationAreas: [
            'Home appliances',
            'Medical equipment',
            'Office electronics',
            'Telecommunications',
            'Small workshops'
        ],
        specifications: {
            'Capacity': '2000VA / 1600W',
            'Input Voltage': '24V DC',
            'Output Voltage': '230V AC ±3%',
            'Output Frequency': '50Hz ±0.1%',
            'Waveform': 'Pure Sine Wave',
            'Efficiency': '92%',
            'THD': '<3%',
            'Protection': 'Overload, Short Circuit, Over/Under Voltage',
            'Display': 'LCD',
            'Dimensions': '40 x 28 x 19 cm',
            'Weight': '12 kg'
        },
        warranty: {
            period: '3-Year',
            type: 'Comprehensive',
            coverage: 'Includes all electronic components and workmanship defects. Extended warranty available.'
        },
        reviews: [
            {
                author: 'Vikram Singh',
                date: '2024-01-10',
                rating: 5,
                comment: 'This inverter has been a lifesaver during power cuts. My computers and other sensitive equipment work perfectly with no issues.',
                verifiedPurchase: true
            },
            {
                author: 'Anjali Mehta',
                date: '2023-12-04',
                rating: 5,
                comment: 'Worth every rupee! The pure sine wave output is crucial for my home office setup. No more worries about damaging my equipment.',
                verifiedPurchase: true
            },
            {
                author: 'Suresh Rao',
                date: '2023-10-18',
                rating: 4.5,
                comment: 'Excellent product with great build quality. The LCD display is very informative and the unit runs quietly.',
                verifiedPurchase: true
            }
        ]
    },
//Single Phase Servo Stabilizer
    {
    id: 'ss1',
    name: 'Single Phase Servo Stabilizer',
    price: "25000", // Price not listed — you can add once known
    image: '/assets/images/products/single-phase-servo-stabilizer.jpg', // Replace with actual image path
    category: 'Servo Voltage Stabilizer',
    slug: 'single-phase-servo-stabilizer',
    description: 'Stable 230 V output with fast correction for sensitive equipment.',
    fullDescription: 'The Single Phase Servo Stabilizer ensures clean and reliable 230 V ± 1% output voltage, correcting input fluctuations between 180 V–280 V at 35 V/sec. With over 95% efficiency, overload capacity of 120% for 60 sec, and built‑in surge, short-circuit and soft‑turn protections, it’s ideal for CNC machines, medical instruments, air‑conditioning, labs, offices, and residential use.',
    sku: 'SVS-SP-1',
    rating: 4.9,
    reviewCount: 89,
    isNew: false,
    isBestseller: true,
    isOnSale: true,
    images: [
      { url: '/assets/images/products/single-phase-servo-stabilizer.jpg', alt: 'Single Phase Servo Stabilizer – Front View' }
      // Add more views if available
    ],
    features: [
      'Maintains 230 V ± 1% output despite 180–280 V input',
      'Fast correction at 35 V/sec',
      'Over 95% efficiency',
      'Supports 120% overload for up to 60 sec',
      'Minimal harmonic distortion (nil)',
      'Built-in soft-start, surge suppression, and MCB short-circuit protection'
    ],
    applicationAreas: [
      'CNC & textile machines',
      'Printing & packing equipment',
      'Medical instruments & operation theaters',
      'Air conditioning systems',
      'R&D labs, offices, showrooms',
      'Residential equipment protection'
    ],
    specifications: {
      'Input Voltage': '180–280 V AC',
      'Output Voltage': '230 V AC ± 1%',
      'Correction Rate': '35 V/sec',
      'Frequency Range': '47–53 Hz',
      'Efficiency': '>95%',
      'Capacity': '1 kVA–20 kVA',
      'Overload Capacity': '120% for 60 seconds',
      'Harmonic Distortion': 'Nil',
      'Metering': 'Input & output voltage',
      'Protection Features': 'Soft turn-on delay, low/high-voltage cut-off (optional), surge suppression, MCB'
    },
    warranty: {
        period: '3-Year',
        type: 'Comprehensive',
        coverage: 'Includes all electronic components and workmanship defects. Extended warranty available.'
    },
    reviews: [
      // Add reviews if available; currently none listed
    ]
  },
   //Three Phase Servo Stabilizer air cooled
  {
   
    id: 'tss1',
    name: 'Three Phase Servo Stabilizer',
    price: "20000", // You can update this later
    image: '/assets/images/products/three-phase-servo-stabilizer.jpg',
    category: 'Servo Voltage Stabilizer',
    slug: 'three-phase-servo-stabilizer',
    description: 'Stable 400 V output (±1%) with fast correction and high efficiency.',
    fullDescription: 'Our Three Phase Servo Stabilizer delivers precise 400 V ±1% output from a wide input range (typically 340–480 V), correcting at 35 V/sec with over 97% efficiency. With capacities covering 3–60 kVA and 120% overload capability for 60 seconds, along with full protection systems, it’s engineered for industrial-critical applications including CNC, textile, printing, medical, laboratories, offices, and residential systems.',
    sku: 'SVS-TP-3',
    rating: 4.9,
    reviewCount: 89,
    isNew: false,
    isBestseller: true,
    isOnSale: true,
    images: [
      { url: '/assets/images/products/three-phase-servo-stabilizer.jpg', alt: 'Three Phase Servo Stabilizer – Front View' }
    ],
    features: [
      'Maintains 400 V ±1% output from 340–480 V input',
      'Fast correction rate: 35 V/sec',
      'High efficiency (>97%)',
      'Supports 120% overload for 60 sec',
      'No harmonic distortion',
      'Input/output voltage metering',
      'Full protection: soft start, high/low cutoff, surge suppression, MCB short-circuit protection'
    ],
    applicationAreas: [
      'CNC machine tools',
      'Textile machinery',
      'Printing and packaging equipment',
      'Medical instruments & operation theaters',
      'R&D laboratories',
      'Office and showroom power systems',
      'Residential equipment protection'
    ],
    specifications: {
      'Input Voltage': '340–480 V AC (customizable)',
      'Output Voltage': '400 V AC ± 1%',
      'Correction Rate': '35 V/sec',
      'Frequency Range': '47–53 Hz',
      'Efficiency': '>97%',
      'Capacity': '3–60 kVA',
      'Overload Capacity': '120% for 60 seconds',
      'Harmonic Distortion': 'Nil',
      'Metering': 'Input & output voltage',
      'Protection Features': 'Soft turn-on, adjustable high/low cutoff, surge suppression, MCB short‑circuit protection'
    },
    warranty: {
      period: '3-Year',
      type: 'Comprehensive',
      coverage: 'Includes all electronic components and workmanship defects. Extended warranty available.'
    },
    reviews: [
      {
        author: 'Vikram Singh',
        date: '2024-01-10',
        rating: 5,
        comment: 'Our workshop’s equipment runs flawlessly now. No more voltage fluctuations. Highly recommend it!',
        verifiedPurchase: true
      },
      {
        author: 'Anjali Mehta',
        date: '2023-12-04',
        rating: 5,
        comment: 'Perfectly stabilizes our medical lab machinery. Robust build and runs cool.',
        verifiedPurchase: true
      },
      {
        author: 'Suresh Rao',
        date: '2023-10-18',
        rating: 4.5,
        comment: 'Great stabilizer with fast correction speed. Setup was simple, and operation is smooth.',
        verifiedPurchase: true
      }
    ]
  },
  //Oil-Cooled Three Phase Servo Stabilizer
   {
    id: 'ocs1',
    name: 'Oil-Cooled Three Phase Servo Stabilizer',
    price: "20000", // Add price when available
    image: '/assets/images/products/oil-cooled-servo-stabilizer.jpg',
    category: 'Servo Voltage Stabilizer',
    slug: 'three-phase-servo-stabilizer-oil-cooled',
    description: 'Robust oil-cooled stabilizer for high‑capacity three‑phase systems, 415 V ±1% output.',
    fullDescription: 'The Oil‑Cooled Three Phase Servo Stabilizer offers highly stable 415 V AC (±1%) three‑phase output from 300–500 V input, with fast correction up to 70 V/sec and 96%+ efficiency. Designed for high KVA (10–250 kVA), it includes protections such as automatic high/low voltage cut‑off, overload & short‑circuit protection, surge suppression, soft-start, audio alarms, single-phasing preventer, and optional isolation transformer for demanding applications.',
    sku: 'SVS-TP-OIL',
    rating: 4.9,
    reviewCount: 89,
    isNew: false,
    isBestseller: true,
    isOnSale: true,
    images: [
      { url: '/assets/images/products/oil-cooled-servo-stabilizer.jpg', alt: 'Oil-Cooled Servo Stabilizer – Front View' }
    ],
    features: [
      'Stable 415 V ±1% output up to 70 V/sec correction',
      'High efficiency (≥96%)',
      'Supports 10–250 kVA ratings',
      'Oil-cooled design for thermal stability',
      'Automatic high/low voltage cut-off',
      'Overload & short‑circuit protection with MCB',
      'Surge suppression and audio alarms',
      'Soft start & single‑phasing preventer',
      'Optional ultra-isolation transformer'
    ],
    applicationAreas: [
      'CNC & textile machines',
      'Mainframe computers & telecom',
      'Medical equipment & operation theaters',
      'Industrial AC plants',
      'Labs & large test facilities',
      'Elevators, production & packaging',
      'Centralized domestic stabilization'
    ],
    specifications: {
      'Input Voltage': '300–500 V AC (LL, 3‑phase, 4‑wire)',
      'Output Voltage': '415 V AC ± 1%',
      'Correction Rate': 'Up to 70 V/sec',
      'Response Time': '10 ms',
      'Efficiency': '≥96%',
      'KVA Ratings': '10–250 kVA',
      'Cooling': 'Air‑cooled up to 75 kVA; oil‑cooled above',
      'Harmonic Distortion': 'Nil',
      'Protection': 'High/low voltage cut-off, overload, short‑circuit, surge suppression, single‑phasing preventer',
      'Optional Features': 'Line/noise suppression, isolation transformer'
    },
    warranty: {
      period: '3-Year',
      type: 'Comprehensive',
      coverage: 'Includes all electronic components and workmanship defects. Extended warranty available.'
    },
    reviews: [
      {
        author: 'Vikram Singh',
        date: '2024-01-10',
        rating: 5,
        comment: 'Reliable performance in our industrial setting—no downtime due to voltage issues.',
        verifiedPurchase: true
      },
      {
        author: 'Anjali Mehta',
        date: '2023-12-04',
        rating: 5,
        comment: 'Handles our high‑KVA textile plant with ease. Very impressed.',
        verifiedPurchase: true
      },
      {
        author: 'Suresh Rao',
        date: '2023-10-18',
        rating: 4.5,
        comment: 'Great stabilizer, efficient and robust. Setup was quick.',
        verifiedPurchase: true
      }
    ]
  },
  //jindal-avc
  {
  
    id: 'j1',
    name: 'Jindal Automatic Voltage Controller (AVC)',
    price: "25000", // Add when available
    image: '/assets/images/products/jindal-avc.jpg',
    category: 'Servo Voltage Stabilizer',
    slug: 'jindal-avc',
    description: 'Maintains desired voltage & reduces equipment breakdown due to voltage fluctuations.',
    fullDescription: 'Jindal’s AVC provides foolproof protection against high, low, and unbalanced three-phase voltages. Based on rugged, maintenance-free linear controllers (stepless regulation via rolling-contact design), it delivers 400 V ±1% output, corrects voltage variations in milliseconds, and achieves >99% efficiency. Capacities range from 30 kVA to 5000 kVA, with options for natural or ONAN oil-cooled designs. It features microprocessor controls, overload/short‑circuit protection, surge suppression, single‑phasing prevention, and customizable high/low cut‑offs, ideal for industrial, commercial, and critical infrastructure applications.',
    sku: 'AVC-JNDL-STD',
    rating: 4.9,
    reviewCount: 89,
    isNew: false,
    isBestseller: true,
    isOnSale: true,
    images: [
      { url: '/assets/images/products/jindal-avc.jpg', alt: 'Jindal AVC – Front View' }
    ],
    features: [
      'Maintains 400 V ±1% output despite wide input swings',
      'Linear on-load regulation via rolling-contact design',
      'Correction rate: 6–15 V/sec (≤500 kVA), 3–8 V/sec (>500 kVA)',
      'High efficiency (≥98–99.5%)',
      'Microprocessor-based control module',
      'Protection: high/low voltage cutoff, overload, short circuit, surge suppression',
      'Single-phasing preventer, bypass and isolation options available'
    ],
    applicationAreas: [
      'Industrial plants (milling, paper, rubber, cement)',
      'Hospitals & clinics',
      'Data centers & telecom',
      'Commercial buildings, malls, hotels, offices',
      'Factories, warehouses, high-rise buildings',
      'Educational institutions'
    ],
    specifications: {
      'Capacity Range': '30–5000 kVA',
      'Type': 'Three‑phase, linear on‑load AVC',
      'Input Voltage': '300–500 V (wide/asymmetrical)',
      'Output Voltage': '400 V ±1% (Ph‑Ph) / 230 V ±1% (Ph‑N)',
      'Correction Rate': '6–15 V/sec (≤500 kVA); 3–8 V/sec (>500 kVA)',
      'Efficiency': '98–99.5%',
      'Response Time': '<10 ms',
      'Waveform Distortion': 'Nil',
      'Cooling': 'Natural oil‑cooled (ONAN), air‑cooled available',
      'Frequency': '50/60 Hz ±5%',
      'Protection Features': 'High/low cut‑off, overload, surge suppression, single‑phasing preventer, bypass'
    },
    warranty: {
      period: '3-Year',
      type: 'Comprehensive',
      coverage: 'Includes all electronic components and workmanship defects. Extended warranty available.'
    },
    reviews: [
      {
        author: 'Praveen Vyas',
        date: '2021-04-15',
        rating: 5,
        comment: 'Working satisfactorily since 1998! No problems with our 500 kVA unit.',
        verifiedPurchase: true
      },
      {
        author: 'T. Pradeep Hegde',
        date: '2020-11-20',
        rating: 5,
        comment: 'Auto‑transformers for motor testing are working perfectly since 2006.',
        verifiedPurchase: true
      }
    ]
  },
  //Constant Voltage Transformer
  {
    id: 'cvt1',
    name: 'Constant Voltage Transformer (CVT)',
    price: "20000", // Add price when available
    image: '/assets/images/cvt/cvt_front.jpeg',
    category: 'Constant Voltage Transformer',
    slug: 'constant-voltage-transformer',
    description: 'Provides stable output across wide input voltage range and filters spikes/transients.',
    fullDescription: 'Pro_tek CVTs are engineered for optimal performance under variable Indian power conditions. Available in single-phase and three-phase models, they deliver constant output across input voltage from 180 V to 280 V, while eliminating spikes, notches, noise, and transients. These transformers offer high isolation, fast regulation (within 2 cycles), low distortion (≤6% sinusoidal output), automatic current limiting and short-circuit protection, electrostatic shielding, 120% overload capacity for 3 minutes, cool operation up to full load, and 5-second ride-through energy storage.',
    sku: 'CVT-PTK-STD',
    rating: 4.9,
    reviewCount: 89,
    isNew: false,
    isBestseller: true,
    isOnSale: true,
    images: [
      { url: '/assets/images/cvt/cvt_front.jpeg', alt: 'Constant Voltage Transformer – Front View' }
    ],
    features: [
      'Constant output for 180–280 V input',
      'Removes spikes, notches, noise & transients',
      'High isolation between input & output',
      'Fast regulation in 2 cycles',
      'Low maintenance, no moving parts',
      'Low distortion (≤6%) with sine-wave output',
      'Automatic current limiting & short-circuit protection',
      'Electrostatic shielding',
      '1.5% output shift for 1% frequency change',
      '120% overload for 3 minutes',
      'Maintains cool operation under full load',
      '5 s energy ride-through on line loss'
    ],
    applicationAreas: [
      'Sensitive laboratory and medical instruments',
      'Telecom and communication systems',
      'Industrial control panels',
      'UPS and backup power systems',
      'Mission-critical equipment under variable input'
    ],
    specifications: {
      'Input Voltage': '180–280 V AC',
      'Phase': 'Single-phase / Three-phase',
      'Output Voltage': 'Constant regulated output',
      'Regulation Time': 'Within 2 cycles',
      'Distortion': '≤6% THD',
      'Overload Capacity': '120% for 3 minutes',
      'Ride‑Through': 'Energy stored for 5 s line loss',
      'Isolation': 'High, with electrostatic shielding'
    },
    warranty: {
      period: '3-Year',
      type: 'Comprehensive',
      coverage: 'Includes all electronic components and workmanship defects. Extended warranty available.'
    },
    reviews: [
      {
        author: 'Ravi Desai',
        date: '2024-02-12',
        rating: 5,
        comment: 'Our lab instruments run flawlessly even when input voltage drops. Highly reliable device.',
        verifiedPurchase: true
      },
      {
        author: 'Shilpa Nair',
        date: '2023-11-30',
        rating: 4.5,
        comment: 'Very smooth sine‑wave output; reduced trips in our UPS backup system.',
        verifiedPurchase: true
      },
      {
        author: 'Manish Gupta',
        date: '2023-10-05',
        rating: 5,
        comment: 'Efficient unit with fast regulation. No moving parts is a plus!',
        verifiedPurchase: true
      }
    ]
  }


];