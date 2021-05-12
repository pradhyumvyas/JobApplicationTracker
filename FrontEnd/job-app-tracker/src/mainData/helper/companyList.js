import { API } from "../../Backend";

export const companyLists = () =>{
    return fetch(`${API}ApplicationData/companyLists/`,{
        method:'GET'
    })
    .then((response)=>{
        return response.json()
    })
    .catch(err => console.log(err))
}