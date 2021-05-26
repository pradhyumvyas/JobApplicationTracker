import React from 'react'
import { MyNavbar } from '../mainData/Dashboard'
import download from "../images/download.png"
function Profile() {

    const currentUserData = JSON.parse(localStorage.getItem('jwt'))
    // console.log(currentUserData['user']);

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
        current.src = e.target.result;
        };
        reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <MyNavbar />
            <div className="userProfile">
                <div className="card">
                    <div className="leftProfile">
                        <div
                            className="profileImages"
                            onClick={() => imageUploader.current.click()}
                            > 
                            <img
                                className="profileImages"
                                src={download}
                                ref={uploadedImage}
                            />
                        </div>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            ref={imageUploader}
                            /> 
                    </div>
                    
                    <div className="rightProfile">
                        <h1>User Details</h1>
                        <h3>Name: {currentUserData['user'].firstName} {currentUserData['user'].lastName}</h3>
                        <h3>Email: {currentUserData['user'].email}</h3>
                        <h3>Username: {currentUserData['user'].username}</h3>
                        <h3>last login: {currentUserData['user'].last_login}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
