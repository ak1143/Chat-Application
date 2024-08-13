import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'
import React from 'react'

function AvatarCard({ avatar = [],max=4}) {
  return (
    <Stack direction={"row"} spacing={"0.5"}>
        <AvatarGroup max={max}>
            <Box width={"5rem"} height={"3rem"} >
                {
                    avatar.map((i,ind)=>(
                        <Avatar
                            key={Math.random()*100}
                            src={i}
                            alt={`Avatar${ind}`} 
                            sx={{
                                height:"3rem",
                                width:"3rem",
                                position:"absolute",
                                left:{
                                    xs:`${0.5 +ind}rem`,
                                    sm:`${ind}rem`
                                }
                            }}
                        />
                    ))
                }
            </Box>
        </AvatarGroup>
    </Stack>
  )
}

export default AvatarCard
