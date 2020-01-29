import React, { useEffect, useCallback, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PROJECT_HOMEPAGE_REQUEST, PROJECT_MORE_REQUEST } from '../../store/reducers/user';
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomepageListPresenter from "./HomepageListPresenter";
import Loader from "../../Components/Loader"

const Containar = styled.div`
	
	width:100%;	
`;
const Homepage = () => {
	
	const { homepageList, loading, hasMorePost } = useSelector(state => state.user);
	const dispatch = useDispatch();
	const countRef = useRef([])

	useEffect(() => {
		window.scrollTo({
            top: 0,
        });
		dispatch({
            type: PROJECT_HOMEPAGE_REQUEST,
        });
	}, []);

	
	
	return (
		<>
			{homepageList.length == 0 ? <Loader /> : 
				<Containar>
					<div>
						<HomepageListPresenter data={homepageList} loading ={loading}/>
					</div>
				</Containar>	
			}
		</>
	)
}

export default Homepage

