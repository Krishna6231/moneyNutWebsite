import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
} from '@mui/material';
import Lottie from 'lottie-react';
import animationData from './Assets/forgotPassword.json'; // Make sure this path is correct

const ResetPasswordPage = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: 6, mb: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" color="#111">
          MoneyNut
        </Typography>
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
          InputProps={{ style: { fontSize: 16 } }}
        />

        <TextField
          fullWidth
          type="password"
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          InputProps={{ style: { fontSize: 16 } }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, py: 1.5, backgroundColor: '#000' }}
        >
          Reset Password
        </Button>
      </Box>
    </Container>
  );
};

export default ResetPasswordPage;
