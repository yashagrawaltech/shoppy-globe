import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const addToCart = (state, action) => {
    const isItemAlreadyPresentIndex = state.items.findIndex(
        (o) => o.item.id === action.payload.id
    );

    if (isItemAlreadyPresentIndex !== -1) {
        state.items = state.items.map((item, index) =>
            index === isItemAlreadyPresentIndex
                ? { ...item, count: item.count + 1 }
                : item
        );
    } else {
        const newItem = {
            item: action.payload,
            count: 1,
        };
        state.items = [...state.items, newItem];
    }
};

const removeFromCart = (state, action) => {
    // console.log(state.items);
    const objIndex = state.items.findIndex((i) => i.item.id === action.payload);

    if (objIndex !== -1) {
        // console.log(state.items[objIndex].count);
        const c = state.items[objIndex].count;

        if (c > 1) {
            state.items = state.items.map((item, index) =>
                index === objIndex ? { ...item, count: c - 1 } : item
            );
        } else {
            state.items = state.items.filter(
                (i) => i.item.id !== action.payload
            );
        }
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: addToCart,
        remove: removeFromCart,
    },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
