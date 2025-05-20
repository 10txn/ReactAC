import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const features = [
  { text: '1 Month License', enabled: true },
  { text: 'Instant Delivery', enabled: true },
  { text: 'Full Documentation', enabled: true },
  { text: 'Access to ReactAC in up to 5 servers', enabled: true },
  { text: '24/7 Support', enabled: true },
  { text: 'Priority Support', enabled: true },
  { text: '99.95% SLA', enabled: true },
  { text: 'Free Installation & Setup*', enabled: true },
  { text: 'Separate Hoisted Discord Role', enabled: true },
  { text: 'Large Discounts on Additional Servers', enabled: true },
];

const PricingCard3 = () => {
  return (
    <Box
      sx={{
        width: 300,
        bgcolor: '#0d0d23',
        color: '#eee',
        borderRadius: 2,
        p: 3,
        boxShadow: '0 0 15px #1a1a40',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
        Tier 3 License
      </Typography>

      <Typography variant="h3" fontWeight="bold">
        $75
      </Typography>

      <Typography variant="body2" sx={{ opacity: 0.6 }}>
        1 Year
      </Typography>

      <Box sx={{ mt: 2, mb: 2 }}>
        <Button
          component={Link} to="https://buy.stripe.com/test_9B63cx7dv8Ts9t84ZW8Ra02"
          variant="outlined"
          fullWidth
          sx={{
            borderRadius: '20px',
            borderColor: 'rgba(255,255,255,0.3)',
            color: '#fff',
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': {
              borderColor: '#a36eff',
              backgroundColor: 'rgba(163, 110, 255, 0.1)',
            },
          }}
        >
          Purchase Now
        </Button>
      </Box>

      <List dense>
        {features.map(({ text, enabled }) => (
          <ListItem key={text} disableGutters>
            <ListItemIcon sx={{ minWidth: 32 }}>
              {enabled ? (
                <CheckCircleIcon sx={{ color: '#22c55e' }} />
              ) : (
                <CancelIcon sx={{ color: '#dc2626', opacity: 0.5 }} />
              )}
            </ListItemIcon>
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                sx: { color: enabled ? '#eee' : '#888', fontWeight: enabled ? '600' : '400' },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PricingCard3;