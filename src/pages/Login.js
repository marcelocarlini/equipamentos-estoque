import { Box, Button, Card, CardContent, TextField } from '@mui/material'
import React from 'react'

function Login() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
            <Card style={{ marginTop: '100px', width: "30%", boxShadow: '0px 10px 8px rgba(0, 0, 0, 0.5)' }}>
                <CardContent >

                    <div style={{ fontSize: "30px", fontWeight: "bold", textAlign: "center", textTransform: "uppercase", color: "#673ab7" }}> Login</div>
                    <div style={{ display: "flex", flexDirection: "column" }}><div />
                        <TextField id="outlined-basic" type='text' label="Usuário" variant="outlined" style={{ marginTop: "50px" }} />
                        <TextField id="outlined-basic" type='password' label="Senha" variant="outlined" style={{ marginTop: "30px" }} />
                        <Button variant="contained" style={{ marginTop: "50px" }}>Entrar</Button>

                    </div>

                </CardContent>
            </Card>
        </Box >


    )
}

export default Login