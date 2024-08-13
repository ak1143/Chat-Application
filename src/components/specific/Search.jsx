import { useInputValidation } from '6pp'
import { Dialog, DialogTitle, InputAdornment, List, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Search as SearchIcon } from '@mui/icons-material'
import UserItem from '../shared/UserItem';
import { SampleUsers } from '../constants/sampleData';


function Search() {

  const [users,setUsers] = useState(SampleUsers);
  const search = useInputValidation("")

  const isLoadingSendFriendRequest = false;

  const addFriendHandler =(id)=>{
       console.log(id)
  }

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"start"}>Find people</DialogTitle>
        <TextField 
            label="" 
            value={search.value} 
            onChange={search.changeHandler} 
            variant='outlined'
            size='small'
            InputProps={{
              startAdornment:(
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              )
            }}
        />
        <List>
          {
            users.map((i) =>(
              <UserItem
                  user={i}
                  key={i._id}
                  handler={addFriendHandler}
                  handlerIsLoading={isLoadingSendFriendRequest}
              />
            ))
          }
        </List>
      </Stack>
    </Dialog>
  )
}

export default Search
