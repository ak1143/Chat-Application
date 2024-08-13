import React, { Suspense, useState,lazy } from 'react'
import {orange} from "../constants/color"
import { useNavigate } from 'react-router-dom'
import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import {
      Add as AddIcon,
      Menu as MenuIcon,
      Search as SearchIcon,
      Group as GroupIcon,
      Logout as LogoutIcon,
      Notifications as NotificationsIcon
    } from '@mui/icons-material'

const SearchDialog = lazy( ()=> import("../specific/Search"));
const NewGroupDialog = lazy( ()=>import("../specific/NewGroups"));
const NotificationsDialog = lazy( ()=>import("../specific/Notifications"));

const IconBut = ({title,icon,onClickhandler}) =>{

    return(
      <Tooltip title={title}>
          <IconButton color='inherit' size='large' onClick={onClickhandler}>
              {icon}
          </IconButton>
      </Tooltip>
    )
}


function Header() {

    const navigate = useNavigate();

    const [isMobile,setIsMobile] = useState(false);
    const [isSearch,setIsSearch] = useState(false);
    const [isNewGroup,setIsNewGroup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);

    const handlClick = ()=>{
      setIsMobile( prev =>!prev );
    }

    const openSearch = ()=>{
      setIsSearch( prev=>!prev );
    }

    const openNewGroup = ()=>{
      setIsNewGroup( prev=>!prev );
    }

    const openNotification = ()=>{
      setIsNotification( prev=>!prev );
    }

    const logoutHandler = ()=>{
      console.log("logout")
    }

    const navigateToGropus = () => navigate("/groups")
    
  return (
    <>
      <Box sx={{flexGrow:1}} height={"4rem"}>   

        {/* if there is some space in flex then flexGrow : 1 helps to cover that part. */}

        <AppBar position='static' sx={{
          bgcolor:orange
        }} >

          <Toolbar>
              <Typography
                  variant='h6'
                  sx={{
                    display:{xs:"none" ,sm:"block"}
                  }}
              >
                  Chat App
              </Typography>

              <Box sx={{
                  display : {xs:"block",sm:"none"}
              }}>
                  <IconButton color='inherit' onClick={handlClick}>
                      <MenuIcon />
                  </IconButton>
              </Box>

              <Box sx={{
                 flexGrow:1
              }}/>

              <Box>

                  <IconBut 
                    title="search" 
                    icon={<SearchIcon />} 
                    onClickhandler={openSearch} 
                  />

                  <IconBut 
                    title="New Group" 
                    icon={<AddIcon />} 
                    onClickhandler={openNewGroup} 
                  />

                  <IconBut 
                    title="Manage Groups" 
                    icon={<GroupIcon />} 
                    onClickhandler={navigateToGropus} 
                  />

                  <IconBut 
                    title="Notifications" 
                    icon={<NotificationsIcon />} 
                    onClickhandler={openNotification} 
                  />

                  <IconBut 
                    title="Logout" 
                    icon={<LogoutIcon />} 
                    onClickhandler={logoutHandler} 
                  />

              </Box>

          </Toolbar>

        </AppBar>
      </Box>

      { isSearch && 
            <Suspense fallback={<Backdrop open/>}>
                <SearchDialog/>
            </Suspense>
      }
      
      { isNotification && 
            <Suspense fallback={<Backdrop open/>}>
                <NotificationsDialog />
            </Suspense>
      }

      { isNewGroup && 
            <Suspense fallback={<Backdrop open/>}>
                <NewGroupDialog />
            </Suspense>
      }

    </>
  )
}

export default Header
