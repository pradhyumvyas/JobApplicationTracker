import React, {useState} from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core'

function ModalForm (){

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const [values, setValues] = useState({
        companyName:"",
        applyDate:"",
        responseDate:"",
        profile:"",
        jobType:"",
        status:"",
        jobProfile:"",
        location:""
    })
    const {companyName, applyDate, responseDate, profile, jobType, status, location, jobProfile} = values;

    const handleChange = name => event =>{
        setValues({...values, error:false, [name]:event.target.value})
    }

    const onSubmit = () =>{
        return alert("hee")
    }

    return (
        <div className="myModal">
        <div className="buttonAdd">
            <Button className="addButton" variant="contained" color="primary" onClick={handleClickOpen}>
                Add Data
            </Button>
        </div>
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
                            onChange={handleChange("location")} required
                            value={location} />
                            
                            <label htmlFor="">Job Position</label>
                            <input type="text" placeholder="Enter Domain" 
                            onChange={handleChange("jobProfile")} required
                            value={jobProfile} />
    
                            <label htmlFor="">Acknowledge</label>
                            <input type="text" placeholder="Expected date of response (yyyy-mm-dd)" 
                            onChange={handleChange("responseDate")} required
                            value={responseDate} />

                            <label htmlFor="">Profile</label>
                            <input type="text" placeholder="Which profile you have applied" 
                            onChange={handleChange("profile")} required
                            value={profile} />

                            <label htmlFor="">Job Type</label>
                            {/* <input type="text" placeholder="" 
                            onChange={handleChange("jobType")} required
                            value={jobType} 
                            /> */}
                            <select className="select" onChange={handleChange("jobType")} value={jobType}>
                                <option name="fullTime">Full Time</option>
                                <option name="internship">Internship</option>
                            </select>
                            

                            <label htmlFor="">Status</label>
                            {/* <input type="text" placeholder="R S and P" 
                            onChange={handleChange("status")} required
                            value={status} /> */}
                            <select className="select" onChange={handleChange("status")} value={status}>
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
    );
}

export default ModalForm
