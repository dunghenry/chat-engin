import React from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { authLogin } from '../../store/actions/authActions';
import { useDispatch } from 'react-redux';
const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, password };
        dispatch(authLogin(user));
    };
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" my={0} mx={15}>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box>
                    <Typography component="h4" my={2} textAlign="left">
                        Email :
                    </Typography>
                    <TextField
                        placeholder="Email"
                        style={{ width: 350 }}
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>
                <Box>
                    <Typography component="h4" my={2} textAlign="left">
                        Password :
                    </Typography>
                    <TextField
                        placeholder="Password"
                        style={{ width: 350 }}
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Box>
                <Box style={{ width: 100 }} my={2}>
                    <Button variant="contained" type="submit">
                        Login
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default LoginForm;
