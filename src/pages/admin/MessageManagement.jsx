import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Avatar, Box, Stack } from '@mui/material';
import Table from '../../components/shared/Table';
import { dashboardData } from '../../components/constants/sampleData';
import { fileFormat, transformImage } from '../../lib/features';
import moment from 'moment';
import RenderAttachment from "../../components/shared/RenderAttachment"

const columns =[
  {
    field:"id",
    headerName:"ID",
    headerClassName:"table-header",
    width:100
  },
  {
    field:"attachment",
    headerName:"Attachments",
    headerClassName:"table-header",
    width:200,
    renderCell:(params)=>{
      const {attachments} = params.row;

      return attachments?.length > 0 ? attachments.map((i)=>{
        const url = i.url;
        const file =fileFormat(url);
        return(
          <Box>
            <a href={url} download target='_blank'style={{
              color:"black"
            }}>
              {RenderAttachment(file,url)}
            </a>
          </Box>
        )
      }) : "No attachment"
    }
  },
  {
    field:"name",
    headerName:"Name",
    headerClassName:"table-header",
    width:200
  },
  {
    field:"content",
    headerName:"Content",
    headerClassName:"table-header",
    width:400
  },
  {
    field:"sender",
    headerName:"Sent By",
    headerClassName:"table-header",
    width:150,
    renderCell: (params) =>(
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        {console.log(params.row.sender.name)}
        {console.log(params.row.sender.avatar)}
        <Avatar alt={params.row.sender.name} avatar={params.row.sender.avatar} />
        <span>{params.row.sender.name}</span>
      </Stack>
    )
  },
  {
    field:"chat",
    headerName:"Chat",
    headerClassName:"table-header",
    width:220
  },
  {
    field:"groupchat",
    headerName:"Group Chat",
    headerClassName:"table-header",
    width:200
  },
  {
    field:"createdAt",
    headerName:"Time",
    headerClassName:"table-header",
    width:150
  }
];

function MessageManagement() {

  const [rows,setRows] = useState([]);

  useEffect(()=>{
    setRows(
      dashboardData.messages.map((i)=>(
        { ...i,
          id:i._id,
          sender:{
            name:i.sender.name,
            avatar:transformImage(i.sender.avatar,50)
          },
          createdAt:moment(i.createdAt).format("MMMM Do YYYY, h:mm:ss a")
        }
      ))
    )
  },[])

  return (
    <AdminLayout >
        <Table heading={"All Messages"} columns={columns} rows={rows} rowHeight={200}/>
    </AdminLayout>
  )
}

export default MessageManagement
