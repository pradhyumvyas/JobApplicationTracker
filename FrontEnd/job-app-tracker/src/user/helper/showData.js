import React from 'react'
import {API} from "../../Backend"


function showData() {
    const fetchData = () =>{
        return fetch(`${API}/ApplicationData`)
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