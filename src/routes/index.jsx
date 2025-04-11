import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
import Portfolio from '../pages/Portfolio';
import NotFound from '../pages/NotFound';
import AboutUs from '../pages/About';
import Experts from '../pages/About/Experts';
import Governance from '../pages/About/Governance';
import UnderConstruction from '../pages/UnderConstruction';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/about-us/experts" element={<Experts />} />
            <Route path="/about-us/governance" element={<Governance />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/portfolio" element={<UnderConstruction />} />
            <Route path="/product/business-fields" element={<UnderConstruction />} />
            <Route path="/product/strategic-program/ecosystem" element={<UnderConstruction />} />
            <Route path="/product/strategic-program/workers-dev" element={<UnderConstruction />} />
            <Route path="/product/strategic-program/industrial-training" element={<UnderConstruction />} />
            <Route path="/product/strategic-program/fund-mgmtg" element={<UnderConstruction />} />
            <Route path="/product/strategic-program/ecolabel-env" element={<UnderConstruction />} />
            <Route path="/product/strategic-program/legal-adr" element={<UnderConstruction />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;