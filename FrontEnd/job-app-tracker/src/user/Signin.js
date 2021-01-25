import React from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { signin } from '../auth/helper';

function Signin() {

    const history = useHistory();
    const signupPush = () => history.push('/signup')

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

                        <Button variant="contained" color="primary" onClick={signupPush} >Sign Up</Button>
                        <Button color="primary" >Forgot Password ?</Button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin
