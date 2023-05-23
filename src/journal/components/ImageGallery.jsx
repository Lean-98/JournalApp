import { ImageList, ImageListItem } from '@mui/material';


export const ImageGallery = ({ images = [] }) => {
  return (
    <ImageList sx={{ width: '100%', height: 'auto' }} cols={4} rowHeight='auto'>
      {images?.map(image => (
        <ImageListItem key={image}>
          <img
            src={image}
            srcSet={image}
            alt="Imagen nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

