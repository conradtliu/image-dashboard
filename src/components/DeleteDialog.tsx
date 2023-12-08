import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Image } from '../types';
import { Box, Typography } from '@mui/material';

interface DeleteDialogProps {
  open: boolean;
  image: Image;
  onClose: () => void;
  onConfirmDelete: () => void;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  open,
  image,
  onClose,
  onConfirmDelete,
}) => {

    const imagePreview = image ? (
        <img
            src={image.url}
            alt={image.name}
            style={{
            maxWidth: '100%',
            maxHeight: '200px',
            objectFit: 'contain',
            margin: '10px auto',
            justifyContent: 'center'
            }}
        />
    ) : null;
    
return (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this image?
        </DialogContentText>
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Centers horizontally
            justifyContent: 'center', // Centers vertically
            my: 2, // Margin for spacing
        }}
        >
            {imagePreview}
        </Box>
        {image && <Typography variant="subtitle1" align="center">{image.name}</Typography>}
        </DialogContent>
        <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirmDelete} color="error" autoFocus>
            Delete
        </Button>
        </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
