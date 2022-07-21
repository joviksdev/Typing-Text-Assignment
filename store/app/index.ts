import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, StorageKeys, Challenge } from '../../utilities/types';
import Storage from '../../utilities/storage';

const initialState: AppState = {
	isDisplayAppInfo:
		typeof window !== 'undefined' && Storage.getItem(StorageKeys.AppUsage)
			? false
			: true,
	challenge: null,
	hasChallengeEnd: false,
	score: 0,
	total: 0,
};

export const appSlice = createSlice({
	name: 'appState',
	initialState,
	reducers: {
		setDisplayAppInfo: (state, action: PayloadAction<boolean>) => {
			state.isDisplayAppInfo = action.payload;
		},
		setChallenge: (state, action: PayloadAction<Challenge | null>) => {
			state.challenge = action.payload;
			if (action.payload) {
				state.total = action.payload.paragraph.split(' ').length;
			}
		},
		setEndChallange: (state, action: PayloadAction<boolean>) => {
			state.hasChallengeEnd = action.payload;
		},
		setScore: (state, action: PayloadAction<number>) => {
			state.score = action.payload;
		},
	},
});

export const { setDisplayAppInfo, setChallenge, setScore, setEndChallange } =
	appSlice.actions;

export default appSlice.reducer;
