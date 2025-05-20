import './404.css'
import Navbar from '../../Components/Navbar/Navbar';
import ParticlesComponent from '../../Components/Particles/Particles'
import Landing404 from '../../Components/404Landing/404Landing'
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <Box>
      <Navbar />
      <Landing404 />
      <ParticlesComponent id='particles404'/>
    </Box>
  );
}

export default Page404;
