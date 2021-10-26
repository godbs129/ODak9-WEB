import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import useAuth from '../../../hooks/useAuth';
import { registerAtom } from '../../../recoil/userAtom';
import './Box.scss';

const Box = (): JSX.Element => {
	const [user, setUser] = useRecoilState(registerAtom);
	const { checkID, signUp } = useAuth();

	const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, name }: { value: string, name: string } = e.target;
		setUser({
			...user,
			[name]: value
		});
	}

	const onClickCheckID = async () => {
		await checkID(user.id);
	}

	return (
		<>
			<div className="register">
				<p className="register-text">회원가입</p>
				<div className="register-box">
					<div className="register-box-name">
						<p className="register-box-name-text">이름 (본명)</p>
						<input className="register-box-name-input" name="name" placeholder="ex) 홍길동" onChange={onChangeInput} />
					</div>
					<div className="register-box-nick">
						<p className="register-box-nick-text">닉네임</p>
						<input className="register-box-nick-input" name="nick" placeholder="ex) 김길동" onChange={onChangeInput} />
					</div>
					<div className="register-box-id">
						<p className="register-box-id-text">아이디</p>
						<input className="register-box-id-input" name="id" placeholder="아이디" onChange={onChangeInput} />
						<button className="register-box-id-check" onClick={onClickCheckID}>중복 확인</button>
					</div>
					<div className="register-box-pw">
						<p className="register-box-pw-text">비밀번호</p>
						<input className="register-box-pw-input" type="password" name="pw" placeholder="비밀번호" onChange={onChangeInput} /><br />
						<input className="register-box-pw-input" type="password" name="checkPw" placeholder="비밀번호 확인" onChange={onChangeInput} />
					</div>
					<div className="register-box-submit">
						<button className="register-box-submit-btn" onClick={signUp} >가입하기</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Box;