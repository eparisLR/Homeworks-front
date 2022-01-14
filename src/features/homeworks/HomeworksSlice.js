import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Define Async Thunk
export const fetchHomeworksAsync = createAsyncThunk(
  'movies/fetch',
  async () => {
    const url = 'http://0.0.0.0:8080/homeworks'
        const options = { method: 'GET'};
        var response = await fetch(url, options)

        if(response.status === 200){
            response  = await response.json()
            console.log(response)
            return response
        } else {
            return Error("No homeworks found")
        }
  }
);


const initialState = {
  homeworks: []
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
        console.log('Loading movies...')
    })
    .addCase(fetchHomeworksAsync.fulfilled, (state, action) => {
        state.homeworks = action.payload
    })
}
})

export const selectHomeworks = state => state.homeworks.homeworks

export default homeworksSlice.reducer
