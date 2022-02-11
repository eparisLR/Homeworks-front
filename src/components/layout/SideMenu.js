import { Avatar, Box } from "@mui/material"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import LogoutButton from "../authentication/LogoutButton"

const SideMenu = (props) => {
    const { user, isAuthenticated } = useAuth0()

    return(
        <div>
            <Box sx={{padding: '1vw', display: 'flex', flexDirection: 'column',alignItems: 'self-start'}}>
                <Box sx={{ display: 'flex', flexDirection: 'space-around', width: '20vw', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Avatar sx={{marginRight : '3vh'}} src={user.picture}></Avatar>
                    <p style={{fontSize: '1.5rem'}}>{user.name}</p> 
                </Box>
                <Box>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit', fontSize: '1.4rem'}}>List of homeworks</Link>
                </Box>
                <Box>
                    <Link to="/new" style={{ color: 'inherit', textDecoration: 'inherit', fontSize: '1.4rem'}}>Add a homework</Link>
                </Box>
                {isAuthenticated &&(
                    <div>
                        <LogoutButton />
                    </div>
                )}
            </Box>
        </div>

    )
}

export default SideMenu