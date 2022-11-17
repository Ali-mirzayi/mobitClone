import { Paper } from '@mui/material';
import Slide, { SlideProps } from '@mui/material/Slide';
import dynamic from 'next/dynamic';
import PhoneEnabledSharpIcon from '@mui/icons-material/PhoneEnabledSharp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import React, { useState } from "react";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import ContactForm from '../components/Contactus/ContactForm';
import styles from '../styles/Contact/Contact.module.css';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

export default function Home() {
  const DynamicMap = dynamic(() => import("../components/Map/Map"), {
    ssr: false, // This line is important. It's what prevents server-side render
  });
  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition: typeof Fade) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  function phoneCopy(props: any) {
    return (
      navigator.clipboard.writeText("+989367379446"),
      (<Slide {...props} direction="right" />)
    );
  }

  return (
    <Paper style={{ borderRadius: '10px', width: '80vw', margin: ' 150px auto', padding: '0 .75rem', height: '200vh' }} dir='rtl'>
      <h2 style={{ padding: '25px 5px', paddingBottom: 0 }}>تماس با من</h2>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div onClick={handleClick(phoneCopy)} style={{ cursor: "pointer" }}>
            <PhoneEnabledSharpIcon fontSize='large' color='info' className={styles.icons} />
          </div>
          <div>
          <h4>شماره تماس</h4>
          <div onClick={handleClick(phoneCopy)} style={{ cursor: "pointer" }}>
            <h3>09306228478</h3>
            <Snackbar
              open={state.open}
              onClose={handleClose}
              TransitionComponent={state.Transition}
              message="در کلیپ بورد ذخیره شد."
              key={state.Transition.name}
              autoHideDuration={6000}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Alert severity="success" sx={{ width: '100%' }}>
                 در کلیپ بورد ذخیره شد.
              </Alert>
            </Snackbar>
          </div>
          </div>
        </div>
        <div className={styles.flex}>
          <a href='mailto:alimirzaei7997@gmail.com'><EmailOutlinedIcon fontSize='large' color='info' className={styles.icons} /></a>
          <div>
            <h4>آدرس ایمیل</h4>
            <h4 style={{ padding: '5px' }}><a href='mailto:alimirzaei7997@gmail.com'>alimirzaei7997@gmail.com</a></h4>
          </div>
        </div>
      </div>
      <DynamicMap />
      <ContactForm />
    </Paper>
  );
}
