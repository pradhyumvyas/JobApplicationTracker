import React from 'react'
import './CSS/style.css'
import {Button} from '@material-ui/core'
import { useHistory } from "react-router-dom";
// import {ArrowDownwardIcon} from '@material-ui/icons/ArrowDownward';



function Home() {
    const history = useHistory();
    const signinRoute = () => history.push('/Signin')
    const signupRoute = () => history.push('/Signup')

    return (
        <div>
            <div className="heading">
                <h1>It's  An  Application  Tracker</h1>
                <h5>Where you can track any kind of application</h5>
            </div>

            <div className="subHeading">
                <h2>Want To Try This Platform</h2>
                <h3>If Yesss..!</h3>
                <h4>Go To The Below Buttons !</h4>

                {/* {ArrowDownwardIcon} */}
            </div>

            <div className="userAuth">
                <Button variant="contained" color="primary" onClick={signupRoute} >Sign Up</Button>
                <Button variant="contained" color="primary"  onClick={signinRoute} >Login</Button>

            </div>

            <div className="footer">
                <h3>Made with ❤</h3>
                <a href="https://pradhyumvyas.github.io" target="_blank">I'm here</a>
            </div>


        </div>
    )
}

export default Home
