import { create } from 'zustand';
import { Match, City, Itinerary, ViewMode } from '../data/types';

interface AppState {
  // View mode
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;

  // Selected matches for optimizer
  selectedMatches: Match[];
  addMatch: (match: Match) => void;
  removeMatch: (matchId: string) => void;
  clearMatches: () => void;

  // Selected city for explorer
  selectedCity: City | null;
  setSelectedCity: (city: City | null) => void;

  // Generated itinerary
  currentItinerary: Itinerary | null;
  setCurrentItinerary: (itinerary: Itinerary | null) => void;

  // Map state
  mapCenter: [number, number];
  mapZoom: number;
  setMapCenter: (center: [number, number]) => void;
  setMapZoom: (zoom: number) => void;

  // Filter state
  filterCountry: 'all' | 'USA' | 'Mexico' | 'Canada';
  filterStage: 'all' | 'Group' | 'Knockout';
  setFilterCountry: (country: 'all' | 'USA' | 'Mexico' | 'Canada') => void;
  setFilterStage: (stage: 'all' | 'Group' | 'Knockout') => void;

  // Budget state
  budgetData: {
    accommodation: number;
    transportation: number;
    tickets: number;
    food: number;
    activities: number;
    misc: number;
  };
  totalBudget: number;
  actualSpending: Record<string, number>;
  setBudgetCategory: (category: keyof AppState['budgetData'], amount: number) => void;
  setTotalBudget: (amount: number) => void;
  addActualSpending: (category: string, amount: number) => void;
  resetBudget: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Initial state
  viewMode: 'explorer',
  selectedMatches: [],
  selectedCity: null,
  currentItinerary: null,
  mapCenter: [-95.7129, 37.0902], // Center of North America
  mapZoom: 4,
  filterCountry: 'all',
  filterStage: 'all',
  budgetData: {
    accommodation: 0,
    transportation: 0,
    tickets: 0,
    food: 0,
    activities: 0,
    misc: 0,
  },
  totalBudget: 0,
  actualSpending: {},

  // Actions
  setViewMode: (mode) => set({ viewMode: mode }),

  addMatch: (match) =>
    set((state) => ({
      selectedMatches: [...state.selectedMatches, match],
    })),

  removeMatch: (matchId) =>
    set((state) => ({
      selectedMatches: state.selectedMatches.filter((m) => m.id !== matchId),
    })),

  clearMatches: () => set({ selectedMatches: [] }),

  setSelectedCity: (city) => set({ selectedCity: city }),

  setCurrentItinerary: (itinerary) => set({ currentItinerary: itinerary }),

  setMapCenter: (center) => set({ mapCenter: center }),

  setMapZoom: (zoom) => set({ mapZoom: zoom }),

  setFilterCountry: (country) => set({ filterCountry: country }),

  setFilterStage: (stage) => set({ filterStage: stage }),

  setBudgetCategory: (category, amount) =>
    set((state) => ({
      budgetData: { ...state.budgetData, [category]: amount },
    })),

  setTotalBudget: (amount) => set({ totalBudget: amount }),

  addActualSpending: (category, amount) =>
    set((state) => ({
      actualSpending: {
        ...state.actualSpending,
        [category]: (state.actualSpending[category] || 0) + amount,
      },
    })),

  resetBudget: () =>
    set({
      budgetData: {
        accommodation: 0,
        transportation: 0,
        tickets: 0,
        food: 0,
        activities: 0,
        misc: 0,
      },
      totalBudget: 0,
      actualSpending: {},
    }),
}));



