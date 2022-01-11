import { configureStore } from '@reduxjs/toolkit';
import { homeworksSlice } from './features/homeworks/HomeworksSlice'

export const store = configureStore({
    reducer: {
      homeworks: homeworksSlice.reducer,
    },
  })
  