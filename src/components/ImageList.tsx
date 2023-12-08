import React from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import ImageCard from './ImageCard';
import { Image } from '../types';
import Typography from '@mui/material/Typography';

interface ImageListProps {
  images: Image[];
  onView: (image: Image) => void;
  onDelete: (image: Image) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
};


const ImageList: React.FC<ImageListProps> = ({
    images,
    onView,
    onDelete,
    currentPage,
    setCurrentPage,
    itemsPerPage,
  }) => {
    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
      setCurrentPage(page);
    };
  
    // Pagination Calculations
    const indexOfLastImage = currentPage * itemsPerPage;
    const indexOfFirstImage = indexOfLastImage - itemsPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  
    const numberOfRows = Math.ceil(itemsPerPage / 3);
    const gridMinHeight = 300 * numberOfRows;
  
    return (
      <Box sx={{ width: '100%', position: 'relative', minHeight: `${gridMinHeight}px`, mb: 10 }}>
        {images.length > 0 ? (
          <>
            <Grid container spacing={2}>
              {currentImages.map((image) => (
                <Grid item xs={4} sm={4} md={4} lg={4} key={image.id}>
                  <ImageCard
                    image={image}
                    onView={() => onView(image)}
                    onDelete={() => onDelete(image)}
                  />
                </Grid>
              ))}
            </Grid>
            <Pagination
              count={Math.ceil(images.length / itemsPerPage)}
              page={currentPage}
              onChange={handleChangePage}
              color="primary"
              sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}
            />
          </>
        ) : (
          <Typography variant="subtitle1" align="center">
            No Images Found
          </Typography>
        )}
      </Box>
    );
  };



export default ImageList;
