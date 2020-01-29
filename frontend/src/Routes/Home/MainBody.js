import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import { Icon } from 'antd';


const MainBody = () => {

	return (
		<>
			<div id="introduction">
	           
				<section id="myself">
					<h2 className="section-heading">
						<span className="secondary">Intro</span>
						<span className="primary">About myself</span>
					</h2>
					<div className="section-content fadeInRight">
	                    <p>웹에 개발에 보람으로 삼고 있는 웹개발자 김병진 입니다.</p>

	                    <p>저는 실무에서 쌓은 지식으로, 실무에서 웹사이트를 제작하면서 다년간 다양한 기술을 터득해 왔습니다.</p>

	                    <p>스스로 생산자이자 동시에 소비자로서 쌓아올린 경험은, 클라이언트에게 보다 섬세하고 직접적이며, 실용적인 서비스를 제공할 것입니다.</p>

	                    <p>최신 기술을 끊임없이 연구해, 이용자들에게 보이지 않는 작은 부분까지도 가장 효율적인 방법으로 구현하는 것이 저의 자부심입니다.</p>
	                </div>
				</section>
				<section id="skills">
					<h2 className="section-heading">
	                    <span className="secondary">Skills</span>
	                    <span className="primary">What I can do</span>
	                </h2>
	                <div className="section-content fadeInRight">
	                    <figure>
	                        <figcaption className="list-caption">HTML</figcaption>
	                        <ul className="skill-list ">
	                            <li><Icon type="file-done" /> HTML5 코딩 제작</li>
	                            <li><Icon type="file-done" /> 모바일 페이지 제작</li>
	                        </ul>
	                    </figure>

	                    <figure>
	                        <figcaption className="list-caption">JavaScript</figcaption>
	                        <ul className="skill-list ">
	                            <li><Icon type="file-done" /> JavaScript (ES6 활용 가능)</li>
	                            <li><Icon type="file-done" /> jQuery 1~3, jQuery UI</li>
	                            <li><Icon type="file-done" /> AJAX</li>
	                            <li><Icon type="file-done" /> AXIOS</li>
	                        </ul>
	                    </figure>
						
						<figure>
	                        <figcaption className="list-caption">PHP</figcaption>
	                        <ul className="skill-list ">
	                            <li><Icon type="file-done" /> PHP 이용하여 REST api 가능</li>
	                        </ul>
	                    </figure>

						<figure>
	                        <figcaption className="list-caption">Node.js</figcaption>
	                        <ul className="skill-list ">
	                            <li><Icon type="file-done" /> express을 사용하여 웹서버 구현 가능</li>
	                            <li><Icon type="file-done" /> backend와 frontend 연동 가능</li>
	                            <li><Icon type="file-done" /> HTTP 구조로 request, response 가능</li>
	                            <li><Icon type="file-done" /> MQTT 통신 개발 가능</li>
	                            <li><Icon type="file-done" /> Socket.io 개발 가능</li>
	                        </ul>
	                    </figure>
						
						<figure>
	                        <figcaption className="list-caption">MySql</figcaption>
	                        <ul className="skill-list ">
	                            <li><Icon type="file-done" /> database 설계 가능</li>
	                            <li><Icon type="file-done" /> MySql 스케줄러 가능</li>
	                            <li><Icon type="file-done" /> query 가능</li>
	                        </ul>
	                    </figure>

	                    <figure>
	                        <figcaption className="list-caption">사용 가능 한 언어</figcaption>
	                        <ul className="skill-list ">
	                            <li><Icon type="file-done" /> HTML</li>
	                            <li><Icon type="file-done" /> CSS</li>
	                            <li><Icon type="file-done" /> Javascript</li>
	                            <li><Icon type="file-done" /> Jquery</li>
	                            <li><Icon type="file-done" /> PHP</li>
	                            <li><Icon type="file-done" /> Node.js</li>
	                            <li><Icon type="file-done" /> Mysql</li>
	                            <li><Icon type="file-done" /> Vue.js</li>
	                            <li><Icon type="file-done" /> React.js</li>
	                            <li><Icon type="file-done" /> Next.js</li>
	                            <li><Icon type="file-done" /> Redux</li>
	                            <li><Icon type="file-done" /> Redux-Saga</li>
	                        </ul>
	                    </figure>
	                </div>
	                <div id="button">
						<Link to="/main">
							<span id="more">더보기</span>
						</Link>
					</div>
	            </section>
			</div>
		</>
	)
}

export default MainBody