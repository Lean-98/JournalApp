import setimmediate from 'setimmediate';
import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';
import { getEnvironments } from '../../src/helpers/getEnvironments';

const { 
    VITE_CLOUD_NAME,
    VITE__API_KEY,
    VITE_API_SECRET,
    VITE_IMG_URL, 
} = getEnvironments();

cloudinary.config ({
    cloud_name: VITE_CLOUD_NAME,
    api_key: VITE__API_KEY,
    api_secret: VITE_API_SECRET, 
    secure: true
})



describe('Pruebas en fileUpload', () => { 

    test('Debe de subir el archivo correctamente a Cloudinary', async() => { 

        const imgUrl = VITE_IMG_URL
        const resp = await fetch( imgUrl );
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

        // console.log(url)
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.png','');
        // console.log({imageId});
        const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image'
         });
        //  console.log({ cloudResp })
 
        // const folderName = "journal"
        // cloudinary.api.delete_resources(
        //   `${folderName}/${imageId}`,
        //   (error, result) => {
        //     console.log(error, result);
        //   }
        // );
    });


    test('Debe de retornar null', async() => { 

        const file = new File([], 'foto.png');
        const url = await fileUpload( file );
        expect( url ).toBe( null );

     });

 });