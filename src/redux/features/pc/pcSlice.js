import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addProduct: (state) => {},
    },
});

export const { addProduct } = counterSlice.actions;

export default counterSlice.reducer;
