import React, { ReactNode } from "react";
import Nav from "../components/common/Nav/Nav"

type ChildProps = {
	children: ReactNode;
}

const MainContainer: React.FC<ChildProps> = ({ children }): JSX.Element => {

	return (
		<>
			<Nav />
			<div>
				{children}
			</div>
		</>
	)
}

export default MainContainer;