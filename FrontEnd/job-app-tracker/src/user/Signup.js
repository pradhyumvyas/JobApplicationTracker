import React from 'react'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'


function Signup() {

    const history = useHistory();
    const loginPush = () => history.push('/signin')

    return (
        <div>
            <div className="signup">
                <div className="signupForm">
                    <h2>Sign Up</h2>
                    <form action="">
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder="Enter First Name" />

                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder="Enter Last Name" />

                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter your email" />

                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="username" />

                        <label htmlFor="">Password</label>
                        <input type="text" placeholder="Enter Password" />

                        <Button variant="contained" color="primary" >Sign up</Button>
                        <Button color="primary" onClick={loginPush} >Login now ?</Button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
