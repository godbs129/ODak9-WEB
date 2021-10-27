import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import useAuth from '../../../hooks/useAuth';
import { loginAtom } from '../../../recoil/userAtom';
import './Login.scss';

const Login = (): JSX.Element => {
	const [login, setLogin] = useRecoilState(loginAtom);
	const [keep, setKeep] = useState(false);
	const { signIn } = useAuth();

	const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, name }: { value: string, name: string } = e.target;

		setLogin({
			...login,
			[name]: value
		});
	}

	const signin = () => signIn(keep);
	const check = () => setKeep(!keep);

	return (
		<>
			<div className="login">
				<div className="login-box">
					<div className="login-box-box">
						<p className="login-box-box-text">Login</p>
						<p className="login-box-box-idtext">ID</p>
						<input type="text" name="id" className="login-box-box-id" onChange={onChangeInput} /><br />
						<p className="login-box-box-pwtext">Password</p>
						<input type="password" name="pw" className="login-box-box-pw" onChange={onChangeInput} />
					</div>
					<div className="login-box-check">
						<input type="checkbox" id="login-check" className="login-box-check-c" onClick={check} />
						<label>로그인 기억하기</label><br />
					</div>
					<button className="login-box-btn" onClick={signin}>로그인</button><br />
					<span className="login-box-goto">아직 계정이 없다면 &gt; <Link to="/register">회원가입</Link> </span>
				</div>
			</div>
		</>
	)
}

export default Login;