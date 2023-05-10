import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear Cuenta">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="nombre"
              placeholder="Tu Nombre"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="email"
              type="email"
              placeholder="correo@outlook.us"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="password"
            type="password"
            placeholder="Password"
            fullWidth
          />
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth>
              Crear una cuenta
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
            Iniciar sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
