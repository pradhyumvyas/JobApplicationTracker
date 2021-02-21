import React from 'react'
import {API} from "../../Backend"


function showData() {
    const fetchData = () =>{
        return fetch(`${API}/ApplicationData`, {
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify()
        })
        .then((response) =>{
            console.log(response.json());
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            {fetchData()}
        </div>
    )
}

export default showData