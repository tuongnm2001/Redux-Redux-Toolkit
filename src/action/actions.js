import {
    INCREMENT, DECREMENT,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR
} from './types';

import axios from 'axios'

export const increaseCounter = () => {

    return {

        type: INCREMENT,
        payload: { name: 'nmt', age: 22 }

    };

};

export const decreaseCounter = () => {

    return {

        type: DECREMENT,

    };

};


export const fetchAllUser = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUserRequest());
        try {
            const res = await axios.get(`http://localhost:8080/users/all`)
            const data = res && res.data ? res.data : []
            dispatch(fetchUserSuccess(data))
        } catch (error) {
            dispatch(fetchUserError())
        }
    }
}

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        dataUsers: data
    }
}

export const fetchUserError = () => {
    return {
        type: FETCH_USER_ERROR
    }
}

export const createUserRequest = () => {
    return {
        type: CREATE_USER_REQUEST
    }
}

export const createUserSuccess = () => {
    return {
        type: CREATE_USER_SUCCESS
    }
}

export const createUserError = () => {
    return {
        type: CREATE_USER_ERROR
    }
}

export const createNewUserRedux = (email, password, username) => {
    return async (dispatch, getState) => {
        dispatch(createUserRequest())
        try {
            const res = await axios.post(`http://localhost:8080/users/create`, { email, password, username })
            if (res && res.data.errCode === 0) {
                dispatch(createUserSuccess())
                dispatch(fetchAllUser())
            }
        } catch (error) {
            console.log(error);
            dispatch(createUserError())
        }
    }
}