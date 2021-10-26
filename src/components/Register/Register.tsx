import Box from './Box/Box';
import Nav from './Nav/Nav';
import IMG from '../../assets/Group.svg';
import './Register.scss';

const Register = (): JSX.Element => {

	return (
		<>
			<Nav />
			<div>
				<img className="box-img" src={IMG} />
				<Box />
			</div>
		</>
	);
}

export default Register;