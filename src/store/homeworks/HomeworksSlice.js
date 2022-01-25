import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

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


const initialState = {
  homeworks: [],
  homework: {}
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
      console.log(action.payload)
      console.log('Homework loaded')
    })

}})

export const selectHomeworks = state => state.homeworks.homeworks
export const selectHomework = state => state.homeworks.homework

export default homeworksSlice.reducer
