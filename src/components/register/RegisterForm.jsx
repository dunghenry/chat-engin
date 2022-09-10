import React from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { authRegister } from '../../store/actions/authActions';
import { useDispatch } from 'react-redux';
const RegisterForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, password };
        dispatch(authRegister(user));
    };
    return (
        <Container
            maxWidth="sm"
            sx={{ background: 'white', borderRadius: 5, py: 5, my: 10 }}
        >
            <Typography variant="h4" my={0} mx={27}>
                Register
            </Typography>
            <form onSubmit={handleSubmit} style={{ padding: '10px 90px' }}>
                <Box>
                    <Typography component="h4" my={2}>
                        Email :
                    </Typography>
                    <TextField
                        placeholder="Email"
                        style={{ width: 400 }}
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>
                <Box>
                    <Typography component="h4" my={2}>
                        Password :
                    </Typography>
                    <TextField
                        placeholder="Password"
                        style={{ width: 400 }}
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Box>
                <Box style={{ width: 100 }} my={2}>
                    <Button variant="contained" type="submit">
                        Register
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default RegisterForm;
