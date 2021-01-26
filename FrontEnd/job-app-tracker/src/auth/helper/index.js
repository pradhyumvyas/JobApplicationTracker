import {API} from "../../Backend"



export const signup = user => {
    return fetch(`${API}user/`, {
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then((response) =>{
        return response.json();
    })
    .catch(err => console.log(err))
}

export const signin = user =>{
    return fetch(`${API}/login`, {
        
    })
}