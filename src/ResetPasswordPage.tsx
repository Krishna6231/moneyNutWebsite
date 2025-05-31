import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Snackbar,
    Alert,
    Container,
} from '@mui/material';
import Lottie from 'lottie-react';
import { useLocation } from 'react-router-dom';
import animationData from './Assets/forgotPassword.json';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPasswordPage = () => {
    const location = useLocation();
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const navigate = useNavigate();

    // Extract token from URL
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        console.log(searchParams);
        const t = searchParams.get('token');
        if (t) setToken(t);
    }, [location.search]);

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            return setSnackbar({ open: true, message: "Passwords don't match", severity: 'error' });
        }

        try {
            const payload = { token: token, newPassword: password };

            const response = await axios.post('https://api.moneynut.co.in/auth/reset-password', payload);

            console.log(response);

            if (response.status === 201 || response.status === 200) { // Usually 200 for success
                setSnackbar({ open: true, message: 'Password reset successful! Redirecting to login...', severity: 'success' });
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                throw new Error('Reset failed');
            }
        } catch (err: any) {
            setSnackbar({ open: true, message: err.message || 'An error occurred', severity: 'error' });
        }
    }

    return (
        <Container maxWidth="xs" sx={{ mt: 6, mb: 4 }}>
            <Box textAlign="center" mb={4}>
                <Typography variant="h4" fontWeight="bold" color="#111">MoneyNut</Typography>
            </Box>

            <Box display="flex" justifyContent="center" mb={4}>
                <Lottie animationData={animationData} style={{ width: 220, height: 220 }} />
            </Box>

            <Box component="form" noValidate autoComplete="off">
                <TextField
                    fullWidth
                    type="password"
                    label="New Password"
                    variant="outlined"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <TextField
                    fullWidth
                    type="password"
                    label="Confirm Password"
                    variant="outlined"
                    margin="normal"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, py: 1.5, backgroundColor: '#000' }}
                    onClick={handleSubmit}
                >
                    Reset Password
                </Button>
            </Box>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
                <Alert severity={snackbar.severity as any} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ResetPasswordPage;
