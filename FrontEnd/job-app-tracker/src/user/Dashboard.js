import React, {useState} from 'react'
import {AppBar, Toolbar, Typography, Button, IconButton, Modal} from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu';
import {signout, isAuthenticated} from '../auth/helper/index'
import { useHistory } from 'react-router-dom'

function Dashboard() {
    const history = useHistory();
    const signoutPush = () => history.push('/')

    const [values, setValues] = useState({
        companyName:"",
        applyDate:"",
        responseDate:"",
        profile:"",
        jobType:"",
        status:"",
        location:""
    })
    const {companyName, applyDate, responseDate, profile, jobType, status, location} = values;

    const handleChange = name => event =>{
        setValues({...values, error:false, [name]:event.target.value})
    }


    const homeRedirect = () =>{
        if(isAuthenticated()){
            signout()
            signoutPush()
        }
        else{
            alert("No user is login")
        }
        return(console.log("here"))
    }

    const myNavbar = () =>{
        return(
            <div className="myNav">
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Button  color="secondary" variant="contained" onClick={homeRedirect} className="signout pull-right">Signout</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        )
    }

    const onSubmit = () =>{
        return alert("hee")
    }

    const applyForm = () =>{
        return(
            <div className="applyForm">
                <div className="dataForm">
                <form action="">
                            <label htmlFor="" className="text-light">Company Name</label>
                            <input required type="text" placeholder="Company Name" 
                            onChange={handleChange("companyName")}
                            value={companyName} required />
    
                            <label htmlFor="">Apply Date</label>
                            <input type="text" placeholder="Date of Apply"
                            onChange={handleChange("applyDate")} 
                            value={applyDate} />
    
                            <label htmlFor="">Location</label>
                            <input type="text" placeholder="Where is Location" 
                            onChange={handleChange("location")} required
                            value={location} />
    
                            <label htmlFor="">Acknowledge</label>
                            <input type="text" placeholder="Expected date of response" 
                            onChange={handleChange("responseDate")} required
                            value={responseDate} />

                            <label htmlFor="">Profile</label>
                            <input type="text" placeholder="Which profile you have applied" 
                            onChange={handleChange("profile")} required
                            value={profile} />

                            <label htmlFor="">Job or Intern</label>
                            <input type="text" placeholder="J or I" 
                            onChange={handleChange("jobType")} required
                            value={jobType} />

                            <label htmlFor="">Status</label>
                            <input type="text" placeholder="R S and P" 
                            onChange={handleChange("status")} required
                            value={status} />
    
                            <Button variant="contained" color="primary" onClick={onSubmit}>Done</Button>
                        </form>
                </div>
            </div>
        )
    }
    return (
        <div>
            {myNavbar()}
            {/* <Button variant="contained" color="Primary" onClick={applyForm}>Add Data</Button> */}
            {applyForm()}
        </div>
    )
}

export default Dashboard
