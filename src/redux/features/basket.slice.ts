import { createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

export type Order = {
    title: string
    price: string
    count: number
    image: StaticImageData
}

const initialState: Order[] = [];

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBacket: (state, { payload }) => {
            const product = payload;
            const existingProduct = state.find(p => p.title === product.title);
            
            if (existingProduct) {
                existingProduct.count += 1;
            } else {
                state.push({ ...product, count: 1 });
            }
        }
    }
});

export const { actions, reducer } = basketSlice;