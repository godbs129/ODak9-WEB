import { atom } from "recoil";

export const registerAtom = atom({
	key: 'registerAtom',
	default: {
		id: '' as string,
		pw: '' as string,
		checkPw: '' as string,
		name: '' as string,
		nick: '' as string,
		isCheckId: false as boolean
	}
});

export const loginAtom = atom({
	key: 'loginAtom',
	default: {
		id: '' as string,
		pw: '' as string
	}
});