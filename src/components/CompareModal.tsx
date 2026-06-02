import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Globe, Phone, Award, Shield, DollarSign, ListChecks } from 'lucide-react';
import { InsuranceCompany } from '../types';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCompanies: InsuranceCompany[];
  onRemoveCompany: (id: string) => void;
}

export function CompareModal({ isOpen, onClose, selectedCompanies, onRemoveCompany }: CompareModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div id="compare-modal-backdrop" className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col my-8 border border-slate-100 max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-800 font-sans flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                Insurance Side-by-Side Comparison
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Comparing {selectedCompanies.length} of {Math.max(selectedCompanies.length, 3)} providers. Click to visit official quotation websites.
              </p>
            </div>
            <button
              id="close-compare-modal"
              onClick={onClose}
              className="p-2 hover:bg-slate-200 rounded-full text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Comparison Content */}
          <div className="p-6 overflow-y-auto flex-1">
            {selectedCompanies.length === 0 ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full text-slate-400 mb-2">
                  <ListChecks className="w-6 h-6" />
                </div>
                <p className="text-slate-600 font-medium">No insurers selected yet.</p>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  Go back to the list and click "Compare" on the companies you want to examine side-by-side.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="py-4 px-4 font-bold text-slate-500 uppercase tracking-wider text-xs w-1/4">Key Metrics</th>
                      {selectedCompanies.map(company => (
                        <th key={company.id} className="py-4 px-4 w-1/4 relative">
                          <button
                            id={`remove-compare-${company.id}`}
                            onClick={() => onRemoveCompany(company.id)}
                            className="absolute right-2 top-2 text-[10px] bg-slate-100 text-slate-500 hover:bg-rose-50 hover:text-rose-600 px-2 py-0.5 rounded-md transition-colors cursor-pointer"
                          >
                            Remove
                          </button>
                          <div className={`h-1.5 w-16 bg-gradient-to-r ${company.logoColor} rounded-full mb-2`} />
                          <h4 className="font-bold text-slate-800 font-sans text-base leading-tight">
                            {company.name}
                          </h4>
                          <span className="text-[10px] text-slate-400 italic font-normal block truncate">
                            {company.slogan}
                          </span>
                        </th>
                      ))}
                      {/* Fill empty columns if less than 3 selected */}
                      {Array.from({ length: Math.max(0, 3 - selectedCompanies.length) }).map((_, i) => (
                        <th key={`empty-th-${i}`} className="py-4 px-4 w-1/4 text-slate-300 font-medium text-xs text-center border-dashed border-l border-slate-100">
                          Empty Slot
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Basic specs */}
                    <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 font-bold text-slate-700 text-xs text-slate-500 flex items-center gap-1.5 mt-2.5">
                        <Award className="w-4 h-4 text-amber-500" />
                        J.D. Power score
                      </td>
                      {selectedCompanies.map(company => (
                        <td key={company.id} className="py-3.5 px-4 font-bold text-slate-800 text-sm">
                          {company.rating.toFixed(1)} / 5.0
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedCompanies.length) }).map((_, i) => (
                        <td key={`empty-rating-${i}`} className="py-3.5 px-4 text-center text-slate-300">-</td>
                      ))}
                    </tr>

                    <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 font-bold text-slate-700 text-xs text-slate-500 flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-blue-500" />
                        AM Best Rating
                      </td>
                      {selectedCompanies.map(company => (
                        <td key={company.id} className="py-3.5 px-4 font-semibold text-slate-800 text-sm">
                          {company.amBestRating}
                          <span className="text-[10px] text-slate-400 font-normal ml-1">
                            {company.amBestRating === 'A++' ? '(Superior)' : company.amBestRating === 'A+' ? '(Superior)' : '(Excellent)'}
                          </span>
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedCompanies.length) }).map((_, i) => (
                        <td key={`empty-ambest-${i}`} className="py-3.5 px-4 text-center text-slate-300">-</td>
                      ))}
                    </tr>

                    <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 font-bold text-slate-700 text-xs text-slate-500 flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4 text-emerald-500" />
                        Est. Liability Only
                      </td>
                      {selectedCompanies.map(company => (
                        <td key={company.id} className="py-3.5 px-4">
                          <span className="text-slate-800 font-extrabold text-sm">${company.estimatedRates.minimumCoverage}</span>
                          <span className="text-[10px] text-slate-400 font-medium block">average monthly</span>
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedCompanies.length) }).map((_, i) => (
                        <td key={`empty-min-${i}`} className="py-3.5 px-4 text-center text-slate-300">-</td>
                      ))}
                    </tr>

                    <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 font-bold text-slate-700 text-xs text-slate-500 flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4 text-teal-600" />
                        Est. Full Coverage
                      </td>
                      {selectedCompanies.map(company => (
                        <td key={company.id} className="py-3.5 px-4">
                          <span className="text-slate-800 font-extrabold text-sm">${company.estimatedRates.fullCoverage}</span>
                          <span className="text-[10px] text-slate-400 font-medium block">average monthly</span>
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedCompanies.length) }).map((_, i) => (
                        <td key={`empty-full-${i}`} className="py-3.5 px-4 text-center text-slate-300">-</td>
                      ))}
                    </tr>

                    <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 font-bold text-slate-700 text-xs text-slate-500 flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4 text-rose-500" />
                        Est. Young Premium
                      </td>
                      {selectedCompanies.map(company => (
                        <td key={company.id} className="py-3.5 px-4">
                          <span className="text-rose-700 font-extrabold text-sm">${company.estimatedRates.young}</span>
                          <span className="text-[10px] text-slate-400 font-medium block">average monthly</span>
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedCompanies.length) }).map((_, i) => (
                        <td key={`empty-young-${i}`} className="py-3.5 px-4 text-center text-slate-300">-</td>
                      ))}
                    </tr>

                    <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 font-bold text-slate-700 text-xs text-slate-500">
                        States Served
                      </td>
                      {selectedCompanies.map(company => (
                        <td key={company.id} className="py-3.5 px-4 text-slate-700 text-xs font-semibold">
                          {company.statesServed}
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedCompanies.length) }).map((_, i) => (
                        <td key={`empty-states-${i}`} className="py-3.5 px-4 text-center text-slate-300">-</td>
                      ))}
                    </tr>

                    <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 font-bold text-slate-700 text-xs text-slate-500">
                        Established
                      </td>
                      {selectedCompanies.map(company => (
                        <td key={company.id} className="py-3.5 px-4 text-slate-700 text-xs">
                          {company.established} <span className="text-slate-400">({new Date().getFullYear() - company.established} yrs ago)</span>
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedCompanies.length) }).map((_, i) => (
                        <td key={`empty-est-${i}`} className="py-3.5 px-4 text-center text-slate-300">-</td>
                      ))}
                    </tr>

                    <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 font-bold text-slate-700 text-xs text-slate-500">
                        Market Share (US)
                      </td>
                      {selectedCompanies.map(company => (
                        <td key={company.id} className="py-3.5 px-4 text-slate-800 text-sm font-bold">
                          {company.marketShare}%
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedCompanies.length) }).map((_, i) => (
                        <td key={`empty-mkt-${i}`} className="py-3.5 px-4 text-center text-slate-300">-</td>
                      ))}
                    </tr>

                    {/* Features Checklist */}
                    <tr>
                      <td colSpan={selectedCompanies.length + 1} className="bg-slate-50 text-slate-700 font-bold text-xs px-4 py-2 uppercase tracking-widest border-b border-slate-150">
                        Available Features Comparisons
                      </td>
                    </tr>

                    {(['accidentForgiveness', 'gapInsurance', 'roadsideAssistance', 'telematicsDiscount', 'rideshareCoverage', 'mobileClaims'] as const).map(feat => {
                      const featLabel = feat
                        .replace(/([A-Z])/g, ' $1')
                        .replace(/^./, (str) => str.toUpperCase());

                      return (
                        <tr key={feat} className="border-b border-slate-100 hover:bg-slate-50/50">
                          <td className="py-3.5 px-4 text-xs font-semibold text-slate-600">
                            {featLabel}
                          </td>
                          {selectedCompanies.map(company => (
                            <td key={company.id} className="py-3.5 px-4">
                              {company.features[feat] ? (
                                <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-1 rounded inline-flex items-center gap-1 border border-emerald-150">
                                  <Check className="w-3.5 h-3.5 text-emerald-600" fill="none" /> Yes
                                </span>
                              ) : (
                                <span className="bg-slate-50 text-slate-400 text-[10px] font-bold px-2 py-1 rounded inline-flex items-center gap-1 border border-slate-150">
                                  <X className="w-3 h-3 text-slate-300" /> No
                                </span>
                              )}
                            </td>
                          ))}
                          {Array.from({ length: Math.max(0, 3 - selectedCompanies.length) }).map((_, i) => (
                            <td key={`empty-feat-${feat}-${i}`} className="py-3.5 px-4 text-center text-slate-300">-</td>
                          ))}
                        </tr>
                      );
                    })}

                    {/* Pros and Cons side by side */}
                    <tr>
                      <td colSpan={selectedCompanies.length + 1} className="bg-slate-50 text-slate-700 font-bold text-xs px-4 py-2 uppercase tracking-widest border-b border-slate-150">
                        Pros & Cons Analysis
                      </td>
                    </tr>

                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 text-xs font-bold text-slate-600 align-top">
                        Key Pros
                      </td>
                      {selectedCompanies.map(company => (
                        <td key={company.id} className="py-4 px-4 align-top">
                          <ul className="space-y-1.5 list-none">
                            {company.pros.map((pro, index) => (
                              <li key={index} className="text-xs text-slate-600 flex items-start gap-1.5">
                                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">•</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedCompanies.length) }).map((_, i) => (
                        <td key={`empty-pros-${i}`} className="py-4 px-4 text-center text-slate-300">-</td>
                      ))}
                    </tr>

                    <tr className="border-b border-slate-100">
                      <td className="py-4 px-4 text-xs font-bold text-slate-600 align-top">
                        Key Cons
                      </td>
                      {selectedCompanies.map(company => (
                        <td key={company.id} className="py-4 px-4 align-top">
                          <ul className="space-y-1.5 list-none">
                            {company.cons.map((con, index) => (
                              <li key={index} className="text-xs text-slate-600 flex items-start gap-1.5">
                                <span className="text-rose-400 font-bold mt-0.5 shrink-0">•</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedCompanies.length) }).map((_, i) => (
                        <td key={`empty-cons-${i}`} className="py-4 px-4 text-center text-slate-300">-</td>
                      ))}
                    </tr>

                    {/* Actions and details links */}
                    <tr>
                      <td className="py-5 px-4 font-bold text-slate-700 text-xs text-slate-500">
                        Get Started
                      </td>
                      {selectedCompanies.map(company => (
                        <td key={company.id} className="py-5 px-4">
                          <div className="flex flex-col gap-2.5">
                            {/* Call Button */}
                            <a
                              id={`compare-phone-${company.id}`}
                              href={`tel:${company.phone.replace(/[^0-9]/g, '')}`}
                              className="inline-flex items-center justify-center gap-1.5 border border-slate-200 hover:border-indigo-400 text-slate-600 hover:text-indigo-700 text-xs font-semibold py-2 px-3 rounded-xl transition-colors cursor-pointer"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              Call {company.phone}
                            </a>

                            {/* Main Web Quote Link */}
                            <a
                              id={`compare-web-${company.id}`}
                              href={company.quoteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-1.5 bg-indigo-600 hover:bg-slate-900 text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-xs transition-all duration-150 cursor-pointer text-center"
                            >
                              <Globe className="w-3.5 h-3.5" />
                              Official Quote
                            </a>
                          </div>
                        </td>
                      ))}
                      {Array.from({ length: Math.max(0, 3 - selectedCompanies.length) }).map((_, i) => (
                        <td key={`empty-actions-${i}`} className="py-5 px-4 text-center text-slate-300">-</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Footer banner */}
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
            <span>Rates shown are typical averages representing safe, standard driver parameters. Actual quotes will vary depending on your postal code and driving characteristics.</span>
            <button
              id="close-compare-footer"
              onClick={onClose}
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer shrink-0 ml-3"
            >
              Close Comparison
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
