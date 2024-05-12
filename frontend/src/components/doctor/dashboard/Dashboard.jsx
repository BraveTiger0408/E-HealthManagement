import React, { useEffect, useState } from 'react';

import Sidebar from './partials/Sidebar';
import Header from './partials/Header';
import WelcomeBanner from './partials/dashboard/WelcomeBanner';
// import BasicHealthReport from './partials/dashboard/BasicHealthReport';
import Doctors from './partials/dashboard/Doctors';
import Settings from './partials/dashboard/Settings';
import Messages from './partials/dashboard/Messages';
import { useLocation } from "react-router-dom"

function Dashboard() {
  const { state } = useLocation();
  localStorage.setItem("email", state.email);
  localStorage.setItem("sessionKey", state.sessionKey);

  const [currentPage, setCurrentPage] = useState("Basic");

  useEffect(() => {
    if (localStorage.getItem("currentPage")) {
      setCurrentPage(localStorage.getItem("currentPage"));
    }
  }, [])

  function setPage() {
    setCurrentPage(localStorage.getItem("currentPage"));
  }

  const [sidebarOpen, setSidebarOpen] = useState(false);

  function CurrentDashboard() {
    console.log("Current Dashboard");
    if (currentPage === "Basic") {
      return <Doctors />;
    } else if (currentPage === "Settings") {
      return <Settings data={state} setPage={setPage} />
    } else if (currentPage === "Doctors") {
      return <Doctors />
    } else if (currentPage === "Messages") {
      return <Messages />
    }
  }

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar data={state} currentPage={currentPage} setPage={setPage} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header data={state} setPage={setPage} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner data={state} />
            {/* Cards */}
            <div className="h-56 grid grid-cols-3 gap-4">
              <CurrentDashboard />
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default Dashboard;