import { useDispatch } from 'react-redux';
import  LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import MenuOutlined from '@mui/icons-material/MenuOutlined';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { startLogout } from '../../store/auth';

export const NavBar = ({ drawerWidth = 280 }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout() );
    }

  return (
    <AppBar 
        position="fixed"
        sx={{
            width: { sm: `calc(100% - ${ drawerWidth }px)`},
            ml: { sm: `${ drawerWidth }px`}
        }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge='start'
                sx={{ mr: 2, display: { sm: 'none' }}}
            >
                <MenuOutlined/>
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                
                <Typography component="div" noWrap  fontWeight='light' sx={{ mt:1, color: '#F8F6F4',
                  fontSize: {
                      xs: "1.8rem",
                      sm: "2.2rem",},}}>
                    <BookIcon sx={{mr:1}}/>
                    My Journal
                  </Typography>
    
                <IconButton color='error' onClick={ onLogout }>
                    <LogoutOutlined />
                </IconButton>
            </Grid>

        </Toolbar>
    </AppBar>
  )
}
