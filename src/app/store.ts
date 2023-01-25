import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/auth/authSlice";
// import goalReducer from "../features/goals/goalSlice";
import cardsReducer from "../features/cards/cardsSlice";
export const store = configureStore({
	reducer: {
		cards: cardsReducer,
		// auth: authReducer,
		// goals: goalReducer,
	},
});
