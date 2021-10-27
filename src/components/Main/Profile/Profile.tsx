import LoginCon from '../../../assets/Login-icon.svg';
import './Profile.scss';
import { GrLogout } from 'react-icons/gr';
import Cookies from 'js-cookie';

const Profile = (): JSX.Element => {

	const user = {
		"id": "test",
		"pw": "test",
		"name": "박지나",
		"nickName": "무병장수",
		"picture": "http://dodam.b1nd.com/static/media/profile.7a21cbe9.svg"
	}

	const logout = () => {
		localStorage.removeItem('token');
		Cookies.remove('token');
		window.location.reload();
	}

	return (
		<>
			<div className="profile">
				<img className="box-ima" src={LoginCon} />
				<div className="profile-box">
					<div className="profile-box-user">
						<img className="box-user-image" src={user.picture}></img>
						<span className="box-user-name">{user.name}</span>
						<span className="box-user-nick">{user.nickName}</span>
						<div className="logout-btn" onClick={logout}><GrLogout className="logout-icon" /><span className="logout-button">로그아웃</span></div>
					</div>
				</div>
				<div className="login-under">

				</div>
			</div>
		</>
	);
}

export default Profile;