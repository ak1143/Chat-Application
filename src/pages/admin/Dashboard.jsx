import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
import { AdminPanelSettings as AdminPanelSettingsIcon, Group as GroupIcon, Message as MessageIcon, Notifications as NotificationsIcon, Person as PersonIcon} from '@mui/icons-material'
import moment from 'moment'
import { CurveButton, SearchField } from '../../components/styles/StyledComponents'

function Dashboard() {

  const Widgets =(
    <Stack
      direction={{
        xs:"column",
        sm:"row"
      }}
      spacing={"2rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"2rem 0"}
    >
      <Widget title={"Users"} value={34} Icon={<PersonIcon />}/>
      <Widget title={"Chats"} value={3} Icon={<GroupIcon />}/>
      <Widget title={"Messages"} value={453} Icon={<MessageIcon />} />
    </Stack>
  )

  const Appbar =(
    <Paper
        elevation={3}
        sx={{ 
            padding:{xs:"1rem", sm:"2rem"},
            margin:{xs:"1.5rem 3rem", sm:"4rem 8rem" ,md:"4rem, 8rem"},
            borderRadius:"1rem"
        }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon  sx={{fontSize:"3rem"}}/>
        <SearchField />
        <CurveButton >search</CurveButton>
        <Box flexGrow={1} />
        <Typography display={{
          xs:"none",
          lg:"block"
        }}
        color={"rgba(0,0,0,0.7)"}
        textAlign={"center"}
        >
          {moment().format("MMMM D YYYY")}
        </Typography>
        <NotificationsIcon />
      </Stack>

    </Paper>
  )


  return (
    <AdminLayout>
        <Container component={"main"}>
          {Appbar}
          <Stack direction={"row"} spacing={"1rem"} flexWrap={"wrap"}>
              <Paper
                elevation={3}
                sx={{
                  padding:"2rem 3.5rem",
                  borderRadius:"1rem",
                  width:"100%",
                  maxWidth:"45rem",
                  height:"25rem"
                }}
              >
                <Typography margin={"2rem 0"} variant='h5'>Last Messages</Typography>
                {'chat'}
              </Paper>
              <Paper
                elevation={"3rem"}
                sx={{
                  padding:"1rem",
                  borderRadius:"1rem",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  width:{xs:"100%",sm:"50%"},
                  position:"relative",
                  width:"100%",
                  maxWidth:"25rem",
                  height:"25rem"
                }}
              >
                  {"chat"}
                  <Stack 
                    position={"absolute"}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    spacing={"0.5rem"}
                    width={"100%"}
                    height={"100%"} 
                  >
                    <GroupIcon />
                    <Typography>Vs</Typography>
                    <PersonIcon />
                  </Stack>
              </Paper>
          </Stack>
          <Stack>
            {
              Widgets
            }
          </Stack>
        </Container>
    </AdminLayout>
  )
}

const Widget = ({title,value,Icon})=>{
    return(
      <Paper
      elevation={3}
        sx={{
          padding:"2rem",
          margin:"2rem 0",
          borderRadius:"1rem",
          width:"20rem"
        }}
      >
        <Stack alignItems={"center"} spacing={"1rem"}>
          <Typography
            sx={{
              color:"rgba(0,0,0,0.7)",
              borderRadius:"50%",
              border:"5px solid rgba(0,0,0,0.9)",
              width:"5rem",
              height:"5rem",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }} 
          >
            {value}
          </Typography>
          <Stack direction={"row"} spacing={"0.5rem"} alignItems={"center"}>
            {Icon}
            <Typography>{title}</Typography>
          </Stack>
        </Stack>
      </Paper>
    )
}

export default Dashboard
