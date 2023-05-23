import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import  SaveOutlined  from '@mui/icons-material/SaveOutlined';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import  DeleteOutline from '@mui/icons-material/DeleteOutline';
import UploadOutlined  from '@mui/icons-material/UploadOutlined';

import { ImageGallery } from '../components';
import { useForm } from '../../hooks/useForm';
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal';


export const NoteView = () => {
    
    const dispatch = useDispatch();
    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );
    const { body, title, date, onInputChange, formState } = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return new Intl.DateTimeFormat("es-ES", { dateStyle: "full" }).format(newDate);
    },[date]);

    const fileInputRef = useRef();

    useEffect(() => {
       dispatch( setActiveNote(formState) );
    }, [formState])

    useEffect(() => {
        if( messageSaved.length > 0  ) {
            Swal.fire('Nota Actualizada', messageSaved, 'success');
        } 
    }, [messageSaved])
    

    const onSaveNote = () => {
        dispatch(startSaveNote() );
    }

    const onFileInputChange = ({ target }) => {
        if(target.files.length === 0 ) return;
        dispatch( startUploadingFiles(target.files) );
    }

    const onDelete = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No se podrá revertir esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#654E92',
            confirmButtonText: 'Sí, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
       
              dispatch(startDeletingNote());
              
              Swal.fire(
                'Eliminado',
                'Tu archivo se ha eliminado correctamente!',
                'success'
              )
            }
          })
    }

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
                > { dateString } 
                </Typography>
            </Grid>
            <Grid item>

                <input
                    type='file'
                    multiple
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={{ display: 'none'}}
                />

                <IconButton color='primary' disabled={ isSaving} 
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined />
                </IconButton>

                <Button color='primary' disabled={ isSaving } onClick={ onSaveNote }  sx={{ padding: 2 }}>
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
                    name='title'
                    value={ title }
                    onChange={ onInputChange }
                    sx={{ border: 'none', mb: 1}}
                />

                <TextField 
                    type='text'
                    variant='outlined'
                    fullWidth
                    multiline
                    placeholder='¿Qué sucedió en el día de hoy?'
                    name='body'
                    value={ body }
                    onChange={ onInputChange }
                    minRows={ 5 }
                />
            </Grid>
            
            <Grid container justifyContent='end'>
                <Button
                    onClick={ onDelete }
                    sx={{ mt: 2 }}
                    color='error'
                >
                    <DeleteOutline/>
                    Borrar
                </Button>
            </Grid>

            {/* Image Gallery */}
            <ImageGallery images={ note.imageUrls } />
    

        </Grid>
    )
}
