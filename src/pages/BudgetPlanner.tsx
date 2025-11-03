import { useState, useEffect } from 'react';
import { useAppStore } from '../store/appStore';
import { 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  Download, 
  RefreshCw, 
  Calculator,
  Hotel,
  Plane,
  Ticket,
  Utensils,
  Camera,
  ShoppingBag,
  AlertCircle,
  CheckCircle,
  Wallet
} from 'lucide-react';

type BudgetCategory = 'accommodation' | 'transportation' | 'tickets' | 'food' | 'activities' | 'misc';

interface CurrencyRate {
  USD: number;
  CAD: number;
  MXN: number;
}

export default function BudgetPlanner() {
  const { 
    budgetData, 
    totalBudget, 
    actualSpending, 
    setBudgetCategory, 
    setTotalBudget,
    addActualSpending,
    resetBudget,
    currentItinerary 
  } = useAppStore();

  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'CAD' | 'MXN'>('USD');
  const [activeTab, setActiveTab] = useState<'plan' | 'track' | 'compare'>('plan');
  const [showSyncModal, setShowSyncModal] = useState(false);

  // Currency conversion rates (approximate)
  const currencyRates: CurrencyRate = {
    USD: 1,
    CAD: 1.35,
    MXN: 17.5,
  };

  const currencySymbols = {
    USD: '$',
    CAD: 'C$',
    MXN: 'MX$',
  };

  const convertCurrency = (amount: number): number => {
    return amount * currencyRates[selectedCurrency];
  };

  const formatCurrency = (amount: number): string => {
    const converted = convertCurrency(amount);
    return `${currencySymbols[selectedCurrency]}${converted.toFixed(0)}`;
  };

  // Calculate totals
  const plannedTotal = Object.values(budgetData).reduce((sum, val) => sum + val, 0);
  const actualTotal = Object.values(actualSpending).reduce((sum, val) => sum + val, 0);
  const remaining = totalBudget - actualTotal;
  const budgetUsagePercent = totalBudget > 0 ? (actualTotal / totalBudget) * 100 : 0;

  // Sync with optimizer
  const syncWithOptimizer = () => {
    if (currentItinerary) {
      const hotelCost = currentItinerary.totalCost || 0;
      const transportCost = currentItinerary.totalDistance * 0.15; // Rough estimate
      
      setBudgetCategory('accommodation', hotelCost);
      setBudgetCategory('transportation', transportCost);
      
      setShowSyncModal(false);
    }
  };

  useEffect(() => {
    if (totalBudget === 0 && plannedTotal > 0) {
      setTotalBudget(plannedTotal);
    }
  }, [plannedTotal, totalBudget, setTotalBudget]);

  const categoryConfig: Record<BudgetCategory, { icon: typeof Hotel; label: string; color: string }> = {
    accommodation: { icon: Hotel, label: 'Accommodation', color: 'text-blue-400' },
    transportation: { icon: Plane, label: 'Transportation', color: 'text-sky-400' },
    tickets: { icon: Ticket, label: 'Match Tickets', color: 'text-purple-400' },
    food: { icon: Utensils, label: 'Food & Dining', color: 'text-orange-400' },
    activities: { icon: Camera, label: 'Activities', color: 'text-green-400' },
    misc: { icon: ShoppingBag, label: 'Miscellaneous', color: 'text-pink-400' },
  };

  const exportBudget = () => {
    const data = {
      totalBudget,
      budgetData,
      actualSpending,
      plannedTotal,
      actualTotal,
      remaining,
      currency: selectedCurrency,
      exportDate: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `wc2026-budget-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-950 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-green-500" />
                Budget Planner
              </h1>
              <p className="text-gray-400">
                Plan and track your World Cup 2026 expenses
              </p>
            </div>

            {/* Currency Selector */}
            <div className="flex gap-2">
              {(['USD', 'CAD', 'MXN'] as const).map((currency) => (
                <button
                  key={currency}
                  onClick={() => setSelectedCurrency(currency)}
                  className={`px-4 py-2 rounded transition-colors ${
                    selectedCurrency === currency
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  {currency}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <Wallet className="w-6 h-6" />
                <span className="text-sm opacity-90">Total Budget</span>
              </div>
              <p className="text-3xl font-bold">{formatCurrency(totalBudget)}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <Calculator className="w-6 h-6" />
                <span className="text-sm opacity-90">Planned</span>
              </div>
              <p className="text-3xl font-bold">{formatCurrency(plannedTotal)}</p>
            </div>

            <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-6 h-6" />
                <span className="text-sm opacity-90">Actual Spent</span>
              </div>
              <p className="text-3xl font-bold">{formatCurrency(actualTotal)}</p>
            </div>

            <div className={`bg-gradient-to-br ${remaining >= 0 ? 'from-green-600 to-green-700' : 'from-red-600 to-red-700'} rounded-lg p-6 text-white`}>
              <div className="flex items-center justify-between mb-2">
                {remaining >= 0 ? <CheckCircle className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
                <span className="text-sm opacity-90">Remaining</span>
              </div>
              <p className="text-3xl font-bold">{formatCurrency(remaining)}</p>
            </div>
          </div>

          {/* Budget Progress Bar */}
          {totalBudget > 0 && (
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Budget Usage</span>
                <span className="text-sm font-semibold text-white">{budgetUsagePercent.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    budgetUsagePercent < 50
                      ? 'bg-green-500'
                      : budgetUsagePercent < 80
                      ? 'bg-yellow-500'
                      : budgetUsagePercent < 100
                      ? 'bg-orange-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${Math.min(budgetUsagePercent, 100)}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('plan')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'plan'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <Calculator className="w-4 h-4 inline mr-2" />
            Plan Budget
          </button>
          <button
            onClick={() => setActiveTab('track')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'track'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-4 h-4 inline mr-2" />
            Track Spending
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'compare'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <PieChart className="w-4 h-4 inline mr-2" />
            Compare
          </button>
        </div>

        {/* Content */}
        {activeTab === 'plan' && (
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="flex gap-3 flex-wrap">
              {currentItinerary && (
                <button
                  onClick={() => setShowSyncModal(true)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Sync with Optimizer
                </button>
              )}
              <button
                onClick={exportBudget}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export Budget
              </button>
              <button
                onClick={resetBudget}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Reset All
              </button>
            </div>

            {/* Total Budget Input */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Set Your Total Budget</h3>
              <div className="flex gap-3 items-center">
                <input
                  type="number"
                  value={totalBudget}
                  onChange={(e) => setTotalBudget(Number(e.target.value))}
                  placeholder="Enter total budget"
                  className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:border-fifa-blue"
                />
                <span className="text-xl font-semibold text-gray-400">USD</span>
              </div>
            </div>

            {/* Category Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(Object.keys(categoryConfig) as BudgetCategory[]).map((category) => {
                const { icon: Icon, label, color } = categoryConfig[category];
                return (
                  <div key={category} className="bg-gray-800 rounded-lg p-5 border border-gray-700">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className={`w-6 h-6 ${color}`} />
                      <h4 className="font-semibold">{label}</h4>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="number"
                        value={budgetData[category]}
                        onChange={(e) => setBudgetCategory(category, Number(e.target.value))}
                        placeholder="0"
                        className="flex-1 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-fifa-blue"
                      />
                      <span className="text-sm text-gray-400">USD</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-400">
                      {formatCurrency(budgetData[category])}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'track' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Track Your Actual Spending</h3>
              <p className="text-gray-400 mb-6">Record your actual expenses as you go</p>

              <div className="space-y-4">
                {(Object.keys(categoryConfig) as BudgetCategory[]).map((category) => {
                  const { icon: Icon, label, color } = categoryConfig[category];
                  const spent = actualSpending[category] || 0;
                  const planned = budgetData[category];
                  const percentage = planned > 0 ? (spent / planned) * 100 : 0;

                  return (
                    <div key={category} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Icon className={`w-5 h-5 ${color}`} />
                          <span className="font-semibold">{label}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">
                            {formatCurrency(spent)} / {formatCurrency(planned)}
                          </p>
                        </div>
                      </div>
                      
                      {planned > 0 && (
                        <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
                          <div
                            className={`h-full rounded-full transition-all ${
                              percentage < 80 ? 'bg-green-500' : percentage < 100 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${Math.min(percentage, 100)}%` }}
                          ></div>
                        </div>
                      )}

                      <button
                        onClick={() => {
                          const amount = prompt(`Add expense for ${label} (USD):`, '0');
                          if (amount) {
                            addActualSpending(category, Number(amount));
                          }
                        }}
                        className="text-fifa-blue hover:text-blue-400 text-sm mt-2"
                      >
                        + Add Expense
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'compare' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-6">Budget Comparison</h3>
              
              <div className="space-y-4">
                {(Object.keys(categoryConfig) as BudgetCategory[]).map((category) => {
                  const { icon: Icon, label, color } = categoryConfig[category];
                  const planned = budgetData[category];
                  const spent = actualSpending[category] || 0;
                  const difference = planned - spent;

                  return (
                    <div key={category} className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
                      <Icon className={`w-6 h-6 ${color}`} />
                      <div className="flex-1">
                        <p className="font-semibold mb-1">{label}</p>
                        <div className="flex gap-4 text-sm">
                          <span className="text-gray-400">
                            Planned: <span className="text-white">{formatCurrency(planned)}</span>
                          </span>
                          <span className="text-gray-400">
                            Spent: <span className="text-white">{formatCurrency(spent)}</span>
                          </span>
                          <span className={difference >= 0 ? 'text-green-400' : 'text-red-400'}>
                            {difference >= 0 ? 'Under' : 'Over'}: <span className="font-semibold">{formatCurrency(Math.abs(difference))}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Summary */}
              <div className="mt-6 pt-6 border-t border-gray-600">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total</span>
                  <div className="flex gap-6">
                    <span className="text-gray-400">Planned: {formatCurrency(plannedTotal)}</span>
                    <span className="text-gray-400">Spent: {formatCurrency(actualTotal)}</span>
                    <span className={remaining >= 0 ? 'text-green-400' : 'text-red-400'}>
                      {remaining >= 0 ? 'Remaining' : 'Over'}: {formatCurrency(Math.abs(remaining))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sync Modal */}
        {showSyncModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Sync with Optimizer</h3>
              <p className="text-gray-400 mb-6">
                This will update your accommodation and transportation budget based on your current itinerary from the Optimizer.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={syncWithOptimizer}
                  className="flex-1 bg-fifa-blue hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                >
                  Sync Now
                </button>
                <button
                  onClick={() => setShowSyncModal(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

