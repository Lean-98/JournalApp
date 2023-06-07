import { getEnvironments } from './getEnvironments';

export const fileUpload = async( file ) => {
    // if( !file ) throw new Error('No tenemos ningún archivo a subir');
    if( !file ) return null;

    // const cloudUrl = import.meta.env.VITE_CLOUND_URL;
    const { VITE_CLOUND_URL } = getEnvironments();
    const cloudUrl = VITE_CLOUND_URL;
   
    
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file );

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData,
        } );

        if( !resp.ok ) throw new Error('No se pudo subir la imagen');
        const cloudResp = await resp.json();

        return cloudResp.secure_url;
    } catch (error) {
        // console.log(error)
        // throw new Error( error.message );
        return null;
    }
    
}