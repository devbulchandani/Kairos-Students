import * as React from 'react';
import {
    Button,
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle,
} from "@mui/material"
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const AreYouSure = ({handleCloseModal, deletePost, openModal}) => {

    return (
        <Dialog
            open={openModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseModal}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Delete Post!!"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Are you sure you want to delete this post
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseModal}>No</Button>
                <Button onClick={() => { deletePost(); handleCloseModal(); }}>Yes</Button>

            </DialogActions>
        </Dialog>
    )
}

export default AreYouSure
