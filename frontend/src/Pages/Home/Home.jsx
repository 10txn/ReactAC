import './Home.css'
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import ParticlesComponent from '../../Components/Particles/Particles'
import ReviewSection from '../../Components/ReviewCards/ReviewSection'
import { Box } from '@mui/material';



function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <ParticlesComponent id='particlescomponent'/>
      <ReviewSection />
    </Box>
  );
}

export default Home;
