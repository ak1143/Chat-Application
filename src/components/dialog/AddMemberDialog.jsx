import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React ,{useState} from "react";
import { SampleUsers } from "../constants/sampleData";
import UserItem from "../shared/UserItem";

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {

    const [members,setMembers] = useState(SampleUsers)
    const [selectedMembers,setSelectedMembers] = useState([])
   
    const selectMemberHandler = (id)=>{
      setSelectedMembers((prev)=>
        prev.includes(id) ? prev.filter((currElement)=> currElement !== id)
        : [...prev,id]
      ); 
    }
    const addMemberSubmithandler = () =>{
        closeHandler();
    }
    const closeHandler =() =>{
        setSelectedMembers([]);
        setMembers([]);
    }

    return (
        <Dialog open onClose={closeHandler}>
        <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
            <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
            <Stack spacing={"1rem"}>
            {SampleUsers.length > 0 ? (
                SampleUsers.map((i) => (
                <UserItem key={i._id} user={i} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)} />
                ))
            ) : (
                <Typography textAlign={"center"}>No Friend</Typography>
            )}
            </Stack>
            <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            >
            <Button color="error" onClick={closeHandler}> Cancel </Button>
            <Button
                onClick={addMemberSubmithandler}
                variant="contained"
                disabled={isLoadingAddMember}
            >
                Submit Changes
            </Button>
            </Stack>
        </Stack>
        </Dialog>
    );
};

export default AddMemberDialog;
