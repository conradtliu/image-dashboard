import React, { useState } from 'react';
import { InputAdornment, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type ImageSearchProps = {
  onSearch: (term: string) => void;
};

const ImageSearch: React.FC<ImageSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <TextField
      fullWidth
      label="Search images..."
      value={searchTerm}
      onChange={handleSearchChange}
      onKeyDown={handleKeyPress}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default ImageSearch;
