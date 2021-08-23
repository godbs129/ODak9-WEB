import { atom } from "recoil";

export const searchState = atom({
	key: 'searchAtom',
	default: '' as string
});

export const isModalState = atom({
	key: 'isModalState',
	default: false as boolean
});