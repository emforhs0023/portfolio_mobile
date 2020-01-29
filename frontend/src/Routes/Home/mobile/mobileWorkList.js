import React, { useEffect, useCallback, useState, useRef  } from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import { Icon } from 'antd';
import MobilePoster from "../../../Components/mobile/mobilePoster";
// import MobileWorkInfo from "./mobileWorkInfo";

import { DATA_MOBILE_LIST_REQUEST, DATA_MOBILE_MORE_LIST_REQUEST } from '../../../store/reducers/user';

const Container = styled.div`
    :not(:last-child){margin-bottom:50px;}
    text-align: center;
    margin-top:25px;
`;

const Title = styled.span`

    font-size:50px;
    font-weight:600;
`;

const Grid = styled.div`
    grid-gap:25px;
`;

const MobileWorkList = () => {
    
    const { dataList1, loading, hasMobilePost } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const countRef = useRef([])
    
    useEffect(() => {
        dispatch({
            type: DATA_MOBILE_LIST_REQUEST
        });
    }, []);

    return (
		<>
            <section role="region" id="works" className="l-section">
                <div className="l-section-holder">
                    <h2 className="section-heading is-init is-animated" data-animation="fade-up">
                        <span className="secondary">Portfolio</span>
                        <span className="mobile_primary">My works</span>
                        <hr style={{width: "150px", color: "#30b7e8", border: "1px solid #30b7e8", margin: "0 auto"}}/>
                    </h2>
                </div>
                <Container>

                        <Title>About</Title>
                        <Grid>
                            {dataList1.length == 0 ? null : <MobilePoster data={dataList1}/>}
                        </Grid>
                    </Container> 
            </section>
		</>
	)
}

export default MobileWorkList

