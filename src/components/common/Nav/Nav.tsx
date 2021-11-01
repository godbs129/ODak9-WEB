import MainIcon from '../../../assets/logo.png';
import './Nav.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { searchState } from '../../../recoil/postAtom';

const Nav = (): JSX.Element => {
	const [search, setSearch] = useRecoilState(searchState);

	return (
		<>
			<div className="nav-bar">
				<a href='/' ><img src={MainIcon} /></a>
				<a href='/' className="nav-home">홈</a>
				<a href='/home/community' className="nav-com">커뮤니티</a>
				<a href='#' className="nav-save">보관함</a>
				<a href='#' className="nav-cal">캘린더</a>
				<span className="find">
					<AiOutlineSearch className="nav-find-icon" />
					<input className="nav-input" placeholder="검색어를 입력하세요." onChange={(e) => setSearch(e.target.value)} />
				</span>
			</div>
		</>
	)
}

export default Nav;