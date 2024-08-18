import { backdropClasses, styled } from "@mui/material";
import {Link as LinkComponent} from "react-router-dom";
import { grayColor } from "../constants/color";

export const VisuallyHiddenInput = styled("input")({
    border:0,
    clip: "react(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1    
})

export const Link = styled(LinkComponent)({
    textDecoration :'none' ,
    color:'black',
    padding:"1rem",
    ":hover":{
        backgroundColor:'rgba(1,1,1,0.1)'
    }
});

export const InputBox = styled("input")({
    height: '100%',
    width:'100%',
    border:'none',
    outline:'none',
    padding:'0 3rem',
    borderRadius:'1.5rem',
    backgroundColor:`${grayColor}`
});

export const SearchField =styled("input")({
    padding:"1rem 2rem",
    width:"20vmax",
    height:"2.5vmax",
    border:"none",
    outline:"none",
    borderRadius:"1.5rem",
    backgroundColor:"#f1f1f1",
    fontSize:"1.1rem"
});

export const CurveButton = styled("button")({
    borderRadius:"1.5rem",
    padding:"0.5rem 1rem",
    border:"none",
    outline:"none",
    cursor:"pointer",
    backgroundColor:"black",
    color:"white",
    fontSize:"0.9rem",
    ":hover":{
        backgroundColor:"rgba(0,0,0,0.8)"
    }
})
