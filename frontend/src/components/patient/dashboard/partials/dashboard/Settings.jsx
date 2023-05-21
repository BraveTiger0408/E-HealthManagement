import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Settings({ data, setPage }) {
    const navigate = useNavigate();
    function handleSave(event) {
        const {FName, LName, mobile, gender, DOB, street, city, state, pinCode} = event.target;
        const Doc = {
            "email": data.email,
            "sessionKey": data.sessionKey,
            "name": { "FName": FName.value?FName.value:data.profile.name.FName, "LName": LName.value?LName.value:data.profile.name.LName },
            "mobile": mobile.value?mobile.value:data.profile.mobile,
            "gender": gender.value,
            "DOB": DOB.value?DOB.value:data.profile.DOB,
            "address": {
                "street": street.value?street.value:data.profile.address.street,
                "city": city.value?city.value:data.profile.address.city,
                "state": state.value?state.value:data.profile.address.state,
                "pin": pinCode.value?pinCode.value:data.profile.address.pinCode
            }
        }
        event.preventDefault();
        axios.post(process.env.REACT_APP_API + "/patient/profile", Doc).then(res => {
            localStorage.setItem("currentPage", "Basic")
            setPage();
            navigate("/patient/dashboard", { state: res.data });
        })
    }
    return <>
        <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
            <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="/logo.png"
                            alt=""
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Settings
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSave} method="POST">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Only Fill the details you want to Update</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="FName"
                                            id="first-name"
                                            autoComplete="given-name"
                                            placeholder='First Name'
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="LName"
                                            id="last-name"
                                            placeholder='Last Name'
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900">
                                        Mobile Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="mobile"
                                            name="mobile"
                                            type="mobile"
                                            autoComplete="tel"
                                            placeholder='Mobile Number'
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                                        Gender
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="gender"
                                            name="gender"
                                            autoComplete="gender"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Transgender</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="birthday" className="block text-sm font-medium leading-6 text-gray-900">
                                        Date of Birth
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="birthday"
                                            name="DOB"
                                            type="date"
                                            autoComplete="birthday"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Street Address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="street"
                                            id="street-address"
                                            placeholder='Street Address'
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            placeholder='City'
                                            autoComplete="address-level2"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                        State
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            autoComplete="address-level1"
                                            placeholder='State'
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        PIN Code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="pinCode"
                                            id="postal-code"
                                            autoComplete="postal-code"
                                            placeholder='PIN Code'
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}