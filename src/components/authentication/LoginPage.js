import AuthenticationButton from "./AuthenticationButton";
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom";
import background from '../../assets/background-login.jpg'
import { Button } from "@mui/material";

const LoginPage = (props) => {
    const { user, isAuthenticated } = useAuth0()

    return(
        <div style= {{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${background})`}}>
            <div style={{ width: '20vw', height: '20vh', display: 'flex', flexDirection: 'column',justifyContent: 'center', backgroundColor: 'whitesmoke', borderRadius: '5px', padding: '1vw', textAlign: 'center'}}>
                {!isAuthenticated && (
                    <div>
                        <h2>Connectez-vous</h2>
                        <p>Veuillez vous connectez pour accéder à la liste de vos tâches</p>
                        <AuthenticationButton/>
                    </div>
                )}
                {isAuthenticated && (
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                    <img src={user.picture} alt={user.name} style={{borderRadius: '20px', width: '5vw', marginBottom: '1vh'}}/>
                    <Link to="/homeworks" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <Button variant="contained">Votre TODO List</Button>
                    </Link>
                </div>
                )}
            </div>
        </div>
    )
}

export default LoginPage;