import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {  checkingErrors, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { Alert, Avatar, Button, Grid, Link, Stack, TextField, Typography } from '@mui/material';
import  Google  from '@mui/icons-material/Google';
import  LockOutlined  from '@mui/icons-material/LockOutlined';
import { AuthLayout } from '../layout/AuthLayout';

  const formData = {
    email: '',
    password: '',
  }

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/Lean-98" target='__blank'>
          Leeo
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export const LoginPage = () => {
 
const { status, errorMessage } = useSelector( state => state.auth );

const dispatch = useDispatch();

const { email, password, onInputChange } = useForm(formData);

const isAuthenticating = useMemo( () => status === 'checking', [status]);

const onSubmit = ( event ) => {
  event.preventDefault();

    // console.log({ email, password });
    dispatch( startLoginWithEmailPassword({ email, password }));
}

const onGoogleSignIn = () => {
  // console.log('onGoogleSignIn');

  dispatch( startGoogleSignIn());
}

const checkError = () => {
    dispatch( checkingErrors());
}

return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>

        <Grid  
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: "url(https://res.cloudinary.com/ddiulrst8/image/upload/v1686159790/aafz3ihu7ujx6wxzveix.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
        />

        <Grid item xs={12} sm={8} md={5} elevation={6} square>

          <AuthLayout>
            <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                  <Avatar sx={{  bgcolor: 'secondary.main' }}>
                      <LockOutlined />
                  </Avatar>

                  <Typography component="h1" variant="poster" sx={{ mt:1, color: '#2A2F4F',
                  fontSize: {
                      xs: "1.8rem",
                      sm: "2.2rem",},}}>
                    Journal-App
                  </Typography>
              </Stack>  

                <form aria-label='submit-form' onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
                  <Grid container >
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                      <TextField 
                      label="Email"
                      type="email"
                      placeholder='correo@outlook.us'
                      fullWidth
                      name='email'
                      value={ email }
                      onChange={ onInputChange }
                      />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                      <TextField 
                      label="Password"
                      type="password"
                      placeholder='Password'
                      fullWidth
                      name='password'
                      inputProps={{
                        'data-testid': 'password'
                      }}
                      value={ password }
                      onChange={ onInputChange }
                      />
                    </Grid>

                    <Grid container display={ !!errorMessage ? '': 'none' } sx={{ mt: 1 }}>
                          <Grid item xs={12} >
                              <Alert severity='error'>{ errorMessage }</Alert>
                          </Grid>
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        <Grid item  xs={ 12 } sm={ 6 }>
                          <Button disabled={ isAuthenticating } onClick={ checkError } type='submit' variant="contained"  fullWidth>
                            Login
                          </Button>
                        </Grid>

                        <Grid item  xs={ 12 } sm={ 6 }>
                          <Button disabled={ isAuthenticating } onClick={ onGoogleSignIn } aria-label='google-btn' variant="contained"  fullWidth>
                            <Google />
                            <Typography sx={{ ml:1, fontSize: 14 }}>Google</Typography>
                          </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                      <Link component={ RouterLink } onClick={ checkError } color='#2A2F4F' underline="hover" to="/auth/register">
                        Crear una cuenta
                      </Link>
                    </Grid>
                  </Grid>
                </form>
                <Copyright sx={{ mt: 5 }} />
          </AuthLayout>
        </Grid>
      </Grid>
  </>
  );
};