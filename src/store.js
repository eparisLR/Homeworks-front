import { configureStore } from '@reduxjs/toolkit';
import { homeworksSlice } from './store/homeworks/HomeworksSlice'

export const store = configureStore({
    reducer: {
      homeworks: homeworksSlice.reducer,
    },
  })
  