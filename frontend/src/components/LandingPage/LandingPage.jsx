import './styles.css'
import { NavLink } from 'react-router-dom';

function LandingPage() {
    return (
        <div className='LandingPage overflow-hidden antialiased bg-white font-sans text-gray-900'>
            <main className="w-full">
                {/* start hero */}
                <div className="bg-gray-100">
                    <section className="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
        items-center min-h-screen">
                        <div className="h-full absolute top-0 left-0 z-0">
                            <img src="images/cover-bg.jpg" alt="" className="w-full h-full object-cover opacity-20" />
                        </div>
                        <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
                            <div>
                                <h1 className="text-white text-left text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">Online Medical Care, Right at Your Fingertips</h1>
                                <p className="text-blue-100 text-left text-xl md:text-2xl leading-snug mt-4">Experience a new level of convenience and control over your healthcare with our E-Health Management System.</p>
                                <NavLink to="/patient/login" className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded inline-block mt-8 font-bold">Book
                                    Appointment</NavLink>
                            </div>
                        </div>
                    </section>
                </div>
                {/* end hero */}
                {/* start about */}
                <section id='features' className="relative text-justify px-4 py-16 sm:px-8 lg:px-16 xl:px-40 pt-4 2xl:px-64 lg:py-24">
                <h1 className="text-3xl text-center pt-0 lg:py-12 leading-tight font-bold mt-4">Features</h1>
                    <div className="flex flex-col lg:flex-row lg:-mx-8">
                        <div className="w-full lg:w-1/2 lg:px-8">
                            <h2 className="text-2xl leading-tight font-bold mt-4">Welcome to our E-Health Management System</h2>
                            <p className="text-lg mt-4 font-semibold">Excellence in healthcare</p>
                            <p className="mt-2 leading-relaxed">where you can manage your health easily and conveniently. Our platform allows you to access your medical history, book appointments with healthcare providers, receive test results online, set reminders for medication, and much more.</p><br />
                            <p>The system allows patients to manage their prescriptions, including ordering refills and receiving alerts when it's time to take their medication.</p><br />
                            <p>The system stores patients' medical records electronically, making it easy for healthcare providers to access the information they need quickly and securely.</p>
                        </div>
                        <div className="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0">
                            <div className="md:flex">
                                <div>
                                    <div className="w-16 h-16 bg-blue-600 rounded-full" />
                                </div>
                                <div className="md:ml-8 mt-4 md:mt-0">
                                    <h4 className="text-xl font-bold leading-tight">Everything You Need Under One Roof</h4>
                                    <p className="mt-2 leading-relaxed">With our system, you can keep track of all your healthcare information in one place. No more worrying about lost paperwork or forgotten appointments. Everything you need is just a few clicks away.</p>
                                </div>
                            </div>
                            <div className="md:flex mt-8">
                                <div>
                                    <div className="w-16 h-16 bg-blue-600 rounded-full" />
                                </div>
                                <div className="md:ml-8 mt-4 md:mt-0">
                                    <h4 className="text-xl font-bold leading-tight">Our Patient-Focused Approach</h4>
                                    <p className="mt-2 leading-relaxed">Whether you're managing a chronic condition, preparing for a routine check-up, or just looking to stay on top of your health, our E-Health Management System is here to help. Sign up today to start taking control of your health!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
                    <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
                            <div className="bg-white rounded-lg border border-gray-300 p-8">
                                <img src="images/payments.svg" alt="" className="h-20 mx-auto" />
                                <h4 className="text-xl font-bold mt-4">Online Payment System</h4>
                                <p className="mt-1 text-justify">The E-Health Management System includes an online payment system through RozarPay API that allows insurance companies to pay hospital bills directly.</p>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
                            <div className="bg-white rounded-lg border border-gray-300 p-8">
                                <img src="images/appointments.svg" alt="" className="h-20 mx-auto" />
                                <h4 className="text-xl font-bold mt-4">Appointment Scheduling</h4>
                                <p className="mt-1 text-justify">Patients can schedule appointments with healthcare providers through the system, making it easy to find a provider and book a time that works for them.</p>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
                            <div className="bg-white rounded-lg border border-gray-300 p-8">
                                <img src="images/messaging.svg" alt="" className="h-20 mx-auto" />
                                <h4 className="text-xl font-bold mt-4">Secure Messaging</h4>
                                <p className="mt-1 text-justify">Patients can communicate securely with healthcare providers through the system, ensuring that their personal health information remains confidential.</p>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
                            <div className="bg-white rounded-lg border border-gray-300 p-8">
                                <img src="images/records.svg" alt="" className="h-20 mx-auto" />
                                <h4 className="text-xl font-bold mt-4">Electronic Medical Records</h4>
                                <p className="mt-1 text-justify">The system stores patients' medical records electronically, making it easy for healthcare providers and insurance companies to access the information they need quickly and securely.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end about */}

                {/* start cta */}
                <section className="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left">
                    <div className="md:flex md:items-center md:justify-center">
                        <h2 className="text-xl font-bold text-white">Get in touch with us today! <br className="block md:hidden" />Call us on: +91-8967997966</h2>
                        <NavLink to='/patient/login' className="px-8 py-4 bg-stone-50 hover:bg-stone-200 text-blue-600 rounded inline-block font-semibold md:ml-8 mt-4 md:mt-0">Book
                            Appointment</NavLink>
                    </div>
                </section>
                {/* end cta */}
                {/* start footer */}
                <footer className="relative text-left bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
                            <h3 className="font-bold text-2xl">E-Health Management System</h3>
                            <p className="text-gray-400">Revolutionize your healthcare experience with our cutting-edge e-health management system.</p>
                            <form className="flex items-center mt-6">
                                <div className="w-full">
                                    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Subscribe for our Newsletter
                                    </label>
                                    <div className="relative">
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="Enter Your Email Address" />
                                        <button type="submit" className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 text-sm font-bold rounded absolute top-0 right-0 my-2 mr-2">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
                            <h5 className="uppercase tracking-wider font-semibold text-gray-500">Treatments</h5>
                            <ul className="mt-4">
                                <li className="mt-2"><a href="#" title className="opacity-75 hover:opacity-100">General Medicine</a></li>
                                <li className="mt-2"><a href="#" title className="opacity-75 hover:opacity-100">Dermatologists</a></li>
                                <li className="mt-2"><a href="#" title className="opacity-75 hover:opacity-100">Cardiologistsh</a></li>
                                <li className="mt-2"><a href="#" title className="opacity-75 hover:opacity-100">Gynaecologist</a></li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
                            <h5 className="uppercase tracking-wider font-semibold text-gray-500">Contact Details</h5>
                            <ul className="mt-4">
                                <li>
                                    <a href="#" title className="block flex items-center opacity-75 hover:opacity-100">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="fill-current">
                                                <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                                            </svg>
                                        </span>
                                        <span className="ml-3">
                                            Prayagraj, Uttar Pradesh, India
                                        </span>
                                    </a>
                                </li>
                                <li className="mt-4">
                                    <a href="#" title className="block flex items-center opacity-75 hover:opacity-100">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="fill-current">
                                                <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                                                <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" /></svg>
                                        </span>
                                        <span className="ml-3">
                                            Mon - Fri: 9:00AM - 9:00PM<br />
                                            Closed on Weekends
                                        </span>
                                    </a>
                                </li>
                                <li className="mt-4">
                                    <a href="#" title className="block flex items-center opacity-75 hover:opacity-100">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="fill-current">
                                                <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                                            </svg>
                                        </span>
                                        <span className="ml-3">
                                            +91 8967997966
                                        </span>
                                    </a>
                                </li>
                                <li className="mt-4">
                                    <a href="#" title className="block flex items-center opacity-75 hover:opacity-100">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="fill-current">
                                                <path d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z" />
                                            </svg>
                                        </span>
                                        <span className="ml-3">
                                            biswassagar927@gmail.com
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
                            <h5 className="uppercase tracking-wider font-semibold text-gray-500">We're Social</h5>
                            <ul className="mt-4 flex">
                                <li>
                                    <a href="https://www.facebook.com/MrSagarBiswas/" target="_blank" title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="fill-current">
                                            <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="ml-6">
                                    <a href="https://www.instagram.com/mrsagarbiswas/" target="_blank" title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="fill-current">
                                            <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z" />
                                            <circle cx="11.994" cy="11.979" r="3.003" /></svg>
                                    </a>
                                </li>
                                <li className="ml-6">
                                    <a href="https://www.youtube.com/mrsagarbiswas/" target="_blank" title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="fill-current">
                                            <path d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404	c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814	c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763	C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <p className="text-sm text-gray-400 mt-12">© 2023 E-Health Management System. <br className="hidden lg:block" />All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </footer>
                {/* end footer */}
            </main>
        </div>
    );
}

export default LandingPage;