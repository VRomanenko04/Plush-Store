import { configureStore } from "@reduxjs/toolkit";
import { reducer as basketReducer} from "./features/basket.slice";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;