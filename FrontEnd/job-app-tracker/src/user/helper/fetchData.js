import React from 'react'
import { API } from '../../Backend'


export const fetchData = () => {
    return fetch(`${API}ApplicationData/data/`, {method:"GET"})
    .then(response => {
        // console.log('API CALLING fetch data', response);
        return response.json();
    })
    .catch(err => console.log(err))
}
