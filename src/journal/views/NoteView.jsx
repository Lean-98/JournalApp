import  SaveOutlined  from '@mui/icons-material/SaveOutlined';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

const today = new Date();
const now = today.toDateString('es-AR');

export const NoteView = () => {
  return (
    <Grid 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        x={{ mb: 1 }}
        className='animate__animated animate__fadeIn animate__faster'
        >
        <Grid item >
            <Typography  
            sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem",},}} 
                      variant="overline" 
                      fontWeight='light'
            > {now}
            </Typography>
        </Grid>
        <Grid item>
            <Button color='primary'  sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type='text'
                variant='outlined'
                fullWidth
                placeholder='Ingrese un título'
                label='Título'
                sx={{ border: 'none', mb: 1}}
            />

            <TextField 
                type='text'
                variant='outlined'
                fullWidth
                multiline
                placeholder='¿Qué sucedió en el día de hoy?'
                minRows={ 5 }
            />
        </Grid>

        {/* Image Gallery */}
        <ImageGallery />
  

    </Grid>
  )
}
