import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { SampleChats } from "../constants/sampleData";
import { useParams } from "react-router-dom";

const AppLayout = () => (WrapedComponent) => {
  return (props) => {

    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e,_id,groupChat)=>{
        e.preventDefault();
        console.log("Delete Chat",_id,groupChat)
    }

    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh-4rem)"}>
          <Grid item xs={12} sm={4} md={3} height={"100%"}>
            <ChatList
              chats={SampleChats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid
            item
            sm={8}
            md={9}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height={"100%"}
          >
            hi
          </Grid>
        </Grid>
        <WrapedComponent {...props} />
      </>
    );
  };
};

export default AppLayout;
