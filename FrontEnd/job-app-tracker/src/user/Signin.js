import React,{useState} from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { signin } from '../auth/helper';
import { Alert, AlertTitle } from '@material-ui/lab';


function Signin() {

    const history = useHistory();
    const signupPush = () => history.push('/signup')

    const [values, setValues] = useState({
        error:"",
        sucess:false,
    })
    const {error, sucess} = values;

    const errorMessage = () =>{
        if (values.error === true){
            return(
                <Alert severity="error" onClose={() => {}}>
                    <AlertTitle>Error</AlertTitle>
                    Something Went Wrong please try again with different — <strong>Email and Username!</strong>
                </Alert>
            )
        }
    }


    const successMessage = () =>{
        if(values.sucess === true){
            return (
                <Alert severity="success" onClose={() => {}}>
                    <AlertTitle>Success</AlertTitle>
                    <strong> <a >Login Successfull</a> </strong>
                </Alert>
            )
        }
    }

    const onLoginSubmit = () => {
        return(
            setValues({
                ...values,
                sucess:true
            // alert("gell")
        })
        )
    }

    const signinForm = () =>{
        return(
            <div className="signinForm">
                <div className="signin">
                    <form action="">
                        <h2>Sign In</h2> 
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Enter User Name"/>

                        <label htmlFor="">password</label>
                        <input type="password" placeholder="Enter Password"/>

                        <Button variant="contained" color="primary" onClick={onLoginSubmit} >Login</Button>

                        <Button variant="contained" color="primary" onClick={signupPush} >Sign Up</Button>
                        <Button color="primary" >Forgot Password ?</Button>

                    </form>
                </div>
            </div>
        )
    }

    return(
        <div>
            {successMessage()}            
            {errorMessage()}
            {signinForm()}
        </div>
    )
}

export default Signin
