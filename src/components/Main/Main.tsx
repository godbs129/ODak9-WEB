import ImageSlider from "./ImageSlider/ImageSlider"
import Profile from "./Profile/Profile";
import './Main.scss';
import Cookies from "js-cookie";
import Login from "./Login/Login";

const Main = (): JSX.Element => {
	const LS = localStorage.getItem('token');
	const cookie = Cookies.get('token');

	return (
		<>
			<div className="main">
				<ImageSlider />
				{LS || cookie ? <Profile /> : <Login />}
			</div>
		</>
	);
}

export default Main;