import { useLocation } from "react-router-dom"

const Dashboard = () => {
    const {state} = useLocation();
    return (
        <>
            <h1>Welcome Mr. {state.profile.name.FName}</h1>
        </>
    )
}

export default Dashboard