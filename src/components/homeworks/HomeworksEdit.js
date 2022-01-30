import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchOneHomeworkAsync, selectHomework, updateOneHomeworkAsync } from '../../store/homeworks/HomeworksSlice'
import { useFormik } from 'formik';
import { Homework } from '../../utils/HomeworkModel';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';


const EditHomeworkSchema = yup.object().shape({
  work: yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  deadline: yup.string()
    .required('Required'),
  is_done: yup.string()
    .required('Required'),
});

const HomeworksEdit = (props) => {
    const dispatch = useDispatch()
    let params = useParams()
    const homework = useSelector(selectHomework)

    useEffect( () => dispatch(fetchOneHomeworkAsync(params.id)), [dispatch, params.id])

    const formik = useFormik({
        validationSchema: EditHomeworkSchema,
        enableReinitialize: true,
        initialValues: {
          work: homework.work,
          deadline: homework.deadline,
          is_done: homework.is_done
        },
        onSubmit: values => {
          const homeworkToUpdate = new Homework( homework._id, homework.work_id, values.work, (new Date(values.deadline)).toISOString().slice(0, 19).replace("Z", ""), values.is_done, homework.tags, homework.user_id)
          dispatch(updateOneHomeworkAsync(homeworkToUpdate));
        },
    });
    return(
        <div>
          <form onSubmit={formik.handleSubmit} style={{minHeight: '20vh'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
              <TextField id="work" name="work" type="text" onChange={formik.handleChange} value={formik.values.work} label="Work" variant="outlined" />
              <TextField id="deadline" name="deadline" type="date" onChange={formik.handleChange} value={formik.values.deadline} label="Deadline" variant="outlined" />
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <label htmlFor="done">Done </label>
            <Checkbox
              id="done"
              name="is_done"
              checked={formik.values.is_done}
              onChange={formik.handleChange}
              inputProps={{ 'aria-label': 'is_done' }}
            />
            </Box>
      
            <Button variant="contained"type="submit">Submit</Button>
            </Box>
        </form>
        </div>
    )
}

export default HomeworksEdit