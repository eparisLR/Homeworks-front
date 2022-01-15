import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import { Box, CardActions } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';

const HomeworkCard = (props) => {
    return(
            <Card sx={{ minWidth: '20vw', marginTop:'10vh', marginRight: '5vw' }}>
                <CardContent sx={{display:'flex', flexDirection:'column'}}>
                        <Box sx={{display: 'flex', justifyContent:'flex-start', alignItems:'center'}}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label=""/>
                            </FormGroup>
                            <Typography>
                                {props.homework.work}
                            </Typography>
                            <Typography>
                                {moment(props.homework.deadline).format("DD-MM-YYYY")}
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', justifyContent:'flex-start'}}>
                            {props.homework.work}
                        </Box>
                </CardContent>
                <CardActions sx={{display:'flex', justifyContent:'flex-end'}}>
                    <IconButton color='error'>
                        <Delete />
                    </IconButton>
                    <IconButton color='primary'>
                        <EditIcon />
                    </IconButton>
                </CardActions>
            </Card>
    )
}

export default HomeworkCard