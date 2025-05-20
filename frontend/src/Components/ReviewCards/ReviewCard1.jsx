import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const ReviewCard = ({ name, avatar, review, title }) => {
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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar alt={name} src={avatar} />
        <Box>
          <Typography fontWeight="bold">{name}</Typography>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            {title}
          </Typography>
        </Box>
      </Box>

      <Typography variant="body2" sx={{ mt: 1, opacity: 0.8, fontStyle: 'italic' }}>
        "{review}"
      </Typography>
    </Box>
  );
};

export default ReviewCard;
