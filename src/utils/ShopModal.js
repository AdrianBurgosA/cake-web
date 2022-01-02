import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const ShopModal = (props) => {
    const {open, handleClose, product} = props
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 5,
        p: 4,
    };

    return(
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {product.name}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {product.description}
                </Typography>
                <ButtonGroup variant="contained">
                    <Button color="success">Shop</Button>
                    <Button color="error" onClick={handleClose}>Cancel</Button>
                </ButtonGroup>
                </Box>
            </Modal>
        </div>
    )
}

export default ShopModal