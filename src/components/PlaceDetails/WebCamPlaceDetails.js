import React from 'react';
import { Typography, Button, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';

const WebCamPlaceDetails = ({ webcam, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={webcam.image ? webcam.image.current.preview : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={webcam.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{webcam.title}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(webcam.player.day.embed, '_blank')}>
          day
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(webcam.player.lifetime.embed, '_blank')}>
          lifetime
        </Button>
      </CardActions>
    </Card>
  );
};

export default WebCamPlaceDetails;
