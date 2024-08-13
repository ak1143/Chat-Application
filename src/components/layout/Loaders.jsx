import React from "react";
import { Grid,Skeleton, Stack } from "@mui/material";

export const LayoutLoader = () => {
  return (
    <Grid container height={"calc(100vh-4rem)"} spacing={"1rem"}>

      <Grid item xs={12} sm={4} md={3} height={"100%"}>
        <Stack spacing={"1rem"}>
            { Array.from({length:10}).map((_,index)=>(
                <Skeleton key={index} variant="rounded" height={"4rem"}/>
            ))}
        </Stack>
      </Grid>

      <Grid item sm={8} md={9} 
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        height={"100%"}
      >
        <Skeleton variant="rounded" height={"100vh"}/>
      </Grid>
    </Grid>
  );
};
