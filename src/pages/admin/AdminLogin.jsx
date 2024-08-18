import React, { useState } from "react";
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Navigate } from "react-router-dom";


const AdminLogin = () => {
    
    const isAdmin = true;

    const secretKey = useInputValidation("")

    const handleAdminLogin = (e) => {
        e.preventDefault();
        console.log("submit");
    };

    if(!isAdmin) return <Navigate to='/admin' />

    return (
        <div
        style={{
            backgroundImage: "linear-gradient( #ff416c,#ff4b2b)",
        }}
        >
        <Container
            component={"main"}
            maxWidth="xs"
            sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            }}
        >
            <Paper
            elevation={3}
            sx={{
                padding: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
            square={false}
            >
            <Typography variant="h5"> Admin Login </Typography>
            <form
                style={{ width: "100%", marginTop: "1rem" }}
                onSubmit={handleAdminLogin}
            >
                <TextField
                required
                label="Secret Key"
                type="password"
                margin="normal"
                variant="outlined"
                fullWidth
                value={secretKey.value}
                onChange={secretKey.changeHandler}
                />

                <Button
                sx={{
                    marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                >
                Login
                </Button>
            </form>
            </Paper>
        </Container>
    </div>
  );
};

export default AdminLogin;
