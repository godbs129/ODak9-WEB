import { ImageSlider } from "./ImageSlider"
import { Login } from "./Login"
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