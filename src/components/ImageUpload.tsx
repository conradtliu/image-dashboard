import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { mockApiCall, saveImagesToLocalStorage, getImagesFromLocalStorage } from '../utils/mockApi';
import { Image } from '../types';

interface ImageUploadProps {
  setImages: React.Dispatch<React.SetStateAction<Image[]>>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setImages }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setIsUploading(true);
      const filesArray = Array.from(event.target.files);

      const allFilesAreImages = filesArray.every((file) =>
        file.type.startsWith('image/')
      );

      if (!allFilesAreImages) {
        alert('Only image files are allowed.');
        setIsUploading(false);
        return;
      }

      const newImages = filesArray.map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        url: URL.createObjectURL(file),
      }));

      await mockApiCall(newImages);

      const currentImages = getImagesFromLocalStorage();
      const updatedImages = [...currentImages, ...newImages];
      saveImagesToLocalStorage(updatedImages);
      setImages(updatedImages);

      setIsUploading(false);
    }
  };

  return (
    <div>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        multiple
        type="file"
        onChange={handleFileSelect}
        disabled={isUploading}
      />
      <label htmlFor="raised-button-file">
        <Button variant="contained" component="span" disabled={isUploading}>
          {isUploading ? <CircularProgress size={24} /> : 'Upload'}
        </Button>
      </label>
    </div>
  );
};

export default ImageUpload;
