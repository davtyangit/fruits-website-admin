import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchProducts = createAsyncThunk("products/FetchProducts", async () => {
    try {
        const res = await axios.get('http://localhost:3004/products')
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const FetchCategories = createAsyncThunk("products/FetchCategories", async () => {
    try {
        const res = await axios.get('http://localhost:3004/categories')
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const UpdateUser = createAsyncThunk('users/UpdateUser', async ({ id, data }) => {
    try {
        const res = await axios.put(`http://localhost:3004/products/${id}`, data);
        const edited = res.data;
        return edited;
    } catch (error) {
        console.warn(error);
    }
});

export const RemoveProduct = createAsyncThunk("products/RemoveProduct", async (id) => {
    try {
        const res = await axios.delete(`http://localhost:3004/products/${id}`)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const RemoveCategory = createAsyncThunk("products/RemoveCategory", async (id) => {
    try {
        const res = await axios.delete(`http://localhost:3004/categories/${id}`)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const CreateCategory = createAsyncThunk("products/CreateCategory", async (newData) => {
    console.log(newData)
    try {
        const res = await axios.post(`http://localhost:3004/categories`, newData)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})

export const CreateProduct = createAsyncThunk("products/PostUser", async (newData) => {
    console.log(newData)
    try {
        const res = await axios.post(`http://localhost:3004/products`, newData)
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        categories: [],
        loading: false,
        isEditForm: true,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FetchProducts.pending, (state) => {
                state.loading = true
            }).addCase(FetchProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            }).addCase(FetchProducts.rejected, (state) => {
                state.loading = false
                state.error = "Something went wrong"
            }).addCase(FetchCategories.pending, (state) => {
                state.loading = true
            }).addCase(FetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload
                state.loading = false
            }).addCase(FetchCategories.rejected, (state) => {
                state.loading = false
                state.error = "Something went wrong"
            }).addCase(RemoveProduct.pending, (state) => {
                state.loading = true
            }).addCase(RemoveProduct.fulfilled, (state, action) => {
                state.products = state.products.filter((product) => product.id !== action.payload)
                state.loading = false
            }).addCase(RemoveProduct.rejected, (state) => {
                state.loading = false
                state.error = "Something went wrong"
            }).addCase(RemoveCategory.pending, (state) => {
                state.loading = true
            }).addCase(RemoveCategory.fulfilled, (state, action) => {
                state.products = state.products.filter((product) => product.id !== action.payload)
                state.loading = false
            }).addCase(RemoveCategory.rejected, (state) => {
                state.loading = false
                state.error = "Something went wrong"
            })

            .addCase(CreateProduct.pending, (state, action) => {
                state.loading = true
            }).addCase(CreateProduct.fulfilled, (state, action) => {
                state.loading = false
            }).addCase(CreateProduct.rejected, (state, action) => {
                state.loading = false
            })


            .addCase(UpdateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(UpdateUser.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(UpdateUser.rejected, (state) => {
                state.loading = false;
            })
    }
})

export default productsSlice.reducer