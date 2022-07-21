import { HTMLAttributes } from 'react';

export type Challenge = {
	paragraph: string;
	duration: string;
};

export type AppState = {
	challenge: Challenge | null;
	isDisplayAppInfo: boolean;
	hasChallengeEnd: boolean;
	score: number;
	total: number;
};

export enum StorageKeys {
	AppUsage = '@Storage:App_Usage',
}

export type TextInput = {
	placeHolder?: string;
	error?: boolean;
	value?: string;
	onChange?: (e: any) => void;
};

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}
export interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
	error?: boolean;
	helperText?: string | null;
	fullWidth?: boolean;
	label?: string;
	type?: string;
}

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
	error?: boolean;
	helperText?: string | null;
	fullWidth?: boolean;
	label?: string;
	type?: string;
	rows?: number;
}

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
	error?: boolean;
	helperText?: string | null;
	fullWidth?: boolean;
	label?: string;
	type?: string;
}
