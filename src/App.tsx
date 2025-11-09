import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DonateBlood from './pages/DonateBlood';
import RaiseFunds from './pages/RaiseFunds';
import MedicalEquipment from './pages/MedicalEquipment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate-blood" element={<DonateBlood />} />
        <Route path="/raise-funds" element={<RaiseFunds />} />
        <Route path="/medical-equipment" element={<MedicalEquipment />} />
      </Routes>
    </Router>
  );
}

export default App;
