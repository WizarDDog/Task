import { GET_DATA, SAVE_DATA } from './consts';

export function getData(payload) {
    console.log("11111111", payload)
    return {
        type: GET_DATA,
        payload,
    }
} 

export function saveData(payload) {
  console.log("33333333333")

    return {
        type: SAVE_DATA,
        payload,
    }
} 
