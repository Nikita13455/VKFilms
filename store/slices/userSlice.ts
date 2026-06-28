import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "@/api/auth";
import { register } from "@/api/register";
import { getProfile } from "@/api/auth";



const initialState = {
    user: null,
    isAuth: false,
    loading: false,
    error: null
}

export const loginUser = createAsyncThunk(
    'user/login',
    async ({ email, password }: { email: string, password: string }) => {
        await login(email, password)
        const user = await getProfile()
        return user
    }
)

export const registerUser = createAsyncThunk(
    'register/user',
    async ({ email, password, name, surname }: { email: string, password: string, name: string, surname: string }) => {
        await register(email, password, name, surname)

        return null
    }
)

export const checkAuth = createAsyncThunk(
    'user/checkAuth',
    async () => {
        const user = await getProfile()
        return user
    }
)

export const logOut = createAsyncThunk(
    'user/logout',
    async () => {
        localStorage.removeItem("token")
        return null
    }
)



const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuth = true;
                state.error = null;

            })

            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.isAuth = false;
                state.error = action.error.message || 'ошибка входа'
            })

            .addCase(registerUser.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;


                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.isAuth = false;
                state.error = action.error.message || 'Ошибка регистрации';
            })
            .addCase(checkAuth.pending, (state) => {
                state.loading = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuth = true;
                state.error = null;
            })
            .addCase(checkAuth.rejected, (state) => {
                state.loading = false;
                state.user = null;
                state.isAuth = false;
                state.error = null;
            })

            .addCase(logOut.fulfilled, (state) => {
                state.user = null;
                state.isAuth = false;
                state.loading = false;
                state.error = null;
            })
    }
})

export default UserSlice.reducer