import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from 'antd';
import "./main.css";
import { MY_DATA_REQUEST } from '../../store/reducers/user';
const Containar = styled.div`
	/*height: calc(104vh - 0px);*/
	width:100%;	
	padding: 50px;
`;

const Backdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${props => props.bgImage});
	background-position: center center;
	background-size: cover;
	filter: blur(3px);
	opacity: 0.5;
	z-index: 0;
`;

const Content = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	z-index: 1;
	height: 100%;
`;

const Cover = styled.div`
	width:30%;
	background-image: url(${props => props.bgImage});
	background-position: center center;
	background-size:cover;
	height:100%;
	border-radius: 5px;
`;

const SubCover = styled.div`
	width:30%;
	background-image: url(${props => props.bgImage});
	background-position: center center;
	background-size:cover;
	height:40%;
	border-radius: 5px;
`;


const Data = styled.div`
	width: 100%;
	margin-left: 10px;
`;

const Title = styled.h3`
	font-size : 50px;
	margin-bottom: 20px;
`
const ItemContainar = styled.div`
	text-align: center;
	width:100%;
`
const Item = styled.h4`
    font-size: 30px;
`

const ItemP = styled.p`
	    
`

const Divider = styled.span`
	margin:0 10px;
`

const Overview = styled.p`
	font-size: 12px;
	opacity: 0.7;
	line-height: 1.5;
	width: 50%;
`

const Imdb = styled.a`
	display: inline-block;
	position: relative;
	top: 4px;
	width: 16px;
	height: 16px;
	border-radius: 2px;
	background-image: url(${props => props.src});
	background-position: center center;
	background-size: cover;
`;

const ProductionCompanies = styled.ul`
	width: 100%;
	overflow: auto;
	white-space: nowrap;
	margin: 20px 0;
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 5px;
	& > h2 {
		font-size: 14px;
		margin: 12px;
	}
`;
const Production = styled.li`
	display: inline-block;
	margin: 20px;
`;
const ProductionLogo = styled.img`
	width: 100px;
`;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    text-align: center;
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 30px 30px;
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: 2rem;
    background-size: 100% 100%;
    box-shadow: 0 3px 6px rgba(0,0,0,.2), 0 3px 6px rgba(0,0,0,.2);
    margin-top:10px;
    background-color: white;
`;

const MobileImg = styled.img`
    margin-top:10px;
    width: 100%;
`

const MobileHeader = () => {

	const { me, loading } = useSelector(state => state.user);
	const dispatch = useDispatch();
	
	useEffect(() => {
		window.scrollTo({
            top: 0,
        });
	    dispatch({
            type: MY_DATA_REQUEST
        });

	}, []);
	

	return (
		<>	
			<Containar>
				<Backdrop bgImage={require("../../assets/myBack.jpg")} />
				<Content>
					<Data>
						<Title style={{float: "left"}}>김병진(Kim Byung Jin)</Title> 
						<div style={{float: "right", fontSize: "39px"}}>
							<Link to="/">
								<span id="more"><Icon type="home" /></span>
							</Link>
						</div>
						<Item className="frontEnd">
							Front-end Developer / backend developer (Full stack)
						</Item>
						
						<MobileImg src={require("../../assets/my.jpg")} alt=""/>
						
						<ItemContainar className="left">
							<div className="profileData">
								Profile
							</div>
							<br/>
							<Item>
								1991.12.03(음력) / 1992.01.07(양력) 
							</Item>
							<br/>
							<Item>
								부산 광역시 서구 암남동 
							</Item>
							<br/>	
							
							<Item>
								010-2994-0238
							</Item>	
							<br/>
							
							<Item>
								emforhs0023@naver.com
							</Item>
							<br/>
							<ul className="personality">
								<li>.업무에 있어서는 신중한 태도</li>
								<li>.새로운 업무에 두려움이 없으며 적극적으로 배우는 자세</li>
								<li>.실패를 두려워 하지 않는 도전정신</li>
							</ul>
						</ItemContainar>
						<ItemContainar className="right">
							<div className="profileData">
								Education
							</div>
							<br/>
							<div>
								<Item>
									2010.03 ~ 2017.02 : 
								</Item>
								<Item>
									<span style={{marginLeft: "10px"}}>부산 동의대학교 학사 졸업</span>
								</Item>
							</div>
							<br/>
							<div>
								<Item>
									2017.03 ~ 2019.02 : 
								</Item>	
								<Item>
									<span style={{marginLeft: "10px"}}>부산 동의대학교 대학원</span>
									<br/>
									<span style={{marginLeft: "154px"}}>석사 졸업</span>
								</Item>
							</div>
							<br/>
							<div>
								<Item>
									2017.03 ~ 현재 : 
								</Item>	
								<Item>
									(주)수상에스티 입사
								</Item>
							</div>
						</ItemContainar>

					</Data>
				</Content>
			</Containar>
		</>
	)
}

export default MobileHeader