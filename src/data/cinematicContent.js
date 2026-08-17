export const serviceNavItems = [
  { id: 'diagnose', number: '01', label: 'DIAGNOSE', targetId: 'service-01' },
  { id: 'repair', number: '02', label: 'REPAIR', targetId: 'service-02' },
  { id: 'optimize', number: '03', label: 'OPTIMIZE', targetId: 'service-04' },
  { id: 'perform', number: '04', label: 'PERFORM', targetId: 'service-06' },
]

export const premiumServices = [
  {
    id: 'service-01',
    number: '01',
    label: 'PRECISION',
    title: 'Advanced\nDiagnostics',
    description:
      'Computerized scanning reveals hidden issues before they become costly failures.',
    imageSrc: import.meta.env.BASE_URL + 'images/engine.jpg',
    imageAlt: 'Engine Diagnostics',
    objectPosition: 'center center',
    layout: 'image-left',
    clipReveal: true,
    features: [
      { title: 'Engine & System Scan', desc: 'Full system health analysis' },
      { title: 'Data-Driven Accuracy', desc: 'Identify issues with precision' },
      { title: 'Prevent Costly Repairs', desc: 'Fix it early, save more later' },
    ],
  },
  {
    id: 'service-02',
    number: '02',
    label: 'SAFETY',
    title: 'Brake\nService',
    description:
      'Complete brake system inspection and maintenance for safe, reliable stopping power.',
    imageSrc: import.meta.env.BASE_URL + 'images/brakes.jpg',
    imageAlt: 'Brake Service',
    objectPosition: 'center center',
    layout: 'image-right',
    clipReveal: false,
    features: [
      { title: 'Pad & Rotor Inspection', desc: 'Measure wear with precision' },
      { title: 'Fluid Condition Check', desc: 'Ensure optimal hydraulic performance' },
      { title: 'ABS Verification', desc: 'Safety systems tested and verified' },
    ],
  },
  {
    id: 'service-03',
    number: '03',
    label: 'MAINTENANCE',
    title: 'Oil &\nFilter',
    description:
      'Essential fluid maintenance for optimal engine performance and longevity.',
    imageSrc: import.meta.env.BASE_URL + 'images/workshop.jpg',
    imageAlt: 'Oil & Filter Service',
    objectPosition: 'center 30%',
    layout: 'image-left',
    clipReveal: false,
    features: [
      { title: 'Premium Synthetic Options', desc: 'Engine-specific fluid selection' },
      { title: 'Filter Replacement', desc: 'Clean filtration for peak flow' },
      { title: 'Multi-Point Inspection', desc: 'Comprehensive vehicle check' },
    ],
  },
  {
    id: 'service-04',
    number: '04',
    label: 'COOLING',
    title: 'AC &\nCooling',
    description:
      'Climate and cooling system service to keep your cabin comfortable and engine protected.',
    imageSrc: import.meta.env.BASE_URL + 'images/car-hero.jpg',
    imageAlt: 'AC & Cooling',
    objectPosition: 'center center',
    layout: 'image-right',
    clipReveal: true,
    features: [
      { title: 'Refrigerant Service', desc: 'Restore optimal cooling performance' },
      { title: 'Coolant System Flush', desc: 'Protect engine from overheating' },
      { title: 'Climate Diagnostics', desc: 'Pinpoint HVAC issues accurately' },
    ],
  },
  {
    id: 'service-05',
    number: '05',
    label: 'ELECTRICAL',
    title: 'Electrical\nDiagnostics',
    description:
      'Complete electrical system inspection — battery, alternator, sensors, and wiring.',
    imageSrc: import.meta.env.BASE_URL + 'images/engine.jpg',
    imageAlt: 'Electrical Diagnostics',
    objectPosition: 'center 60%',
    layout: 'image-left',
    clipReveal: false,
    features: [
      { title: 'Battery Load Test', desc: 'Verify starting power and health' },
      { title: 'Charging System Check', desc: 'Alternator output analysis' },
      { title: 'Sensor Calibration', desc: 'Restore electronic accuracy' },
    ],
  },
  {
    id: 'service-06',
    number: '06',
    label: 'PERFORMANCE',
    title: 'Performance\nService',
    description:
      'Precision tuning and maintenance for vehicles engineered to perform at their peak.',
    imageSrc: import.meta.env.BASE_URL + 'images/bmw.jpg',
    imageAlt: 'Performance Service',
    objectPosition: 'center center',
    layout: 'image-right',
    clipReveal: false,
    features: [
      { title: 'Engine Optimization', desc: 'Fine-tuned power delivery' },
      { title: 'Suspension Tuning', desc: 'Sharper handling and control' },
      { title: 'Road-Ready Verification', desc: 'Final performance validation' },
    ],
  },
]

export const stickyServiceItems = [
  {
    id: 'engine',
    number: '01',
    title: 'Engine',
    description:
      'Advanced diagnostics and precision mechanical care to keep your powertrain running at peak efficiency.',
    image: import.meta.env.BASE_URL + 'images/engine.jpg',
    objectPosition: 'center 40%',
  },
  {
    id: 'brakes',
    number: '02',
    title: 'Brakes',
    description:
      'Complete brake system inspection and service for confident, reliable stopping power.',
    image: import.meta.env.BASE_URL + 'images/brakes.jpg',
    objectPosition: 'center center',
  },
  {
    id: 'diagnostics',
    number: '03',
    title: 'Diagnostics',
    description:
      'Electronic scanning and fault analysis to identify issues before they become costly repairs.',
    image: import.meta.env.BASE_URL + 'images/workshop.jpg',
    objectPosition: 'center 35%',
  },
  {
    id: 'performance',
    number: '04',
    title: 'Performance',
    description:
      'Tuned maintenance and optimization for vehicles that demand more from every drive.',
    image: import.meta.env.BASE_URL + 'images/bmw.jpg',
    objectPosition: 'center center',
  },
]
