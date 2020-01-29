import React from "react";
import MainHeader from "./MainHeader"
import MobileHeader from "./MobileHeader"



const Main = () => {
	
	return (
		<>
			{window.outerWidth < 480 
			?
			<div>
				<MobileHeader />
			</div>
			:
			<div>
				<MainHeader />
			</div>
			}
		</>
	)
}

export default Main