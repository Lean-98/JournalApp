import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { checkingErrors, startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

//Expresión regular que valida un email
const er =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formValidations = {
  email: [(value) => er.test(value), "El correo es inválido"],
  password: [
    (value) => value.length >= 7,
    "El password debe tener más de 7 caracteres",
  ],
  displayName: [
    (value) => value.length >= 5,
    "El nombre es obligatorio, asegúrate de que tenga más de 5 caracteres",
  ],
};

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { formState, displayName, email, password, onInputChange, 
          isFormValid, displayNameValid, emailValid, passwordValid,
        } = useForm(formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setformSubmitted(true);

    if( !isFormValid ) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
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
              backgroundImage: "url(https://res.cloudinary.com/ddiulrst8/image/upload/v1686159793/fowwzfusffebmzr3jcn0.webp)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
      />

      <Grid item xs={12} sm={8} md={5} elevation={6} square>
    <AuthLayout>
    <Typography component="h1" variant="poster" align='center' sx={{ mt:1, color: '#2A2F4F',
            fontSize: {
                xs: "1.8rem",
                sm: "2.2rem",},}}
      >
      Crear Cuenta
      </Typography>
      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="Nombre"
              placeholder="Tu Nombre"
              fullWidth
              name='displayName'
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@outlook.us"
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
            />
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Password"
            type="password"
            placeholder="Password"
            fullWidth
            name='password'
            value={ password }
            onChange={ onInputChange }
            error={ !!passwordValid && formSubmitted }
            helperText={ passwordValid }
          />
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

          <Grid item xs={12} display={ !!errorMessage ? '': 'none' }>
            <Alert severity='error'>{ errorMessage }</Alert>
          </Grid>

          <Grid item xs={12}>
            <Button disabled={ isCheckingAuthentication } type='submit' variant="contained" fullWidth>
              Crear una cuenta
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" underline="hover"  to="/auth/login" onClick={ checkError } > 
            Iniciar sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
    </Grid>
  </Grid>
</>    
  );
}
