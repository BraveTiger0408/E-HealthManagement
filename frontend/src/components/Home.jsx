import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    return <>
        <header className="App-header">
            Hospital Management System
        </header>
        
        <button onClick={() => navigate("/patientlogin")}>Patient Login</button>
    </>
}

export default Home;