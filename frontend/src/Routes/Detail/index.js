import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PROJECT_LIST_REQUEST } from '../../store/reducers/user';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../Components/Loader"
import DetailPresenter from "./DetailPresenter";
import DetailMobile from "./mobile/DetailMobile";


const Detail = () => {
	const { project, loading } = useSelector(state => state.user);
	const params = useParams();
	const dispatch = useDispatch();
	
	useEffect(() => {
		window.scrollTo({
            top: 0,
        });
		dispatch({
            type: PROJECT_LIST_REQUEST,
            data: params.id
        });
	}, []);
	
	
	return (
		<>	
			{window.outerWidth < 480 
			?
			<>
				{project.length == 0 ? <Loader /> : <DetailMobile seq = {project[0].seq} text = {project[0].text} projectName ={project[0].projectName} thumbnail ={project[0].thumbnail} participants ={project[0].participants} engagement ={project[0].engagement} contentImg = {project[0].contentImg} backImg ={project[0].backImg} firstDate ={project[0].firstDate} lastDate ={project[0].lastDate} />}					
			</>
			: 
			<>
				{project.length == 0 ? <Loader /> : <DetailPresenter seq = {project[0].seq} text = {project[0].text} projectName ={project[0].projectName} thumbnail ={project[0].thumbnail} participants ={project[0].participants} engagement ={project[0].engagement} contentImg = {project[0].contentImg} backImg ={project[0].backImg} firstDate ={project[0].firstDate} lastDate ={project[0].lastDate} />}		
			</>
			}
		</>
	)
}

export default Detail