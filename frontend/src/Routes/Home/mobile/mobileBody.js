import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import { Icon } from 'antd';

const mobileBody = () => {
    const Production = styled.li`
        display: inline-block;
        margin-top: 50px;
    `;
	const Logo = styled.img`
    	float: left;
    	width: 80%;
    	margin-top: 29px;
    	position: absolute;
    	left: 80px;
	`;
    const Image = styled.div`
        background-image: url(${props => props.bgUrl});
        text-align: center;
        display: inline-block;
        width: 200px;
        height: 200px;
        border-radius: 30px 30px;
        background-size: cover;
        background-repeat: no-repeat;
        margin-right: 2rem;
        background-size: 100% 100%;
        box-shadow: 0 3px 6px rgba(0,0,0,.2), 0 3px 6px rgba(0,0,0,.2);
        margin-top:10px;
    `;
    const languageList = [{"seq":"0", "text":"html5.png"}, {"seq":"1","text":"css.png"}, {"seq":"2","text":"js.png"}, {"seq":"3", "text":"jquery.png"}, {"seq":"4","text":"php.png"}, {"seq":"5","text":"node.png"}, {"seq":"6","text":"vue.png"}, {"seq":"7","text":"react.png"}, {"seq":"8","text":"redux.png"}, {"seq":"9","text":"reduxSaga.png"},  {"seq":"10","text":"next.png"}];
	return (
		<>
			<div id="introduction">
                <section id="mobile_myself">
                    <h2 className="section-heading">
                        <span className="secondary">Intro</span>
                        <span className="mobile_primary">About myself</span>
                    </h2>
                    <div className="mobile-section-content fadeInRight">
                        <p>웹에 개발에 보람으로 삼고 있는 웹개발자 김병진 입니다.</p>

                        <p>저는 실무에서 쌓은 지식으로, 실무에서 웹사이트를 제작하면서 다년간 다양한 기술을 터득해 왔습니다.</p>

                        <p>스스로 생산자이자 동시에 소비자로서 쌓아올린 경험은, 클라이언트에게 보다 섬세하고 직접적이며, 실용적인 서비스를 제공할 것입니다.</p>

                        <p>최신 기술을 끊임없이 연구해, 이용자들에게 보이지 않는 작은 부분까지도 가장 효율적인 방법으로 구현하는 것이 저의 자부심입니다.</p>
                    </div>
                </section>
                <section id="mobile_skills">
                    <h2 className="section-heading">
                        <span className="secondary">Skills</span>
                        <span className="mobile_primary">What I can do</span>
                    </h2>
                    <div className="mobile-section-content fadeInRight">
                        <p>언어 (HTML5, CSS5, JavaScript, JQuery, PHP, Node.js, Mysql, Vue.js, React, Next.js, Redux, Redux-Saga) 를 활용해 웹접근성 사이트부터 서버연동 사이트, 반응형 웹사이트등을 제작할수 있습니다. </p>
                        <Production>
                            {languageList.map(data => (
                                <Image  key={data.seq} bgUrl={data.text ? require('../../../assets/language/'+ `${data.text}`) :  require("../../../assets/noPosterSmall.png")}/> 
                            ))} 
                        </Production>
                    </div>
                    <div id="mobileButton">
                        <Link to="/main">
                            <span id="mobileMore">더보기 <Icon type="arrow-right" style={{marginTop: "7px"}}/></span>
                        </Link>
                    </div>
                </section>
            </div>
		</>
	)
}

export default mobileBody