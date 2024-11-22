import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../assets/images/favicon.png'
import { Link } from 'react-router-dom';
import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Navbar() {
  const theme = useTheme()
  const { setMode, mode } = theme.palette
  
  localStorage.setItem("mode",mode)

  const navColor = theme.palette.navbar
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: navColor.main, boxShadow: 1 }}>

      <Stack sx={{ width: '100%'}}>
      <Alert severity="info" icon={false} sx={{padding:0,width:"100%" ,fontSize:{xs:"0.7em",md:"1em"}}}>The project is under development, thank you for your understanding ! 🚧</Alert>
        </Stack>
        
        <Toolbar variant="dense" sx={{justifyContent:"space-between"}}>
          <Link style={{textDecoration:"none"}} to={"/"}>
            <Box sx={{display:"flex",alignItems:"center"}}>
            <img src={logo} alt="logo" style={{width:"35px",marginRight:"5px"}}/>
          <Typography variant="h1" color={navColor.Typography} fontSize={20} fontWeight={"bold"} sx={{ flexGrow: 1}}>
            CV Master
          </Typography>
          </Box>
          </Link>
          <Box>
            <IconButton onClick={() => { {mode === "dark" ? setMode("light"):setMode("dark")}}}>
              {mode === "dark" ? <Brightness7Icon color={navColor.Typography} /> : <Brightness4Icon color={ navColor.Typography} />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
