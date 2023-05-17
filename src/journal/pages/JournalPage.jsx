import  IconButton  from '@mui/material/IconButton';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views/';
import  AddOutlined  from '@mui/icons-material/AddOutlined';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Deserunt reprehenderit pariatur quis incididunt aliqua culpa reprehenderit ullamco aute minim elit et ex. </Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton 
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.7 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>

    </JournalLayout>
  )
}
