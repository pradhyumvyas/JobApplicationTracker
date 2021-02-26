import React,{useState} from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { signin, authenticate} from '../auth/helper';
import { Alert, AlertTitle } from '@material-ui/lab';


function Signin() {

    const history = useHistory();
    const signupPush = () => history.push('/signup')
    const dashboardPush = () => history.push('/dashboard')

    const [values, setValues] = useState({
        username:"",
        password:"",
        loading:false,
        error:"",
        sucess:false,
        didRedirect:false,
    })
    // const {username, password, loading, error, sucess, didRedirect} = values;
    const {username, password, didRedirect} = values;

    const handleChange = name => event =>{
        setValues({...values, error:false, [name]:event.target.value})
    }

    const errorMessage = () =>{
        if (values.error === true){
            return(
                <Alert severity="error" onClose={() => {}}>
                    <AlertTitle>Error</AlertTitle>
                    Something Went Wrong — <strong>Check your username and password</strong>
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

    const onLoginSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error:false, loading:true})
        signin({username, password})
        .then(
            data => {
                setValues({
                    ...values,
                    username:"",
                    password:""
                })
                console.log("Data", data);
                if(data.token){
                    authenticate(data, ()=>{
                        console.log("Token Added");
                        setValues({
                            ...values,
                            didRedirect:true
                        })
                    })
                } else{
                    setValues({
                        ...values,
                        username:"",
                        password:"",
                        error:true,
                        loading:false
                    })
                }
            }
        )
        .catch((e) => console.log(e))
    }
    const redirect = () =>{
        if(didRedirect){
            dashboardPush();
        }
    }

    const signinForm = () =>{
        return(
            <div className="signinForm">
                <div className="signin">
                    <form action="">
                        <h2>Sign In</h2> 
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Enter User Name" value={username} 
                        onChange={handleChange("username")}
                        />

                        <label htmlFor="">password</label>
                        <input type="password" placeholder="Enter Password"
                        value={password} onChange={handleChange("password")}
                        />

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
            {redirect()}
        </div>
    )
}

export default Signin
