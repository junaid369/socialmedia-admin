import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import { Navigate ,useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
const drawerWidth = 240;

function Sidebar(props) {
  
    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate=useNavigate()

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const drawer = (
    <div>
    
      <Toolbar   style={{backgroundColor:"#526069"}}/>


      <Divider />
      <List  style={{backgroundColor:"#526069",height:"600px"}}>
      
          <ListItem style={{color:"white"}} button key={"Dashboard"} onClick={()=>{navigate('/')}}>
            <ListItemIcon>
            </ListItemIcon>
       
            <ListItemText primary={"Dashboard"} />
          
          </ListItem>
        
         
          <ListItem style={{color:"white"}} button key={"usermanagment"} onClick={()=>{navigate('/usermanagment')}}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary={"usermanagment"} />
          </ListItem>
          
    
      </List>
      <Divider />
      

    </div>
  );



  const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }} >
        <CssBaseline   />
        <AppBar 
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar style={{backgroundColor:"#526069"}} >
          <Typography variant="h6" noWrap component="div">
              Admin Pannel
            </Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }} style={{marginLeft:"auto" , }}>
        <Select style={{color:"white"}}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Admin</em>
          </MenuItem>
          <MenuItem value={10} onClick={()=>{
               localStorage.removeItem("token");
            navigate('/login')
          }} >logout</MenuItem>
        
        </Select>
      
      </FormControl>
 
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
          
            >
              <MenuIcon />
            </IconButton>
            
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
         
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          {props.children}
        </Box>
      </Box>
    )
}

Sidebar.propTypes = {
  
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

export default Sidebar

















