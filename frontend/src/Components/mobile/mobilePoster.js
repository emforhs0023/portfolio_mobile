import React, { useEffect, useCallback, useState, useRef  } from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { DATA_MOBILE_MORE_LIST_REQUEST } from '../../store/reducers/user';
import Loader from "../Loader";

const Container = styled.div`
    font-size:12px;
`;


// background-image: url(${props => });
const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height:400px;
    background-size:cover;
    border-radius:4px;
    background-position: center center;
    transition:opacity 0.1s linear;
`;

const Rating = styled.span`
    bottom:5px;
    right:5px;
    position: absolute;
    opacity:0;
    transition:opacity 0.1s linear;
`;
const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    border-radius: 13px;
    margin-top: 50px;
    &:hover{
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1; 
        }
    }
`;

const Title = styled.p`
    text-align: left;
    display: block;
    font-size: 40px;
    border-bottom: 4px solid black;
`;



const Year = styled.span`
    font-size:10px;
    color:rgba(255, 255, 255, 0.5);
`;

const MobilePoster = ({data}) => {
    const { loading, hasMobilePost } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const countRef = useRef([])


    const onScroll = useCallback(() => {
            if(data.length != 0) {
                if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 200) {
                    
                    const lastId = data[data.length - 1].seq
                    
                    if (!countRef.current.includes(lastId)) {
                        countRef.current.push(lastId)
                        dispatch({
                            type: DATA_MOBILE_MORE_LIST_REQUEST,
                            lastId,
                        });
                    }
                }
            }
    }, [data.length, hasMobilePost]); 

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [data.length, hasMobilePost]);

    return (
        <>  
            {data.length == 0 ? <Loader/> :
                data.map((v) => 
                    
                    <Link to={v.projectName === "Homepage" ? "/page" : `/${v.projectName}`}>
                        <div>
                            <Container>
                                <ImageContainer>
                                   <Image bgUrl={v.thumbnail ? require('../../assets/' +`${v.thumbnail}`) : require("../../assets/noPosterSmall.png")} /> 
                                   <Title><span  style={{color: "#848383"}}> projectName : </span> <span style={{color: "#848383"}}>{v.projectName}</span></Title>
                                </ImageContainer>
                            </Container>
                        </div>
                    </Link>
            )}
        </>
    )
}


export default MobilePoster;