import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Icon, Typography } from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import ArticleIcon from '@mui/icons-material/Article';
import DownloadIcon from '@mui/icons-material/Download';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow:"none",
  textAlign: 'center',
  backgroundColor:"transparent"
}));
export default function Steps() {

  const theme = useTheme();

  const steps = theme.palette;


  return (
    <Container maxWidth="xl">
      <Box sx={{ width: '100%',paddingY: 8 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} marginY={5}>
          <Item variant='h2' sx={{color:steps.titles.mainTitle, fontSize:"2.7em",fontWeight:"bold"}}>Create your perfect Resume with easy steps</Item>
          <Item variant='h3' sx={{color:steps.titles.secondTitle,fontSize:"1.5em",width:"50%",marginX:"auto"}}>Effortlessly make a job-worthy resume and cover letter that gets you hired faster.</Item>
        </Grid>

        <Grid container direction="row" marginY={3} alignItems={"center"} justifyContent={"center"} xs={12} md={6} lg={4}>
          <Grid item sx={{textAlign:"end" , padding:3}} xs={3}>
            <Icon/>
            <LayersIcon sx={{fontSize:"3em",padding:"5px",backgroundColor:steps.titles.mainTitle,color:steps.icons.main}} />
            </Grid>
          <Grid item xs={8}>
            <Typography variant='h3' color={steps.titles.mainTitle} sx={{fontSize:"1.9em",fontWeight:"normal"}}>Choose your CV template</Typography>
            <Typography variant='h6' color={steps.titles.secondTitle} sx={{fontSize:"1em"}}>Pick a template and color of your choice from a variety of professional templates.</Typography>
            </Grid>
        </Grid>    
        
        <Grid container direction="row" marginY={3} alignItems={"center"} justifyContent={"center"} xs={12} md={6} lg={4}>
          <Grid item sx={{textAlign:"end" , padding:3}} xs={3}>
            <Icon/>
            <ArticleIcon sx={{fontSize:"3em",padding:"5px",backgroundColor:steps.titles.mainTitle,color:steps.icons.main}} />
            </Grid>
          <Grid item xs={8}>
            <Typography variant='h3' color={steps.titles.mainTitle} sx={{fontSize:"1.9em",fontWeight:"normal"}}>Place Your Information</Typography>
            <Typography variant='h6' color={steps.titles.secondTitle} sx={{fontSize:"1em"}}>Keep track of your CV with the help of live preview.</Typography>
            </Grid>
        </Grid>  
        
        
        <Grid container direction="row" marginY={3} alignItems={"center"} justifyContent={"center"} xs={12} md={6} lg={4}>
          <Grid item sx={{textAlign:"end" , padding:3}} xs={3}>
            <Icon/>
            <DownloadIcon sx={{fontSize:"3em",padding:"5px",backgroundColor:steps.titles.mainTitle,color:steps.icons.main}} />
            </Grid>
          <Grid item xs={8}>
            <Typography variant='h3' color={steps.titles.mainTitle} sx={{fontSize:"1.9em",fontWeight:"normal"}}>Instantly download your CV</Typography>
            <Typography variant='h6' color={steps.titles.secondTitle} sx={{fontSize:"1em"}}>Easily download your CV as a PDF and share it via a link.</Typography>
            </Grid>
        </Grid>  
        
      </Grid>
    </Box>
    </Container>
    
  )
}
