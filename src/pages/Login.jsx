import React,{ useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import { CameraAlt } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import { useFileHandler, useInputValidation } from '6pp';
import  {UserNameValidator}  from '../utils/Validator'

function Login() {

  const [isLogin,setIsLogin] = useState(true);

  const handleToggle = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  // const bio = useInputValidation("");
  const username = useInputValidation("",UserNameValidator);
  const password = useInputValidation("");

  const avatar = useFileHandler("single");

  // useFileHandler if u r selecting it for multiple you can write like this
  // const photos = useFileHandler ("multiple", 2, 3);
  // 2 - minimum size of the image that is 2 m.b.
  // 3- maximum size of the image that is 3 m.b.
  // you can give any size but the maxlimit is 5 m.b.

  const handleLogin = (e) =>{
    e.preventDefault();
  }

  const handleSignup = (e) =>{
    e.preventDefault();
  }

  return(
    
    <div 
      style={{
        backgroundImage:"linear-gradient( #ff416c,#ff4b2b)"
      }}
    >
        <Container 
        component={"main"} 
        maxWidth="xs"
        sx={{
          height:"100vh",
          display:"flex",
          alignItems:"center",
          justifyContent: "center"
        }}
        >
        <Paper
          elevation={3}
          sx={{
            padding:4,
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
          }}
          square={false}
        >

          { isLogin ? 
          (
            <>
                <Typography variant='h5'> Login </Typography>
                <form 
                  style={{ width: "100%", marginTop: "1rem" }}
                  onSubmit={handleLogin}  
                >

                  <TextField
                    required
                    label="UserName"
                    margin='normal'
                    variant='outlined'
                    fullWidth
                    value={username.value}
                    onChange={username.changeHandler}
                  />

                    { 
                      username.error && (
                        <Typography color={"red"} variant='caption'>
                          {username.error}
                        </Typography>
                      )
                    }

                    <TextField
                    required
                    label="Password"
                    type='password'
                    margin='normal'
                    variant='outlined'
                    fullWidth
                    value={password.value}
                    onChange={password.changeHandler}
                  />

                  <Button 
                      sx={{
                        marginTop:"1rem"
                      }}
                      variant='contained'
                      color='primary'
                      type='submit'
                      fullWidth
                  >
                    Login
                  </Button>

                  <Typography  
                    textAlign={"center"} 
                    marginTop={"1rem"} 
                  > 
                    OR 
                  </Typography>

                  <Button
                    sx={{
                      marginTop:"1rem"
                    }}
                    variant='text'
                    fullWidth
                    onClick={handleToggle}
                  >
                    Sign up Insted
                  </Button>
                </form>
            </>

          ) : (
              <>
                <Typography variant='h5'> Sign Up </Typography>
                <form 
                  style={{ width: "100%", marginTop: "1rem" }}
                  onSubmit={handleSignup}
                >

                  <Stack position={"relative"} width={"5rem"} margin={"auto"}>
                    <Avatar 
                      sx={{
                        width:"5rem",
                        height:"5rem",
                        objectFit:"contain"
                      }}
                      src={avatar.preview}
                    />

                    <IconButton
                      sx={{
                        height:"2.5rem",
                        width:"auto",
                        position:"absolute",
                        border:0,
                        marginTop:"2.5rem",
                        right:-10,
                        color:"white",
                        bgcolor:"rgba(0,0,0,0.5)",
                        ":hover":{
                          bgcolor:"rgba(0,0,0,0.7)"
                        }
                      }} 
                      component="label"
                    >
                      <>
                      <CameraAlt />
                      <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} /> 
                      </>
                    </IconButton>
                  </Stack>

                  { 
                    avatar.error && (
                      <Typography color={"red"} variant='caption'>
                          {avatar.error}
                      </Typography>
                    )
                  }

                  <TextField
                    required
                    label="Name"
                    margin='normal'
                    variant='outlined'
                    fullWidth
                    value={name.value}
                    onChange={name.changeHandler}
                  />

                  {/* <TextField
                    label="Bio"
                    margin='normal'
                    variant='outlined'
                    fullWidth
                    value={bio.value}
                    onChange={bio.changeHandler}
                  /> */}

                  <TextField
                    required
                    label="UserName"
                    margin='normal'
                    variant='outlined'
                    fullWidth
                    value={username.value}
                    onChange={username.changeHandler}
                  />

                    { 
                      username.error && (
                        <Typography color={"red"} variant='caption'>
                          {username.error}
                        </Typography>
                      )
                    }

                    <TextField
                    required
                    label="Password"
                    type='password'
                    margin='normal'
                    variant='outlined'
                    fullWidth
                    value={password.value}
                    onChange={password.changeHandler}
                  />

                  <Button 
                      sx={{
                        marginTop:"1rem"
                      }}
                      variant='contained'
                      color='primary'
                      type='submit'
                      fullWidth
                  >
                    Sign Up
                  </Button>

                  <Typography  
                    textAlign={"center"} 
                    marginTop={"1rem"} 
                  > 
                    OR 
                  </Typography>

                  <Button
                    sx={{
                      marginTop:"1rem"
                    }}
                    variant='text'
                    fullWidth
                    onClick={handleToggle}
                  >
                    Login Insted
                  </Button>
                </form>
            </>
          ) }

        </Paper>
      </Container>
    </div>
  ) 
}

export default Login
