import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import  Google  from '@mui/icons-material/Google';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import {  checkingErrors, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

  const formData = {
    email: '',
    password: '',
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
    <AuthLayout title='Login'>
          <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
            <Grid container >
              <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField 
                label="email"
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
                label="password"
                type="password"
                placeholder='Password'
                fullWidth
                name='password'
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
                    <Button disabled={ isAuthenticating } onClick={ checkError } type='submit' variant="contained" fullWidth>
                      Login
                    </Button>
                  </Grid>

                  <Grid item  xs={ 12 } sm={ 6 }>
                    <Button disabled={ isAuthenticating } onClick={ onGoogleSignIn } variant="contained" fullWidth>
                      <Google />
                      <Typography sx={{ ml:1, fontSize: 14 }}>Google</Typography>
                    </Button>
                  </Grid>
              </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } onClick={ checkError } color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
   
            </Grid>

            </Grid>

          </form>
    </AuthLayout>


  )
}
