import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

import cardsService from "./cardsService";

const initialState = {
	cards: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

export const getCards = createAsyncThunk("cards", async (_, thunkAPI) => {
	try {
		return await cardsService.getCards();
	} catch (error: any) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const cardsSlice = createSlice({
	name: "cards",
	initialState,
	reducers: {
		reset: state => initialState,
	},
	extraReducers: builder => {
		builder
			.addCase(getCards.pending, state => {
				state.isLoading = true;
			})
			.addCase(getCards.fulfilled, (state, action: PayloadAction<any>) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.cards = action.payload;
			})
			.addCase(getCards.rejected, (state, action: PayloadAction<any>) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = cardsSlice.actions;
export default cardsSlice.reducer;
