import { useRecoilState, useRecoilValue } from "recoil";
import { loginAtom, registerAtom } from "../recoil/userAtom";
import axios from 'axios';
import { EndPoint } from "../components/config/EndPoint";
import toast from 'react-hot-toast';
import { useHistory } from "react-router";
import Cookies from "js-cookie";

const useAuth = () => {
	const [register, setRegister] = useRecoilState(registerAtom);
	const [login, setLogin] = useRecoilState(loginAtom);
	const history = useHistory();

	const checkID = async (id: string) => {
		try {
			const res = await axios.get(`${EndPoint}/auth/check?id=${id}`);

			if (res.data.status === 200) {
				setRegister({
					...register,
					isCheckId: true
				});
				toast.success('사용 가능한 ID입니다!');
			}
		} catch (err: any) {
			if (err.response.status === 401) {
				toast.error('이미 존재하는 아이디', {
					position: 'top-center'
				})
			}
		}
	}

	const signUp = async () => {
		try {
			if (register.pw !== register.checkPw) {
				toast.error('비밀번호가 다릅니다');
				return;
			}

			const res = await axios.post(`${EndPoint}/auth/signup`, {
				id: register.id,
				pw: register.pw,
				name: register.name,
				nickName: register.nick
			});

			if (res.data.status === 200) {
				history.push('/');
				toast.success('회원가입 성공')
			}
		} catch (err: any) {
			console.log(err.response);
			if (err.response.status === 401) {
				toast.error('이미 존재하는 아이디에요!', {
					position: 'top-center'
				})
			} else if (err.response.status === 500) {
				toast.error('서버 오류', {
					position: 'top-center'
				})
			}
		}
	}

	const signIn = async (isKeep: boolean) => {
		const res = await axios.post(`${EndPoint}/auth/signin`, {
			id: login.id,
			pw: login.pw
		});

		if (res.data.status === 200) {
			toast.success('로그인 성공');

			if (isKeep === true) {
				localStorage.setItem('token', res.data.data.token);
			} else if (isKeep === false) {
				Cookies.set('token', res.data.data.token, { expires: 7 });
			}

			history.push('/');
		}

	}

	return {
		checkID,
		signUp,
		signIn,
	}
}

export default useAuth;