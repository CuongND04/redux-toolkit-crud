import { createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name:"userSlice",
  initialState : {
    users:[],
    loading: false,
    error:null
  },
  reducers:{}
  ,
  extraReducers:{

  }
})