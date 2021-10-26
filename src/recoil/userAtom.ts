import { atom } from "recoil";

export const registerAtom = atom({
	key: 'userAtom',
	default: {
		id: '' as string,
		pw: '' as string,
		name: '' as string,
		nick: '' as string
	}
})