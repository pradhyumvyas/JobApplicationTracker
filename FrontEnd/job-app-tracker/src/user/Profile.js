import React from 'react'
import { MyNavbar } from '../mainData/Dashboard'
import download from "../images/download.png"
function Profile() {

    const currentUserData = JSON.parse(localStorage.getItem('jwt'))
    // console.log(currentUserData['user']);

    return (
        <div>
            <MyNavbar />
            <div className="userProfile">
                <div className="card">
                    <div className="leftProfile">
                        <img src={download} alt=""/>
                    </div>
                    <div className="rightProfile">
                        <h1>User Details</h1>
                        <h3>Name: {currentUserData['user'].firstName} {currentUserData['user'].lastName}</h3>
                        <h3>Email: {currentUserData['user'].email}</h3>
                        <h3>Username: {currentUserData['user'].username}</h3>
                        <h3>last login: {currentUserData['user'].lastlogin}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
