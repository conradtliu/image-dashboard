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
        width: '100%', // Take the full width of the Grid item
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

  

// const ImageCard: React.FC<ImageProps> = ({ image, onView, onDelete }) => {
//     const [isHovered, setIsHovered] = useState(false);
  
//     return (
//       <Card 
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         sx={{
//           width: '100%', // Take the full width of the Grid item
//           position: 'relative',
//           '&:after': {
//             content: '""', // Create a pseudo-element for maintaining aspect ratio
//             display: 'block',
//             paddingBottom: '100%', // Padding-bottom as a percentage of the width creates a square
//           },
//           '& .MuiCardMedia-root': {
//             position: 'absolute', // Absolute position the media within the card
//             top: 0,
//             right: 0,
//             bottom: 0,
//             left: 0,
//             height: '100%', // Take the full height of the card
//             width: '100%', // Take the full width of the card
//             objectFit: 'cover', // Cover the area without distorting the aspect ratio
//           }
//         }}
//       >
//         <CardMedia
//           component="img"
//           image={image.url}
//           alt={image.name}
//         />
//         <CardContent sx={{
//           position: 'absolute', // Absolute position the content
//           bottom: 0, // Position at the bottom of the card
//           width: '100%', // Take the full width of the card
//           backgroundColor: 'rgba(255,255,255,0.7)', // Optional: Background color for the text area
//           textAlign: 'center', // Center the text
//           padding: '8px', // Adjust padding to control the space around the text
//         }}>
//           <Typography noWrap variant="body2" component="p">
//             {formatImageName(image.name)}
//           </Typography>
//         </CardContent>
//         {isHovered && (
//           <CardActions 
//             sx={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               display: 'flex',
//               alignItems: 'center',
//               //backgroundColor: 'rgba(255, 255, 255, 0.7)',
//               visibility: isHovered ? 'visible' : 'hidden',
//             }}
//           >
//             <IconButton aria-label="view" onClick={() => onView(image)}>
//               <VisibilityIcon />
//             </IconButton>
//             <IconButton aria-label="delete" onClick={() => onDelete(image)}>
//               <DeleteIcon />
//             </IconButton>
//           </CardActions>
//         )}
//       </Card>
//     );
//   };
  
//   export default ImageCard;
  