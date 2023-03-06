import { INCREMENT, DECREMENT } from './types';


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