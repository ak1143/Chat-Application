import React, { memo, Suspense, useEffect, useState, lazy } from "react";
import Title from "../components/shared/Title";
import {
  Backdrop,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
} from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { SampleChats, SampleUsers } from "../components/constants/sampleData";
import UserItem from "../components/shared/UserItem";

const ConfirmDeleteDialog = lazy(() =>
  import("../components/dialog/confirmDeleteDialog")
);

const AddMemberDialog = lazy(() =>
  import('../components/dialog/AddMemberDialog')
);

const isAddmember = false;

const Groups = () => {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("Group Name");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

  const chatId = useSearchParams()[0].get("group");

  const backspaceHandler = () => {
    navigate("/");
  };

  const updateGRoupNameHandler = () => {
    setIsEdit(false);
    console.log(groupNameUpdatedValue);
  };

  const openconfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const deleteHandler =() =>{
    closeConfirmDeleteHandler()
  }

  const openAddMemberhandler = () => {};

  const removeMemberHandler = (id)=>{};

  useEffect(() => {
    if(chatId){
      setGroupName("Group Name");
      setGroupNameUpdatedValue("Group Name");
    }
    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  const Iconbtn = (
    <>
      <Tooltip title={"Back"}>
        <IconButton
          sx={{
            position: "absolute",
            left: "2rem",
            top: "2rem",
            bgcolor: "black",
            color: "white",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.4)",
              color: "black",
            },
          }}
          onClick={backspaceHandler}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      sx={{ padding: "1rem" }}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
          <IconButton onClick={updateGRoupNameHandler}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = (
    <Stack
      direction={{
        xs: "column-reverse",
        sm: "row",
      }}
      spacing={"1rem"}
      p={{
        xs: "0",
        sm: "1rem",
        md: "1rem 4rem",
      }}
    >
      <Button
        size="large"
        color="error"
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={openconfirmDeleteHandler}
      >
        Delete Group
      </Button>
      <Button
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={openAddMemberhandler}
      >
        {" "}
        Add Member{" "}
      </Button>
    </Stack>
  );

  return (
    <>
      <Title title="Groups" />
      <Grid container height={"100vh"}>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          height={"100%"}
          sx={{ borderRight: "2px solid rgba(0,0,0,0.1)" }}
        >
          <GroupList myGroups={SampleChats} />
        </Grid>
        <Grid
          item
          sm={8}
          md={9}
          sx={{
            display: { xs: "none", sm: "block" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            padding: "1rem 3rem",
          }}
          height="100%"
        >
          {Iconbtn}
          {groupName && (
            <>
              {GroupName}
              <Typography
                margin={"2rem"}
                alignSelf={"flex-start"}
                variant="body"
              >
                Members
              </Typography>
              <Stack
                maxWidth={"30rem"}
                width={"100%"}
                boxSizing={"border-box"}
                padding={{
                  sm: "1rem",
                  xs: "0",
                  md: "1rem 4rem",
                }}
                spacing={"2rem"}
                height={"50vh"}
                overflow={"auto"}
              >
                {/* Members */}
                {
                  SampleUsers.map((i) =>(
                    <UserItem 
                        key={i._id}
                        user={i} 
                        isAdded 
                        styling={{
                          boxShadow:"0 0 0.5rem rgba(0,0,0,0.2)",
                          padding:"1rem 2rem",
                          borderRadius:"1rem"
                    }}
                    handler={removeMemberHandler}
                    />
                  ))
                }
              </Stack>
              {ButtonGroup}
            </>
          )}
        </Grid>
          {
            isAddmember && (
              <Suspense fallback={<Backdrop open />}>
                <AddMemberDialog />
              </Suspense>
            )
          }
        {confirmDeleteDialog && (
          <Suspense fallback={<Backdrop open />}>
            <ConfirmDeleteDialog open={confirmDeleteDialog} handleClose={closeConfirmDeleteHandler} deleteHandler={deleteHandler}/>
          </Suspense>
        )}
      </Grid>
    </>
  );
};

const GroupList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack>
      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GroupListItem group={group} chatId={chatId} key={group._id} />
        ))
      ) : (
        <Typography textAlign={"center"} padding={"1rem"}>
          No groups
        </Typography>
      )}
    </Stack>
  );
};

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
