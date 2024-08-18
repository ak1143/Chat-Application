import { Box, Drawer, Grid, IconButton, Stack, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { grayColor } from '../constants/color'
import { 
        Close as CloseIcon,
        ExitToApp as ExitToAppIcon,
        Group as GroupIcon,
        ManageAccounts as ManageAccountsIcon,
        Menu as MenuIcon,   
        Message as MessageIcon
    } 
from '@mui/icons-material'
import { useLocation, Link as LinkComponent, Navigate } from 'react-router-dom'
import { Dashboard as DashboardIcon} from "@mui/icons-material";

const Link = styled(LinkComponent)({
    textDecoration: "none",
    borderRadius: "2rem",
    padding: "1rem 2rem",
    color: "black",
    ":hover": {
        color: "rgba(0,0,0,0.1)"
    }
});

const adminTabs = [
    {
        name:"Dashboard",
        path:"/admin/dashboard",
        icon:<DashboardIcon />
    },
    {
        name:"Users",
        path:"/admin/users-management",
        icon:<ManageAccountsIcon />
    },
    {
        name:"Chats",
        path:"/admin/chats-management",
        icon:<GroupIcon />
    },
    {
        name:"Messages",
        path:"/admin/messages-management",
        icon:<MessageIcon />
    }
] 

const Sidebar = ({w})=>{

    const location = useLocation ();

    const logoutHandler = () =>{ console.log("logout")}

    return(
        <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
            <Typography variant='h5' textTransform={"uppercase"} sx={{fontWeight:"700"}}>
                Chattu
            </Typography>
            <Stack spacing={"1rem"}>
                {
                    adminTabs.map((tab)=>(
                        <Link key={tab.path} to={tab.path} 
                                sx={
                                    location.pathname === tab.path && {
                                        bgcolor:"rgba(0,0,0,1)",
                                        color:"white"
                                    }
                                }
                        >
                            
                            <Stack direction={"row"} alignItems={"center"}  spacing={"1rem"} >
                                <Typography sx={{fontSize:"0.1rem"}}>{tab.icon}</Typography>
                                <Typography sx={{fontSize:"0.9rem"}}>{tab.name}</Typography>
                            </Stack>
                        </Link>
                    ))
                }
                <Link onClick={logoutHandler} >  
                    <Stack direction={"row"} alignItems={"center"}  spacing={"1rem"} >
                            <ExitToAppIcon />
                        <Typography>Logout</Typography>
                    </Stack>
                </Link>
            </Stack>
        </Stack>
    )
}

const isAdmin =true;

function AdminLayout({ children }) {

    const [isMobile,setIsMobile] = useState(false);
    const handleMobile = () =>setIsMobile(prev => !prev);

    const handleClose = ()=>setIsMobile(false)

    if(!isAdmin) return <Navigate to='/admin' />

    return (
        <Grid container minHeight={"100vh"}>
            <Box sx={{
                    display: { xs: "block", md: "none" },
                    position: "fixed",
                    right: '1rem',
                    top: "1rem",
                }}>
                    <IconButton onClick={handleMobile}>
                        {isMobile ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
            </Box>
            <Grid 
                item
                md={3}
                lg={3}
                sx={{                   
                    display:{ xs:"none", md:"block"}            
                }}>
                    <Sidebar />
            </Grid>
            <Grid 
                item
                xs={12}
                md={9}
                lg={9}
                sx={{
                    bgcolor:grayColor}}
            >
                {children}
            </Grid>
            <Drawer open={isMobile} onClose={handleClose}>
                <Sidebar w="50vw" />     
            </Drawer>
        </Grid>
    )
}

export default AdminLayout


