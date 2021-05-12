// import React from 'react'
import { API } from '../../Backend'


export const fetchData = (id) => {
    return fetch(`${API}ApplicationData/data/${id}/`, {method:"GET"})
    .then(response => {
        // console.log('API CALLING fetch data', response);
        return response.json();
    })
    .catch(err => console.log(err))
}

