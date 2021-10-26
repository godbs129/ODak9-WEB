import { Link } from 'react-router-dom';
import './Login.scss';

const Login = (): JSX.Element => {

	return (
		<>
			<div className="login">
				<div className="login-box">
					<div className="login-box-box">
						<p className="login-box-box-text">Login</p>
						<p className="login-box-box-idtext">ID</p>
						<input type="text" name="id" className="login-box-box-id" /><br />
						<p className="login-box-box-pwtext">Password</p>
						<input type="password" name="pw" className="login-box-box-pw" />
					</div>
					<div className="login-box-check">
						<input type="checkbox" id="login-check" />
						<label>로그인 기억하기</label><br />
					</div>
					<button className="login-box-btn">로그인</button><br />
					<span className="login-box-goto">아직 계정이 없다면 &gt; <Link to="/register">회원가입</Link> </span>
				</div>
			</div>
		</>
	)
}

export default Login;