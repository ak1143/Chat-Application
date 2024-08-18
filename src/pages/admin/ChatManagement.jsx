import { Avatar, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { dashboardData } from '../../components/constants/sampleData';
import AdminLayout from '../../components/layout/AdminLayout';
import AvatarCard from "../../components/shared/AvatarCard";
import Table from '../../components/shared/Table';
import { transformImage } from '../../lib/features';

const columns =[
  {
    field:"id",
    headerName:"ID",
    headerClassName:"table-header",
    width:100
  },
  {
    field:"avatar",
    headerName:"Avatar",
    headerClassName:"table-header",
    width:150,
    renderCell:(params)=>(
      <Avatar alt={params.row.name} src={params.row.avatar} />
    )
  },
  {
    field:"name",
    headerName:"Name",
    headerClassName:"table-header",
    width:200
  },
  {
    field:"total-members",
    headerName:"Total Members",
    headerClassName:"table-header",
    width:150
  },
  {
    field:"members",
    headerName:"Members",
    headerClassName:"table-header",
    width:200,
    renderCell:(params)=> <AvatarCard max={100} avatar={params.row.members} />
  },
  {
    field:"total-messages",
    headerName:"Messages",
    headerClassName:"table-header",
    width:100
  },
  {
    field:"creator",
    headerName:"Created By",
    headerClassName:"table-header",
    width:200,
    renderCell: (params)=>(
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AvatarCard avatar={params.row.creator.avatar} />
        <span>{params.row.creator.name}</span>
      </Stack>
    )
  }
];

function ChatManagement() {

  const [rows,setRows] = useState([])

  useEffect(()=>{
    setRows(
      dashboardData.chats.map((i)=>({
        ...i,
        id:i._id,
        avatar:i.avatar.map((i)=>transformImage(i,50)),
        members:i.members.map((i)=>transformImage(i.avatar,50)),
        creator:{
          name:i.creator.name,
          avatar:transformImage(i.creator.avatar,50)
        }
      }))
    )
  },[])

  return (
   <AdminLayout>
      <Table heading={"All users"} columns={columns} rows={rows}/>
   </AdminLayout>
  )
}


export default ChatManagement
