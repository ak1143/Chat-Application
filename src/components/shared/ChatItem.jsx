import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents'
import { Box, Stack, Typography } from '@mui/material'
import AvatarCard from './AvatarCard'

const ChatItem =({
    avatar =[],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newmessageAlert,
    index = 0,
    handleDeleteChat,

})=>{

    return(
        <Link 
            sx={{ padding:"0"}}
            to={`/chat/${_id}`} 
            onContextMenu={(e)=>handleDeleteChat(e,_id,groupChat)}
        >
            <div style={{
                display:"flex",
                gap:"1rem",
                alignItems:"center",
                padding:"1rem",
                backgroundColor : sameSender ? "rgba(0,0,0,0.2)" : "unset",
                color: sameSender ? "black" : "unset",
                position:"relative"
                }}
            > 
                <AvatarCard avatar={avatar} />
                <Stack>
                    <Typography> {name} </Typography>
                    {
                        newmessageAlert && ( 
                        <Typography>
                            {newmessageAlert.count}
                            New Message
                        </Typography>
                        )
                    }
                </Stack>

                {/* is user online  */}
                {
                    isOnline && (
                        <Box sx={{
                                width:"10px",
                                height:"10px",
                                borderRadius:"50%",
                                backgroundColor:"green",
                                position:"absolute",
                                top:"50%",
                                right :"1rem",
                                transform:'translateY(-50%)'
                            }} 
                        />
                    )
                }
            </div>
        </Link>
    )
}

export default memo(ChatItem)