export interface EstimatedRates {
  young: number;            // Average monthly rate for teens/young drivers (USD)
  adult: number;            // Average monthly rate for clean record adults (USD)
  senior: number;           // Average monthly rate for senior drivers (USD)
  minimumCoverage: number;  // Average monthly rate for minimum liability coverage (USD)
  fullCoverage: number;     // Average monthly rate for full collision + comp coverage (USD)
}

export interface CompanyFeatures {
  gapInsurance: boolean;
  accidentForgiveness: boolean;
  roadsideAssistance: boolean;
  telematicsDiscount: boolean;
  rideshareCoverage: boolean;
  mobileClaims: boolean;
}

export interface InsuranceCompany {
  id: string;
  name: string;
  website: string;
  quoteUrl: string;
  slogan: string;
  logoColor: string; // Tailwind color class for header badge (e.g., 'bg-red-600')
  accentColor: string; // Hex code or tailwind color for borders/text highlights
  rating: number; // JD Power score out of 5 stars
  amBestRating: string; // Financial strength rating (e.g. A++, A+, A)
  marketShare: number; // Market share percentage in the US
  established: number;
  headquarters: string;
  phone: string;
  description: string;
  pros: string[];
  cons: string[];
  militaryOnly: boolean;
  seniorFocused: boolean;
  nonStandardSR22: boolean;
  statesServed: string; // e.g. "All 50 states", "48 States + DC", "Regional (12 states)"
  statesList: string[]; // List of US postal codes served if regional, or empty if nationwide
  estimatedRates: EstimatedRates;
  features: CompanyFeatures;
  quoteMethod: 'Online' | 'Phone Only' | 'Agent Required' | 'App Only';
}

export interface UserProfile {
  ageGroup: 'young' | 'adult' | 'senior';
  coverageType: 'minimum' | 'full';
  drivingRecord: 'clean' | 'one_accident' | 'violations';
  annualMileage: 'low' | 'average' | 'high';
  state: string;
}
