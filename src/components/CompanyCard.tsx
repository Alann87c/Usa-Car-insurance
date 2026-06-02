import React from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, Phone, Check, X, Shield, Star, 
  MapPin, Calendar, TrendingUp, HelpCircle, Layers 
} from 'lucide-react';
import { InsuranceCompany } from '../types';

interface CompanyCardProps {
  key?: string;
  company: InsuranceCompany;
  isComparing: boolean;
  onToggleCompare: (id: string) => void;
  compareCount: number;
}

export function CompanyCard({ company, isComparing, onToggleCompare, compareCount }: CompanyCardProps) {
  const [showAllDetails, setShowAllDetails] = React.useState(false);

  return (
    <motion.div
      id={`company-card-${company.id}`}
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      whileHover={{ y: -2 }}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all duration-300 relative"
    >
      {/* Brand Header */}
      <div className={`h-2 bg-gradient-to-r ${company.logoColor}`} />
      
      <div className="p-6 flex-1 flex flex-col">
        {/* Title, Badge and Slogan */}
        <div className="flex justify-between items-start mb-2 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-sans text-xl font-bold text-slate-800 leading-tight">
                {company.name}
              </h3>
              {company.militaryOnly && (
                <span className="bg-amber-100 text-amber-800 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border border-amber-200">
                  Military Only
                </span>
              )}
              {company.seniorFocused && (
                <span className="bg-purple-100 text-purple-800 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border border-purple-200">
                  AARP Choice
                </span>
              )}
              {company.nonStandardSR22 && (
                <span className="bg-rose-50 text-rose-700 text-[10px] tracking-wide font-medium px-2 py-0.5 rounded-full border border-rose-100">
                  SR-22 Welcomed
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 italic mt-0.5 font-medium">
              "{company.slogan}"
            </p>
          </div>

          {/* Comparing Checkbox */}
          <button
            id={`compare-btn-${company.id}`}
            onClick={() => onToggleCompare(company.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border cursor-pointer ${
              isComparing
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-sm'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            {isComparing ? 'Comparing' : 'Compare'}
          </button>
        </div>

        {/* Primary Stats Row */}
        <div className="grid grid-cols-4 gap-2 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100/80 text-center">
          <div>
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5 flex items-center justify-center gap-0.5">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> Rating
            </div>
            <div className="text-sm font-bold text-slate-800 flex items-center justify-center gap-0.5">
              {company.rating.toFixed(1)}
              <span className="text-[10px] text-slate-400 font-normal">/5</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5 flex items-center justify-center gap-0.5">
              <Shield className="w-3 h-3 text-blue-500" /> AM Best
            </div>
            <div className="text-sm font-bold text-blue-800">{company.amBestRating}</div>
          </div>
          <div>
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5 flex items-center justify-center gap-0.5">
              <TrendingUp className="w-3 h-3 text-emerald-500" /> Share
            </div>
            <div className="text-sm font-bold text-slate-800">{company.marketShare}%</div>
          </div>
          <div>
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5 flex items-center justify-center gap-0.5">
              <MapPin className="w-3 h-3 text-rose-500" /> States
            </div>
            <div className="text-xs font-bold text-slate-800 truncate px-1" title={company.statesServed}>
              {company.statesServed}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
          {company.description}
        </p>

        {/* Pros & Cons Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <span className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 text-[10px]">✓</span>
              Pros
            </h4>
            <ul className="space-y-1">
              {company.pros.slice(0, 2).map((pro, index) => (
                <li key={index} className="text-xs text-slate-600 flex items-start gap-1 leading-normal">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <span className="w-4 h-4 bg-rose-100 rounded-full flex items-center justify-center text-rose-700 font-bold text-[10px]">✕</span>
              Cons
            </h4>
            <ul className="space-y-1">
              {company.cons.slice(0, 2).map((con, index) => (
                <li key={index} className="text-xs text-slate-600 flex items-start gap-1 leading-normal">
                  <span className="text-rose-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Toggle details / Read more */}
        <button
          id={`toggle-details-btn-${company.id}`}
          onClick={() => setShowAllDetails(!showAllDetails)}
          className="text-xs text-slate-500 hover:text-slate-800 font-semibold mb-4 text-left transition-colors duration-150 underline cursor-pointer"
        >
          {showAllDetails ? 'Hide details' : 'Show full features & rates'}
        </button>

        {/* Expandable Section: Rates & Features Checklist */}
        {showAllDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-100 pt-3 mt-1 space-y-4"
          >
            {/* Average Rates */}
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Estimated average rates/mo</h4>
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 text-center">
                <div className="bg-slate-50/50 p-2 rounded-lg border border-slate-100">
                  <span className="text-[10px] text-slate-400 font-medium block">Liability Only</span>
                  <span className="text-sm font-extrabold text-slate-700">${company.estimatedRates.minimumCoverage}</span>
                </div>
                <div className="bg-slate-50/50 p-2 rounded-lg border border-slate-100">
                  <span className="text-[10px] text-slate-400 font-medium block">Full Coverage</span>
                  <span className="text-sm font-extrabold text-slate-700">${company.estimatedRates.fullCoverage}</span>
                </div>
                <div className="bg-slate-50/50 p-2 rounded-lg border border-slate-100 col-span-2 xs:col-span-1">
                  <span className="text-[10px] text-slate-400 font-medium block">Young Driver</span>
                  <span className="text-sm font-extrabold text-rose-700">${company.estimatedRates.young}</span>
                </div>
              </div>
            </div>

            {/* Smart Tech Features */}
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Policy Features & Tech</h4>
              <div className="grid grid-cols-2 gap-y-1.5 gap-x-3">
                {Object.entries(company.features).map(([key, value]) => {
                  const label = key
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, (str) => str.toUpperCase());
                  return (
                    <div key={key} className="flex items-center gap-1.5 text-xs">
                      {value ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                      )}
                      <span className={value ? 'text-slate-700' : 'text-slate-400 line-through'}>
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Extra Info */}
            <div className="bg-slate-50 p-3 rounded-lg text-xs space-y-1 list-none text-slate-500 border border-slate-100">
              <div className="flex justify-between">
                <span>Established:</span>
                <span className="font-bold text-slate-600">{company.established}</span>
              </div>
              <div className="flex justify-between">
                <span>Headquarters:</span>
                <span className="font-bold text-slate-600">{company.headquarters}</span>
              </div>
              <div className="flex justify-between">
                <span>Quote Access:</span>
                <span className="font-bold text-indigo-700">{company.quoteMethod}</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Divider & Actions Footer */}
        <div className="border-t border-slate-100 pt-4 mt-auto flex items-center justify-between gap-3">
          {/* Phone Trigger */}
          <a
            id={`phone-call-${company.id}`}
            href={`tel:${company.phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-600 font-medium transition-colors"
            title="Call to start a quote"
          >
            <Phone className="w-4 h-4 text-indigo-500" />
            <span className="hidden sm:inline font-mono">{company.phone}</span>
            <span className="inline sm:hidden font-semibold">Call Now</span>
          </a>

          {/* Official Website Button */}
          <a
            id={`quote-link-${company.id}`}
            href={company.quoteUrl}
            target="_blank"
            rel="noopener noreferrer referrer"
            className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
          >
            Go to Website
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
