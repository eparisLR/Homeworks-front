import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import { Box, CardActions, Chip } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteOneHomeworkAsync, updateOneHomeworkAsync } from '../../store/homeworks/HomeworksSlice';
import { Homework } from '../../utils/HomeworkModel';

const HomeworkCard = (props) => {
    const dispatch = useDispatch()

    const deleteHomework = (id) => {
        dispatch(deleteOneHomeworkAsync(id))
    }

    const renderTags = props.homework.tags.map((tag, index) => {
        return <Chip key={props.homework._id + index.toString()} label={tag} color='primary' sx={{marginRight: '1vw'}}></Chip>
    })
    const checkHomework = (event) => {
        const homework = new Homework(props.homework._id, props.homework.work_id, props.homework.work, (new Date(props.homework.deadline)).toISOString().slice(0, 19).replace("Z", "").deadline, event.target.checked, props.homework.tags, props.homework.user_id)
        dispatch(updateOneHomeworkAsync(homework))
    }
    return(
            <Card sx={{ minWidth: '20vw', marginTop:'10vh', marginRight: '5vw' }}>
                <CardContent sx={{display:'flex', flexDirection:'column'}}>
                        <Box sx={{display: 'flex', justifyContent:'flex-start', alignItems:'center'}}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox onChange={checkHomework} checked={props.homework.is_done}/>} label=""/>
                            </FormGroup>
                            <Typography>
                                {props.homework.work} - 
                            </Typography>
                            <Typography>
                                {moment(props.homework.deadline).format("DD-MM-YYYY")}
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', justifyContent:'flex-start'}}>
                            {renderTags}
                        </Box>
                        <Box sx={{display: 'flex', justifyContent:'flex-start', marginTop: '1vh'}}>
                            {props.homework.work}
                        </Box>
                </CardContent>
                <CardActions sx={{display:'flex', justifyContent:'flex-end'}}>
                    <IconButton color='error' onClick={() => {deleteHomework(props.homework._id)}}>
                        <Delete />
                    </IconButton>
                    <Link to={`/homeworks/modify/${props.homework._id}`}>
                        <IconButton color='primary'>
                            <EditIcon />
                        </IconButton>
                    </Link>
                </CardActions>
            </Card>
    )
}

export default HomeworkCard