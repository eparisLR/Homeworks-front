import AuthenticationButton from "./AuthenticationButton";
import { useAuth0 } from "@auth0/auth0-react"
const LoginPage = (props) => {
    const { user, isAuthenticated, isLoading } = useAuth0()
    return(
        isAuthenticated && (
            <div style= {{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={user.picture} alt={user.name}/>
                <p>{user.name}</p>
                <p>{user.email}</p>
            <AuthenticationButton />
            </div>
        )
    )
}

export default LoginPage;