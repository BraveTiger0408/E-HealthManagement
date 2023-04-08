import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import PatientLogin from './components/patient/Login'
import PatientRegister from './components/patient/Register'

function App() {
  const input = { "username": "sample", }
  axios.post("http://localhost:5000/authenticate", input).then(res => console.log(res.data.username)).catch(err => console.log(err))
  axios.get("http://localhost:3000/get").then(res => console.log(res.data))

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/patientlogin" element={<PatientLogin />} />
          <Route path="/patientregister" element={<PatientRegister />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
