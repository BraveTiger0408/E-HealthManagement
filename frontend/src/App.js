import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import PatientLogin from './components/patient/Login'
import PatientRegister from './components/patient/Register'
import PatientDashboard from './components/patient/dashboard/Dashboard'

function App() {
  return (
    <div className="App min-h-screen">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/patientlogin" element={<PatientLogin />} />
          <Route path="/patientregister" element={<PatientRegister />} />
          <Route path="/patientdashboard" element={<PatientDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
