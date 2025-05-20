import PricingCard1 from '../../Components/PricingCards/PricingCard1';
import PricingCard2 from '../../Components/PricingCards/PricingCard2';
import PricingCard3 from '../../Components/PricingCards/PricingCard3';
import { Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const PricingSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 10, // spacing between the cards
        justifyContent: 'center', // centers the cards horizontally
        alignItems: 'flex-start', // align cards at top
        mt: 30,
      }}
    >
      <PricingCard1 />
      <PricingCard2 />
      <PricingCard3 />
    </Box>
  );
};

export default PricingSection;
