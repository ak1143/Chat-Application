import React from 'react'
import Header from './Header'
import Title from '../shared/Title'
import { Grid } from '@mui/material'

const AppLayout =() => (WrapedComponent) => {

    return (props) => {
        return (    
            <>
                <Title />
                <Header />
                    <Grid container height={"calc(100vh-4rem)"}>

                        <Grid item xs={12} sm={4} md={3} height={"100%"}>
                            hello
                        </Grid>

                        <Grid 
                            item 
                            sm={8} 
                            md={9} 
                            sx={{
                                display:{xs:"none",sm:"block"}
                            }} 
                            height={"100%"}

                        >
                            hi
                        </Grid>

                    </Grid>
                <WrapedComponent {...props}/>
            </>
        )
    }
}

export default AppLayout