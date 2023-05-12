import { LockClosedIcon } from '@heroicons/react/20/solid'
import Header from '../Header'
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom'
import { useState } from 'react';

export default function Login() {
  localStorage.removeItem("currentPage");
  const navigate = useNavigate();
  if (localStorage.getItem("sessionKey")) {
    axios.post(process.env.REACT_APP_API + "/patient/session", { "email": localStorage.getItem("email"), "sessionKey": localStorage.getItem("sessionKey") }).then(res => {
      if (res.data.status === "authenticated") {
        navigate("/patient/dashboard", { state: res.data.data });
        localStorage.setItem("currentPage", "Basic");
      }
    })
  }

  const [wrong, setWrong] = useState("");
  function handleLogin(event) {
    axios.post(process.env.REACT_APP_API + "/patient/login", { "email": event.target.email.value, "password": event.target.password.value }).then(res => {
      if (res.data.status === "authenticated") {
        navigate("/patient/dashboard", { state: res.data.data });
        localStorage.setItem("currentPage", "Basic");
      } else if (res.data.status === "wrongPassword") {
        setWrong("wrongPassword");
      } else {
        setWrong("emailNotRegistered");
      }
    })
    event.preventDefault();
  }

  return (
    <>
      <Header />
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/logo.png"
              alt=""
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in as Patient
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <NavLink to="/patient/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign up
              </NavLink>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin} method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              {wrong === "emailNotRegistered" ? <p className='text-red-500'>Email is not registered</p> : ""}
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  placeholder="Password"
                />
              </div>
              {wrong === "wrongPassword" ? <p className='text-red-500'>Wrong Password</p> : ""}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                </label>
              </div>

              <div className="text-sm">
                <a href="/forget" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>

      <a href="/" className="flex justify-center jCISvWkW5oStPH6Wrb_H ay0ziTPUL4Ag5d1DkSY7 neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei _gKcj49wZgnwx1LpcJi6 bFARDnno0HUtfhktTXfR MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH qHIOIw8TObHgD3VvKa5x yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 pxHuWvF853ck68OLN6ef DpMPWwlSESiYA8EE1xKM _xQT_qSXfwWf6ZhwRle4 m_8FxTcpOfmK___hAaJ6 _FONMPVaCsLFJJGDaaIL _bKyZ1er5YE_NnrwOCm9 __8kBLtrR_iuU2wW25Lp _cpMMPjFQqjJu4i0Puod eCx_6PNzncAD5yo7Qcic _BIVSYBXQUqEf_ltPrSk DTyjKhtXBNaebZa5L0l9 _OovBxfPdK7Rjv2nh2Ot">
        <svg className="h-8 w-8 mx-1 float-left eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 _gmxfZ2BpOHxa6nWwqBB" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_13183_10121)"><path d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z" fill="#3F83F8"></path><path d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z" fill="#34A853"></path><path d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z" fill="#FBBC04"></path><path d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z" fill="#EA4335"></path></g><defs><clipPath id="clip0_13183_10121"><rect width="20" height="20" fill="white" transform="translate(0.5)"></rect></clipPath></defs>
        </svg>
        Sign in with Google
      </a>

    </>
  )
}