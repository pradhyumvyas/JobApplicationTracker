
import React, {useState, useEffect} from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, AppBar, Card, CardContent, Typography} from '@material-ui/core'
import {dataHelper} from './dataHelper'
import {useHistory} from 'react-router-dom'
import { companyLists } from './companyList'
import { MyNavbar } from '../Dashboard'


function AddData() {
    const [open, setOpen] = useState(false);


    const myDataFromLS = JSON.parse(localStorage.getItem("jwt"))

    const token = myDataFromLS.token;
    const id = myDataFromLS.user.id;
    const myUsername = myDataFromLS.user.username

    const history = useHistory()
    const dashboardPush = () =>(history.push("/dashboard"))

    const handleClickOpen = () => {
    setOpen(true);
    console.log("My Company Lists",companyList);

    };

    const handleClose = () => {
    setOpen(false);
    };

    const [companyList, setCompanyList] = useState([])
    const [values, setValues] = useState({
        username:myUsername,
        companyName:"",
        applyDate:"",
        responseDate:"",
        jobType:"",
        status:"",
        jobProfile:"",
        jobLocation:"",
        sucess:false,
        loading:false
    })
    const {username, companyName, applyDate, responseDate, jobType, status, jobLocation, jobProfile, sucess, loading} = values;

    const handleChange = name => event =>{
        setValues({...values, error:false, [name]:event.target.value})
    }

    const fetchCompanyList = () =>{
        companyLists()
        .then((data) =>{
            if(data.error){
                alert("Something went wrong")
            }
            else{
                setCompanyList(data)
                console.log("company Data", data);
            }
        })
        .catch((err)=>{console.log(err)})
    }

    useEffect(() => {
        fetchCompanyList();
    },[])

    const onSubmit = (event) =>{


        
        // return dashboardPush()

        event.preventDefault();
        // setValues({...values, sucess:false, loading:false});
        dataHelper(id, token, values)
        .then(
            response => { 
                console.log(response)
            },
            setValues({
                ...values,
                companyName:"",
                applyDate:"",
                responseDate:"",
                jobType:"",
                status:"",
                jobProfile:"",
                jobLocation:"",
            })
        )
    }

    const showCompanyLists = () =>{
        // console.log("Hrlllllllllllllllllllllllll");
        return(
            <div>
                <div className="companyCard">
                    {companyList.map(e=>(
                        // <h1>{e.companyName}</h1>
                        <div className="oneCard">
                            <Card > 
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        Company ID:{e.companyID}
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        Name:{e.companyName}
                                    </Typography>
                                    <Typography>
                                        Discription:{e.companyDiscription}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))} 
                </div>
            </div>
        )
    }

    return (
<div>
        {/* {successMessage()} */}
        <MyNavbar />
        <div className="myModal">
                    <Button className="addButton" variant="contained" color="secondary" onClick={handleClickOpen}>
                            Add Data
                        </Button>

        
        <Dialog open={open}   onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Application Data</DialogTitle>
            <DialogContent>
            <div className="applyForm">
                <div className="dataForm">
                <form action="">
                            <label htmlFor="" className="text-light">Company Name</label>
                            <input required type="text" placeholder="Company Name" 
                            onChange={handleChange("companyName")}
                            value={companyName} required />
    
                            <label htmlFor="">Apply Date</label>
                            <input type="text" placeholder="Date of Apply (yyyy-mm-dd)"
                            onChange={handleChange("applyDate")} 
                            value={applyDate} />
    
                            <label htmlFor="">Location</label>
                            <input type="text" placeholder="Where is Location" 
                            onChange={handleChange("jobLocation")} required
                            value={jobLocation} />
                            
                            <label htmlFor="">Job Position</label>
                            <input type="text" placeholder="Enter Domain" 
                            onChange={handleChange("jobProfile")} required
                            value={jobProfile} />
    
                            <label htmlFor="">Acknowledge</label>
                            <input type="text" placeholder="Expected date of response (yyyy-mm-dd)" 
                            onChange={handleChange("responseDate")} required
                            value={responseDate} />

                            {/* <label htmlFor="">Profile</label>
                            <input type="text" placeholder="Which profile you have applied" 
                            onChange={handleChange("profile")} required
                            value={profile} /> */}

                            <label htmlFor="">Job Type</label>
                            {/* <input type="text" placeholder="" 
                            onChange={handleChange("jobType")} required
                            value={jobType} 
                            /> */}
                            <select className="select" onChange={handleChange("jobType")} value={jobType}>
                                <option name="none"></option>
                                <option name="fullTime">Full Time</option>
                                <option name="internship">Internship</option>
                            </select>
                            

                            <label htmlFor="">Status</label>
                            {/* <input type="text" placeholder="R S and P" 
                            onChange={handleChange("status")} required
                            value={status} /> */}
                            <select className="select" onChange={handleChange("status")} value={status}>
                                <option name="none1"></option>
                                <option name="selected">Selected</option>
                                <option name="pending">Pending</option>
                                <option name="rejected">Rejected</option>
                            </select>
                        </form>
                </div>
            </div>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={onSubmit}>Done</Button>
            </DialogActions>
        </Dialog>
        </div>
        {showCompanyLists()}
    </div>
    )
}

export default AddData
