import React from 'react'
import { API } from '../../Backend'

export const dataHelper = (id, token, userData) => {
    return fetch(`${API}ApplicationData/add/${id}/${token}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
    })
    .then((response) =>{
        return response.json();
    })
    .catch(err => console.log(err))
}



