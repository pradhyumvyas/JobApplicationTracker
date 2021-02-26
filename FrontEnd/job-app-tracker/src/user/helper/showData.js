import React,{useState, useEffect} from 'react'
import { fetchData } from './fetchData'

export default function ShowData() {
    const [items, setItems] = useState([])
    const [error, setError] = useState(false)

    const loadAllData = () => {
        fetchData()
        .then((data) =>{
            console.log("my data", data);
            if(data.error){
                setError(data.error)
                console.log("Errorrr");
                console.log(error);
            }
            else{
                console.log("Inside else");
                setItems(data)
            }
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        loadAllData();
    }, []);
    return (
        <div>
        <ul>
            <h1>My data</h1>
        {items.map(item => (
            <li key={item.companyName}>
                {item.companyName} <br/>
                {item.applyDate}
            </li>
        ))}
        </ul>
        </div>
    );
}


// export default ShowData