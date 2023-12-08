import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Image } from '../types';
import { formatImageName } from '../utils/helperMethods';

type ImageProps = {
  image: Image;
  onView: (image: Image) => void;
  onDelete: (image: Image) => void;
};

const ImageCard: React.FC<ImageProps> = ({ image, onView, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
        <CardMedia
          component="img"
          image={image.url}
          alt={formatImageName(image.name)}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" noWrap overflow={'clip'}>
          {formatImageName(image.name)}
        </Typography>
      </CardContent>
      {isHovered && (
          <CardActions 
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignItems: 'center',
              visibility: isHovered ? 'visible' : 'hidden',
            }}
          >
            <IconButton aria-label="view" onClick={() => onView(image)} sx={{ pointerEvents: 'auto' }}>
                <VisibilityIcon sx={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '50%' }} />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => onDelete(image)} sx={{ pointerEvents: 'auto' }}>
                <DeleteIcon sx={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '50%' }} />
            </IconButton>
          </CardActions>
        )}
    </Card>
  );
};

export default ImageCard;