import ImageSlider from "./ImageSlider/ImageSlider"
import Profile from "./Profile/Profile";
import './Main.scss';
import Cookies from "js-cookie";
import Login from "./Login/Login";
import Category from "./Category/Category";

const Main = (): JSX.Element => {
	const LS = localStorage.getItem('token');
	const cookie = Cookies.get('token');

	return (
		<>
			<div className="main">
				<div className="top">
					<ImageSlider />
					{LS || cookie ? <Profile /> : <Login />}
				</div>
				<Category />
			</div>
		</>
	);
}

export default Main;