import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, ShieldCheck, MapPin, Scale, HelpCircle, 
  BookOpen, Calculator, Layers, LayoutGrid, Check, 
  Plus, X, HelpCircle as HelpIcon, Award, ChevronDown, ListFilter, Sparkles, Filter 
} from 'lucide-react';
import { insuranceCompanies, states } from './data/insuranceCompanies';
import { CompanyCard } from './components/CompanyCard';
import { CompareModal } from './components/CompareModal';
import { QuoteEstimator } from './components/QuoteEstimator';
import { StatsSelector } from './components/StatsSelector';
import { HelpfulGuides } from './components/HelpfulGuides';
import { InsuranceCompany } from './types';

export default function App() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState<'explore' | 'estimator' | 'regulations' | 'guides'>('explore');

  // Search & Basic Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('ALL');
  const [sortBy, setSortBy] = useState<'rating' | 'share' | 'liabilityLowest' | 'fullLowest' | 'alphabetical'>('rating');

  // Profile Specific Filters
  const [militaryFilter, setMilitaryFilter] = useState(false);
  const [seniorFilter, setSeniorFilter] = useState(false);
  const [sr22Filter, setSr22Filter] = useState(false);

  // Policy Feature Requirements
  const [requiredFeatures, setRequiredFeatures] = useState<{
    gapInsurance: boolean;
    accidentForgiveness: boolean;
    roadsideAssistance: boolean;
    telematicsDiscount: boolean;
    rideshareCoverage: boolean;
    mobileClaims: boolean;
  }>({
    gapInsurance: false,
    accidentForgiveness: false,
    roadsideAssistance: false,
    telematicsDiscount: false,
    rideshareCoverage: false,
    mobileClaims: false
  });

  // Comparison Management
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Toggle comparison state for a company
  const handleToggleCompare = (id: string) => {
    setCompareIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      if (prev.length >= 3) {
        alert("You can compare a maximum of 3 insurance companies side-by-side.");
        return prev;
      }
      return [...prev, id];
    });
  };

  // Clear comparison selection
  const handleClearCompare = () => {
    setCompareIds([]);
  };

  // Convert comparative ID array to Company entries
  const selectedCompareCompanies = useMemo(() => {
    return insuranceCompanies.filter(co => compareIds.includes(co.id));
  }, [compareIds]);

  // Toggle single policy feature constraint
  const handleToggleFeature = (feature: keyof typeof requiredFeatures) => {
    setRequiredFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature]
    }));
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedState('ALL');
    setMilitaryFilter(false);
    setSeniorFilter(false);
    setSr22Filter(false);
    setRequiredFeatures({
      gapInsurance: false,
      accidentForgiveness: false,
      roadsideAssistance: false,
      telematicsDiscount: false,
      rideshareCoverage: false,
      mobileClaims: false
    });
  };

  // Active filter checks count
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedState !== 'ALL') count++;
    if (militaryFilter) count++;
    if (seniorFilter) count++;
    if (sr22Filter) count++;
    Object.values(requiredFeatures).forEach(v => {
      if (v) count++;
    });
    return count;
  }, [selectedState, militaryFilter, seniorFilter, sr22Filter, requiredFeatures]);

  // Main filtered & sorted compilation list
  const processedCompanies = useMemo(() => {
    let list = [...insuranceCompanies];

    // Search query matching
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(co => 
        co.name.toLowerCase().includes(q) ||
        co.slogan.toLowerCase().includes(q) ||
        co.description.toLowerCase().includes(q) ||
        co.headquarters.toLowerCase().includes(q) ||
        co.pros.some(p => p.toLowerCase().includes(q))
      );
    }

    // State availability matching
    if (selectedState !== 'ALL') {
      list = list.filter(co => {
        // If statesList is specified, it holds regional constraints
        if (co.statesList && co.statesList.length > 0) {
          return co.statesList.includes(selectedState);
        }
        return true; // Nationwide
      });
    }

    // Special profile checks
    if (militaryFilter) {
      // Prioritize USAA or only display USAA
      list = list.filter(co => co.militaryOnly);
    }
    if (seniorFilter) {
      list = list.filter(co => co.seniorFocused || !co.militaryOnly);
    }
    if (sr22Filter) {
      list = list.filter(co => co.nonStandardSR22);
    }

    // Policy tech feature checks (All checked features must be TRUE for matches)
    const activeRequiredKeys = Object.entries(requiredFeatures)
      .filter(([_, value]) => value)
      .map(([key]) => key as keyof typeof requiredFeatures);

    if (activeRequiredKeys.length > 0) {
      list = list.filter(co => 
        activeRequiredKeys.every(featKey => co.features[featKey])
      );
    }

    // Sorting rule implementation
    list.sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (sortBy === 'share') {
        return b.marketShare - a.marketShare;
      }
      if (sortBy === 'liabilityLowest') {
        return a.estimatedRates.minimumCoverage - b.estimatedRates.minimumCoverage;
      }
      if (sortBy === 'fullLowest') {
        return a.estimatedRates.fullCoverage - b.estimatedRates.fullCoverage;
      }
      if (sortBy === 'alphabetical') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    return list;
  }, [searchQuery, selectedState, militaryFilter, seniorFilter, sr22Filter, requiredFeatures, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 flex flex-col font-sans selection:bg-indigo-150 relative pb-20">
      
      {/* Upper Navigation Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 z-40 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Logo Brand Anchor */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-200">
              <ShieldCheck className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <span className="font-display font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight block">
                AutoInsure USA
              </span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block -mt-1">
                Unified Directory & Estimator
              </span>
            </div>
          </div>

          {/* Quick tab controllers for desktop */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/50">
            <button
              id="nav-tab-explore"
              onClick={() => setActiveTab('explore')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'explore' 
                  ? 'bg-white text-indigo-700 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Insurers Directory
            </button>
            <button
              id="nav-tab-estimator"
              onClick={() => setActiveTab('estimator')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'estimator' 
                  ? 'bg-white text-indigo-700 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              Premium Estimator
            </button>
            <button
              id="nav-tab-regulations"
              onClick={() => setActiveTab('regulations')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'regulations' 
                  ? 'bg-white text-indigo-700 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              State Regulations
            </button>
            <button
              id="nav-tab-guides"
              onClick={() => setActiveTab('guides')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'guides' 
                  ? 'bg-white text-indigo-700 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Advisory Guides
            </button>
          </nav>

          {/* Quick counters */}
          <div className="flex items-center gap-2">
            <button
              id="open-compare-tray-btn"
              onClick={() => setIsCompareOpen(true)}
              className="relative inline-flex items-center gap-1.5 bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <Scale className="w-4 h-4" />
              <span className="hidden sm:inline">Compare Slot</span>
              <span className="bg-indigo-500 text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                {compareIds.length}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Tab Navigation */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-xl z-40 border border-slate-750 p-1.5 flex justify-around">
        <button
          onClick={() => setActiveTab('explore')}
          className={`flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl cursor-pointer ${
            activeTab === 'explore' ? 'text-indigo-400 font-bold' : 'text-slate-400 text-xs'
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          <span className="text-[10px]">Directory</span>
        </button>
        <button
          onClick={() => setActiveTab('estimator')}
          className={`flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl cursor-pointer ${
            activeTab === 'estimator' ? 'text-indigo-400 font-bold' : 'text-slate-400 text-xs'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span className="text-[10px]">Estimator</span>
        </button>
        <button
          onClick={() => setActiveTab('regulations')}
          className={`flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl cursor-pointer ${
            activeTab === 'regulations' ? 'text-indigo-400 font-bold' : 'text-slate-400 text-xs'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span className="text-[10px]">States</span>
        </button>
        <button
          onClick={() => setActiveTab('guides')}
          className={`flex flex-col items-center gap-1 py-1.5 px-3 rounded-xl cursor-pointer ${
            activeTab === 'guides' ? 'text-indigo-400 font-bold' : 'text-slate-400 text-xs'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span className="text-[10px]">Guides</span>
        </button>
      </div>

      {/* Hero Brand Section (Shown on clean desktop layout) */}
      <section className="bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-950 text-white py-14 px-4 text-center select-none overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 bg-indigo-505/10 border border-indigo-400/20 px-3.5 py-1 rounded-full text-indigo-300 text-xs font-bold tracking-wide uppercase mb-4"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            No API Required • Independent US Insurance Finder
          </motion.div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4">
            Collect, Estimate & Compare <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">USA Car Insurance Websites</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            The ultimate offline-capable car insurance directory matching standard, non-standard (SR-22), military, and senior drivers. Get estimates instantly and link directly to official quoting pages.
          </p>

          {/* Quick search desk in hero index */}
          {activeTab === 'explore' && (
            <div className="mt-8 max-w-xl mx-auto bg-white rounded-2xl p-1.5 shadow-lg flex items-center gap-1 border border-slate-200">
              <div className="flex items-center gap-2 pl-3 flex-1 text-slate-400">
                <Search className="w-5 h-5 shrink-0" />
                <input
                  id="hero-instant-search"
                  type="text"
                  placeholder="Search. e.g. State Farm, GEICO, telematic metrics, non-standard..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-slate-800 bg-transparent py-2 outline-hidden text-sm placeholder:text-slate-400"
                />
              </div>
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Main Container Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1">
        
        {/* Dynamic section selection */}
        {activeTab === 'explore' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Extended Filters Ribbon Row */}
            <div className="bg-white p-5 rounded-2xl border border-slate-150/70 shadow-2xs flex flex-col gap-6">
              
              {/* Primary selector headers */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-sm uppercase tracking-wider">
                  <ListFilter className="w-4 h-4 text-indigo-500" />
                  Directory Controls
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* State selector filter */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="font-semibold">Written State:</span>
                    <select
                      id="filter-state-dropdown"
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="bg-slate-50 border border-slate-200 focus:border-indigo-500 text-slate-800 rounded-lg px-2.5 py-1.5 text-xs font-bold focus:outline-hidden cursor-pointer"
                    >
                      <option value="ALL">Nationwide (All States)</option>
                      {states.map(st => (
                        <option key={st.code} value={st.code}>{st.name} ({st.code})</option>
                      ))}
                    </select>
                  </div>

                  {/* Rating or Premium sorting */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="font-semibold">Order by:</span>
                    <select
                      id="filter-sort-dropdown"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="bg-slate-50 border border-slate-200 focus:border-indigo-500 text-slate-800 rounded-lg px-2.5 py-1.5 text-xs font-bold focus:outline-hidden cursor-pointer"
                    >
                      <option value="rating">Customer Satisfaction (J.D. Power)</option>
                      <option value="share">Top US Market Share %</option>
                      <option value="liabilityLowest">Estimated Liability Rate (Lowest)</option>
                      <option value="fullLowest">Estimated Full Coverage (Lowest)</option>
                      <option value="alphabetical">Company Name (A-Z)</option>
                    </select>
                  </div>

                  {/* Reset trigger */}
                  {activeFiltersCount > 0 && (
                    <button
                      id="filter-reset-trigger"
                      onClick={handleResetFilters}
                      className="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer"
                    >
                      Clear Filters ({activeFiltersCount})
                    </button>
                  )}
                </div>
              </div>

              {/* Advanced Filter categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Driver profile checkboxes */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2.5">
                    1. Specialized Demographics Offer
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        id="filter-military"
                        type="checkbox"
                        checked={militaryFilter}
                        onChange={(e) => setMilitaryFilter(e.target.checked)}
                        className="w-4 h-4 text-indigo-600 border-slate-300 rounded-sm focus:ring-indigo-500"
                      />
                      <span className="text-xs font-semibold text-slate-700">Military Personnel/Family (USAA)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        id="filter-senior"
                        type="checkbox"
                        checked={seniorFilter}
                        onChange={(e) => setSeniorFilter(e.target.checked)}
                        className="w-4 h-4 text-indigo-600 border-slate-300 rounded-sm focus:ring-indigo-500"
                      />
                      <span className="text-xs font-semibold text-slate-700">Age 50+ / Senior Specifics (Hartford AARP)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        id="filter-sr22"
                        type="checkbox"
                        checked={sr22Filter}
                        onChange={(e) => setSr22Filter(e.target.checked)}
                        className="w-4 h-4 text-indigo-600 border-slate-300 rounded-sm focus:ring-indigo-500"
                      />
                      <span className="text-xs font-semibold text-slate-700">Non-Standard / SR-22 Welcomings</span>
                    </label>
                  </div>
                </div>

                {/* Tech requirements checklist (Columns 2 & 3 combined or mapped) */}
                <div className="md:col-span-2 space-y-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2.5">
                    2. Mandatory Policy Add-ons & Technology Features
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {(['accidentForgiveness', 'gapInsurance', 'roadsideAssistance', 'telematicsDiscount', 'rideshareCoverage', 'mobileClaims'] as const).map(feat => {
                      const label = feat
                        .replace(/([A-Z])/g, ' $1')
                        .replace(/^./, (str) => str.toUpperCase());
                      return (
                        <label key={feat} className="flex items-center gap-2 cursor-pointer select-none">
                          <input
                            id={`filter-feat-${feat}`}
                            type="checkbox"
                            checked={requiredFeatures[feat]}
                            onChange={() => handleToggleFeature(feat)}
                            className="w-4 h-4 text-emerald-600 border-slate-300 rounded-sm focus:ring-emerald-500"
                          />
                          <span className="text-xs text-slate-600 font-medium whitespace-nowrap">{label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>

            {/* General Database Summary Tag */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                <span>Matching Providers ({processedCompanies.length} of {insuranceCompanies.length})</span>
                {selectedState !== 'ALL' && (
                  <span className="text-indigo-600 italic bg-indigo-50 px-2 py-0.5 rounded font-bold uppercase text-[9px]">
                    In {selectedState}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400">
                Direct quotation links operate without intermediary fees.
              </p>
            </div>

            {/* Render Empty results */}
            <AnimatePresence mode="popLayout">
              {processedCompanies.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-3xl p-12 text-center border border-slate-200/60 shadow-2xs max-w-md mx-auto"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-rose-50 text-rose-500 rounded-full mb-3 border border-rose-100">
                    <Filter className="w-6 h-6" />
                  </div>
                  <h3 className="text-slate-800 font-bold font-sans text-base">No Matching Insurer Found</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                    Try clearing some specific filter criteria or checking for general nationwide providers (unchecking SR-22 or military-only flags).
                  </p>
                  <button
                    id="no-match-reset-trigger"
                    onClick={handleResetFilters}
                    className="mt-4 bg-indigo-600 hover:bg-slate-900 text-white font-bold text-xs py-2 px-5 rounded-xl transition-all cursor-pointer shadow-xs"
                  >
                    Reset Directory Filters
                  </button>
                </motion.div>
              ) : (
                /* Primary Interactive Grid List */
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {processedCompanies.map(co => (
                    <CompanyCard
                      key={co.id}
                      company={co}
                      isComparing={compareIds.includes(co.id)}
                      onToggleCompare={handleToggleCompare}
                      compareCount={compareIds.length}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Tab content loops */}
        {activeTab === 'estimator' && (
          <div className="animate-fadeIn">
            <QuoteEstimator />
          </div>
        )}

        {activeTab === 'regulations' && (
          <div className="animate-fadeIn">
            <StatsSelector />
          </div>
        )}

        {activeTab === 'guides' && (
          <div className="animate-fadeIn space-y-8">
            <div className="border-b border-slate-250 pb-3 mb-1">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 font-sans">
                US Auto Insurance Advisory Guide
              </h2>
              <p className="text-xs text-slate-500">Explore terminology explanations and optimization checklists before requesting official quotes.</p>
            </div>
            <HelpfulGuides />
          </div>
        )}

      </main>

      {/* Floating compare sticky bar */}
      <AnimatePresence>
        {compareIds.length > 0 && (
          <motion.div
            id="floating-compare-ray"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-18 md:bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-xl bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-2xl z-40 border border-slate-750 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white shrink-0">
                <Layers className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-xs font-bold leading-normal">
                  Insurers Comparison Desk ({compareIds.length}/3)
                </p>
                <div className="flex gap-1.5 mt-0.5">
                  {selectedCompareCompanies.map(c => (
                    <span key={c.id} className="text-[10px] bg-slate-850 text-slate-300 font-bold px-2 py-0.5 rounded-sm inline-block max-w-[80px] truncate border border-slate-700">
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="clear-compare-tray"
                onClick={handleClearCompare}
                className="text-[11px] text-slate-400 hover:text-white px-2 py-1.5 rounded-md transition-colors font-medium cursor-pointer"
              >
                Clear
              </button>
              
              <button
                id="launch-compare-tray"
                onClick={() => setIsCompareOpen(true)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer flex items-center gap-1 shadow-sm"
              >
                Compare Side-by-Side
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal overlays */}
      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        selectedCompanies={selectedCompareCompanies}
        onRemoveCompany={handleToggleCompare}
      />

    </div>
  );
}
