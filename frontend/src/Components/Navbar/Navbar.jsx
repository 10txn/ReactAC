import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box
      sx={{
        m: 2, // margin around the navbar
        borderRadius: 3, // rounded corners (e.g. 3 = 24px)
        overflow: 'hidden', // makes sure children like AppBar stay rounded
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#1a1a2e',
          borderRadius: 3, // optional if Box has it
        }}
        elevation={4} // adds subtle shadow
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ReactAC
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>     
          <Button component={Link} to="/store" color="inherit">Store</Button>   
          <Button component={Link} to="/faq" color="inherit">FAQ</Button>   
          <Button component={Link} to="/terms" color="inherit">Terms</Button>   
          <Button component={Link} to="https://github.com/10txn" color="inherit">Github</Button>   
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
