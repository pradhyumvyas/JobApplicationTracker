import React from 'react'
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu';
import {signout, isAuthenticated} from '../auth/helper/index'
import { useHistory } from 'react-router-dom'

function Dashboard() {
    const history = useHistory();
    const signoutPush = () => history.push('/')

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
                            {/* <IconButton edge="start" className="" color="inherit" aria-label="menu"> */}
                            {/* <MenuIcon /> */}
                            {/* </IconButton> */}
                            {/* <Typography variant="h6" className="">
                                News
                            </Typography> */}
                            <Button  color="secondary" variant="contained" onClick={homeRedirect} className="signout pull-right">Signout</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        )
    }
    return (
        <div>
            {myNavbar()}
        </div>
    )
}

export default Dashboard
