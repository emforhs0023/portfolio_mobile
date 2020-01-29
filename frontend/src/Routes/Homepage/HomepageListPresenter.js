import React, { useEffect, useCallback, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PROJECT_HOMEPAGE_REQUEST, PROJECT_MORE_REQUEST } from '../../store/reducers/user';
import { useParams } from 'react-router-dom';
import { Icon } from 'antd';
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeImgList from "./HomeImgList"
import Loader from "../../Components/Loader"

    
const HomepageListPresenter = ({data}) => {

	const { homepageList, hasMorePost, loading } = useSelector(state => state.user);
	const dispatch = useDispatch();
	const countRef = useRef([])

		const onScroll = useCallback(() => {
			
			
				if(homepageList.length != 0) {
					if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
						
						const lastId = homepageList[homepageList.length - 1].seq
				 		
						if (!countRef.current.includes(lastId)) {
							dispatch({
		                        type: PROJECT_MORE_REQUEST,
		                        lastId,
		                    });
		                    countRef.current.push(lastId)
		                }
		            }
			    }

	  	}, [homepageList.length, hasMorePost]);	
	
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
  	}, [homepageList.length, hasMorePost]);

	
	return (
		<>	
			<Link to="/">
				<div style={{fontSize: "48px", position: "absolute", top: "17px", right: "15px", float: "right", color: "white"}}>
					<Icon type="home" theme="filled" />
				</div>			
			</Link>
			
			{data.map((v) => v.img != null && <HomeImgList img={v.img} title={v.title}/>)}
			
		</>
	)
}

export default HomepageListPresenter

