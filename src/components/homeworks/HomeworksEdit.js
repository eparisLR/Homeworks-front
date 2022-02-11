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
    .min(2, 'Trop court !')
    .max(50, 'Trop long!')
    .required('Champ requis'),
  deadline: yup.string()
    .required('Required'),
  is_done: yup.string()
    .required('Champ requis'),
});

const HomeworksEdit = (props) => {
    const dispatch = useDispatch()
    let params = useParams()
    const homework = useSelector(selectHomework)

    useEffect( () => dispatch(fetchOneHomeworkAsync(params.id)), [dispatch, params.id])

    const convertTagsToString = (tags) => {
      var tagsString = ""
      if (tags.length > 0){
        for (const tag of tags) {
          tagsString += tag + ", "
        }
      }

      return tagsString
    }

    const convertTagsToArray = () => {
      var tags = formik.values.tags.split(",")
      return tags
    }

    const formik = useFormik({
        validationSchema: EditHomeworkSchema,
        enableReinitialize: true,
        initialValues: {
          work: homework.work,
          deadline: homework.deadline,
          is_done: homework.is_done,
          tags: convertTagsToString(homework.tags)
        },
        onSubmit: values => {
          const homeworkToUpdate = new Homework( homework._id, homework.work_id, values.work, (new Date(values.deadline)).toISOString().slice(0, 19).replace("Z", ""), values.is_done, convertTagsToArray(), homework.user_id)
          dispatch(updateOneHomeworkAsync(homeworkToUpdate));
        },
    });
    return(
        <div style={{ display: 'flex', justifyContent: 'center', minWidth: '70vw', flexDirection: 'column'}}>
          <h2>Edition d'une tâche</h2>
          <form onSubmit={formik.handleSubmit} style={{minHeight: '30vh',marginRight: '2vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
              <TextField id="work" name="work" type="text" onChange={formik.handleChange} value={formik.values.work} label="Work" variant="outlined" />
              <TextField id="deadline" name="deadline" type="date" onChange={formik.handleChange} value={formik.values.deadline} label="Deadline" variant="outlined" />
              <p>Séparez les tags par des virgules si vous souhaitez en mettre plusieurs</p>
              <TextField id="tags" name="tags" type="text" onChange={formik.handleChange} value={formik.values.tags} label="Tags" variant='outlined' />
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <label htmlFor="done">Terminée </label>
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

export default HomeworksEdit