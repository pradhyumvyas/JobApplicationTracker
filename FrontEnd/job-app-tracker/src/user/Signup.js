import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import {signup} from '../auth/helper'


function Signup() {

    const history = useHistory();
    const loginPush = () => history.push('/signin')
    
    const [values, setValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
        username:"",
        password:"",
        error:"",
        sucess:false,
    })

    const {firstName, lastName, email, username, password, error, sucess} = values;

    const handleChange = name => event =>{
        setValues({...values, error:false, [name]:event.target.value})
    }

    const onSubmit = (event) => {

        event.preventDefault();
            setValues({...values, error:false})
            signup({firstName, lastName, email, username, password})
            .then((data) =>{
                console.log("Data", data);
                if(data.email === email){
                    setValues({
                        ...values,
                        firstName:"",
                        lastName:"",
                        email:"",
                        username:"",
                        password:"",
                        error:"",
                        sucess:true
                    })
                }
                else{
                    setValues({
                        ...values,
                        error:true,
                        success:false
                    })
                }
            })
            .catch((e) => console.log(e))
    }

    return (
        <div>
            <div className="signup">
                <div className="signupForm">
                    <h2>Sign Up</h2>
                    <form action="">
                        <label htmlFor="" className="text-light">First Name</label>
                        <input required type="text" placeholder="Enter First Name" 
                        onChange={handleChange("firstName")}
                        value={firstName} required />

                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder="Enter Last Name"
                        onChange={handleChange("lastName")} 
                        value={lastName} />

                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter your email" 
                        onChange={handleChange("email")} required
                        value={email} />

                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="username" 
                        onChange={handleChange("username")} required
                        value={username} />

                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Enter Password" 
                        onChange={handleChange("password")} required
                        value={password} />

                        <Button variant="contained" color="primary" onClick={onSubmit}>Sign up</Button>
                        <Button color="primary" onClick={loginPush} >Login now ?</Button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
