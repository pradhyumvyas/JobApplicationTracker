import React from 'react'
import { API } from '../../Backend'

export const dataHelper = (id, token, userData) => {
    console.log("Innnnnnnnn this fun");

    const formData = new FormData();
    for (const name in userData){
        formData.append(name, userData[name])
    }

    // const formData = new FormData();

    return fetch(`${API}ApplicationData/add/${id}/${token}/`,{
        method:"POST",
        body:formData  
    })
    .then((response) =>{
        console.log("Innnnnnnnn this", response);
        return response.json();
    })
    .catch(err => console.log(err))
}


