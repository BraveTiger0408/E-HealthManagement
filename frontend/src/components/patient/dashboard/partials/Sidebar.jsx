import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';

function Sidebar({ sidebarOpen, setSidebarOpen, data, currentPage, setPage }) {
  const email = data.email;
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex overflow-hidden flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 ${sidebarExpanded ? "" : "lg:w-20"}  lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
          }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink to="/" className='block p-1 text-m text-slate-200 hover:text-indigo-400'>
            <img src='/logo.png' className='float-left' width="32" height="32" alt=''>
            </img><span className={`text-sm font-medium ml-3 ${sidebarExpanded ? "" : "lg:opacity-0"} lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}>E-Health Management System</span>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs text-slate-500 font-semibold pl-3">
              <span className={`${sidebarExpanded ? "" : "lg:block"} hidden lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true`}>
                •••
              </span>
              <span className={`lg:sidebar-expanded:block 2xl:block ${sidebarExpanded ? "" : "lg:hidden"
                }`}>{email}</span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <SidebarLinkGroup activecondition={currentPage === "Basic"}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname === '/patient/dashboard' || pathname.includes('dashboard') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path
                                className={`fill-current ${pathname === '/patient/dashboard' || pathname.includes('dashboard') ? 'text-indigo-500' : 'text-slate-400'
                                  }`}
                                d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                              />
                              <path
                                className={`fill-current ${pathname === '/patient/dashboard' || pathname.includes('dashboard') ? 'text-indigo-600' : 'text-slate-600'
                                  }`}
                                d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                              />
                              <path
                                className={`fill-current ${pathname === '/patient/dashboard' || pathname.includes('dashboard') ? 'text-indigo-200' : 'text-slate-400'
                                  }`}
                                d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                              />
                            </svg>
                            <span className={`text-sm font-medium ml-3 ${sidebarExpanded ? "" : "lg:opacity-0"} lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}>
                              Health Reports
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className={`${sidebarExpanded ? "" : "lg:hidden"} lg:sidebar-expanded:block 2xl:block`}>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              onClick={(e) => {
                                localStorage.setItem("currentPage", "Basic");
                                setPage();
                                e.preventDefault();
                              }}
                              className={
                                'block transition duration-150 truncate ' + (currentPage === "Basic" ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className={`${sidebarExpanded ? "" : "lg:opacity-0"}text-sm font-medium lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}>
                                Basic
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                          <NavLink
                              onClick={(e) => {
                                localStorage.setItem("currentPage", "All");
                                setPage();
                                e.preventDefault();
                              }}
                              className={
                                'block transition duration-150 truncate ' + (currentPage === "All" ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className={`${sidebarExpanded ? "" : "lg:opacity-0"}text-sm font-medium lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}>
                                All
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Doctors */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${currentPage === "Doctors" && 'bg-slate-900'}`}>
                <NavLink
                  onClick={(e) => {
                    localStorage.setItem("currentPage", "Doctors");
                    setPage()
                    e.preventDefault();
                  }}
                  className={`block text-slate-200 truncate transition duration-150 ${currentPage === "Doctors" ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${currentPage === "Doctors" ? 'text-indigo-500' : 'text-slate-600'}`}
                        d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                      />
                      <path
                        className={`fill-current ${currentPage === "Doctors" ? 'text-indigo-300' : 'text-slate-400'}`}
                        d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                      />
                    </svg>
                    <span className={`${sidebarExpanded ? "" : "lg:opacity-0"}text-sm font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${currentPage === "Doctors" ? 'text-indigo-500' : 'text-slate-200 hover:text-indigo-400'}`}>Doctors</span>
                  </div>
                </NavLink>
              </li>
              {/* Prescriptions */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${currentPage === "Prescriptions" && 'bg-slate-900'}`}>
                <NavLink
                  onClick={(e) => {
                    localStorage.setItem("currentPage", "Prescriptions");
                    setPage()
                    e.preventDefault();
                  }}
                  className={`block text-slate-200 truncate transition duration-150 ${currentPage === "Prescriptions" ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${currentPage === "Prescriptions" ? 'text-indigo-300' : 'text-slate-400'}`}
                        d="M13 6.068a6.035 6.035 0 0 1 4.932 4.933H24c-.486-5.846-5.154-10.515-11-11v6.067Z"
                      />
                      <path
                        className={`fill-current ${currentPage === "Prescriptions" ? 'text-indigo-500' : 'text-slate-700'}`}
                        d="M18.007 13c-.474 2.833-2.919 5-5.864 5a5.888 5.888 0 0 1-3.694-1.304L4 20.731C6.131 22.752 8.992 24 12.143 24c6.232 0 11.35-4.851 11.857-11h-5.993Z"
                      />
                      <path
                        className={`fill-current ${currentPage === "Prescriptions" ? 'text-indigo-600' : 'text-slate-600'}`}
                        d="M6.939 15.007A5.861 5.861 0 0 1 6 11.829c0-2.937 2.167-5.376 5-5.85V0C4.85.507 0 5.614 0 11.83c0 2.695.922 5.174 2.456 7.17l4.483-3.993Z"
                      />
                    </svg>
                    <span className={`${sidebarExpanded ? "" : "lg:opacity-0"}text-sm font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${currentPage === "Prescriptions" ? 'text-indigo-500' : 'text-slate-200 hover:text-indigo-400'}`}>Prescriptions</span>
                  </div>
                </NavLink>
              </li>
              {/* Appoinments */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${currentPage==="Appoinments" && 'bg-slate-900'}`}>
              <NavLink
                  onClick={(e) => {
                    localStorage.setItem("currentPage", "Appoinments");
                    setPage()
                    e.preventDefault();
                  }}
                  className={`block text-slate-200 truncate transition duration-150 ${currentPage === "Appoinments" ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${pathname.includes('appoinments') ? 'text-indigo-500' : 'text-slate-600'}`}
                        d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
                      />
                      <path
                        className={`fill-current ${pathname.includes('appoinments') ? 'text-indigo-500' : 'text-slate-600'}`}
                        d="M1 1h22v23H1z"
                      />
                      <path
                        className={`fill-current ${pathname.includes('appoinments') ? 'text-indigo-300' : 'text-slate-400'}`}
                        d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
                      />
                    </svg>
                    <span className={`${sidebarExpanded ? "" : "lg:opacity-0"}text-sm font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${currentPage === "Appoinments" ? 'text-indigo-500' : 'text-slate-200 hover:text-indigo-400'}`}>Appoinments</span>
                  </div>
                </NavLink>
              </li>
              {/* Messages */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${currentPage==="Messages" && 'bg-slate-900'}`}>
              <NavLink
                  onClick={(e) => {
                    localStorage.setItem("currentPage", "Messages");
                    setPage()
                    e.preventDefault();
                  }}
                  className={`block text-slate-200 truncate transition duration-150 ${currentPage === "Messages" ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path
                          className={`fill-current ${pathname.includes('messages') ? 'text-indigo-500' : 'text-slate-600'}`}
                          d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
                        />
                        <path
                          className={`fill-current ${pathname.includes('messages') ? 'text-indigo-300' : 'text-slate-400'}`}
                          d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
                        />
                      </svg>
                      <span className={`${sidebarExpanded ? "" : "lg:opacity-0"}text-sm font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${currentPage === "Messages" ? 'text-indigo-500' : 'text-slate-200 hover:text-indigo-400'}`}>
                        Messages
                      </span>
                    </div>
                    {/* Badge */}
                    <div className="flex flex-shrink-0 ml-2">
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">4</span>
                    </div>
                  </div>
                </NavLink>
              </li>
              {/* Hospital Bills */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${currentPage==="Bills" && 'bg-slate-900'}`}>
              <NavLink
                  onClick={(e) => {
                    localStorage.setItem("currentPage", "Bills");
                    setPage()
                    e.preventDefault();
                  }}
                  className={`block text-slate-200 truncate transition duration-150 ${currentPage === "Bills" ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${pathname.includes('bills') ? 'text-indigo-500' : 'text-slate-600'}`}
                        d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z"
                      />
                      <path
                        className={`fill-current ${pathname.includes('bills') ? 'text-indigo-300' : 'text-slate-400'}`}
                        d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z"
                      />
                    </svg>
                    <span className={`${sidebarExpanded ? "" : "lg:opacity-0"}text-sm font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${currentPage === "Bills" ? 'text-indigo-500' : 'text-slate-200 hover:text-indigo-400'}`}>Hospital Bills</span>
                  </div>
                </NavLink>
              </li>
              {/* Insurances */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${currentPage==="Insurances" && 'bg-slate-900'}`}>
              <NavLink
                  onClick={(e) => {
                    localStorage.setItem("currentPage", "Insurances");
                    setPage()
                    e.preventDefault();
                  }}
                  className={`block text-slate-200 truncate transition duration-150 ${currentPage === "Insurances" ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${pathname.includes('campaigns') ? 'text-indigo-500' : 'text-slate-600'}`}
                        d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
                      />
                      <path
                        className={`fill-current ${pathname.includes('campaigns') ? 'text-indigo-300' : 'text-slate-400'}`}
                        d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
                      />
                    </svg>
                    <span className={`${sidebarExpanded ? "" : "lg:opacity-0"}text-sm font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${currentPage === "Insurances" ? 'text-indigo-500' : 'text-slate-200 hover:text-indigo-400'}`}>
                      Insurances
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Settings */}
              <SidebarLinkGroup activecondition={pathname.includes('settings')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('settings') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path
                                className={`fill-current ${currentPage==="Settings" ? 'text-indigo-500' : 'text-slate-600'}`}
                                d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
                              />
                              <path
                                className={`fill-current ${currentPage==="Settings" ? 'text-indigo-300' : 'text-slate-400'}`}
                                d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
                              />
                              <path
                                className={`fill-current ${currentPage==="Settings" ? 'text-indigo-500' : 'text-slate-600'}`}
                                d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
                              />
                              <path
                                className={`fill-current ${currentPage==="Settings" ? 'text-indigo-300' : 'text-slate-400'}`}
                                d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
                              />
                            </svg>
                            <span className={`${sidebarExpanded ? "" : "lg:opacity-0"}text-sm font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}>
                              Settings
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className={`${sidebarExpanded ? "" : "lg:hidden"}lg:sidebar-expanded:block 2xl:block`}>
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                          <NavLink
                              onClick={(e) => {
                                localStorage.setItem("currentPage", "Settings");
                                setPage();
                                e.preventDefault();
                              }}
                              className={
                                'block transition duration-150 truncate ' + (currentPage === "Settings" ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className={`${sidebarExpanded ? "" : "lg:opacity-0"}text-sm font-medium lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}>
                                My Account
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                          <NavLink
                              onClick={(e) => {
                                localStorage.setItem("currentPage", "ResetPassword");
                                setPage();
                                e.preventDefault();
                              }}
                              className={
                                'block transition duration-150 truncate ' + (currentPage === "ResetPassword" ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className={`${sidebarExpanded ? "" : "lg:opacity-0"}text-sm font-medium lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200`}>
                                Reset Password
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => {
              setSidebarExpanded(!sidebarExpanded)
              localStorage.setItem("sidebar-expanded", !sidebarExpanded)
            }}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className={`${sidebarExpanded ? "rotate-180" : ""} w-6 h-6 fill-current`} viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;