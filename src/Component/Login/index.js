import React, {useState} from "react";
import clsx from 'clsx';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { isValidEmail, isValidPassword } from "./util";
import {Card, ActionButton, Para, LabelTitle} from "./style"
import {setCookie} from "./util";

const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiTextField-root": {
        width: "80%",
        marginLeft: "9%",

      }
    }, 
    margin: {
        marginLeft: "9%",
        marginTop: "20px"
    },
    textField: {
      width: "80%",
      size:"small"
    }
  }));
  

export default function Login(){
    const classes = useStyles();

    const [error,setError] = useState({});

    
    const [values, setValues] = useState({
      email:'',
      password: '',
      showPassword: false,
    });

    const handleChange = (key) => (event) => {
      let value =  event?.target?.value;
      setValues({ ...values, [key]: value });
    };
  
    const handleClickShowPassword = (key) =>(event)=> {
      if(key === 'showPassword'){
        setValues({ ...values, [key]: !values.showPassword });
      }
      else{
        setValues({ ...values, [key]: !values.showConfirmPassword });
      }
    };
      
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const validateCredentials = (email,password) => {
        const error = {};
        error.email = isValidEmail(email) ? null : "Invalid User";
        setError(error);
        sessionStorage.setItem("email", values.email);

        if(values.email === "hruday@gmail.com" && values.password === "hruday123"){
            setCookie("verifiedUser",  true);
            window.location.href = "/home";
        } else {
            error.email="Incorrect Email";
            error.password = "Incorrect password";
            setError(error);
        }
    }

    
  return <Card>
            <LabelTitle>Login Form</LabelTitle>
            {/* <Para>Userid - hruday@gmail.com</Para>
            <Para>Password - hruday123</Para> */}
            <form className={classes.root} noValidate autoComplete="off">
                <div style = {{marginTop:"45px"}}>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    value= {values.email}
                    onChange={handleChange('email')}
                    variant="outlined"
                    margin="dense"
                />
                {error.email ? <Para> {error.email} </Para>: null }

                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size = "small">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword('showPassword')}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={70}
                    />
                    {error.password ? <Para style = {{margin:"0px"}}>{error.password} </Para>: null}
                </FormControl>
                </div>
            </form>
            <div style= {{textAlign:"center", margin: "40px 0"}}>
                <ActionButton onClick = {() => validateCredentials(values.email, values.password)}>Login</ActionButton>
            </div>
</Card>
}

