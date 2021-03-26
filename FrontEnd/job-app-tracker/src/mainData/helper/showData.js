import React,{useState, useEffect} from 'react'
import { fetchData } from './fetchData'
import { DataGrid } from '@material-ui/data-grid';


export default function ShowData() {

    const myDataFromLS = JSON.parse(localStorage.getItem("jwt"))
    const myUsername = myDataFromLS.user.username


    const [items, setItems] = useState([])
    const [error, setError] = useState(false)

    const loadAllData = () => {
        fetchData(myUsername)
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
        { field: 'cn', headerName: 'Company', width: 120 },
        { field: 'jp', headerName: 'Profile', width: 180 },
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
            className:"status"
        }
    ];
    const statusFunction = (clr) =>{
        if(clr == "Selected"){
            const mlr = <div className="status">
                {/* <Button variant="contained" color="secondary">
                    Selected
                </Button> */}
                Selected
            </div>
            // console.log('meee',mlr.props.children);
            return (
                mlr.props.children
            )
        } else if(clr == "Pending"){
            const mlr = <div className="status">
                Pending
            </div>
            return (
                mlr.props.children
            )
        } else{
            const mlr = <div className="status">
                Rejected
            </div>
            return (
                mlr.props.children
            )
        }
    }
    const myCount = 1;
    const rows = []
    items.map(item =>{
        rows.push({id:item.id, cn:item.companyName, ap:item.applyDate, 
                    rp:item.responseDate, loc:item.jobLocation, type:item.jobType, 
                    jp:item.jobProfile,
                    status:statusFunction(item.status)})
    })
    // console.log("My array chek", rows);

    // const rows = [
    // //     items.map(item => (
    // //         {id:item.id ,cn:item.companyName}
        
    // // )),
    // { id: 1, cn: 'Snow', ap: 'Jon', status: 35 },
    // { id: 2, cn: 'Lannister', ap: 'Cersei', status: 42 },

    // ];
    return (
        <div className="dataTable">

            <div style={{ height: 600, width:'auto' }} className="mainTable">
                <DataGrid rows={rows} columns={columns} pageSize={7} checkboxSelection />
            </div>
        
        </div>
    );
}


// export default ShowData