import React from 'react'
import {AppBar, Toolbar, Button} from '@material-ui/core'
import {signout, isAuthenticated} from '../auth/helper/index'
import { useHistory } from 'react-router-dom'
import modalForm from './helper/modalForm'
import ShowData from './helper/showData'


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
            <ShowData />
            {/* <modalForm /> */}
            {/* {showData()} */}
            
        </div>
    )
}

export default Dashboard
