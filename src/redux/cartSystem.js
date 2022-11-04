import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSystem = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload) //we push the value in empty initial state.
        },
        remove(state, action) {
            const newstate = state.filter((item) => item.id !== action.payload);
            return newstate;

        },
    },
});
export const { add, remove } = cartSystem.actions;
export default cartSystem.reducer;
