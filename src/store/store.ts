import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pictureReducer from "./reducers/PictureSlice";
import colorReducer from "./reducers/ColorSlice";

const rootReducer = combineReducers({
    pictureReducer,
    colorReducer,
});

export const setupStore = () => {
    return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
