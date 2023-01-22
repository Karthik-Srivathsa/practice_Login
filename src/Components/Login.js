import {Button, Container, Grid, Paper, TextField, InputAdornment, IconButton,} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from 'react';
import { VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuth}) => {
    const [values,setValues] = useState({
            email:"",
            pass:"",
            showPass: false
        });
        const Navigate = useNavigate();
        const handlePassVisibility = () =>{
            setValues({
                ...values,
                showPass: !values.showPass,
            })
        } 
        function handleClick(){
            Navigate("/LandingPage")
        } 
    return (
        <div setAuth={setAuth}>
            <Container maxWidth="sm">
            <Grid container 
            spacing={2} 
            direction="column" 
            justifyContent="center"
            style={{minHeight : "100vh"}}
   >
            <Paper elelvation={2} sx={{padding:5}}>
                <Grid container direction="column" spacing={2}>
                <Grid item>
                <TextField type="email" 
                fullWidth label="Enter your email" 
                placeholder="Email Address" 
                variant="outlined"/>
                </Grid>
                <Grid item>
                <TextField type={values.showPass ? "text" : "password"} 
                fullWidth label="password" 
                placeholder="password" 
                variant="outlined"
                InputProps={{
                    endAdornment:(
                        <InputAdornment position="end">
                            <IconButton onClick={handlePassVisibility} aria-label="Toggle password" edge="end">
                           {values.showPass ?(
                                <VisibilityOffIcon />
                            ):(
                            <VisibilityIcon />
                            )}
                            </IconButton>
                        </InputAdornment>
                    )

                }}
                />
                </Grid>
                <Grid item>
                <Button onClick={handleClick} fullWidth variant="contained">Sign In</Button>
                </Grid>
                </Grid>
            </Paper>
            </Grid>  
            </Container>
        </div>
    );
};

export default Login;