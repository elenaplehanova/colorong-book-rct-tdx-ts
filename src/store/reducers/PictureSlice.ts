import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cat, monkey } from "../../assets/map/svgPictures";
import { IPicture } from "../../models/IPicture";
import { ISvgPicture } from "../../models/ISvgPicture";

export const svgPictureMap: ISvgPicture[] = [monkey, cat];

interface PictureState {
    idCurrentPicture: string;
    pictures: IPicture[];
}

const initialState: PictureState = {
    idCurrentPicture: "",
    pictures: [],
};

export const pictureSlice = createSlice({
    name: "picture",
    initialState,
    reducers: {
        //------idCurrentPicture------//
        setIdCurrentPicture(state, action: PayloadAction<string>) {
            state.idCurrentPicture = action.payload;
        },

        //------pictures------//
        addNewPicture(state, action: PayloadAction<IPicture>) {
            let newPicture = action.payload;
            if (
                !state.pictures.some((picture) => {
                    return picture.id === newPicture.id;
                })
            ) {
                state.pictures.push(newPicture);
            }
        },
        updatePictureShape(state, action: PayloadAction<IPicture>) {
            let picture = action.payload;

            state.pictures = state.pictures.map((item) => {
                return {
                    ...item,
                    shapes: item.id === picture.id ? picture.shapes : item.shapes,
                };
            });
        },
    },
});

export default pictureSlice.reducer;
