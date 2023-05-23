import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { setActiveNote } from '../../store/journal';


export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

  const dispatch = useDispatch();

  const OnClickNote = () => {
      dispatch( setActiveNote({ title, body, id, date, imageUrls }) );
  }

  const newTitle = useMemo( () => {
    return title.length > 17
        ? title.substring(0,17) + '...'
        : title;
  },[ title ]);
  
  const newBody = useMemo( () => {
    return body.length > 50
        ? body.substring(0,50) + '...'
        : body;
  },[ body ]);

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={ OnClickNote }>
        <ListItemIcon>
          <CalendarMonthIcon />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={ newTitle } />
          <ListItemText secondary={ newBody } />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
