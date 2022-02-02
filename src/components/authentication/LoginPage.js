import AuthenticationButton from "./AuthenticationButton";
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

const LoginPage = (props) => {
    const { user, isAuthenticated } = useAuth0()
    console.log(isAuthenticated)

    const navigate = useNavigate()

    return(
        <div style= {{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <AuthenticationButton />
            <button onClick={() => {navigate("/")}}>Home</button>
            {isAuthenticated && (
                <div>
                    <img src={user.picture} alt={user.name}/>
                    <p>{user.name}</p>
                    <Link to="/homeworks"> DashBoard </Link>
                </div>
            )}
        </div>
    )
}

export default LoginPage;