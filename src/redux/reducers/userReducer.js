import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action to check localStorage for user data during initialization
export const checkLocalStorageUser = createAsyncThunk(
  "user/checkLocalStorageUser",
  async () => {
    try {
      const storedUserData = localStorage.getItem("RFP_userData");
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        return userData;
      }
      return null;
    } catch (error) {
      console.error("Error checking localStorage for user data:", error);
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:5001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify({ email: email, password: password }), // Convert the object to a JSON string
      });
      const userData = await response.json();
      if (response.ok) {
        // Store user data in localStorage upon successful login
        localStorage.setItem("RFP_userData", JSON.stringify(userData));
      }
      return userData;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ name, email, password }) => {
    try {
      const response = await fetch("http://localhost:5001/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const userData = await response.json();

      // Update localStorage with user data upon successful registration
      if (response.ok) {
        localStorage.setItem("RFP_userData", JSON.stringify(userData));
      }

      return userData;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  }
);

export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  try {
    // Clear user data from localStorage on logout
    localStorage.removeItem("RFP_userData");

    return { success: true };
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: false,
    error: null,
    success: false,
    initialized: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkLocalStorageUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(checkLocalStorageUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.success = !!action.payload; // Set success based on whether user data is retrieved
        state.initialized = true; // Mark initialization as completed
      })
      .addCase(checkLocalStorageUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
        state.initialized = true; // Mark initialization as completed
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.success = true;
        state.initialized = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
        state.initialized = true;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = null; // Reset user data on logout
        state.success = action.payload.success;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default userSlice.reducer;
