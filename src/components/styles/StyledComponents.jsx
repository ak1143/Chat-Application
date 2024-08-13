import { styled } from "@mui/material";
import {Link as LinkComponent} from "react-router-dom";

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
})
