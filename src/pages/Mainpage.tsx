import { Route, Switch } from "react-router-dom"
import { MainContainer } from "../container";
import Main from "../components/Main/Main";
import { Community } from "../components/Community";


const Mainpage = (): JSX.Element => {

	return (
		<>
			<MainContainer>
				<Switch>
					<Route exact path="/home" render={() => <Main />} />
					<Route path="/home/community" render={() => <Community />} />
				</Switch>
			</MainContainer>
		</>
	);
}

export default Mainpage;