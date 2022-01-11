import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';

const HomeworkCard = (props) => {
    return(
            <Card sx={{ minWidth: '20vw', marginTop:'10vh', marginRight: '5vw' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.homework.work}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.homework.deadline}
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default HomeworkCard