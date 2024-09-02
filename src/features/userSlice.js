import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// tạo user mới
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

// lấy ra các user
export const readAllUsers = createAsyncThunk(
  "readAllUsers",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://66d577d6f5859a7042662b3e.mockapi.io/user"
    );
    try {
      const json = await response.json();
      return json;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// cập nhật user
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://66d577d6f5859a7042662b3e.mockapi.io/user/${data.id}`,
      {
        method: "PUT",
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

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
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
      })
      .addCase(readAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(readAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(readAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        // user nào có id trùng với payload.id thì được cập nhật còn không thì giữ nguyên
        state.users = state.users.map((us) =>
          us.id === action.payload.id ? action.payload : us
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
