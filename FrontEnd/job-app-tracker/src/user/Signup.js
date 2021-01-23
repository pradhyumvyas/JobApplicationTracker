import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import {signup} from '../auth/helper'


function Signup() {

    const history = useHistory();
    const loginPush = () => history.push('/signin')
    
    const [values, setValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
        username:"",
        password:"",
        error:"",
        sucess:false,
    })

    const {firstName, lastName, email, username, password, error, sucess} = values;

    return (
        <div>
            <div className="signup">
                <div className="signupForm">
                    <h2>Sign Up</h2>
                    <form action="">
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder="Enter First Name" value={firstName} />

                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder="Enter Last Name" value={lastName} />

                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter your email" value={email} />

                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="username" value={username} />

                        <label htmlFor="">Password</label>
                        <input type="text" placeholder="Enter Password" value={password} />

                        <Button variant="contained" color="primary" >Sign up</Button>
                        <Button color="primary" onClick={loginPush} >Login now ?</Button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
