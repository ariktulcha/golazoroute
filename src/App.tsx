import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppStore } from './store/appStore';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}
import Home from './pages/Home';
import Optimizer from './pages/Optimizer';
import Explorer from './pages/Explorer';
import Schedule from './pages/Schedule';
import FollowTeam from './pages/FollowTeam';
import DestinationInfo from './pages/DestinationInfo';
import MyJourney from './pages/MyJourney';
import BudgetPlanner from './pages/BudgetPlanner';
import TransportationHub from './pages/TransportationHub';
import WeatherPlanner from './pages/WeatherPlanner';
import VisaDocuments from './pages/VisaDocuments';
import RecommendedRoutes from './pages/RecommendedRoutes';
import RoutePlan from './pages/RoutePlan';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import GDPR from './pages/GDPR';
import Cookies from './pages/Cookies';
import Contact from './pages/Contact';
import Sponsor from './pages/Sponsor';
import DonateACoffee from './pages/DonateACoffee';
import About from './pages/About';
import OurStory from './pages/OurStory';
import Roadmap from './pages/Roadmap';
import BlogIndex from './pages/BlogIndex';
import BlogArticle from './pages/BlogArticle';
import CityDetails from './pages/CityDetails';
import CitiesArchive from './pages/CitiesArchive';
import StadiumArchive from './pages/StadiumArchive';
import StadiumDetail from './pages/StadiumDetail';
import FanZones from './pages/FanZones';
import FanZoneSingle from './pages/FanZoneSingle';
import JoinFacebookGroup from './pages/JoinFacebookGroup';
import RoadToFinal from './pages/RoadToFinal';
import NotFound from './pages/NotFound';

function MainApp() {
  const { viewMode } = useAppStore();

  return (
    <>
      <Navigation />
      {/* Add top padding on desktop for horizontal navigation bar */}
      <main className="lg:pt-16">
        {viewMode === 'explorer' && <Explorer />}
        {viewMode === 'schedule' && <Schedule />}
        {viewMode === 'optimizer' && <Optimizer />}
        {viewMode === 'recommended-routes' && <RecommendedRoutes />}
        {viewMode === 'route-plan' && <RoutePlan />}
        {viewMode === 'budget' && <BudgetPlanner />}
        {viewMode === 'transportation' && <TransportationHub />}
        {viewMode === 'funzone' && <TransportationHub />}
        {viewMode === 'cities-info' && <DestinationInfo />}
        {viewMode === 'weather' && <WeatherPlanner />}
        {viewMode === 'visa' && <VisaDocuments />}
        {viewMode === 'destination-info' && <DestinationInfo />}
        {viewMode === 'follow-team' && <FollowTeam />}
        {viewMode === 'journey' && <MyJourney />}
        {viewMode === 'road-to-final' && <RoadToFinal />}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-950 text-white flex flex-col">
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<><Navigation /><Home /><Footer /></>} />
          
          {/* Main app route */}
          <Route path="/app" element={<MainApp />} />
          
          {/* Legal pages */}
          <Route path="/privacy" element={<><Privacy /><Footer /></>} />
          <Route path="/terms" element={<><Terms /><Footer /></>} />
          <Route path="/gdpr" element={<><GDPR /><Footer /></>} />
          <Route path="/cookies" element={<><Cookies /><Footer /></>} />
          
          {/* Blog pages */}
          <Route path="/blog" element={<><Navigation /><BlogIndex /><Footer /></>} />
          <Route path="/blog/:slug" element={<><Navigation /><BlogArticle /><Footer /></>} />
          
          {/* City pages - no sidebar, full width */}
          <Route path="/cities" element={<><Navigation /><CitiesArchive /><Footer /></>} />
          <Route path="/cities/:cityId" element={<><Navigation /><CityDetails /><Footer /></>} />
          
          {/* Stadium pages */}
          <Route path="/stadiums" element={<><Navigation /><StadiumArchive /><Footer /></>} />
          <Route path="/stadiums/:stadiumId" element={<><Navigation /><StadiumDetail /><Footer /></>} />
          
          {/* Fan Zone pages */}
          <Route path="/fan-zones" element={<><FanZones /><Footer /></>} />
          <Route path="/fan-zones/:id" element={<><FanZoneSingle /><Footer /></>} />
          
          {/* Weather Page - Standalone for SEO */}
          <Route path="/weather" element={<><Navigation /><WeatherPlanner /><Footer /></>} />
          
          {/* Other pages */}
          <Route path="/contact" element={<><Contact /><Footer /></>} />
          <Route path="/sponsor" element={<><Sponsor /><Footer /></>} />
          <Route path="/about" element={<><About /><Footer /></>} />
          <Route path="/our-story" element={<><OurStory /><Footer /></>} />
          <Route path="/roadmap" element={<><Roadmap /><Footer /></>} />
          <Route path="/donate" element={<><DonateACoffee /><Footer /></>} />
          <Route path="/join-facebook-group" element={<><JoinFacebookGroup /><Footer /></>} />
          
          {/* 404 - Catch all unmatched routes */}
          <Route path="*" element={<><NotFound /><Footer /></>} />
        </Routes>
        
        {/* Cookie consent banner - shown on all pages */}
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
