import React, {useState} from 'react'
import {AppBar, Toolbar, Typography, Button, IconButton, Modal} from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu';
import {signout, isAuthenticated} from '../auth/helper/index'
import { useHistory } from 'react-router-dom'
import modalForm from './helper/modalForm'

function Dashboard(){
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
            {modalForm()}
            {/* <modalForm /> */}
        </div>
    )
}

export default Dashboard
