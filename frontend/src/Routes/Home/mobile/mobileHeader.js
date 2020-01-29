import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import logo from '../../../assets/logo2.png'

const MainHeader = () => {

	const Logo = styled.img`
    	float: left;
    	width: 80%;
    	margin-top: 29px;
    	position: absolute;
    	left: 80px;
	`;

	return (
		<>
			<div style={{height: "460px"}}>
    			<Fade bottom>    
					<Logo src={logo}  />
	            </Fade>
    		</div>
    		<div style={{float: "right", marginRight: "15px", fontSize: "20px", fontWeight: "700" }} >
    			<Fade left> 
    			E-Mail : emforhs0023@naver.com
    			</Fade>
    		</div>
		</>
	)
}

export default MainHeader