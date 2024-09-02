import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://66d577d6f5859a7042662b3e.mockapi.io/user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const json = await response.json();
      return json;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const userSlice = createSlice({
  name:"userSlice",
  initialState : {
    users:[],
    loading: false,
    error:null
  },
  reducers:{
  }
  ,
  extraReducers: (builder) => {
    builder
    // đang chờ
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      // khi thành công
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      // khi lỗi
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
})