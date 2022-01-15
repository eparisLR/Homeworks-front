import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import HomeworkCard from './HomeworkCard';
import { fetchHomeworksAsync, selectHomeworks } from '../../store/homeworks/HomeworksSlice';

const ListHomeworks = (props) => {
    const dispatch = useDispatch()
    const homeworks = useSelector(selectHomeworks)


    useEffect(() => {
        dispatch(fetchHomeworksAsync())
    }, [dispatch])

    const renderHomeworks = homeworks.map(homeworkToDisplay =>{
        return <HomeworkCard key={homeworkToDisplay._id} homework={homeworkToDisplay}/>
    })

    

    return(
        <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
            }}>
            {renderHomeworks}
        </Box>
    )
}

export default ListHomeworks