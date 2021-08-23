import { Route, Switch } from "react-router-dom"
import { MainContainer } from "../container";
import { Main } from "../components/Main";
import { Community } from "../components/Community";


const Mainpage = (): JSX.Element => {

	return (
		<>
			<Switch>
				<Route exact path="/" render={() => <MainContainer><Main /></MainContainer>} />
				<Route exact path="/community" render={() => <MainContainer><Community /></MainContainer>} />
			</Switch>
		</>
	);
}

export default Mainpage;