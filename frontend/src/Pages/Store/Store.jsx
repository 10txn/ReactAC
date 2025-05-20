import './Store.css'
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import ParticlesComponent from '../../Components/Particles/Particles'
import { Box, Container, Typography } from '@mui/material';
import PricingSection from '../../Components/PricingCards/PricingSection'

function Store() {
  return (
    <Box>
      <Navbar />
      <Typography variant="h2" fontSize={50} color="white" gutterBottom id="text-1">
        Empowering Your Server with Budget-Friendly Solutions
      </Typography>
      <PricingSection />
      <ParticlesComponent id='particlescomponent'/>
    </Box>
  );
}

export default Store;
