import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, User, Car, AlertTriangle, ArrowRight, ShieldCheck, 
  HelpCircle, Sparkles, ExternalLink, RefreshCw, Star, Info
} from 'lucide-react';
import { insuranceCompanies, states } from '../data/insuranceCompanies';
import { UserProfile, InsuranceCompany } from '../types';

export function QuoteEstimator() {
  const [profile, setProfile] = useState<UserProfile>({
    ageGroup: 'adult',
    coverageType: 'full',
    drivingRecord: 'clean',
    annualMileage: 'average',
    state: 'TX'
  });

  const [militaryAffiliation, setMilitaryAffiliation] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [results, setResults] = useState<{ company: InsuranceCompany; estimatedRate: number; keyFlags: string[] }[]>([]);

  // Calculate customized premiums for each insurer base on profile parameters
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    const matchedResults = insuranceCompanies.map(company => {
      // 1. Resolve basic coverage base
      let baseRate = profile.coverageType === 'minimum' 
        ? company.estimatedRates.minimumCoverage 
        : company.estimatedRates.fullCoverage;

      // 2. Adjust based on Age Tier
      let ageFactor = 1.0;
      if (profile.ageGroup === 'young') {
        ageFactor = company.id === 'root' ? 1.7 : 2.1; // Root claims to be lenient to safe high-track youngsters
        if (company.seniorFocused) ageFactor = 2.5; // AARP Hartford is expensive for youth
      } else if (profile.ageGroup === 'senior') {
        ageFactor = company.seniorFocused ? 0.78 : 0.92;
      }

      // 3. Adjust based on Driving Record
      let recordFactor = 1.0;
      let flagList: string[] = [];
      
      if (profile.drivingRecord === 'one_accident') {
        if (company.features.accidentForgiveness) {
          recordFactor = 1.15; // Soft penalty
          flagList.push('Accident Forgiveness Protection applied');
        } else {
          recordFactor = 1.35;
        }
      } else if (profile.drivingRecord === 'violations') {
        if (company.nonStandardSR22) {
          recordFactor = 1.45; // Specializes in SR22
          flagList.push('SR-22 non-standard pricing bracket matched');
        } else {
          recordFactor = 1.8; // High punishment rate
        }
      }

      // 4. Adjust based on Annual Mileage
      let mileageFactor = 1.0;
      if (profile.annualMileage === 'low') {
        // Brands optimized for teledata/pay-per-mile
        if (company.id === 'lemonade' || company.id === 'root' || company.id === 'nationwide') {
          mileageFactor = 0.75;
          flagList.push('Low-mileage discount (pay-per-mile) enabled');
        } else if (company.features.telematicsDiscount) {
          mileageFactor = 0.88;
          flagList.push(`Telematics discount evaluated`);
        } else {
          mileageFactor = 0.95;
        }
      } else if (profile.annualMileage === 'high') {
        mileageFactor = 1.15;
      }

      // Final rate math
      const finalMonthlyPremium = Math.round(baseRate * ageFactor * recordFactor * mileageFactor);

      return {
        company,
        estimatedRate: finalMonthlyPremium,
        keyFlags: flagList
      };
    });

    // Filter results based on:
    // A. Regional state availability: If statesList has elements, the user state MUST be included.
    const stateMatchedResults = matchedResults.filter(item => {
      const co = item.company;
      if (co.statesList && co.statesList.length > 0) {
        return co.statesList.includes(profile.state);
      }
      return true; // Nationwide
    });

    // B. Re-order results by cheapest premium
    // But push militaryUSA to top only if military affiliation is active, else USAA gets highlighted/flagged
    const sortedResults = stateMatchedResults.sort((a, b) => {
      // If military check is true, compare rate
      return a.estimatedRate - b.estimatedRate;
    });

    setResults(sortedResults);
    setCalculated(true);
  };

  return (
    <div id="quote-estimator-container" className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 font-sans">
              Personalized Premium Estimator
            </h2>
            <p className="text-sm text-slate-500">
              Select your profile to evaluate average premiums of USA insurance websites side-by-side.
            </p>
          </div>
        </div>

        {/* Estimation Input Grid Form */}
        <form onSubmit={handleCalculate} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Age dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-indigo-500" />
                Age Category
              </label>
              <select
                id="est-age-group"
                value={profile.ageGroup}
                onChange={(e) => setProfile({ ...profile, ageGroup: e.target.value as any })}
                className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white text-slate-800 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all focus:outline-hidden cursor-pointer"
              >
                <option value="young">Young / Teen (Age 16-24)</option>
                <option value="adult">Clean Record Adult (Age 25-64)</option>
                <option value="senior">Senior Driver (Age 65+)</option>
              </select>
            </div>

            {/* Coverage grade selection */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Car className="w-3.5 h-3.5 text-indigo-500" />
                Desired Coverage
              </label>
              <select
                id="est-coverage-type"
                value={profile.coverageType}
                onChange={(e) => setProfile({ ...profile, coverageType: e.target.value as any })}
                className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white text-slate-800 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all focus:outline-hidden cursor-pointer"
              >
                <option value="minimum">State Minimum Liability Only</option>
                <option value="full">Standard Full Coverage (Comp + Collision)</option>
              </select>
            </div>

            {/* Driving Record dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-indigo-500" />
                Driving History
              </label>
              <select
                id="est-driving-record"
                value={profile.drivingRecord}
                onChange={(e) => setProfile({ ...profile, drivingRecord: e.target.value as any })}
                className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white text-slate-800 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all focus:outline-hidden cursor-pointer"
              >
                <option value="clean">Pristine (No accidents / tickets)</option>
                <option value="one_accident">Moderate (1 At-fault accident)</option>
                <option value="violations">Poor (Multiple tickets or active DUI)</option>
              </select>
            </div>

            {/* Annual Mileage Tier */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Annual Mileage Tier
              </label>
              <select
                id="est-annual-mileage"
                value={profile.annualMileage}
                onChange={(e) => setProfile({ ...profile, annualMileage: e.target.value as any })}
                className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white text-slate-800 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all focus:outline-hidden cursor-pointer"
              >
                <option value="low">Under 7,500 miles (Low Commute)</option>
                <option value="average">7,500 - 15,000 miles (Standard)</option>
                <option value="high">Over 15,000 miles (High Commute)</option>
              </select>
            </div>

            {/* State selection */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Your Home State
              </label>
              <select
                id="est-state"
                value={profile.state}
                onChange={(e) => setProfile({ ...profile, state: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white text-slate-800 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all focus:outline-hidden cursor-pointer"
              >
                {states.map(st => (
                  <option key={st.code} value={st.code}>
                    {st.name} ({st.code})
                  </option>
                ))}
              </select>
            </div>

            {/* Military Check option */}
            <div className="flex items-center pt-8">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  id="military-military-affiliation"
                  type="checkbox"
                  checked={militaryAffiliation}
                  onChange={(e) => setMilitaryAffiliation(e.target.checked)}
                  className="w-4.5 h-4.5 text-indigo-600 border-slate-300 rounded-sm focus:ring-indigo-500 bg-slate-50"
                />
                <div>
                  <span className="text-xs font-bold text-slate-700 block">Military Affiliation?</span>
                  <span className="text-[10px] text-slate-400 block max-w-[150px] leading-tight">Unlocks USAA auto rewards.</span>
                </div>
              </label>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-5 mt-6 flex justify-end">
            <button
              id="calculate-quotes-submit"
              type="submit"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-all duration-150 cursor-pointer text-sm shadow-md"
            >
              Calculate Estimates
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Calculated Results container */}
        <AnimatePresence mode="wait">
          {calculated && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-1">
                <h3 className="font-semibold text-slate-800 text-base font-sans">
                  Recommended USA Insurance Matches ({results.length} companies serve your state)
                </h3>
                <span className="text-xs text-slate-400 font-medium font-mono">Sorted Cheapest to Premium</span>
              </div>

              {/* Recommendation warnings */}
              {profile.drivingRecord === 'violations' && (
                <div className="bg-amber-50 rounded-xl p-3 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-800">
                  <AlertTriangle className="w-4 animate-bounce shrink-0 text-amber-600 mt-0.5" />
                  <div>
                    <span className="font-bold">Important Notice:</span> Since you have a history of major citations, speeding, or a DUI, state DMV rules often require the insurance provider to submit an <span className="font-bold">SR-22 or FR-44 filing</span>. Companies with <span className="bg-amber-100 px-1 py-0.2 rounded font-bold">SR-22 welcomed</span> markers provide instant electronic state notifications to avoid standard driver license suspensions.
                  </div>
                </div>
              )}

              {/* Real estimates loop */}
              <div className="space-y-3">
                {results.map((res, idx) => {
                  const hideUSAA = res.company.militaryOnly && !militaryAffiliation;
                  return (
                    <motion.div
                      id={`estimate-row-${res.company.id}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      key={res.company.id}
                      className={`p-4 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-150 ${
                        idx === 0 && !hideUSAA
                          ? 'bg-gradient-to-r from-emerald-50/50 to-white border-emerald-300 shadow-xs'
                          : hideUSAA
                          ? 'bg-slate-50/40 border-slate-150 opacity-60'
                          : 'bg-white border-slate-100 hover:border-slate-250 hover:shadow-xs'
                      }`}
                    >
                      {/* Logo header */}
                      <div className="flex items-start gap-3 flex-1">
                        <div className="h-full w-1.5 self-stretch rounded-full bg-slate-300" 
                             style={{ backgroundColor: res.company.accentColor }} />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-slate-800 text-sm md:text-base leading-tight">
                              {res.company.name}
                            </h4>
                            {idx === 0 && !hideUSAA && (
                              <span className="bg-emerald-100 text-emerald-800 text-[9px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-emerald-200">
                                <Sparkles className="w-3 h-3 text-emerald-600 fill-emerald-600" /> Lowest Premium
                              </span>
                            )}
                            {res.company.militaryOnly && (
                              <span className="bg-amber-50 text-amber-800 text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded border border-amber-200">
                                Military
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 italic font-medium leading-normal mt-0.5">
                            "{res.company.slogan}"
                          </p>

                          {/* Extra feature flags applied */}
                          {res.keyFlags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1.5">
                              {res.keyFlags.map((flag, fidx) => (
                                <span key={fidx} className="bg-slate-100 text-slate-600 text-[9px] font-semibold px-2 py-0.5 rounded-sm flex items-center gap-1 border border-slate-200/80">
                                  <ShieldCheck className="w-3 h-3 text-indigo-500" />
                                  {flag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* J.D Power Rating badge */}
                      <div className="hidden sm:flex flex-col text-left md:text-center shrink-0">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">J.D. Power Customer Rating</span>
                        <span className="text-xs font-bold text-slate-700 flex items-center gap-0.5 md:justify-center mt-0.5">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {res.company.rating.toFixed(1)} / 5.0
                        </span>
                      </div>

                      {/* Premium output column */}
                      <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 border-slate-100 pt-3 md:pt-0">
                        <div className="text-left md:text-right shrink-0">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Est. Monthly Quote</span>
                          {hideUSAA ? (
                            <span className="text-slate-400 font-bold text-xs flex items-center gap-1 leading-normal" 
                                  title="Uncheck the eligibility rules above if qualified">
                              Requires Military Status
                            </span>
                          ) : (
                            <span className="text-slate-800 font-extrabold text-xl md:text-2xl font-mono leading-none flex items-baseline">
                              ${res.estimatedRate}
                              <span className="text-[10px] text-slate-400 font-medium font-sans ml-1">/ mo</span>
                            </span>
                          )}
                        </div>

                        {/* Go to quote link on official brand website */}
                        <a
                          id={`est-web-link-${res.company.id}`}
                          href={hideUSAA ? 'https://www.usaa.com' : res.company.quoteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2.5 rounded-xl cursor-pointer ${
                            hideUSAA
                              ? 'bg-slate-100 text-slate-400 select-none cursor-not-allowed'
                              : idx === 0
                              ? 'bg-emerald-600 hover:bg-slate-900 text-white shadow-xs'
                              : 'bg-indigo-600 hover:bg-slate-900 text-white'
                          }`}
                        >
                          Official Quote
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Extra clarification instructions */}
              <p className="text-[11px] text-slate-400 text-center leading-relaxed max-w-xl mx-auto pt-4">
                *Quotations generated above are mock estimations built on regional safe motorist insurance datasets. Personal characteristics, accident records, age, precise ZIP codes, type of car, and coverage limits heavily sway real premiums. Make sure to visit their official websites directly to finalize quotes.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
