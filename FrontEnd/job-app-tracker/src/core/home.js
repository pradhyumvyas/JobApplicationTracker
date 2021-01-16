import React from 'react'
import './CSS/style.css'
import {Button} from '@material-ui/core'
import { useHistory } from "react-router-dom";



function Home() {
    const history = useHistory();
    const signinRoute = () => history.push('/Signin')
    const signupRoute = () => history.push('/Signup')

    return (
        <div>
            <div className="heading">
                <h1>It's A Application Tracker</h1>
                <h5>Where you can track any kind of application</h5>
            </div>

            <div className="userAuth">
                <Button variant="contained" color="primary" onClick={signupRoute} >Sign Up</Button>
                <Button variant="contained" color="primary"  onClick={signinRoute} >Login</Button>

            </div>


        </div>
    )
}

export default Home
