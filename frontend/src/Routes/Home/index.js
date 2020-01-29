import React from "react";
import MainHeader from "./MainHeader"
import MainBody from "./MainBody"
import MainWorkList from "./MainWorkList"
import BackTop from './BackTop';
import MobileHeader from './mobile/mobileHeader';
import MobileBody from './mobile/mobileBody';
import MobileWorkList from './mobile/mobileWorkList';
import "./Home.css";

const Home = () => {
	return (
		<>	
			{window.outerWidth < 480 
			? 
				<>
					<div>
						<MobileHeader />
					</div>
					<div>
						<MobileBody />
					</div>
					<div>
						<MobileWorkList />
					</div>
				</>
			:
				<>
					<div>
						<MainHeader />
					</div>
					<div>
						<MainBody />
					</div>	
					<div>
						<MainWorkList />
						<BackTop />
					</div>
				</>
			}
			
				
		</>
	)
}

export default Home