import React from 'react'
import { MyNavbar } from '../mainData/Dashboard'
function Profile() {
    return (
        <div>
            <MyNavbar />
            {/* <h1>Profile</h1> */}
            <div className="User Profile">
                <div className="card">
                    <div className="leftProfile">
                        <h1>IMG</h1>
                    </div>
                    <div className="rightProfile">
                        <h1>User Details</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
