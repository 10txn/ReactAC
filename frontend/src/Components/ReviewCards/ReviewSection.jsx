import React from 'react';
import { Box } from '@mui/material';
import ReviewCard from './ReviewCard1';

const reviews = [
  {
    name: 'Name Here',
    avatar: 'https://i.pravatar.cc/100?img=1',
    title: 'Job Title',
    review: 'This anticheat is amazing. The setup was instant and support is great!',
  },
  {
    name: 'Name Here',
    avatar: 'https://i.pravatar.cc/100?img=2',
    title: 'Job Title',
    review: 'Super smooth experience — great features and fast delivery.',
  },
  {
    name: 'Name Here',
    avatar: 'https://i.pravatar.cc/100?img=3',
    title: 'Job Title',
    review: 'Exactly what we needed for our server. Affordable and efficient.',
  },
];

const ReviewSection = () => {
  return (
    <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center', mt: 5 }}>
      {reviews.map((r, i) => (
        <ReviewCard key={i} {...r} />
      ))}
    </Box>
  );
};

export default ReviewSection;
