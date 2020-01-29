import React, { useEffect, useCallback, useState, useRef  } from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import { Icon } from 'antd';
import MobileWorkList from "./mobileWorkList";
import { DATA_MOBILE_MORE_LIST_REQUEST } from '../../../store/reducers/user';

const MobileWorkInfo = ({data}) => {
    
    const { dataList1, loading, hasMobilePost } = useSelector(state => state.user);
    const dispatch = useDispatch();
	const countRef = useRef([])

		const onScroll = useCallback(() => {
			
			
				if(dataList1.length != 0) {
					if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
						
						const lastId = dataList1[dataList1.length - 1].seq
				 		
						if (!countRef.current.includes(lastId)) {
							dispatch({
		                        type: DATA_MOBILE_MORE_LIST_REQUEST,
		                        lastId,
		                    });
		                    countRef.current.push(lastId)
		                }
		            }
			    }

	  	}, [dataList1.length, hasMobilePost]);	
	
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
  	}, [dataList1.length, hasMobilePost]);
  

    return (
		<>
			{console.log(dataList1)}
		</>
	)
}

export default MobileWorkInfo