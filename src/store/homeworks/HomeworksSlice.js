import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import moment from 'moment'

// Define Async Thunk
export const fetchHomeworksAsync = createAsyncThunk(
  'homeworks/fetch',
  async () => {
    const url = process.env.REACT_APP_API_URL
        const options = { method: 'GET'};
        var response = await fetch(url, options)

        if(response.status === 200){
            response  = await response.json()
            return response
        } else {
            return Error("No homeworks found")
        }
  }
);

export const fetchOneHomeworkAsync = createAsyncThunk(
  'homework/fetch',
  async (id) => {
    const url = process.env.REACT_APP_API_URL + '{id}?homework_id=' + id
        const options = { method: 'GET'};
        var response = await fetch(url, options)

        if(response.status === 200){
            response  = await response.json()
            return response
        } else {
            return Error("No homework found")
        }
  }
)

export const updateOneHomeworkAsync = createAsyncThunk(
  'homework/update',
  async (homework) => {
          const url = process.env.REACT_APP_API_URL + '{id}?homework_id='+ homework.id
          const options = { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(homework)};
          var response = await fetch(url, options)
          
          if(response.status === 200){
              response  = await response.json()
              return response
          } else {
              console.log("Fail update")
          }
  }
)

export const createOneHomeworkAsync = createAsyncThunk(
  'homework/create',
  async (homework) => {
          const url = process.env.REACT_APP_API_URL
          const options = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(homework)};
          var response = await fetch(url, options)
          
          if(response.status === 200){
              response  = await response.json()
              return response
          } else {
              console.log("Fail create")
          }
  }
)

export const deleteOneHomeworkAsync = createAsyncThunk(
  'homework/delete',
  async (id) => {
    const url = process.env.REACT_APP_API_URL + '{id}?homework_id='+ id
    const options = {method: 'DELETE', headers: { 'Content-Type': 'application/json' }}
    var response = await fetch(url, options)
          
          if(response.status === 200){
              response  = await response.json()
              return response
          } else {
              console.log("Fail delete")
          }
  }
)


const initialState = {
  homeworks: [],
  homework: {work: '', deadline: '', is_done: false}  
}

export const homeworksSlice = createSlice({
  name: 'homeworks',
  initialState,
  // Actions
  reducers: {
    addHomework(state, action){
      console.log("adding homeworks")
    }
  },
  // Reducer asycnhrone
  extraReducers: (builder) => {
    builder.addCase(fetchHomeworksAsync.pending, state => {
        console.log('Loading homeworks...')
    })
    .addCase(fetchHomeworksAsync.fulfilled, (state, action) => {
        state.homeworks = action.payload
        console.log('Homeworks loaded')
    })
    
    builder.addCase(fetchOneHomeworkAsync.pending, (state, action) => {
      console.log('Loading homework...')
    })
    .addCase(fetchOneHomeworkAsync.fulfilled, (state, action) => {
      state.homework = action.payload
      state.homework.deadline = moment(state.homework.deadline).format('YYYY-MM-DD')
      console.log('Homework loaded')
    })

    builder.addCase(updateOneHomeworkAsync.pending, state => {
      console.log('Updating homework')
    })
    .addCase(updateOneHomeworkAsync.fulfilled, (state,action) => {
      state.homework = action.payload
      state.homework.deadline = moment(state.homework.deadline).format('YYYY-MM-DD')
      console.log('Homework updated')
      var homeworks = state.homeworks
      homeworks = homeworks.filter((h) => h._id !== action.payload._id)
      homeworks.push(action.payload)
      state.homeworks = homeworks
    })

    builder.addCase(createOneHomeworkAsync.pending, state => {
      console.log('Creating Homework')
    })
    .addCase(createOneHomeworkAsync.fulfilled, (state,action) => {
      console.log('Homework created', action.payload)
    })

    builder.addCase(deleteOneHomeworkAsync.pending, state => {
      console.log('Deleting the Homework')
    })
    .addCase(deleteOneHomeworkAsync.fulfilled, (state, action) => {
      var homeworks = state.homeworks
      homeworks = homeworks.filter((h) => h._id !== action.payload._id)
      state.homeworks = homeworks
      console.log('Homework deleted')
    })
}})

export const selectHomeworks = state => state.homeworks.homeworks
export const selectHomework = state => state.homeworks.homework

export default homeworksSlice.reducer
