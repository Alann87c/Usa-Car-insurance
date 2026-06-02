import { InsuranceCompany } from '../types';

export const insuranceCompanies: InsuranceCompany[] = [
  {
    id: 'state-farm',
    name: 'State Farm',
    website: 'https://www.statefarm.com',
    quoteUrl: 'https://www.statefarm.com/insurance/auto',
    slogan: 'Like a good neighbor, State Farm is there.®',
    logoColor: 'from-red-600 to-red-500',
    accentColor: '#E1251B',
    rating: 4.8,
    amBestRating: 'A++',
    marketShare: 16.8,
    established: 1922,
    headquarters: 'Bloomington, IL',
    phone: '1 (800) 782-8332',
    description: 'The largest auto insurer in the United States, State Farm controls more than 16% of the market. It is highly valued for its massive agent network, high customer satisfaction, exceptional financial stability, and excellent discount programs like "Drive Safe & Save".',
    pros: [
      'Largest local network of agents in the USA',
      'Up to 30% discounts via Drive Safe & Save telematics',
      'Top-tier financial strength rating (A++)',
      'Robust mobile app for quick claims filing'
    ],
    cons: [
      'Rates can be higher for drivers with poor credit',
      'Online tool requires contacting state agents in some regions'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: false,
    statesServed: 'All 50 states',
    statesList: [], // Nationwide
    estimatedRates: {
      young: 220,
      adult: 115,
      senior: 105,
      minimumCoverage: 55,
      fullCoverage: 145
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: true,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'geico',
    name: 'GEICO',
    website: 'https://www.geico.com',
    quoteUrl: 'https://www.geico.com/auto-insurance/',
    slogan: '15 minutes could save you 15% or more on car insurance.®',
    logoColor: 'from-blue-700 to-blue-500',
    accentColor: '#10529B',
    rating: 4.6,
    amBestRating: 'A++',
    marketShare: 13.5,
    established: 1936,
    headquarters: 'Chevy Chase, MD',
    phone: '1 (800) 207-7847',
    description: 'GEICO (Government Employees Insurance Company) is famous for its lizard mascot, streamlined paperless quotes, and consistently being one of the low-cost leaders nationwide. It is exceptional for clean-record drivers looking for straight-forward coverage.',
    pros: [
      'Highly intuitive quote tool and standard-setting mobile app',
      'Often the cheapest national carrier for clean driving records',
      'Excellent military and federal employee discount programs',
      '24/7 client support line'
    ],
    cons: [
      'Fewer options for local, face-to-face agent interactions',
      'Does not offer standard GAP insurance in several states'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: true,
    statesServed: 'All 50 states',
    statesList: [], // Nationwide
    estimatedRates: {
      young: 245,
      adult: 105,
      senior: 98,
      minimumCoverage: 48,
      fullCoverage: 138
    },
    features: {
      gapInsurance: false,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: true,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'progressive',
    name: 'Progressive',
    website: 'https://www.progressive.com',
    quoteUrl: 'https://www.progressive.com/auto/',
    slogan: 'Name Your Price.®',
    logoColor: 'from-cyan-600 to-blue-600',
    accentColor: '#003087',
    rating: 4.5,
    amBestRating: 'A+',
    marketShare: 14.1,
    established: 1937,
    headquarters: 'Mayfield Village, OH',
    phone: '1 (800) 776-4737',
    description: 'Progressive is known for pioneering online quoting tools, its Name Your Price® tool, and the "Snapshot" program which rewards safe driving. It is particularly competitive for drivers with previous accidents, speeding tickets, or DUI records.',
    pros: [
      'Lenient underwriting for drivers with spotty credit or records',
      'Highly flexible coverage customization options',
      'Unique Snapshot telematics rewards low mileage and gentle stops',
      'Excellent GAP and rideshare add-on options'
    ],
    cons: [
      'Base rates can be slightly higher for older, lower-risk drivers',
      'Snapshot program can increase premiums for aggressive drivers'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: true,
    statesServed: 'All 50 states',
    statesList: [], // Nationwide
    estimatedRates: {
      young: 260,
      adult: 125,
      senior: 118,
      minimumCoverage: 62,
      fullCoverage: 158
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: true,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'allstate',
    name: 'Allstate',
    website: 'https://www.allstate.com',
    quoteUrl: 'https://www.allstate.com/auto-insurance',
    slogan: 'You\'re in good hands with Allstate.®',
    logoColor: 'from-sky-700 to-blue-800',
    accentColor: '#0054A6',
    rating: 4.4,
    amBestRating: 'A+',
    marketShare: 10.4,
    established: 1931,
    headquarters: 'Northfield Township, IL',
    phone: '1 (800) 255-7828',
    description: 'Allstate stands out for its high-quality coverage options, extensive premium discounts, and a massive agent system. While typically priced slightly higher than standard discount insurers, its "Drivewise" program and "Milewise" pay-per-mile options provide highly custom rates.',
    pros: [
      'Exceptional array of customizable coverage categories',
      'Top-tier mobile tools and quick-pay claims system',
      'Highly personalized service from dedicated agents',
      'Excellent rental reimbursement and new car replacement'
    ],
    cons: [
      'Average premiums tend to be higher than GEICO or Progressive',
      'Many discounts vary heavily based on local rules'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: true,
    statesServed: 'All 50 states',
    statesList: [], // Nationwide
    estimatedRates: {
      young: 280,
      adult: 135,
      senior: 128,
      minimumCoverage: 69,
      fullCoverage: 168
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: true,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'usaa',
    name: 'USAA',
    website: 'https://www.usaa.com',
    quoteUrl: 'https://www.usaa.com/insurance/car',
    slogan: 'We know what it means to serve.®',
    logoColor: 'from-slate-800 to-slate-950',
    accentColor: '#002A54',
    rating: 4.9,
    amBestRating: 'A++',
    marketShare: 6.2,
    established: 1922,
    headquarters: 'San Antonio, TX',
    phone: '1 (800) 531-8722',
    description: 'Consistently ranked #1 in J.D. Power reports for auto insurance customer satisfaction, USAA is exclusively available to US military service members, veterans, and their immediate families. If you qualify, it regularly offers the cheapest premium and highest claim support of any brand.',
    pros: [
      'Unmatched customer satisfaction scores year after year',
      'Extremely competitive rates across all age brackets',
      'Tailored policies for deployed active-duty military members',
      'Legendary financial stability ratings'
    ],
    cons: [
      'Strictly limited to active military, veterans, and families',
      'Fewer walk-in branches; mostly operates online and phone'
    ],
    militaryOnly: true,
    seniorFocused: false,
    nonStandardSR22: false,
    statesServed: 'All 50 states',
    statesList: [], // Nationwide
    estimatedRates: {
      young: 180,
      adult: 90,
      senior: 82,
      minimumCoverage: 40,
      fullCoverage: 110
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: true,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'liberty-mutual',
    name: 'Liberty Mutual',
    website: 'https://www.libertymutual.com',
    quoteUrl: 'https://www.libertymutual.com/car-insurance',
    slogan: 'Only pay for what you need.™',
    logoColor: 'from-amber-500 to-yellow-600',
    accentColor: '#F5B017',
    rating: 4.1,
    amBestRating: 'A',
    marketShare: 4.8,
    established: 1912,
    headquarters: 'Boston, MA',
    phone: '1 (800) 290-8711',
    description: 'Liberty Mutual is one of the oldest mutual insurers, boasting unique customization options and a major market presence. It focuses heavily on bundles (auto + home) to drastically reduce premiums for homeowners.',
    pros: [
      'Superb bundling discounts, especially for homeowners',
      'Unique "RightTrack" telematics records safe behaviors for up to 30% off',
      'Guaranteed lifetime repair programs at approved partner shops',
      '24-hour claims and support services'
    ],
    cons: [
      'Standard non-bundled rates can be quite pricey for single young drivers',
      'Customer service reviews are more average compared to peers'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: true,
    statesServed: 'All 50 states',
    statesList: [],
    estimatedRates: {
      young: 295,
      adult: 142,
      senior: 130,
      minimumCoverage: 75,
      fullCoverage: 175
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: true,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'farmers',
    name: 'Farmers Insurance',
    website: 'https://www.farmers.com',
    quoteUrl: 'https://www.farmers.com/auto/',
    slogan: 'We are Farmers! Bum-ba-dum-bum-bum-bum-bum!®',
    logoColor: 'from-blue-900 to-indigo-950',
    accentColor: '#17408B',
    rating: 4.3,
    amBestRating: 'A',
    marketShare: 4.5,
    established: 1928,
    headquarters: 'Los Angeles, CA',
    phone: '1 (888) 327-6377',
    description: 'Farmers is famous for its educational guides and extensive array of obscure coverage extensions (including customized equipment, OEM parts, and high-value stereos). Highly recommended for enthusiasts wanting premium protections.',
    pros: [
      'One of the deepest policy-customization plans available',
      'Signal® telematics app offers up to 15% discount just for active use',
      'Exceptional multi-policy discounts if bundling home, boat, or life',
      'Great customizable loss-of-use and rental programs'
    ],
    cons: [
      'Generally features premium pricing',
      'Unavailable in a handful of states in the northeast/midwest'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: true,
    statesServed: '41 States',
    statesList: ['AL', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'SD', 'TN', 'TX', 'UT', 'VA', 'WA', 'WI', 'WY'],
    estimatedRates: {
      young: 310,
      adult: 155,
      senior: 138,
      minimumCoverage: 80,
      fullCoverage: 185
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: true,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'nationwide',
    name: 'Nationwide',
    website: 'https://www.nationwide.com',
    quoteUrl: 'https://www.nationwide.com/personal/insurance/auto/',
    slogan: 'Nationwide is on your side.®',
    logoColor: 'from-blue-600 to-blue-800',
    accentColor: '#005A9C',
    rating: 4.5,
    amBestRating: 'A+',
    marketShare: 2.1,
    established: 1926,
    headquarters: 'Columbus, OH',
    phone: '1 (877) 669-6877',
    description: 'Nationwide excels with customized coverage and great member benefits. Its SmartRide® (telematics) and SmartMiles® (pay-per-mile for low-mileage drivers) offer huge premium discounts. It is a highly respected mutual provider.',
    pros: [
      'SmartMiles® is an excellent pay-per-mile plan for low emitters/commuters',
      'SmartRide® offers an immediate 10% sign-up discount and up to 40% total savings',
      'Free annual "On Your Side" reviews to optimize your policies',
      'Strong accident-forgiveness options'
    ],
    cons: [
      'Not available in Alaska, Hawaii, Louisiana, or Massachusetts',
      'Requires clean driving records to get competitive base rates'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: false,
    statesServed: '46 States',
    statesList: ['AL', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'ME', 'MD', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
    estimatedRates: {
      young: 255,
      adult: 122,
      senior: 112,
      minimumCoverage: 58,
      fullCoverage: 148
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: true,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'travelers',
    name: 'Travelers',
    website: 'https://www.travelers.com',
    quoteUrl: 'https://www.travelers.com/car-insurance',
    slogan: 'It\'s better to have it and not need it...™',
    logoColor: 'from-red-700 to-red-800',
    accentColor: '#D31200',
    rating: 4.3,
    amBestRating: 'A++',
    marketShare: 1.8,
    established: 1853,
    headquarters: 'New York, NY',
    phone: '1 (800) 842-5075',
    description: 'One of the oldest financial institutions in America, Travelers is a highly stable option that offers exceptional discounts for hybrid/electric vehicles and bundling. Great for clean-record drivers wanting highly durable corporate security backing.',
    pros: [
      'Exceptional green-vehicle rewards (up to 10% discount check)',
      'Highly stable insurance coverage with supreme claims response speed',
      'Premier claims-free discount plans (up to 15%)',
      'Top-tier ratings for commercial driver add-ons'
    ],
    cons: [
      'Relatively basic online interactive tools',
      'Few specialized coverage offerings like custom sound system limits'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: false,
    statesServed: '42 States',
    statesList: ['AL', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'ME', 'MD', 'MA', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WI'],
    estimatedRates: {
      young: 265,
      adult: 128,
      senior: 119,
      minimumCoverage: 60,
      fullCoverage: 152
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: true,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'erie',
    name: 'Erie Insurance',
    website: 'https://www.erieinsurance.com',
    quoteUrl: 'https://www.erieinsurance.com/auto-insurance',
    slogan: 'Above all in service.®',
    logoColor: 'from-emerald-700 to-emerald-900',
    accentColor: '#006E51',
    rating: 4.8,
    amBestRating: 'A+',
    marketShare: 1.2,
    established: 1925,
    headquarters: 'Erie, PA',
    phone: '1 (800) 458-0811',
    description: 'A regional giant that outperforms national giants in pricing and service satisfaction. Erie\'s "Rate Lock" feature holds your auto insurance rates steady until you add a vehicle, add a driver, or change address—even if you file a claim!',
    pros: [
      'Erie Rate Lock® prevents rates from going up unless standard structural risk changes',
      'Highly praised regional agent support networks',
      'Incredibly competitive pricing matching low budgets',
      'Standard plans include coverage details others charge as extras'
    ],
    cons: [
      'Only available in 12 eastern/midwestern states and DC',
      'Quotes must be processed or finalized with local agents'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: false,
    statesServed: 'Regional (12 states + DC)',
    statesList: ['IL', 'IN', 'KY', 'MD', 'NY', 'NC', 'OH', 'PA', 'TN', 'VA', 'WV', 'WI', 'DC'],
    estimatedRates: {
      young: 195,
      adult: 104,
      senior: 94,
      minimumCoverage: 46,
      fullCoverage: 124
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: false,
      rideshareCoverage: true,
      mobileClaims: true
    },
    quoteMethod: 'Agent Required'
  },
  {
    id: 'auto-owners',
    name: 'Auto-Owners Insurance',
    website: 'https://www.auto-owners.com',
    quoteUrl: 'https://www.auto-owners.com/insurance/car-insurance',
    slogan: 'Safe. Sound. Secure.®',
    logoColor: 'from-indigo-700 to-indigo-900',
    accentColor: '#0B2F64',
    rating: 4.7,
    amBestRating: 'A++',
    marketShare: 1.1,
    established: 1916,
    headquarters: 'Lansing, MI',
    phone: '1 (800) 282-1425',
    description: 'Auto-Owners is a highly successful insurer operating exclusively through independent agents. Known for high customer retention and top-tier financial safety, they offer outstanding multi-policy bundles and customized gap/car replacement programs.',
    pros: [
      'A++ Financial strength indicating maximum security',
      'Unique "Common Policy Dividend" and bundling savings',
      'Exceptional personal auto claim division with live experts',
      'Purchase Price Guarantee gap option'
    ],
    cons: [
      'No online-only direct quotes; require independent broker agent match',
      'Only available in 26 states across Midwest, South and West'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: false,
    statesServed: 'Regional (26 States)',
    statesList: ['AL', 'AZ', 'CO', 'FL', 'GA', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'MI', 'MN', 'MO', 'NE', 'NC', 'ND', 'OH', 'OR', 'SC', 'SD', 'TN', 'UT', 'VA', 'WA', 'WI'],
    estimatedRates: {
      young: 215,
      adult: 110,
      senior: 100,
      minimumCoverage: 52,
      fullCoverage: 132
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: true,
      mobileClaims: false
    },
    quoteMethod: 'Agent Required'
  },
  {
    id: 'the-hartford',
    name: 'The Hartford',
    website: 'https://www.thehartford.com',
    quoteUrl: 'https://www.thehartford.com/car-insurance',
    slogan: 'Backing you for and ahead since 1810.®',
    logoColor: 'from-amber-700 to-amber-900',
    accentColor: '#442F19',
    rating: 4.6,
    amBestRating: 'A+',
    marketShare: 0.9,
    established: 1810,
    headquarters: 'Hartford, CT',
    phone: '1 (888) 413-8970',
    description: 'The Hartford is the exclusive auto insurance provider linked with the AARP. It is specifically optimized to provide exceptional discounts and coverages for drivers aged 50-plus, including special features like lifetime renewability and specialized recovery tools.',
    pros: [
      'Exclusive AARP pricing brackets for motorists over age 50',
      'Lifetime renewability guarantee—never dropped due to aging',
      'Excellent recover care coverage that pays for cleaning/mowing after crashes',
      'Very responsive personal hotline'
    ],
    cons: [
      'Non-AARP Rates for younger/adult drivers are significantly high',
      'Requires active AARP membership for full discounts'
    ],
    militaryOnly: false,
    seniorFocused: true,
    nonStandardSR22: false,
    statesServed: 'All 50 states',
    statesList: [], // Nationwide
    estimatedRates: {
      young: 380,
      adult: 148,
      senior: 102,
      minimumCoverage: 72,
      fullCoverage: 165
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: false,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'amfam',
    name: 'American Family',
    website: 'https://www.amfam.com',
    quoteUrl: 'https://www.amfam.com/insurance/car',
    slogan: 'Insure carefully, dream fearlessly.®',
    logoColor: 'from-red-600 to-red-800',
    accentColor: '#CC0000',
    rating: 4.5,
    amBestRating: 'A',
    marketShare: 1.4,
    established: 1927,
    headquarters: 'Madison, WI',
    phone: '1 (800) 692-6326',
    description: 'American Family (often branded as AmFam) is a prominent regional player in 19 states. Highly praised for digital integration (KnowYourDrive telematics discount) and premium bundling options, AmFam targets loyal family plans.',
    pros: [
      'Up to 20% discount via KnowYourDrive safe driving metrics',
      'Great customizable "MyAmFam" suite for claims tracking',
      'Exceptional customer service surveys in local Midwestern markets',
      'Good student and teen driver safe courses incentives'
    ],
    cons: [
      'Only written in 19 specific states',
      'Slightly higher standard base premiums for solo single drivers'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: true,
    statesServed: 'Regional (19 States)',
    statesList: ['CO', 'GA', 'ID', 'IL', 'IN', 'IA', 'KS', 'MN', 'MO', 'NE', 'NV', 'ND', 'OH', 'SD', 'UT', 'WA', 'WI', 'OR', 'AZ'],
    estimatedRates: {
      young: 240,
      adult: 118,
      senior: 110,
      minimumCoverage: 56,
      fullCoverage: 142
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: true,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'mercury',
    name: 'Mercury Insurance',
    website: 'https://www.mercuryinsurance.com',
    quoteUrl: 'https://www.mercuryinsurance.com/insurance/car-insurance.html',
    slogan: 'Real world protection.®',
    logoColor: 'from-sky-600 to-sky-800',
    accentColor: '#0083C6',
    rating: 4.0,
    amBestRating: 'A',
    marketShare: 0.8,
    established: 1961,
    headquarters: 'Los Angeles, CA',
    phone: '1 (800) 422-9000',
    description: 'Mercury prioritizes low-cost, low-frills packages operating through regional agents. It is extremely competitive in CA, TX, and FL, specialized in custom plans that bypass the high administration costs of massive cross-country networks.',
    pros: [
      'Consistently cheap liability options in highly complex states like CA/TX',
      'Direct, fast claim payouts via local workshops networks',
      'Excellent mechanical breakdown insurance options (MBI) cheaper than extended warranties',
      'Good usage-based telematics with MercuryGO'
    ],
    cons: [
      'Only available in 11 states',
      'Online web app is somewhat archaic compared to national chains'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: true,
    statesServed: 'Regional (11 States)',
    statesList: ['AZ', 'CA', 'FL', 'GA', 'IL', 'NV', 'NJ', 'NY', 'OK', 'TX', 'VA'],
    estimatedRates: {
      young: 275,
      adult: 130,
      senior: 122,
      minimumCoverage: 64,
      fullCoverage: 154
    },
    features: {
      gapInsurance: false,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: true,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'lemonade',
    name: 'Lemonade Car',
    website: 'https://www.lemonade.com/car',
    quoteUrl: 'https://www.lemonade.com/car',
    slogan: 'Instant everything. Great rates. Eco-friendly.',
    logoColor: 'from-pink-500 to-rose-600',
    accentColor: '#FF007F',
    rating: 4.4,
    amBestRating: 'NR', // (Not rated standard, but reinsured by giant A-rated reinsurers)
    marketShare: 0.2,
    established: 2015,
    headquarters: 'New York, NY',
    phone: '1 (844) 730-5226',
    description: 'Purely mobile app-driven pay-per-mile car insurance. Highly advanced AI handles quotes in 90 seconds and processes claims instantly in-app. Lemonade tracks actual driven mileage and offsets carbon by planting trees.',
    pros: [
      'Outstanding app-based quoting taking less than 2 minutes',
      'Eco-friendly pledge offsets carbon emissions from driving',
      'Insane savings for low-mileage drivers who drive only a few times a week',
      'Excellent bundles with Lemonade renters & pet insurance'
    ],
    cons: [
      'Relatively new program with restricted state availability',
      'No physical agents or phone support branches'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: false,
    statesServed: 'Regional (9 States)',
    statesList: ['AZ', 'CA', 'CO', 'IL', 'MD', 'OH', 'OR', 'PA', 'TX', 'TN', 'WA'],
    estimatedRates: {
      young: 210,
      adult: 98,
      senior: 92,
      minimumCoverage: 44,
      fullCoverage: 118
    },
    features: {
      gapInsurance: false,
      accidentForgiveness: false,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: false,
      mobileClaims: true
    },
    quoteMethod: 'App Only'
  },
  {
    id: 'root',
    name: 'Root Insurance',
    website: 'https://www.joinroot.com',
    quoteUrl: 'https://www.joinroot.com',
    slogan: 'Rates based on how you drive, not just who you are.',
    logoColor: 'from-orange-600 to-stone-900',
    accentColor: '#FF5A00',
    rating: 4.2,
    amBestRating: 'A',
    marketShare: 0.3,
    established: 2015,
    headquarters: 'Columbus, OH',
    phone: '1 (866) 980-7668',
    description: 'Root Insurance calculates premiums based entirely on a test drive using your smartphone\'s gyroscope and accelerometer. They weed out bad drivers completely to keep premiums lower for safe operators.',
    pros: [
      'Allows super-safe young drivers to bypass high age-based brackets',
      'Extremely modern app interface with automated digital claims',
      'No complicated forms; quote is calculated using test drive data',
      'Roadside assistance included in every base policy'
    ],
    cons: [
      'Requires setting up a 3-week "test drive" tracking period before offering a policy',
      'Price can jump suddenly if smartphone measures rapid acceleration/sharp turns'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: true,
    statesServed: '34 States',
    statesList: ['AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'GA', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'MD', 'MS', 'MO', 'MT', 'NE', 'NV', 'NM', 'ND', 'OH', 'OK', 'OR', 'PA', 'SC', 'TN', 'TX', 'UT', 'VA', 'WA', 'WV', 'WI', 'WY'],
    estimatedRates: {
      young: 190,
      adult: 102,
      senior: 96,
      minimumCoverage: 48,
      fullCoverage: 128
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: false,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: false,
      mobileClaims: true
    },
    quoteMethod: 'App Only'
  },
  {
    id: 'national-general',
    name: 'National General',
    website: 'https://www.nationalgeneral.com',
    quoteUrl: 'https://www.nationalgeneral.com',
    slogan: 'The insurance company with a human touch.',
    logoColor: 'from-cyan-700 to-cyan-900',
    accentColor: '#00839c',
    rating: 3.9,
    amBestRating: 'A+',
    marketShare: 0.7,
    established: 1920,
    headquarters: 'Winston-Salem, NC',
    phone: '1 (888) 293-5108',
    description: 'Brought under the Allstate umbrella, National General is a historical heavyweight in writing non-standard insurances. It is heavily optimized for high-risk drivers, high DUI counts, or drivers needing immediate SR-22 filings to regain licenses.',
    pros: [
      'Incredibly lenient with multiple DUI, tickets, or policy lapses',
      'Filing of SR-22 certificate with state DMV is completed instantly',
      'Offers excellent RV, camper, and multi-vehicle bundle plans',
      'Strong financial backing of parent company Allstate'
    ],
    cons: [
      'Customer service reviews are noticeably lower than standard peer companies',
      'Base rates for safe drivers can be expensive'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: true,
    statesServed: 'All 50 states',
    statesList: [], // Nationwide
    estimatedRates: {
      young: 340,
      adult: 172,
      senior: 155,
      minimumCoverage: 98,
      fullCoverage: 215
    },
    features: {
      gapInsurance: false,
      accidentForgiveness: false,
      roadsideAssistance: true,
      telematicsDiscount: false,
      rideshareCoverage: false,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'direct-auto',
    name: 'Direct Auto',
    website: 'https://www.directauto.com',
    quoteUrl: 'https://www.directauto.com/car-insurance',
    slogan: 'Get Direct. Do More.®',
    logoColor: 'from-red-700 to-red-900',
    accentColor: '#D11C28',
    rating: 4.0,
    amBestRating: 'A+',
    marketShare: 0.4,
    established: 1991,
    headquarters: 'Nashville, TN',
    phone: '1 (877) 463-4732',
    description: 'Specifically focuses on providing cheap coverage paths and highly interactive low-down payment plans. Direct Auto works with individuals who have spotty credit or a high-risk driving history, making sure they can afford state liability minimums.',
    pros: [
      'Flexible payment dates and customizable down payments',
      'Welcoming to high-risk drivers, DUI histories, and DMV SR-22 filings',
      'Excellent physical store locations across southern states',
      'Offers multi-policy discounts easily in store'
    ],
    cons: [
      'High rates overall for drivers with pristine credit/records',
      'Only written in 17 state markets'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: true,
    statesServed: 'Regional (17 States)',
    statesList: ['AL', 'AR', 'FL', 'GA', 'IL', 'LA', 'MS', 'MO', 'NC', 'OH', 'PA', 'SC', 'TN', 'TX', 'VA', 'WA', 'KY'],
    estimatedRates: {
      young: 325,
      adult: 168,
      senior: 148,
      minimumCoverage: 88,
      fullCoverage: 200
    },
    features: {
      gapInsurance: false,
      accidentForgiveness: false,
      roadsideAssistance: true,
      telematicsDiscount: false,
      rideshareCoverage: false,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'njm',
    name: 'NJM Insurance Group',
    website: 'https://www.njm.com',
    quoteUrl: 'https://www.njm.com/auto-insurance',
    slogan: 'No tricks. Just great insurance.™',
    logoColor: 'from-blue-800 to-indigo-900',
    accentColor: '#002E6E',
    rating: 4.8,
    amBestRating: 'A+',
    marketShare: 0.5,
    established: 1913,
    headquarters: 'West Trenton, NJ',
    phone: '1 (800) 232-6600',
    description: 'Initially established as the New Jersey Manufacturers Insurance Company, NJM operates on a mutual dividend structure where they return visual leftover underwriting margins back to policyholders. Expanded beyond NJ, they offer unmatched satisfaction reviews.',
    pros: [
      'Consistent historical dividend payouts returning cash back to drivers',
      'Outstanding, near perfect J.D. Power survey ratings in regional reports',
      'Very standard, no-gimmick core policies featuring generous base limits',
      'Outstanding coverage bundles'
    ],
    cons: [
      'Extremely selective availability—only writes policies in NJ, PA, MD, DE, and OH',
      'Relatively high minimum eligibility guidelines'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: false,
    statesServed: 'Regional (5 States)',
    statesList: ['NJ', 'PA', 'MD', 'DE', 'OH'],
    estimatedRates: {
      young: 200,
      adult: 108,
      senior: 98,
      minimumCoverage: 48,
      fullCoverage: 126
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: false,
      rideshareCoverage: true,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'plymouth-rock',
    name: 'Plymouth Rock Assurance',
    website: 'https://www.plymouthrock.com',
    quoteUrl: 'https://www.plymouthrock.com/insurance/car-insurance',
    slogan: 'More than just insurance.™',
    logoColor: 'from-teal-600 to-teal-800',
    accentColor: '#007A78',
    rating: 4.4,
    amBestRating: 'A-',
    marketShare: 0.3,
    established: 1982,
    headquarters: 'Boston, MA',
    phone: '1 (855) 993-4470',
    description: 'Operating strictly in New England, Plymouth Rock stands out for its high-care localized perks. Features like door-to-door valet service for repairs (they pick up your damaged car, leave a rental, and return your pristine car) make them a giant in eastern states.',
    pros: [
      'Door-to-door valet claims service resolves everything for crashes',
      'Crashbusters® mobile claim vehicles analyze and pay on the spot',
      'Get Home Safe® taxi ride reimbursement once per year if unsafe to drive',
      'High proximity agent locations'
    ],
    cons: [
      'Only available in MA, NJ, CT, NH, NY, & PA',
      'Rates tend to be higher for new or teen drivers'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: false,
    statesServed: 'Regional (6 States)',
    statesList: ['CT', 'MA', 'NH', 'NJ', 'NY', 'PA'],
    estimatedRates: {
      young: 260,
      adult: 130,
      senior: 118,
      minimumCoverage: 65,
      fullCoverage: 155
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: true,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'safeco',
    name: 'Safeco Insurance',
    website: 'https://www.safeco.com',
    quoteUrl: 'https://www.safeco.com/car-insurance',
    slogan: 'A Liberty Mutual company.®',
    logoColor: 'from-rose-700 to-rose-900',
    accentColor: '#8E0D2C',
    rating: 4.3,
    amBestRating: 'A',
    marketShare: 0.8,
    established: 1923,
    headquarters: 'Seattle, WA',
    phone: '1 (800) 332-3226',
    description: 'Acquired by Liberty Mutual, Safeco remains a dominant force selling through independent brokers. It specializes in bundling complex collections—like specialty custom vehicles, motorcycles, watercraft, and multi-home arrays.',
    pros: [
      'Ideal for households with many diverse assets to insure in one broker',
      'Safeco Safety Rewards programs include excellent claims-free returns',
      'Great customizable "Teen Driving Contract" discounts',
      'Excellent financial stability'
    ],
    cons: [
      'Relies heavily on broker follow-ups; online quote is estimate only',
      'Rideshare and specialized additions can be limited depending on ZIP code'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: true,
    statesServed: '47 States',
    statesList: ['AL', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
    estimatedRates: {
      young: 270,
      adult: 134,
      senior: 124,
      minimumCoverage: 62,
      fullCoverage: 148
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: true,
      mobileClaims: true
    },
    quoteMethod: 'Agent Required'
  },
  {
    id: 'kemper',
    name: 'Kemper',
    website: 'https://www.kemper.com',
    quoteUrl: 'https://www.kemper.com',
    slogan: 'We are here for you.',
    logoColor: 'from-neutral-700 to-neutral-900',
    accentColor: '#1A365D',
    rating: 3.8,
    amBestRating: 'A-',
    marketShare: 0.6,
    established: 1990,
    headquarters: 'Chicago, IL',
    phone: '1 (877) 252-7366',
    description: 'Kemper writes affordable solutions for drivers who have had difficulty obtaining standard insurances due to a spotty DMV history, lack of a prior carrier, or low credit parameters. They are expert advisors on SR-22 regulations.',
    pros: [
      'Highly competitive premiums for drivers in need of DMV SR-22 forms',
      'Accepts international and foreign licenses easily for temporary resident paths',
      'Extremely cost-effective basic broad-form property damage options',
      'Direct filing processing'
    ],
    cons: [
      'Customer claim review satisfaction indexes are average/below average',
      'Very thin digital-app tools compared to standard market leaders'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: true,
    statesServed: 'All 50 states',
    statesList: [], // Nationwide
    estimatedRates: {
      young: 345,
      adult: 178,
      senior: 160,
      minimumCoverage: 94,
      fullCoverage: 208
    },
    features: {
      gapInsurance: false,
      accidentForgiveness: false,
      roadsideAssistance: true,
      telematicsDiscount: false,
      rideshareCoverage: false,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  },
  {
    id: 'mapfre',
    name: 'MAPFRE Insurance',
    website: 'https://www.mapfreinsurance.com',
    quoteUrl: 'https://www.mapfreinsurance.com/sub/auto-insurance',
    slogan: 'Your trust, our commitment.',
    logoColor: 'from-amber-600 to-rose-700',
    accentColor: '#D11215',
    rating: 4.1,
    amBestRating: 'A',
    marketShare: 0.4,
    established: 1933,
    headquarters: 'Webster, MA',
    phone: '1 (800) 922-8427',
    description: 'MAPFRE is the single largest auto insurance company in the state of Massachusetts, serving as a pillar of New England coverage portfolios. High bundle discounts and premium roadside services make it unique.',
    pros: [
      'Unmatched market density and expert repair programs in Massachusetts',
      'Offers high-tier roadside assistance and expert travel protection details',
      'Promising student away-at-school premium discounts',
      'Great bundling loyalty points programs'
    ],
    cons: [
      'Limited competitive viability outside of New England/MA',
      'Web layouts are relatively standard with no advanced telemetry integrations'
    ],
    militaryOnly: false,
    seniorFocused: false,
    nonStandardSR22: false,
    statesServed: 'Regional (19 States)',
    statesList: ['MA', 'NH', 'RI', 'CT', 'ME', 'VT', 'NJ', 'NY', 'PA', 'OH', 'FL', 'CA', 'AZ', 'CO', 'ID', 'IL', 'IN', 'OR', 'WA'],
    estimatedRates: {
      young: 250,
      adult: 126,
      senior: 114,
      minimumCoverage: 58,
      fullCoverage: 144
    },
    features: {
      gapInsurance: true,
      accidentForgiveness: true,
      roadsideAssistance: true,
      telematicsDiscount: true,
      rideshareCoverage: false,
      mobileClaims: true
    },
    quoteMethod: 'Online'
  }
];

export const states: { code: string; name: string }[] = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' }
];
