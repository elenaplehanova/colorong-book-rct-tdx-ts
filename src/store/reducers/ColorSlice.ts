import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IColor } from "../../models/IColor";
import {
    aquamarine,
    blue,
    darkgray,
    lightblue,
    limegreen,
    magenta,
    orange,
    pink,
    red,
    violet,
    white,
    yellow,
} from "../../colors";

export const mapColors: IColor[] = [
    white,
    darkgray,
    limegreen,
    aquamarine,
    lightblue,
    blue,
    violet,
    pink,
    magenta,
    red,
    orange,
    yellow,
];

interface ColorState {
    currentColor: IColor;
}

const initialState: ColorState = {
    currentColor: white,
};

export const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        setCurrentColor(state, action: PayloadAction<IColor>) {
            state.currentColor = action.payload;
        },
    },
});

export default colorSlice.reducer;
