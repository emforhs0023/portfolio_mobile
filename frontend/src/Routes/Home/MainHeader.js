import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import backLogo from '../../assets/backLogo.png'
import logo from '../../assets/logo2.png'

const MainHeader = () => {

	const Logo = styled.img`
    	float:left;
    	width:50%; margin-top: 57px; position: absolute; left: 230px;

    	@media only screen and (min-width : 1024px) and (max-width : 1280px){
    		margin-top: 114px;
    	}

    	@media only screen and (min-width : 800px) and (max-width : 1024px){
    		margin-top: 132px;
    	}
    `;
	
	const Image = styled.div`
		background-image: url(${props => props.bgUrl});
	    background-size: 100% 100%;
	`;

	return (
		<>
			<Image bgUrl={backLogo}>
        		<div id= "asdfasf" style={{height:"500px", position:"relative", margin: "0 auto"}}>
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
          		</div>   
        	</Image>
		</>
	)
}

	// const logoZone = styled.div`
	// 	height: 460px;
	// `
	// const eMailName = styled.div`
	//     float: right;
	//     margin-right: 15px;
	//     font-size: 20px;
	//     font-weight: 700;
	// `

export default MainHeader