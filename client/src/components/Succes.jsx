import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Succes = ({handleCloseAlert, openAlert,message}) => {
    return (
        <Snackbar open={openAlert} autoHideDuration={8000} onClose={handleCloseAlert}>
            <Alert
                onClose={handleCloseAlert}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}

export default Succes
