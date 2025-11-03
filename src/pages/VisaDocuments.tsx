import { useState } from 'react';
import { 
  FileText, 
  Globe, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  ExternalLink,
  Download,
  Plane,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Info,
  Users,
  Heart
} from 'lucide-react';

interface Country {
  name: string;
  code: string;
  region: string;
}

interface VisaRequirement {
  country: 'USA' | 'Mexico' | 'Canada';
  requirement: 'visa-free' | 'visa-required' | 'eta' | 'visa-on-arrival';
  duration: string;
  processingTime: string;
  cost: string;
  notes: string[];
}

export default function VisaDocuments() {
  const [nationality, setNationality] = useState('');
  const [activeTab, setActiveTab] = useState<'visa' | 'documents' | 'embassy' | 'insurance'>('visa');

  // Sample countries - in production, this would be a comprehensive list
  const popularCountries: Country[] = [
    { name: 'United States', code: 'US', region: 'North America' },
    { name: 'United Kingdom', code: 'GB', region: 'Europe' },
    { name: 'Germany', code: 'DE', region: 'Europe' },
    { name: 'France', code: 'FR', region: 'Europe' },
    { name: 'Spain', code: 'ES', region: 'Europe' },
    { name: 'Italy', code: 'IT', region: 'Europe' },
    { name: 'Brazil', code: 'BR', region: 'South America' },
    { name: 'Argentina', code: 'AR', region: 'South America' },
    { name: 'Japan', code: 'JP', region: 'Asia' },
    { name: 'South Korea', code: 'KR', region: 'Asia' },
    { name: 'Australia', code: 'AU', region: 'Oceania' },
    { name: 'Canada', code: 'CA', region: 'North America' },
    { name: 'Mexico', code: 'MX', region: 'North America' },
    { name: 'China', code: 'CN', region: 'Asia' },
    { name: 'India', code: 'IN', region: 'Asia' },
  ];

  // Mock visa requirements - in production, connect to a visa requirements API
  const getVisaRequirements = (countryCode: string): VisaRequirement[] => {
    // Simplified logic - actual requirements vary
    const isVWP = ['GB', 'DE', 'FR', 'ES', 'IT', 'JP', 'KR', 'AU'].includes(countryCode);
    
    return [
      {
        country: 'USA',
        requirement: isVWP ? 'eta' : countryCode === 'CA' ? 'visa-free' : 'visa-required',
        duration: isVWP ? '90 days' : '180 days',
        processingTime: isVWP ? 'Instant' : '2-4 weeks',
        cost: isVWP ? '$21 (ESTA)' : '$160+',
        notes: isVWP 
          ? ['Apply for ESTA online at least 72 hours before travel', 'Valid for 2 years', 'Must have valid passport']
          : ['Schedule interview at US Embassy', 'Processing can take several weeks', 'Bring all required documents'],
      },
      {
        country: 'Canada',
        requirement: countryCode === 'US' ? 'visa-free' : isVWP ? 'eta' : 'visa-required',
        duration: '180 days',
        processingTime: isVWP ? 'Minutes' : '2-3 weeks',
        cost: isVWP ? 'C$7 (eTA)' : 'C$100+',
        notes: isVWP
          ? ['Apply for eTA online', 'Linked to passport', 'Valid for 5 years']
          : ['Apply online or at Canadian embassy', 'Biometrics may be required'],
      },
      {
        country: 'Mexico',
        requirement: ['US', 'CA', 'GB', 'DE', 'FR', 'ES', 'IT', 'JP', 'AU'].includes(countryCode) ? 'visa-free' : 'visa-required',
        duration: '180 days',
        processingTime: 'On arrival',
        cost: 'Free',
        notes: ['FMM tourist card required', 'Valid passport for 6 months', 'Return ticket may be required'],
      },
    ];
  };

  const visaRequirements = nationality ? getVisaRequirements(nationality) : [];

  const essentialDocuments = [
    { name: 'Valid Passport', icon: FileText, description: 'Must be valid for at least 6 months beyond your trip', priority: 'critical' },
    { name: 'Match Tickets', icon: CheckCircle, description: 'Physical or digital copies', priority: 'critical' },
    { name: 'Travel Insurance', icon: Shield, description: 'Medical and trip cancellation coverage', priority: 'important' },
    { name: 'Accommodation Confirmation', icon: MapPin, description: 'Hotel bookings or host address', priority: 'important' },
    { name: 'Flight Itinerary', icon: Plane, description: 'Round-trip or onward travel proof', priority: 'important' },
    { name: 'Vaccination Records', icon: Heart, description: 'COVID-19 and other required vaccines', priority: 'recommended' },
    { name: 'Emergency Contacts', icon: Phone, description: 'Local and home country contacts', priority: 'recommended' },
    { name: 'Credit Cards & Cash', icon: DollarSign, description: 'Multiple payment methods', priority: 'recommended' },
  ];

  const embassies = {
    USA: [
      { city: 'Mexico City', address: 'Paseo de la Reforma 305', phone: '+52 55 5080 2000', email: 'acsmexicocity@state.gov' },
      { city: 'Toronto', address: '360 University Avenue', phone: '+1 416 595 1700', email: 'acscanada@state.gov' },
    ],
    Mexico: [
      { city: 'Washington DC', address: '1911 Pennsylvania Avenue NW', phone: '+1 202 728 1600', email: 'mexembusa@sre.gob.mx' },
      { city: 'Ottawa', address: '45 O\'Connor Street', phone: '+1 613 233 8988', email: 'embamexcan@sre.gob.mx' },
    ],
    Canada: [
      { city: 'Washington DC', address: '501 Pennsylvania Avenue NW', phone: '+1 202 682 1740', email: 'wshdc@international.gc.ca' },
      { city: 'Mexico City', address: 'Schiller 529', phone: '+52 55 5724 7900', email: 'mexco@international.gc.ca' },
    ],
  };

  const insuranceProviders = [
    { name: 'World Nomads', coverage: 'Comprehensive', price: '$50-150', link: 'https://www.worldnomads.com' },
    { name: 'Allianz Global Assistance', coverage: 'Medical + Trip', price: '$40-120', link: 'https://www.allianztravelinsurance.com' },
    { name: 'Travel Guard', coverage: 'Full Coverage', price: '$60-180', link: 'https://www.travelguard.com' },
    { name: 'SafetyWing', coverage: 'Medical Only', price: '$45-90', link: 'https://www.safetywing.com' },
  ];

  const getRequirementBadge = (requirement: VisaRequirement['requirement']) => {
    const badges = {
      'visa-free': { color: 'bg-green-600', text: 'Visa Free' },
      'eta': { color: 'bg-blue-600', text: 'eTA/ESTA Required' },
      'visa-required': { color: 'bg-red-600', text: 'Visa Required' },
      'visa-on-arrival': { color: 'bg-yellow-600', text: 'Visa on Arrival' },
    };
    return badges[requirement];
  };

  return (
    <div className="min-h-screen bg-gray-950 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <FileText className="w-8 h-8 text-indigo-400" />
            Visa & Documents
          </h1>
          <p className="text-gray-400">
            Entry requirements and essential documents for World Cup 2026
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-300 mb-1">Important</h4>
              <p className="text-sm text-gray-300">
                Visa requirements can change. Always verify current requirements with official government sources and apply well in advance of your travel dates.
              </p>
            </div>
          </div>
        </div>

        {/* Nationality Selector */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Select Your Nationality
          </label>
          <select
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:border-fifa-blue"
          >
            <option value="">Choose your country...</option>
            {popularCountries.map(country => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('visa')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'visa'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <Globe className="w-4 h-4 inline mr-2" />
            Visa Requirements
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'documents'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            Document Checklist
          </button>
          <button
            onClick={() => setActiveTab('embassy')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'embassy'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <MapPin className="w-4 h-4 inline mr-2" />
            Embassy Info
          </button>
          <button
            onClick={() => setActiveTab('insurance')}
            className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
              activeTab === 'insurance'
                ? 'bg-fifa-blue text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <Shield className="w-4 h-4 inline mr-2" />
            Travel Insurance
          </button>
        </div>

        {/* Visa Requirements Tab */}
        {activeTab === 'visa' && (
          <div className="space-y-6">
            {nationality ? (
              <>
                {visaRequirements.map((req, idx) => {
                  const badge = getRequirementBadge(req.requirement);
                  return (
                    <div key={idx} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Globe className="w-6 h-6 text-indigo-400" />
                          <h3 className="text-xl font-bold">{req.country}</h3>
                        </div>
                        <span className={`${badge.color} text-white px-3 py-1 rounded text-sm font-semibold`}>
                          {badge.text}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Max Stay</div>
                          <div className="font-semibold">{req.duration}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Processing Time</div>
                          <div className="font-semibold">{req.processingTime}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Cost</div>
                          <div className="font-semibold">{req.cost}</div>
                        </div>
                        <div>
                          <a
                            href={`https://www.google.com/search?q=${req.country}+visa+requirements`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-fifa-blue hover:text-blue-400 flex items-center gap-1 text-sm"
                          >
                            Official Info
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      <div className="bg-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Info className="w-4 h-4 text-blue-400" />
                          Important Notes
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-300">
                          {req.notes.map((note, noteIdx) => (
                            <li key={noteIdx} className="flex items-start gap-2">
                              <span className="text-blue-400 mt-0.5">•</span>
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Quick Links */}
                      <div className="mt-4 flex gap-3 flex-wrap">
                        {req.requirement === 'eta' && req.country === 'USA' && (
                          <a
                            href="https://esta.cbp.dhs.gov"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-fifa-blue hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors flex items-center gap-2"
                          >
                            Apply for ESTA
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {req.requirement === 'eta' && req.country === 'Canada' && (
                          <a
                            href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-fifa-blue hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors flex items-center gap-2"
                          >
                            Apply for eTA
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <div className="bg-gray-800 rounded-lg p-12 border border-gray-700 text-center">
                <Globe className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Select your nationality to see visa requirements</p>
              </div>
            )}
          </div>
        )}

        {/* Documents Checklist Tab */}
        {activeTab === 'documents' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Essential Documents Checklist</h3>
                <button
                  onClick={() => alert('Download feature coming soon!')}
                  className="bg-fifa-blue hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>

              <div className="space-y-3">
                {essentialDocuments.map((doc, idx) => {
                  const Icon = doc.icon;
                  return (
                    <label key={idx} className="flex items-start gap-4 bg-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-600 transition-colors">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded" />
                      <Icon className={`w-6 h-6 ${
                        doc.priority === 'critical' ? 'text-red-400' :
                        doc.priority === 'important' ? 'text-yellow-400' :
                        'text-green-400'
                      } mt-0.5`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{doc.name}</h4>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            doc.priority === 'critical' ? 'bg-red-600/20 text-red-400' :
                            doc.priority === 'important' ? 'bg-yellow-600/20 text-yellow-400' :
                            'bg-green-600/20 text-green-400'
                          }`}>
                            {doc.priority}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{doc.description}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-300 mb-1">Pro Tips</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Make photocopies of all important documents</li>
                    <li>• Store digital copies in cloud storage</li>
                    <li>• Share itinerary with family/friends</li>
                    <li>• Register with your embassy before travel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Embassy Info Tab */}
        {activeTab === 'embassy' && (
          <div className="space-y-6">
            {Object.entries(embassies).map(([country, locations]) => (
              <div key={country} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">{country} Embassies & Consulates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {locations.map((embassy, idx) => (
                    <div key={idx} className="bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-indigo-400" />
                        {embassy.city}
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                          <span className="text-gray-300">{embassy.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <a href={`tel:${embassy.phone}`} className="text-fifa-blue hover:underline">
                            {embassy.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <a href={`mailto:${embassy.email}`} className="text-fifa-blue hover:underline break-all">
                            {embassy.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Travel Insurance Tab */}
        {activeTab === 'insurance' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Why You Need Travel Insurance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-red-400" />
                    <h4 className="font-semibold">Medical Coverage</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    Emergency medical care, hospital stays, and medical evacuation
                  </p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Plane className="w-5 h-5 text-blue-400" />
                    <h4 className="font-semibold">Trip Cancellation</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    Reimbursement if you need to cancel or cut your trip short
                  </p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-green-400" />
                    <h4 className="font-semibold">Lost Documents</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    Assistance with lost passports, tickets, or luggage
                  </p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-semibold">24/7 Assistance</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    Round-the-clock support in multiple languages
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Recommended Providers</h3>
              <div className="space-y-3">
                {insuranceProviders.map((provider, idx) => (
                  <div key={idx} className="bg-gray-700 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-1">{provider.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Shield className="w-4 h-4" />
                          {provider.coverage}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {provider.price}
                        </span>
                      </div>
                    </div>
                    <a
                      href={provider.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-fifa-blue hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors flex items-center gap-2"
                    >
                      Get Quote
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-700 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-300 mb-1">Coverage Tips</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Purchase insurance soon after booking your trip</li>
                    <li>• Ensure coverage for all three countries (USA, Mexico, Canada)</li>
                    <li>• Check if your credit card provides travel insurance</li>
                    <li>• Read the policy carefully for exclusions</li>
                    <li>• Keep emergency contact numbers handy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

