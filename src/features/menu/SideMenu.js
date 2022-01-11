import { Avatar, Box } from "@mui/material"

const SideMenu = (props) => {
    return(
        <div>
            <Box sx={{padding: '1vw'}}>
                <Box sx={{ display: 'flex', flexDirection: 'space-around', width: '20vw', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Avatar sx={{marginRight : '3vh'}}>H</Avatar>
                    <p style={{fontSize: '1.5rem'}}>Emilien</p>
                </Box>
            </Box>
        </div>

    )
}

export default SideMenu