import React from 'react'
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu';

function Dashboard() {

    const myNavbar = () =>{
        return(
            <div className="myNav">
                <AppBar position="static">
                    <Toolbar>
                        {/* <IconButton edge="start" className="" color="inherit" aria-label="menu"> */}
                        {/* <MenuIcon /> */}
                        {/* </IconButton> */}
                        {/* <Typography variant="h6" className="">
                            News
                        </Typography> */}
                        <Button color="inherit" className="signout">Signout</Button>
                    </Toolbar>
                </AppBar>
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
