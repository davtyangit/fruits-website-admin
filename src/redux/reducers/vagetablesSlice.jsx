import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchVagetables = createAsyncThunk("vagetables/FetchVagetables", async () => {
    try {
        const res = await axios.get('http://localhost:3004/vagetables')
        const data = res.data
        console.log(data, '222')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const UpdateVagetables = createAsyncThunk('vagetables/UpdateVagetables', async ({ id, data }) => {
    try {
        const res = await axios.put(`http://localhost:3004/vagetables/${id}`, data);
        const edited = res.data;
        return edited;
    } catch (error) {
        console.warn(error);
    }
});

export const RemoveVagetable = createAsyncThunk("vagetables/RemoveVagetable", async (id) => {
    try {
        const res = await axios.delete(`http://localhost:3004/vagetables/${id}`)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const CreateVagetable = createAsyncThunk("vagetables/CreateVagetable", async (newData) => {
    console.log(newData)
    try {
        const res = await axios.post(`http://localhost:3004/vagetables`, newData)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

const vageteblesSlice = createSlice({
    name: 'vagetables',
    initialState: {
        vagetables: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FetchVagetables.pending, (state) => {
                state.loading = true
            }).addCase(FetchVagetables.fulfilled, (state, action) => {
                state.vagetables = action.payload
                state.loading = false
            }).addCase(FetchVagetables.rejected, (state) => {
                state.loading = false
                state.error = "Something went wrong"
            })

            .addCase(RemoveVagetable.pending, (state) => {
                state.loading = true
            }).addCase(RemoveVagetable.fulfilled, (state, action) => {
                state.vagetables = state.vagetables.filter((v) => v.id !== action.payload)
                state.loading = false
            }).addCase(RemoveVagetable.rejected, (state) => {
                state.loading = false
                state.error = "Something went wrong"
            })

            .addCase(CreateVagetable.pending, (state, action) => {
                state.loading = true
            }).addCase(CreateVagetable.fulfilled, (state, action) => {
                state.loading = false
            }).addCase(CreateVagetable.rejected, (state, action) => {
                state.loading = false
            })

            .addCase(UpdateVagetables.pending, (state) => {
                state.loading = true;
            })
            .addCase(UpdateVagetables.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(UpdateVagetables.rejected, (state) => {
                state.loading = false;
            })

        // .addCase(RemoveCategory.pending, (state) => {
        //     state.loading = true
        // }).addCase(RemoveCategory.fulfilled, (state, action) => {
        //     state.vagetables = state.vagetables.filter((v) => v.id !== action.payload)
        //     state.loading = false
        // }).addCase(RemoveCategory.rejected, (state) => {
        //     state.loading = false
        //     state.error = "Something went wrong"
        // })
    }
})

export default vageteblesSlice.reducer