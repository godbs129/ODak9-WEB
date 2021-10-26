import ImageSlider from "./ImageSlider/ImageSlider"
import Login from "./Login/Login";
import './Main.scss';

const Main = (): JSX.Element => {

	return (
		<>
			<div className="main">
				<ImageSlider />
				<Login />
			</div>
		</>
	);
}

export default Main;