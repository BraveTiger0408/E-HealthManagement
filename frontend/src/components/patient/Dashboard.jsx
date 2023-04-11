import { useLocation } from "react-router-dom"

const Dashboard = () => {
    const {state} = useLocation();
    sessionStorage.setItem("email", state.email);
    sessionStorage.setItem("sessionKey", state.sessionKey);
    return (
        <>
            <h1>Welcome Mr. {state.profile.name.FName}</h1>
        </>
    )
}

export default Dashboard