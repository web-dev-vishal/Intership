import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: "cart",
    initialState: {
        items: [],
        total:0,
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.total +=1;
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
                state.total -=1;
            }
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;