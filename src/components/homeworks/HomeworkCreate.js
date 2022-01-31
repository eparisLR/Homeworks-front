import { useDispatch } from 'react-redux'
import { useFormik } from 'formik';
import { NewHomework } from '../../utils/HomeworkModel';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { createOneHomeworkAsync } from '../../store/homeworks/HomeworksSlice';


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

const HomeWorkCreate = (props) => {
    const dispatch = useDispatch()

    const formik = useFormik({
        validationSchema: EditHomeworkSchema,
        enableReinitialize: true,
        initialValues: {
          work: '',
          deadline: '',
          is_done: false
        },
        onSubmit: values => {
          const homeworkToCreate = new NewHomework(1, values.work, (new Date(values.deadline)).toISOString().slice(0, 19).replace("Z", ""), values.is_done, [], 1)
          console.log(homeworkToCreate)
          dispatch(createOneHomeworkAsync(homeworkToCreate))
        },
    });
    return(
        <div style={{ display: 'flex', justifyContent: 'center', minWidth: '70vw', flexDirection: 'column'}}>
          <h2>Edition d'un devoir</h2>
          <form onSubmit={formik.handleSubmit} style={{minHeight: '30vh',marginRight: '2vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
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
        </form>
        </div>
    )
}

export default HomeWorkCreate