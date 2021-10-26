import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import './Nav.scss';

const Nav = (): JSX.Element => {

	return (
		<div className="nav">
			<img src={Logo} />
			<span className="nav-text">
				<Link style={{ textDecoration: 'none' }} className="nav-text-reg" to="/register">회원가입</Link>
				<Link style={{ textDecoration: 'none' }} className="nav-text-log" to="/">홈(로그인)</Link>
			</span>
		</div>
	);
}

export default Nav;