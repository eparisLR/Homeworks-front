import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import moment from 'moment'

// Define Async Thunk
export const fetchHomeworksAsync = createAsyncThunk(
  'homeworks/fetch',
  async () => {
    const url = 'https://homeworks-api.herokuapp.com/homeworks'
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
    const url = 'https://homeworks-api.herokuapp.com/homeworks/{id}?homework_id='+ id
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
          const url = 'https://homeworks-api.herokuapp.com/homeworks/{id}?homework_id='+ homework.id
          delete homework.id
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
    })

}})

export const selectHomeworks = state => state.homeworks.homeworks
export const selectHomework = state => state.homeworks.homework

export default homeworksSlice.reducer
