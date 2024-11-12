import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import logo from '../../assets/images/favicon.png'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor:"#eceff1",boxShadow:1}} >
        <Toolbar variant="dense">
          <Link style={{textDecoration:"none"}} to={"/"}>
            <Box sx={{display:"flex",alignItems:"center"}}>
            <img src={logo} alt="logo" style={{width:"35px",marginRight:"5px"}}/>
          <Typography variant="h1" color="#3e3e3e" component="div" fontSize={20} fontWeight={"bold"} sx={{ flexGrow: 1}}>
            CV Master
          </Typography>
          </Box>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
