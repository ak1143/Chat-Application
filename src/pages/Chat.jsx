import React, { useRef, useState } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Box, IconButton, Stack } from '@mui/material';
import { AttachFile as AttachFileIcon, EmojiEmotions as EmojiEmotionsIcon, Send as SendIcon} from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
import { orange } from '../components/constants/color';
import EmojiPicker from 'emoji-picker-react';
import FileMenu from '../components/dialog/FileMenu';
import { sampleMessages } from '../components/constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';


const user = {
  _id:"asda",
  name:"Abhishek kshirsagar"
}


const Chat = () => {

    const [emojies,setEmojies] = useState(false);
    const [textInput,setTextInput] =useState("");

    const containerRef =useRef(null);

    const toggleEmojiPicker = ()=> setEmojies((prev)=>!prev);

    const handleEmojiClick = (emojiObject) => {
        setTextInput((prevTextInput) => prevTextInput + emojiObject.emoji);
        console.log(textInput)
        setEmojies(false);
    }; 


    return (
      <>
        <Stack sx={{ borderLeft:"1.5px solid rgba(0,0,0,0.2)"}}>
          <Stack 
              ref={containerRef}
              boxSizing={"border-box"}
              padding={"1rem"}
              spacing={"1rem"}
              bgcolor={"rgba(247,247,247,1)"}
              height="calc(100vh - 9rem)"
              sx={{
                overflowX:"hidden",
                overflowY:"auto"
              }}
          >
            {
              sampleMessages.map((i)=>(
                <MessageComponent key={i._id} message={i} user={user}/>
              ))
            }
          </Stack>
          <form
              style={{
                height:'5rem'
              }}
          >
            <Stack 
                direction={"row"} 
                height={"100%"}
                padding={"1rem"}
                alignItems={"center"}
                position={"relative"}
                gap={"0.5rem"}
            >  

              <Box position="relative">
                <IconButton onClick={toggleEmojiPicker}>
                  <span role="img" aria-label="emoji">😊</span>
                </IconButton>
                {emojies && (
                  <Box sx={{ 
                      position: "absolute", 
                      bottom: "3rem", // Adjust this to place the picker correctly
                      zIndex: 1000 
                    }}>
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                  </Box>
                )}
              </Box>

              <IconButton >
                <AttachFileIcon />
              </IconButton>

              <InputBox   
                  placeholder='Type Message here...' 
                  value={textInput}
                  onChange={(e)=>setTextInput(e.target.value)}
              />

              <IconButton 
              type='submit' 
              sx={{ 
                  bgcolor:orange,  
                  color:'white',
                  marginLeft:"1rem",
                  padding:"0.5rem",
                  paddingLeft:"0.6rem",
                  "&:hover":{
                    bgcolor:orange
                  }
                }}
                >
                <SendIcon />
              </IconButton>
        
            </Stack>
          </form>
          <FileMenu />
        </Stack>
    </>
  )
}

export default AppLayout()(Chat)
