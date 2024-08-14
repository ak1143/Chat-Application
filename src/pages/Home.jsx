import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Box, Stack, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ 
      height: "calc(100vh - 4rem)",
      display:"flex",
      justifyContent:'center',
      paddingTop:"15rem",
      bgcolor:"rgba(0,0,0,0.2)",
    }} >
      <Stack spacing={"0.5rem"}>
        <Typography variant='h3' sx={{paddingLeft:"4rem"}}>
          Chat App.
        </Typography>
        <Typography>
          A chat application where you can do real-time chatting.
        </Typography>
      </Stack>
    </Box>
  )
}

export default AppLayout()(Home);
