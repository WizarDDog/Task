import { GET_DATA, SAVE_DATA } from './consts';

export function getData(payload) {
    return {
        type: GET_DATA,
        payload,
    }
} 

export function saveData(payload) {
    return {
        type: SAVE_DATA,
        payload,
    }
} 
