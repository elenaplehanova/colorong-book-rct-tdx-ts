import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { white } from "../../assets/map/colors";
import { IColor } from "../../models/IColor";

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
