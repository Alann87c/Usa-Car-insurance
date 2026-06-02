import React, { useState, useMemo } from 'react';
import { MapPin, Info, Scale, CheckCircle2, ShieldCheck, DollarSign, ExternalLink } from 'lucide-react';
import { states, insuranceCompanies } from '../data/insuranceCompanies';

interface StateRegulation {
  limits: string;
  required: string[];
  system: 'Tort' | 'No-Fault (PIP)' | 'Choice No-Fault';
  averageAnnual: number;
  note: string;
}

const stateRegulations: { [key: string]: StateRegulation } = {
  CA: {
    limits: '15/30/5',
    required: ['Bodily Injury Liability', 'Property Damage Liability'],
    system: 'Tort',
    averageAnnual: 1960,
    note: 'California features low state minimum bodily injury requirements ($15,000 per person / $30,000 per accident). Uninsured Motorist (UM) is highly recommended due to a high volume of uninsured drivers.'
  },
  TX: {
    limits: '30/60/25',
    required: ['Bodily Injury Liability', 'Property Damage Liability'],
    system: 'Tort',
    averageAnnual: 1880,
    note: 'Texas operates on a standard 30/60/25 liability bracket. Personal Injury Protection (PIP) must be explicitly signed away in writing if declined.'
  },
  FL: {
    limits: '10/20/10',
    required: ['Personal Injury Protection (PIP) $10K', 'Property Damage Liability $10K'],
    system: 'No-Fault (PIP)',
    averageAnnual: 2470,
    note: 'Florida is a pure No-Fault state. Drivers must hold Personal Injury Protection (PIP) to cover their own medical bills, regardless of who caused the auto accident.'
  },
  NY: {
    limits: '25/50/10',
    required: ['Bodily Injury Liability', 'Property Damage Liability', 'Uninsured Motorist (UM)', 'No-Fault PIP $50K'],
    system: 'No-Fault (PIP)',
    averageAnnual: 2120,
    note: 'New York combines a strict No-Fault system with liability mandates. Severe medical bills can break through No-Fault boundaries to sue negligent drivers.'
  },
  IL: {
    limits: '25/50/20',
    required: ['Bodily Injury Liability', 'Property Damage Liability', 'Uninsured Motorist (UM)'],
    system: 'Tort',
    averageAnnual: 1720,
    note: 'Illinois law automatically triggers Uninsured Motorist coverage equal to your bodily injury choice.'
  },
  PA: {
    limits: '15/30/5',
    required: ['Bodily Injury Liability', 'Property Damage Liability', 'Medical Benefits $5,000'],
    system: 'Choice No-Fault',
    averageAnnual: 1680,
    note: 'Pennsylvania uses a unique "Choice No-Fault" standard. Policyholders must choose between Full Tort (unlimited right to sue) or Limited Tort (cheaper premiums, restricted lawsuits).'
  },
  OH: {
    limits: '25/50/25',
    required: ['Bodily Injury Liability', 'Property Damage Liability'],
    system: 'Tort',
    averageAnnual: 1350,
    note: 'Ohio remains one of the cheapest states for car insurance due to low traffic severity and dense carrier competition.'
  },
  GA: {
    limits: '25/50/25',
    required: ['Bodily Injury Liability', 'Property Damage Liability'],
    system: 'Tort',
    averageAnnual: 1980,
    note: 'Georgia ranks near national averages. Drivers should strongly look into higher than minimum coverage if driving extensively in suburban Atlanta corridors.'
  },
  NC: {
    limits: '30/60/25',
    required: ['Bodily Injury Liability', 'Property Damage Liability', 'Uninsured/Underinsured Motorist'],
    system: 'Tort',
    averageAnnual: 1290,
    note: 'North Carolina operates a highly controlled "Rate Bureau" which heavily limits premium rate hikes by carriers.'
  },
  MI: {
    limits: '50/105/10',
    required: ['Bodily Injury Liability', 'Property Damage Liability', 'Personal Injury Protection (PIP)'],
    system: 'No-Fault (PIP)',
    averageAnnual: 2650,
    note: 'Michigan holds some of the highest insurance minimum limits globally, featuring choice of No-Limit medical coverage. This drives high average state premiums but guarantees exceptional crash healthcare.'
  }
};

// Generic fallback regulation object
const fallbackRegulation = (stateName: string): StateRegulation => ({
  limits: '25/50/15',
  required: ['Bodily Injury Liability', 'Property Damage Liability'],
  system: 'Tort',
  averageAnnual: 1550,
  note: `${stateName} implements standard Tort auto insurance rules. Drivers are advised to hold comprehensive collision policies alongside legal minimum requirements.`
});

export function StatsSelector() {
  const [selectedStateCode, setSelectedStateCode] = useState('CA');

  const activeRegulation = useMemo(() => {
    const r = stateRegulations[selectedStateCode];
    if (r) return r;
    const sName = states.find(st => st.code === selectedStateCode)?.name || 'This State';
    return fallbackRegulation(sName);
  }, [selectedStateCode]);

  const activeStateName = useMemo(() => {
    return states.find(st => st.code === selectedStateCode)?.name || 'Selected State';
  }, [selectedStateCode]);

  const localProviders = useMemo(() => {
    // Filter companies that serve this state
    return insuranceCompanies.filter(co => {
      if (co.statesList && co.statesList.length > 0) {
        return co.statesList.includes(selectedStateCode);
      }
      return true; // Nationwide
    }).sort((a, b) => b.rating - a.rating).slice(0, 4);
  }, [selectedStateCode]);

  return (
    <div id="stats-selector-container" className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-100 pb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 font-sans flex items-center gap-2">
            <MapPin className="w-6 h-6 text-indigo-600 animate-pulse" />
            State Car Insurance Rules & Providers
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            USA car insurance rules vary drastically by state. Select your state to see minimum requirements.
          </p>
        </div>

        {/* State Selector Dropdown */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Select State:</span>
          <select
            id="stats-state-dropdown"
            value={selectedStateCode}
            onChange={(e) => setSelectedStateCode(e.target.value)}
            className="bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white text-slate-800 rounded-xl px-4 py-2.5 font-sans font-bold text-sm tracking-wide focus:outline-hidden cursor-pointer"
          >
            {states.map(st => (
              <option key={st.code} value={st.code}>
                {st.name} ({st.code})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Regulations Panel */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Stats minimum requirement Card */}
            <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">State Minimum Limits</span>
              <span className="text-2xl font-extrabold text-slate-850 tracking-tight block">
                {activeRegulation.limits}
              </span>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Represents <span className="font-semibold">{activeRegulation.limits.split('/')[0]}k</span> Bodily Injury per person / <span className="font-semibold">{activeRegulation.limits.split('/')[1]}k</span> total BI per accident / <span className="font-semibold">{activeRegulation.limits.split('/')[2]}k</span> Property Damage minimum protection limit.
              </p>
            </div>

            {/* Insurance System Grid Card */}
            <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Insurance Legal System</span>
              <span className="text-2xl font-extrabold text-indigo-800 tracking-tight block">
                {activeRegulation.system}
              </span>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {activeRegulation.system === 'No-Fault (PIP)' 
                  ? 'No-Fault systems require you to submit bodily injuries to your own insurer first using specialized Personal Injury Protection (PIP) limits.'
                  : 'Tort systems specify that the motorist who is found at-fault in an auto collision is legally responsible for medical and damage payouts.'
                }
              </p>
            </div>
          </div>

          {/* Legal coverage demands */}
          <div className="bg-indigo-50/40 p-5 rounded-2xl border border-indigo-100/60">
            <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-widest mb-3 flex items-center gap-1.5 font-sans">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              Legally Required Coverages in {activeStateName}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeRegulation.required.map((req, index) => (
                <div key={index} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {req}
                </div>
              ))}
            </div>
          </div>

          {/* Note advisory comment */}
          <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 text-xs leading-relaxed text-slate-600">
            <h4 className="font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              Advisor Note for {activeStateName} motorists
            </h4>
            <p className="italic">
              "{activeRegulation.note}"
            </p>
          </div>
        </div>

        {/* State Average and Top Recommended list */}
        <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="border-b border-slate-200/80 pb-4 mb-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">State Average Premium / Yr</span>
              <div className="flex items-baseline gap-1 text-slate-800">
                <DollarSign className="w-6 h-6 text-emerald-500 stroke-[2.5]" />
                <span className="text-3xl font-extrabold font-mono tracking-tight">{activeRegulation.averageAnnual}</span>
                <span className="text-xs font-semibold text-slate-400 font-sans">/ year average</span>
              </div>
              <p className="text-[10px] text-slate-400 italic font-medium leading-relaxed mt-1">
                *Represents average annual cost. Clean-record adults can regularly secure much lower quotes online.
              </p>
            </div>

            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
              Top Rated Insurers in {selectedStateCode}
            </h4>
            
            <div className="space-y-2.5">
              {localProviders.map((pro, index) => (
                <div key={pro.id} className="bg-white p-3 rounded-xl border border-slate-100 flex items-center justify-between gap-2 shadow-2xs hover:shadow-xs transition-shadow">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-slate-800 leading-tight">
                        {pro.name}
                      </span>
                      {pro.militaryOnly && (
                        <span className="text-[8px] bg-slate-100 text-slate-500 font-bold px-1 rounded">Military</span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Est. Rate: <span className="font-semibold text-slate-600">${pro.estimatedRates.minimumCoverage}/mo</span>
                    </span>
                  </div>

                  <a
                    id={`state-widget-quote-${pro.id}`}
                    href={pro.quoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-50 hover:bg-slate-900 text-indigo-700 hover:text-white p-1.5 rounded-lg transition-colors cursor-pointer"
                    title={`Visit ${pro.name} official website`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-200/60 text-[10px] text-slate-400 flex items-center gap-1">
            <Scale className="w-3.5 h-3.5" />
            Compare these rates side-by-side using our Premium Calculator above.
          </div>
        </div>
      </div>
    </div>
  );
}
