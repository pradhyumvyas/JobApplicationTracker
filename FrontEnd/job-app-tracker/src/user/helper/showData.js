import React from 'react'
import { fetchData } from './fetchData'

function showData() {
    // const fetchData = () =>{
    //     return fetch(`${API}/ApplicationData`, {
    //         method:"GET",
    //         headers:{
    //             Accept:"application/json",
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify()
    //     })
    //     .then((response) =>{
    //         console.log(response.json());
    //     })
    //     .catch(err => console.log(err))
    // }
    return (
        fetchData()
    )
}

export default showData