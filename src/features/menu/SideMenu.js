import { Avatar, Box } from "@mui/material"
import { Link } from "react-router-dom"

const SideMenu = (props) => {
    return(
        <div>
            <Box sx={{padding: '1vw'}}>
                <Box sx={{ display: 'flex', flexDirection: 'space-around', width: '20vw', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Avatar sx={{marginRight : '3vh'}}>H</Avatar>
                    <p style={{fontSize: '1.5rem'}}>Emilien</p>
                </Box>
                <Link to="/modify">Expenses</Link>
            </Box>
        </div>

    )
}

export default SideMenu