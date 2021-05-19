import React from 'react'
import {AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from '@material-ui/core'
import {signout, isAuthenticated} from '../auth/helper/index'
import { useHistory } from 'react-router-dom'
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShowData from './helper/showData'
import AddData from './helper/AddData'


export function MyNavbar(){

    const history = useHistory();
    const signoutPush = () => history.push('/')
    const addPush = () =>(history.push("/addData"))
    const dashboardPush = () => history.push('/dashboard')
    const profilePush = () => history.push('/profile')


    const homeRedirect = () =>{
        if(isAuthenticated()){
            signout()
            signoutPush()
        }
        else{
            alert("No user is login")
            signoutPush()
        }
        return(console.log("here"))
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className="myNav">
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Button  color="secondary" variant="contained" onClick={homeRedirect} className="signout pull-right">Signout</Button>
                    
                    <div className="accountButton">
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit">
                            <AccountCircle />
                        </IconButton>

                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}>
                        <MenuItem onClick={dashboardPush}>Home</MenuItem>
                        <MenuItem onClick={profilePush}>Profile</MenuItem>
                        <MenuItem onClick={addPush}>Add Company</MenuItem>
                    </Menu>
                    </div>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}


function Dashboard(){
    
    return (
        <div>
            {MyNavbar()}
            <div className="buttonAdd">
            {/* <Button className="addButton" variant="contained" color="primary" onClick={addPush}>
                Add Data
            </Button> */}
        </div>
            <ShowData />
            {/* <modalForm /> */}
            {/* {showData()} */}
            
        </div>
    )
}

export default Dashboard
