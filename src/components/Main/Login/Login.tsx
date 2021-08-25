import LoginCon from '../../../assets/Login-icon.svg';
import './Login.scss';
import { GrLogout } from 'react-icons/gr';

const Login = (): JSX.Element => {

	const user = {
		"id": "test",
		"pw": "test",
		"name": "박지나",
		"nickName": "무병장수",
		"picture": "http://dodam.b1nd.com/static/media/profile.7a21cbe9.svg"
	}

	return (
		<>
			<div className="login">
				<img className="box-ima" src={LoginCon} />
				<div className="login-box">
					<div className="login-box-user">
						<img className="box-user-image" src={user.picture}></img>
						<span className="box-user-name">{user.name}</span>
						<span className="box-user-nick">{user.nickName}</span>
						<div className="logout-btn"><GrLogout className="logout-icon" /><span className="logout-button">로그아웃</span></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;