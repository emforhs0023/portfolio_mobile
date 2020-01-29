import { all, fork, call, takeLatest, takeEvery, put, take, delay } from 'redux-saga/effects';
import axios from "axios"
import {
    DATA_LIST_SUCCESS,
    DATA_LIST_REQUEST,
    DATA_LIST_FAILURE,
    MY_DATA_SUCCESS,
    MY_DATA_REQUEST,
    MY_DATA_FAILURE,
    PROJECT_LIST_SUCCESS,
    PROJECT_LIST_REQUEST,
    PROJECT_LIST_FAILURE,
    PROJECT_HOMEPAGE_REQUEST,
    PROJECT_HOMEPAGE_SUCCESS,
    PROJECT_HOMEPAGE_FAILURE,
    PROJECT_MORE_SUCCESS,
    PROJECT_MORE_REQUEST,
    PROJECT_MORE_FAILURE,
    DATA_MOBILE_LIST_REQUEST,
    DATA_MOBILE_LIST_SUCCESS,
    DATA_MOBILE_LIST_FAILURE,
    DATA_MOBILE_MORE_LIST_REQUEST,
    DATA_MOBILE_MORE_LIST_SUCCESS,
    DATA_MOBILE_MORE_LIST_FAILURE,
} from '../reducers/user';

function mobileDataInfo(lastId = 0, limit = 4) {
  // 서버에 요청을 보내는 부분
  return axios.get(`/api/mobileDataInfo?lastId=${lastId}&limit=${limit}`);
}

function* mobileDataList(action) {
    try {
        const result = yield call(mobileDataInfo);
        yield put({ // put은 dispatch 동일
            type: DATA_MOBILE_LIST_SUCCESS,
            data: result.data,
        });
    } catch(e) {
        yield put({
            type: DATA_MOBILE_LIST_FAILURE
        })
    }
}

function* watchDataList() { 
    yield takeEvery(DATA_MOBILE_LIST_REQUEST, mobileDataList) // takeLatest가 LOG_IN의 데이터가 들어 오는지 기다리고 들어 오면 login으로 보낸다
}

function dataListAPI() {
  // 서버에 요청을 보내는 부분
  return axios.get('/api/dataInfo');
}

function* dataList() {
    try {
        const result = yield call(dataListAPI);
        
        yield put({ // put은 dispatch 동일
            type: DATA_LIST_SUCCESS,
            data: result.data,
        });
    } catch(e) {
        yield put({
            type: DATA_LIST_FAILURE
        })
    }
}

function* watchMobileDataList() { 
    yield takeEvery(DATA_LIST_REQUEST, dataList) // takeLatest가 LOG_IN의 데이터가 들어 오는지 기다리고 들어 오면 login으로 보낸다
}


function myDataAPI() {
  // 서버에 요청을 보내는 부분
  return axios.get('/api/logoInfo');
}

function* myData() {
    try {
        const result = yield call(myDataAPI);
        
        yield put({ // put은 dispatch 동일
            type: MY_DATA_SUCCESS,
            data: result.data,
        });
    } catch(e) {
        yield put({
            type: MY_DATA_FAILURE
        })
    }
}

function* watchMyData() { 
    yield takeEvery(MY_DATA_REQUEST, myData) // takeLatest가 LOG_IN의 데이터가 들어 오는지 기다리고 들어 오면 login으로 보낸다
}

function projrctDataAPI(data) {
  // 서버에 요청을 보내는 부분
  return axios.get(`/api/${data}`)
}

function* projectData(action) {
    try {

        const result = yield call(projrctDataAPI, action.data);
        
        yield put({ // put은 dispatch 동일
            type: PROJECT_LIST_SUCCESS,
            data: result.data,
        });
    } catch(e) {
        yield put({
            type: PROJECT_LIST_FAILURE
        })
    }
}

function* watchProject() { 
    yield takeEvery(PROJECT_LIST_REQUEST, projectData) // takeLatest가 LOG_IN의 데이터가 들어 오는지 기다리고 들어 오면 login으로 보낸다
}

function homepageAPI(lastId = 0, limit = 4) {
    // 서버에 요청을 보내는 부분
    return axios.get(`/api/homeList/data?lastId=${lastId}&limit=${limit}`)
}

function* homepageList(action) {
    try {
        const result = yield call(homepageAPI, action.lastId);
        yield put({ // put은 dispatch 동일
            type: PROJECT_HOMEPAGE_SUCCESS,
            data: result.data,
        });
    } catch(e) {
        yield put({
            type: PROJECT_HOMEPAGE_FAILURE
        })
    }
}

function* watchHomepageList() { 
    yield takeEvery(PROJECT_HOMEPAGE_REQUEST, homepageList) // takeLatest가 LOG_IN의 데이터가 들어 오는지 기다리고 들어 오면 login으로 보낸다
}

function moreListAPI(lastId, limit = 4) {
    // 서버에 요청을 보내는 부분
    
    return axios.get(`/api/more/data?lastId=${lastId}&limit=${limit}`)
}

function* moreList(action) {
    try {
        // console.log(action)
        const result = yield call(moreListAPI, action.lastId);
        yield put({ // put은 dispatch 동일
            type: PROJECT_MORE_SUCCESS,
            data: result.data,
        });
    } catch(e) {
        yield put({
            type: PROJECT_MORE_FAILURE
        })
    }
}

function* watchMoreList() { 
    yield takeEvery(PROJECT_MORE_REQUEST, moreList) // takeLatest가 LOG_IN의 데이터가 들어 오는지 기다리고 들어 오면 login으로 보낸다
}

function mobileMoreListAPI(lastId, limit = 4) {
    // 서버에 요청을 보내는 부분
    console.log(lastId)
    if(lastId != undefined) {
        return axios.get(`/api/mobile/more?lastId=${lastId}&limit=${limit}`)    
    }
    
}

function* mobileMoreList(action) {
    try {
        const result = yield call(mobileMoreListAPI, action.lastId);
        yield put({ // put은 dispatch 동일
            type: DATA_MOBILE_MORE_LIST_SUCCESS,
            data: result.data,
        });
    } catch(e) {
        yield put({
            type: DATA_MOBILE_MORE_LIST_FAILURE
        })
    }
}

function* watchMobileMoreList() { 
    yield takeEvery(DATA_MOBILE_MORE_LIST_REQUEST, mobileMoreList) // takeLatest가 LOG_IN의 데이터가 들어 오는지 기다리고 들어 오면 login으로 보낸다
}



export default function* userSaga() {
    yield all([
        fork(watchDataList),
        fork(watchMyData),
        fork(watchProject),
        fork(watchHomepageList),
        fork(watchMoreList),
        fork(watchMobileDataList),
        fork(watchMobileMoreList),
    ]);
}