import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import { Icon } from 'antd';
import './footer.css';
import kakao from'../assets/kakaoLogo.png';

export default () => (
	<div>
		<footer role="contentinfo" id="footer" className="l-footer">
			<div className="l-section-holder l-footer-holder footer-widget-group" style={{paddingTop: "25px", paddingBottom: "25px"}}>
				<div id="contacts" className="footer-widget">
                    <h2 className="footer-heading">Contacts</h2>
                    <div className="footer-content">
                        <ul className="unstyled-list">
                            <li>
                                <div>
                                    <Icon type="mail" className = "footerIcon"/>
                                    <p className="iconed-text">emforhs0023@naver.com</p>
                                </div>
                            </li>
                            <li style={{clear: "both"}}>
                                <div title="전화">
                                    <Icon type="phone" className = "footerIcon" />
                                    <span className="iconed-text">010 2994 0238</span>
                                </div>
                            </li>
                            <li style={{clear: "both"}}>
                                <div title="카카오톡">
                                    {/*<Icon type="wechat" className = "footerIcon"/>*/}
                                    <img src={kakao} className = "footerIcon" style={{width: "11%" }}/>
                                    <span className="iconed-text">emforhs0023</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
			</div>
		</footer>
	</div>
);