import React,{useState, useEffect} from 'react'
import { fetchData } from './fetchData'
import { DataGrid } from '@material-ui/data-grid';


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
        loadAllData()
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'cn', headerName: 'Company', width: 170 },
        { field: 'ap', headerName: 'Apply Date', width: 150, type:'date' },
        { field: 'rp', headerName: 'Response Date', width: 170, type:'date' },
        {
            field: 'loc',
            headerName: 'Location',
            width: 120,
        },
        {
            field: 'type',
            headerName: 'Job Type',
            width: 120,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        }
    ];

    const rows = [
    //     items.map(item => (
    //         {id:item.id ,cn:item.companyName}
        
    // ))
    { id: 1, cn: 'Snow', ap: 'Jon', status: 35 },
    { id: 2, cn: 'Lannister', ap: 'Cersei', status: 42 },

    ];
    return (
        <div className="dataTable">

        <div style={{ height: 600, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={7} checkboxSelection />
        </div>
        </div>
    );
}


// export default ShowData