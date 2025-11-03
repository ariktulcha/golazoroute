import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ViewMode } from '../data/types';
import { useAppStore } from '../store/appStore';
import { Map, Trophy, Sparkles, Heart, Calendar, Users, MapPin, DollarSign, Plane, Cloud, FileText, Menu, X, ChevronDown, BookOpen, PartyPopper, Building2 } from 'lucide-react';

export default function Navigation() {
  const { viewMode, setViewMode } = useAppStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we're on a standalone page (no sidebar needed)
  const isStandalonePage = 
    location.pathname.startsWith('/cities') || 
    location.pathname.startsWith('/blog/') ||
    location.pathname.startsWith('/fan-zones/') ||
    location.pathname.startsWith('/stadiums') ||
    location.pathname === '/weather' ||
    location.pathname === '/privacy' ||
    location.pathname === '/terms' ||
    location.pathname === '/gdpr' ||
    location.pathname === '/cookies' ||
    location.pathname === '/contact' ||
    location.pathname === '/sponsor' ||
    location.pathname === '/about' ||
    location.pathname === '/our-story' ||
    location.pathname === '/roadmap' ||
    location.pathname === '/donate';
  
  // Determine active state based on route
  const getActiveViewMode = (): ViewMode | null => {
    if (location.pathname === '/cities' || location.pathname.startsWith('/cities/')) return 'cities-archive';
    if (location.pathname.startsWith('/blog')) return 'blog';
    if (location.pathname.startsWith('/fan-zones')) return 'funzone';
    if (location.pathname === '/stadiums' || location.pathname.startsWith('/stadiums/')) return 'stadiums';
    if (location.pathname === '/weather') return 'weather';
    return viewMode;
  };
  
  const activeView = getActiveViewMode();

  const navigationGroups = [
    {
      title: 'World Cup Map',
      isSingle: true,
      id: 'explorer' as ViewMode,
      icon: Map,
      gradient: 'from-fifa-blue-500 to-fifa-blue-600'
    },
    {
      title: 'Fan Tools',
      items: [
        { id: 'schedule' as ViewMode, label: 'Match Schedule', icon: Calendar, gradient: 'from-green-500 to-emerald-600' },
        { id: 'road-to-final' as ViewMode, label: 'Road to Final', icon: Trophy, gradient: 'from-fifa-gold-500 to-fifa-gold-600' },
        { id: 'follow-team' as ViewMode, label: 'Follow Your Team', icon: Users, gradient: 'from-red-500 to-orange-600' },
      ]
    },
    {
      title: 'World Cup Plans',
      items: [
        { id: 'recommended-routes' as ViewMode, label: 'Recommended Routes', icon: Sparkles, gradient: 'from-fifa-gold-500 to-orange-600' },
        { id: 'route-plan' as ViewMode, label: 'Build Route', icon: Plane, gradient: 'from-purple-500 to-fifa-blue-500' },
        { id: 'budget' as ViewMode, label: 'Budget Builder', icon: DollarSign, gradient: 'from-emerald-500 to-green-600' },
        { id: 'journey' as ViewMode, label: 'Your Personal Area', icon: Heart, gradient: 'from-fifa-gold-500 to-fifa-gold-600' },
      ]
    },
    {
      title: 'World Cup Cities',
      items: [
        { id: 'cities-archive' as ViewMode, label: 'Cities', icon: MapPin, gradient: 'from-purple-500 to-pink-600' },
        { id: 'stadiums' as ViewMode, label: 'Stadiums', icon: Building2, gradient: 'from-blue-500 to-indigo-600' },
        { id: 'funzone' as ViewMode, label: 'Fan Zones', icon: PartyPopper, gradient: 'from-fifa-gold-500 to-orange-600' },
      ]
    },
    {
      title: 'World Cup Info',
      items: [
        { id: 'destination-info' as ViewMode, label: 'Ticket Info', icon: FileText, gradient: 'from-amber-500 to-orange-600' },
        { id: 'weather' as ViewMode, label: 'World Cup Weather Forecast', icon: Cloud, gradient: 'from-cyan-500 to-teal-600' },
        { id: 'transportation' as ViewMode, label: 'Transportation Guide', icon: Plane, gradient: 'from-sky-500 to-blue-600' },
        { id: 'visa' as ViewMode, label: 'Visa & Travel Docs', icon: FileText, gradient: 'from-indigo-500 to-purple-600' },
        { id: 'blog' as ViewMode, label: 'Travel Blog & Guides', icon: BookOpen, gradient: 'from-fifa-gold-500 to-orange-600' },
      ]
    }
  ];


  // Close mobile menu when view changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [viewMode]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleTabClick = (tabId: ViewMode) => {
    // Special handling for cities archive - navigate to cities page
    if (tabId === 'cities-archive') {
      navigate('/cities');
      setIsMobileMenuOpen(false);
      return;
    }
    
    // Special handling for stadiums - navigate to stadiums page
    if (tabId === 'stadiums') {
      navigate('/stadiums');
      setIsMobileMenuOpen(false);
      return;
    }
    
    // Special handling for blog - navigate to blog page instead of using viewMode
    if (tabId === 'blog') {
      navigate('/blog');
      setIsMobileMenuOpen(false);
      return;
    }
    
    // Special handling for fan zones - navigate to fan zones page
    if (tabId === 'funzone') {
      navigate('/fan-zones');
      setIsMobileMenuOpen(false);
      return;
    }
    
    // Set the view mode
    setViewMode(tabId);
    
    // If we're not already on the app page, navigate to it
    if (location.pathname !== '/app') {
      navigate('/app');
    }
    
    setIsMobileMenuOpen(false);
  };

  const toggleGroup = (groupTitle: string) => {
    const newCollapsed = new Set(collapsedGroups);
    if (newCollapsed.has(groupTitle)) {
      newCollapsed.delete(groupTitle);
    } else {
      newCollapsed.add(groupTitle);
    }
    setCollapsedGroups(newCollapsed);
  };

  return (
    <>
      {/* Mobile Header */}
      <nav className="lg:hidden relative bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 border-b border-gray-800/50 shadow-2xl backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-fifa-blue-900/10 via-transparent to-fifa-gold-900/10 opacity-50"></div>
        
        <div className="relative px-3 sm:px-6 py-3 sm:py-5">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="relative">
                <Trophy className="w-7 h-7 sm:w-10 sm:h-10 text-fifa-gold-400 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 blur-xl bg-fifa-gold-500/40 animate-pulse-slow"></div>
                <div className="absolute inset-0 blur-2xl bg-fifa-gold-500/20"></div>
              </div>
              <div>
                <h1 className="text-lg sm:text-3xl font-bold text-white tracking-tight">
                  <span className="gradient-text">
                    GolazoRoute
                  </span>
                </h1>
                <p className="text-[10px] sm:text-sm text-gray-400 font-medium hidden sm:block">
                  World Cup Travel Optimizer
                </p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700 text-white transition-all duration-300 active:scale-95"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Desktop Horizontal Navigation with Dropdowns - Hidden on standalone pages */}
      {!isStandalonePage && (
        <nav className="hidden lg:block fixed top-0 left-0 right-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 border-b border-gray-800/50 shadow-2xl z-30">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-fifa-blue-900/10 via-transparent to-fifa-gold-900/10 opacity-50"></div>
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-start gap-8 h-16">
              {/* Logo */}
              <div 
                className="flex items-center gap-2 group cursor-pointer flex-shrink-0"
                onClick={() => navigate('/')}
              >
                <div className="relative">
                  <Trophy className="w-7 h-7 text-fifa-gold-400 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <div className="absolute inset-0 blur-xl bg-fifa-gold-500/40 animate-pulse-slow"></div>
                </div>
                <h1 className="text-base font-bold text-white tracking-tight">
                  <span className="gradient-text">
                    GolazoRoute
                  </span>
                </h1>
              </div>

              {/* Navigation Items with Dropdowns */}
              <div className="flex items-center gap-1 flex-1">
                {navigationGroups.map((group) => {
                  // Handle single items (no dropdown)
                  if (group.isSingle) {
                    const Icon = group.icon;
                    const isActive = activeView === group.id;
                    return (
                      <button
                        key={group.title}
                        onClick={() => handleTabClick(group.id!)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? 'text-white bg-gray-800/50'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{group.title}</span>
                      </button>
                    );
                  }
                  
                  // Handle groups with dropdown
                  return (
                    <div 
                      key={group.title}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(group.title)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {/* Group Button */}
                      <button
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all"
                      >
                        <span>{group.title}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${
                          openDropdown === group.title ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Dropdown Menu */}
                      {openDropdown === group.title && group.items && (
                        <div className="absolute top-full left-0 mt-1 w-56 glass-dark border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden animate-slide-down">
                          <div className="py-2">
                            {group.items.map((item) => {
                              const Icon = item.icon;
                              const isActive = activeView === item.id;
                              
                              return (
                                <button
                                  key={item.id}
                                  onClick={() => {
                                    handleTabClick(item.id);
                                    setOpenDropdown(null);
                                  }}
                                  className={`
                                    relative w-full flex items-center gap-3 px-4 py-2.5
                                    text-sm font-medium transition-all duration-300
                                    group overflow-hidden
                                    ${
                                      isActive
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                    }
                                  `}
                                >
                                  {/* Active background gradient */}
                                  {isActive && (
                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-100`}></div>
                                  )}
                                  
                                  {/* Icon */}
                                  <Icon className={`w-4 h-4 relative z-10 flex-shrink-0 transition-all duration-300 ${
                                    isActive ? 'drop-shadow-glow' : 'group-hover:scale-110'
                                  }`} />
                                  
                                  {/* Label */}
                                  <span className="relative z-10">{item.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 
          border-l border-gray-800 shadow-2xl z-50 lg:hidden
          transform transition-transform duration-300 ease-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-fifa-gold-400" />
            <span className="text-lg font-bold text-white">Menu</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-all active:scale-95"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Items with Groups */}
        <div className="overflow-y-auto h-[calc(100%-73px)] p-3">
          <div className="space-y-6">
            {navigationGroups.map((group) => {
              // Handle single items (no collapsible group)
              if (group.isSingle) {
                const Icon = group.icon;
                const isActive = activeView === group.id;
                return (
                  <button
                    key={group.title}
                    onClick={() => handleTabClick(group.id!)}
                    className={`
                      relative w-full flex items-center justify-between px-4 py-4 rounded-xl
                      font-semibold transition-all duration-300
                      group overflow-hidden touch-manipulation
                      ${
                        isActive
                          ? 'text-white shadow-lg'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50 active:bg-gray-800'
                      }
                    `}
                  >
                    {/* Active background gradient */}
                    {isActive && (
                      <>
                        <div className={`absolute inset-0 bg-gradient-to-r ${group.gradient} opacity-100`}></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                      </>
                    )}
                    
                    {/* Label */}
                    <span className="relative z-10 text-left">{group.title}</span>
                    
                    {/* Icon positioned to the right */}
                    <Icon className={`w-6 h-6 relative z-10 transition-all duration-300 flex-shrink-0 ${
                      isActive ? 'drop-shadow-glow' : 'group-hover:scale-110'
                    }`} />
                    
                    {/* Hover glow effect */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </button>
                );
              }
              
              // Handle groups with collapsible items
              return (
                <div key={group.title}>
                  {/* Group Header */}
                  <button
                    onClick={() => toggleGroup(group.title)}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider hover:text-gray-300 transition-colors"
                  >
                    <span>{group.title}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        collapsedGroups.has(group.title) ? '-rotate-90' : ''
                      }`}
                    />
                  </button>

                  {/* Group Items */}
                  {!collapsedGroups.has(group.title) && group.items && (
                    <div className="space-y-1 mt-1">
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeView === item.id;
                        
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleTabClick(item.id)}
                            className={`
                              relative w-full flex items-center justify-between px-4 py-4 rounded-xl
                              font-semibold transition-all duration-300
                              group overflow-hidden touch-manipulation
                              ${
                                isActive
                                  ? 'text-white shadow-lg'
                                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50 active:bg-gray-800'
                              }
                            `}
                          >
                            {/* Active background gradient */}
                            {isActive && (
                              <>
                                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-100`}></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                              </>
                            )}
                            
                            {/* Label */}
                            <span className="relative z-10 text-left">{item.label}</span>
                            
                            {/* Icon positioned to the right */}
                            <Icon className={`w-6 h-6 relative z-10 transition-all duration-300 flex-shrink-0 ${
                              isActive ? 'drop-shadow-glow' : 'group-hover:scale-110'
                            }`} />
                            
                            {/* Hover glow effect */}
                            {!isActive && (
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}



