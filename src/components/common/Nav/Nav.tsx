import MainIcon from '../../../assets/Main-icon.svg';
import './Nav.scss';
import { AiOutlineSearch } from 'react-icons/ai';

const Nav = (): JSX.Element => {

	return (
		<>
			<div className="nav-bar">
				<a href='#' ><img src={MainIcon} /></a>
				<a href='/' className="nav-home">홈</a>
				<a href='/community' className="nav-com">커뮤니티</a>
				<a href='#' className="nav-save">보관함</a>
				<a href='#' className="nav-cal">캘린더</a>
				<span className="find"><AiOutlineSearch className="nav-find-icon" /><input className="nav-input" placeholder="검색어를 입력하세요." /></span>
			</div>
		</>
	)
}

export default Nav;