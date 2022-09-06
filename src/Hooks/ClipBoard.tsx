import * as React from 'react';
import {Snackbar} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';

type TransitionProps = Omit<SlideProps, 'direction'>;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

export default function SimpleSnackbar({ text,useOpen }: any) {
  const [open, setOpen] = useOpen;
  React.useEffect(() =>{
    navigator.clipboard.writeText(text);
  },[open,text])

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      TransitionComponent={TransitionLeft}
      message="در کلیپ بورد ذخیره شد."
      key={TransitionLeft.name}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      // sx={{"& div": { flexDirection:"row-reverse" , "& .css-ki1hdl-MuiAlert-action":{margin:0},justifyContent:"center"}}}
    >
      <Alert onClose={handleClose} severity="success" >
        در کلیپ بورد ذخیره شد.
      </Alert>
    </Snackbar>
  );
}