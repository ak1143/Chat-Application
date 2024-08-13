import React, { memo } from 'react'
import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from '@mui/material'
import { sampleNotifications } from '../constants/sampleData'


function Notifications() {

  const friendREquestHandler =({_id,accept}) =>{

  }

  return (
    <Dialog open>
        <Stack p={{ xs:"1rem" , sm:"2rem"}} maxWidth={"25rem"}>
          <DialogTitle>Notifications</DialogTitle>

          {
            sampleNotifications.length > 0 ? (
              sampleNotifications.map((Notification)=>(
                <NotificationItem
                  sender={Notification.sender}
                  _id={Notification._id}
                  handler={friendREquestHandler}
                  key={Notification._id}
                >

                </NotificationItem>
              ))
            ) : (
              <Typography textAlign={"center"}>0 Notification</Typography>
            )
          }
        </Stack>
    </Dialog>
  )
};

const NotificationItem = memo(({sender,_id,handler,key}) => {

    const { name, avatar} = sender

    return (
      <ListItem>
        <Stack 
            direction={"row"}
            alignItems={"center"}
            spacing={"1rem"}
            width={"100%"}
        >
            <Avatar src={avatar}/>
            <Typography
                variant='body1'
                sx={{
                    flexGrow:1,
                    display:"-webkit-box",
                    WebkitLineClamp:1,
                    WebkitBoxOrient: "vertical",
                    overflow:"hidden",
                    textOverflow :"ellipsis"
                }}
            >
                {name}
            </Typography>
            <Stack 
                direction={{
                  xs:"column",
                  sm:"row"
                }}
            >
              <Button onClick={()=>handler({_d,accept:true})}>Accept</Button>
              <Button color='error' onClick={()=> handler({_id,accept:false})}>
                Reject
              </Button>
            </Stack>
        </Stack>
      </ListItem>
    )
})

export default Notifications
