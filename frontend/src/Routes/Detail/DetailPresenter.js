import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PROJECT_LIST_REQUEST } from '../../store/reducers/user';
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from 'moment';
import "./Detail.css";

moment.locale('ko');

const Containar = styled.div`
	height: calc(104vh - 0px);
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
    background-size: 100% 100%;
`;


const SubCover = styled.div`
	width:30%;
	background-image: url(${props => props.bgImage});
	background-position: center center;
	background-size:cover;
	height:40%;
	border-radius: 5px;
    background-size: 100% 100%;
`;

const Data = styled.div`
	width: 70%;
	margin-left: 10px;
`;

const Title = styled.h3`
	font-size : 32px;
	margin-bottom: 20px;
    float: left;
    width: 41%;
    margin-left: 10px;
`

const SubTitle = styled.h3`
	font-size: 32px;
    margin-bottom: 20px;
    float: left;
    width: 44%;
    margin-left: 10px;
`


const ItemContainar = styled.div`
	margin: 20px 0;
`
const Production = styled.li`
	display: inline-block;
	// margin: 20px;
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
`;
const Date = styled.p`
    float: left;
    width: 55%;
    height: 14%;
    line-height: 4;
    font-size: 19px;
    font-weight: 600;
    
`
const SubDate = styled.p`
    float: left;
    width: 43%;
    line-height: 4;
    font-size: 19px;
    font-weight: 600;
    margin-left: 17px;
`


const Repos = styled.div`
    background: #30b7e8;
    border-radius: 44px;
    color: white;
    display: inline-block;
    min-width: 7em;
    height: 44px;
    margin: 0;
    overflow: hidden;
    padding: 12px 16px 14px;
    vertical-align: middle;
    letter-spacing: -.03em;
    line-height: 18px;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    box-sizing: border-box;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    position: relative;
    cursor: pointer; 
    float: right;
    margin-left:10px;
`
const Item = styled.div`
	clear: both;   
`

const wellTagList = [{"seq":"0", "text":"html5.png"}, {"seq":"1","text":"css.png"},{"seq":"2", "text":"jquery.png"}, {"seq":"3","text":"js.png"}, {"seq":"4","text":"mysql.png"}, {"seq":"5","text":"node.png"}];
const wellTag = [{"seq":"0", "text":"pusan.png"}, {"seq":"6","text":"busan.jpg"},{"seq":"7", "text":"bhs.jpg"}];

const mtagTagList = [{"seq":"0", "text":"html5.png"}, {"seq":"1","text":"css.png"},{"seq":"2", "text":"jquery.png"}, {"seq":"3","text":"js.png"}, {"seq":"4","text":"mysql.png"}, {"seq":"5","text":"node.png"}];
const mtag = [{"seq":"0", "text":"hum.png"}];

const artikList = [{"seq":"0", "text":"html5.png"}, {"seq":"1","text":"css.png"},{"seq":"2", "text":"jquery.png"}, {"seq":"3","text":"js.png"}, {"seq":"4","text":"mysql.png"}, {"seq":"5","text":"php.png"}, {"seq":"6","text":"xe.png"}];
const artik = [{"seq":"0", "text":"pusan.png"}, {"seq":"6","text":"due.png"}, {"seq":"7", "text":"kumgang.png"}];

const muppyList = [{"seq":"0", "text":"html5.png"}, {"seq":"1","text":"css.png"}, {"seq":"3","text":"js.png"}, {"seq":"5","text":"php.png"}];
const muppy = [{"seq":"0", "text":"logo.png"}];

const withcubeList = [{"seq":"0", "text":"html5.png"}, {"seq":"1","text":"css.png"},{"seq":"2", "text":"jquery.png"}, {"seq":"3","text":"js.png"}, {"seq":"4","text":"mysql.png"}, {"seq":"5","text":"php.png"}];
const withcube = [{"seq":"0", "text":"logo.png"}];

const fsrntList = [{"seq":"0", "text":"html5.png"}, {"seq":"1","text":"css.png"},{"seq":"2", "text":"jquery.png"}, {"seq":"3","text":"js.png"}, {"seq":"4","text":"php.png"}];
const fsrnt = [{"seq":"0", "text":"logo.png"}];

const soosang1List = [{"seq":"0", "text":"html5.png"}, {"seq":"1","text":"css.png"},{"seq":"2", "text":"jquery.png"}, {"seq":"3","text":"js.png"}, {"seq":"4","text":"php.png"}];
const soosang1 = [{"seq":"0", "text":"logo.png"}];

const soosang2List = [{"seq":"0", "text":"html5.png"}, {"seq":"1","text":"css.png"},{"seq":"2", "text":"jquery.png"}, {"seq":"3","text":"js.png"}, {"seq":"4","text":"php.png"}];
const soosang2 = [{"seq":"0", "text":"logo.png"}];

const mockChartList = [{"seq":"0", "text":"html5.png"}, {"seq":"1","text":"css.png"},{"seq":"2", "text":"jquery.png"}, {"seq":"3","text":"js.png"}, {"seq":"4","text":"mysql.png"}, {"seq":"5","text":"node.png"}];
const mockChart = [{"seq":"0", "text":"logo.png"}];

const jjinipiaList = [{"seq":"0", "text":"html5.png"}, {"seq":"1","text":"css.png"}, {"seq":"2","text":"js.png"}, {"seq":"3","text":"mysql.png"}, {"seq":"4","text":"react.png"}, {"seq":"5","text":"redux.png"}, {"seq":"6","text":"reduxSaga.png"}, {"seq":"7","text":"node.png"}];
const jjinipia = [{"seq":"0", "text":"logo.png"}];

const DetailPresenter = ({ seq, projectName, text, thumbnail, participants, engagement, contentImg, backImg, firstDate, lastDate }) => {
	const { project, loading } = useSelector(state => state.user);
	const params = useParams();
	
	
	return (
		<>
			<Containar className={projectName == "Mtag" ? "mtagBackColor" : null}> 
				<Backdrop bgImage= {backImg ? require('../../assets/' +`${backImg}`) : require("../../assets/noPosterSmall.png")}/>
				<Content>
					
					{window.outerWidth < 480 ? <SubCover bgImage={contentImg ? require('../../assets/' +`${contentImg}`) : null} /> : <Cover bgImage={contentImg ? require('../../assets/' +`${contentImg}`) : null} /> }
					<Data>
						{window.outerWidth < 480 ?
						
							<SubTitle>
								<p className = "titleFont">{'0'+ seq}</p>
								<p>{`${projectName}`}</p>
							</SubTitle> 

						: 
							<Title>
								<p className = "titleFont">{'0'+ seq}</p>
								<p>{`${projectName}`}</p>
							</Title> 
						}
						{window.outerWidth < 480 ?
							<SubDate>
								({firstDate ? moment(firstDate).format('YYYY.MM.DD') : moment(firstDate).format('YYYY.MM.DD')})
								~
								({lastDate ? moment(lastDate).format('YYYY.MM.DD') : moment(lastDate).format('YYYY.MM.DD')})
							</SubDate>
						:
							<Date>
								({firstDate ? moment(firstDate).format('YYYY.MM.DD') : moment(firstDate).format('YYYY.MM.DD')})
								~
								({lastDate ? moment(lastDate).format('YYYY.MM.DD') : moment(lastDate).format('YYYY.MM.DD')})
							</Date> 
						}
						<div style={{clear: "both", marginBottom: "10px"}}>
							<h4 className="participantsZoon">참여 인원 : </h4> <span className="participantsZoon">{participants}</span> <h4 className="participantsZoon"> 기여도 :</h4> <span className="participantsZoon">{engagement}</span>
						</div>

						<br/>

						<Item className="explanation">
							{text}
						</Item>
						<ItemContainar>
							<h2>개발 언어</h2>
							{projectName == "WellTag" &&(
								<Production>
									{wellTagList.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/language/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "Mtag" &&(
								<Production>
									{mtagTagList.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/language/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "artikPlus" &&(
								<Production>
									{artikList.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/language/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "Muppy" &&(
								<Production>
									{muppyList.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/language/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "Withcube" &&(
								<Production>
									{withcubeList.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/language/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "FSrnt" &&(
								<Production>
									{fsrntList.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/language/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "soosang1" &&(
								<Production>
									{soosang1List.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/language/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "soosang2" &&(
								<Production>
									{soosang2List.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/language/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "MockChart" &&(
								<Production>
									{mockChartList.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/language/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "Jjinipia" &&(
								<Production>
									{jjinipiaList.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/language/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}

						</ItemContainar>
						<ItemContainar>
							<h2>사용 처</h2>
							{projectName == "WellTag" &&(
								<Production>
									{wellTag.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/welltag/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "Mtag" &&(
								<Production>
									{mtag.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/mtag/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "artikPlus" &&(
								<Production>
									{artik.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/artik/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "Muppy" &&(
								<Production>
									{muppy.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/muppy/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "Withcube" &&(
								<Production>
									{withcube.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/withcube/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "FSrnt" &&(
								<Production>
									{fsrnt.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/fsrnt/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "soosang1" &&(
								<Production>
									{soosang1.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/soosang1/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "soosang2" &&(
								<Production>
									{soosang2.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/soosang2/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "MockChart" &&(
								<Production>
									{mockChart.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/mockChart/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							{projectName == "Jjinipia" &&(
								<Production>
									{jjinipia.map(data => (
										<Image  key={data.seq} bgUrl={data.text ? require('../../assets/mockChart/'+ `${data.text}`) :  require("../../assets/noPosterSmall.png")}/> 
									))}	
								</Production>
							)}
							
							
						</ItemContainar>
						<div>
							<Link to={"/"}>
								<Repos>
									Home
								</Repos>
							</Link>
							<Repos>
								Repos
							</Repos>
						</div>
					</Data>
				</Content>
			</Containar>
		</>
	)
}

export default DetailPresenter