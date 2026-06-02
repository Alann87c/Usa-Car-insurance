import React from 'react';
import { BookOpen, CheckSquare, Sparkles, Key, DollarSign, ShieldAlert } from 'lucide-react';

export function HelpfulGuides() {
  return (
    <div id="helpful-guides-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Auto Insurance Terms Glossary Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4 text-indigo-600">
            <BookOpen className="w-5 h-5" />
            <h3 className="font-sans font-bold text-base text-slate-800 uppercase tracking-wide">
              Glossary of Key Terms
            </h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                Liability Coverage
              </h4>
              <p className="text-xs text-slate-500 leading-normal mt-0.5">
                Pays for injuries and property damage you cause to other people in an at-fault accident. It will never cover your own car damages.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                Collision Coverage
              </h4>
              <p className="text-xs text-slate-500 leading-normal mt-0.5">
                Pays to fix or replace your own vehicle after an accident, regardless of who caused it (hitting another car, fence, post, or tree).
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                Comprehensive Coverage
              </h4>
              <p className="text-xs text-slate-500 leading-normal mt-0.5">
                Protects you from financial loss due to events beyond your control, such as car theft, falling trees, contact with deer, hail, or vandalism.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                Deductible
              </h4>
              <p className="text-xs text-slate-500 leading-normal mt-0.5">
                The out-of-pocket amount you agree to pay to repair facilities before your insurance benefits kick in. Selecting a higher deductible drops your monthly premiums.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400">
          *Basic state liability policies typically do not include Collision or Comprehensive limits.
        </div>
      </div>

      {/* Preparation Checklist for Online Quotes */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4 text-emerald-600">
            <CheckSquare className="w-5 h-5" />
            <h3 className="font-sans font-bold text-base text-slate-800 uppercase tracking-wide">
              Preparation Checklist
            </h3>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            USA car insurance websites will query national databases. Have these details ready before applying to ensure quick quotes:
          </p>
          <ul className="space-y-3.5">
            <li className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
              <span className="p-0.5 bg-emerald-50 rounded text-emerald-600 font-extrabold text-[10px]">1</span>
              <div>
                <span className="font-bold text-slate-700 block">Personal Details</span>
                <span>Name, date of birth, mailing address, and SSN for credit checks.</span>
              </div>
            </li>
            <li className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
              <span className="p-0.5 bg-emerald-50 rounded text-emerald-600 font-extrabold text-[10px]">2</span>
              <div>
                <span className="font-bold text-slate-700 block">Driver's License Numbers</span>
                <span>Required for all drivers residing in your primary household to analyze driving profiles.</span>
              </div>
            </li>
            <li className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
              <span className="p-0.5 bg-emerald-50 rounded text-emerald-600 font-extrabold text-[10px]">3</span>
              <div>
                <span className="font-bold text-slate-700 block">Vehicle Specifications</span>
                <span>The Vehicle Identification Number (VIN) yields accurate safety discounts. Year, make, and model also work.</span>
              </div>
            </li>
            <li className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
              <span className="p-0.5 bg-emerald-50 rounded text-emerald-600 font-extrabold text-[10px]">4</span>
              <div>
                <span className="font-bold text-slate-700 block">Prior Deck Page</span>
                <span>Having proof of active coverage prevents insurers from charging "uninsured lapse" surcharges.</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400">
          *Completing an online quote usually takes 10 to 15 minutes per carrier.
        </div>
      </div>

      {/* Pro Tips to Save Money */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4 text-amber-500">
            <Sparkles className="w-5 h-5 fill-amber-300 text-amber-500" />
            <h3 className="font-sans font-bold text-base text-slate-800 uppercase tracking-wide">
              5 Ways to Reduce Premiums
            </h3>
          </div>
          <div className="space-y-4">
            <div className="flex gap-2.5">
              <div className="w-7 h-7 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                <Key className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-700 leading-none">Enroll in Telematics</h4>
                <p className="text-[11px] text-slate-500 leading-normal mt-1">
                  Almost all national providers (State Farm, GEICO, Progressive) offer smartphone apps that measure safe braking to shave up to 30% off rates.
                </p>
              </div>
            </div>

            <div className="flex gap-2.5">
              <div className="w-7 h-7 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-700 leading-none">Bundle with Renters/Home</h4>
                <p className="text-[11px] text-slate-500 leading-normal mt-1">
                  Creating integrated packages of car plus home or renters policies yields the single biggest discount available.
                </p>
              </div>
            </div>

            <div className="flex gap-2.5">
              <div className="w-7 h-7 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-700 leading-none">Avoid Payment Lapses</h4>
                <p className="text-[11px] text-slate-500 leading-normal mt-1">
                  Even a 1-day auto insurance lapse can cause future premiums to surge high. Set up autopay to guarantee ongoing coverage safety.
                </p>
              </div>
            </div>

            <div className="flex gap-2.5">
              <div className="w-7 h-7 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-700 leading-none">Raise Your Deductible</h4>
                <p className="text-[11px] text-slate-500 leading-normal mt-1">
                  Shifting collision deductibles from $505 to $1,005 can immediately contract comprehensive premiums by 15%.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400">
          *In states like CA or HI, credit history is legally banned from affecting auto rates.
        </div>
      </div>

    </div>
  );
}
