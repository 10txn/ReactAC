import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
      <Typography variant="h2" color="white" gutterBottom>
        Server Protection,
        <br />
        <span style={{ color: '#ffff' }}>Taken Seriously.</span>
      </Typography>
      <Typography variant="h6" color="white" gutterBottom>
        Advanced anti-cheat protection for FiveM servers that ensures a cheater free and secure experience for your players.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button component={Link} to="/store" variant="contained" color="info" sx={{ mr: 2 }}>
          Purchase Now
        </Button>
        <Button component={Link} to="/faq" variant="outlined" color="info">
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default Hero;
