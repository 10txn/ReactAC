import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Landing404 = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
      <Typography variant="h1" fontSize={300} color="white" >
        404
      </Typography>
      <Typography variant="h4" color="white" gutterBottom>
        This page does not exist or has been moved.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button component={Link} to="/" variant="contained" color="info" sx={{ mr: 2 }}>
          Back home
        </Button>
      </Box>
    </Container>
  );
};

export default Landing404;
