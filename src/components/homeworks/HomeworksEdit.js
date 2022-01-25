import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchOneHomeworkAsync, selectHomework } from '../../store/homeworks/HomeworksSlice'
import TextField from '@mui/material/TextField';
import moment from 'moment'
import Input from '@mui/material/Input'
import { useFormik } from 'formik';


const HomeworksEdit = (props) => {
    const dispatch = useDispatch()
    let params = useParams()
    const homework = useSelector(selectHomework)

    useEffect( () => dispatch(fetchOneHomeworkAsync(params.id)), [dispatch, params.id])

    const formik = useFormik({
        initialValues: {
          work: '',
          date: new Date()
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });
    return(
        <div>
            <p>test {params.id}</p>
            <p>{homework.work}</p>
            <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={homework.work}
          />
          <input
            id="date"
            name="date"
            type="date"
            onChange={formik.handleChange}
            value={moment(homework.deadline).format('YYYY-MM-DD')}
          />
    
          <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default HomeworksEdit