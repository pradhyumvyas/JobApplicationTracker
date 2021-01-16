import React from 'react'
import { Button } from '@material-ui/core';

function Signin() {
    return (
        <div>
            <div className="signinForm">
                <div className="signin">
                    <form action="">
                        <h2>Sign In</h2> 
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Enter User Name"/>

                        <label htmlFor="">password</label>
                        <input type="password" placeholder="Enter Password"/>

                        <Button variant="contained" color="primary" >Login</Button>

                        <Button variant="contained" color="primary" >Sign Up</Button>
                        <Button color="primary" >Forgot Password ?</Button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin
