import { Paper, Button, IconButton } from "@mui/material";
import Head from "next/head";
import { useForm } from "react-hook-form";
import CustomInput from "../src/Mui/TextField";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from '../styles/Login/Login.module.css';
import Image from 'next/image';
// import Image from 'next/future/image';

type UserSubmitForm = {
    email: string;
    fullname: string;
    password: string;
};

function Signup() {
    const [visible, setVisible] = React.useState(false)

    const validationSchema = Yup.object().shape({
        email: Yup.string()
          .required('ایمیل الزامی است.')
          .email('ایمیل نامعتبر است.'),
        fullname: Yup.string()
          .required('نام کاربری الزامی است.'),
        password: Yup.string()
           .required('رمز عبور الزامی است.'),
      });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<UserSubmitForm>(
        {
            resolver: yupResolver(validationSchema),
        }
    );

    const onSubmit = async(data: any) => {
        try {
            await fetch('https://api.dotenx.com/user/management/project/uXcyPyNEbyI6Bdd4/register', {
            method: 'POST',
            body: JSON.stringify(data)
            })
            .then(res => res.json())}
        catch (error:any) {
                throw new Error(`failed to signup ${error.message}`)
            }
        reset();
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleClickShowPassword = () => { setVisible(!visible) };
    //customInput dosent assigned register
    const { ref: refemail, ...objemail } = register('email');
    const { ref: refpassword, ...objpassword } = register('password');
    const { ref: reffullname, ...objfullname } = register('fullname');

    return (<section style={{ height: '100vh'}}>
        <Head>
            <title>Login</title>
            <link rel="icon" href="/gta-home-logo.jpg" />
        </Head>
        <div className={styles.container}>
            <h1>GTA Home</h1>
            <Paper className={styles.paper}>
                <form onSubmit={handleSubmit(onSubmit)} dir="rtl" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <CustomInput
                        variant="outlined"
                        type="email"
                        placeholder="ایمیل خود را وارد کنید..."
                        {...objemail}
                        inputRef={refemail}
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : null}
                        color="info"
                        label="ایمیل "
                        autoComplete="email"
                        className={styles.input}
                      />
                    <CustomInput
                        variant="outlined"
                        type="text"
                        placeholder="نام کاربری خود را وارد کنید..."
                        label="نام کاربری"
                        color="info"
                        {...objfullname}
                        inputRef={reffullname}
                        autoComplete="fullname"
                        error={!!errors.fullname}
                        helperText={errors.fullname ? errors.fullname.message : null}
                        className={styles.input}
                    />
                    <div className={styles.passInput}>
                        <CustomInput
                            variant="outlined"
                            type={visible ? 'text' : 'password'}
                            placeholder="رمز ورود وارد کنید..."
                            label="رمز ورود"
                            color="info"
                            {...objpassword}
                            inputRef={refpassword}
                            error={!!errors.password}
                            helperText={errors.password ? errors.password.message : null}
                            sx={{width:"100%"}}
                        />
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            sx={{ color: 'black',position: 'absolute',left:'12px',top:'9px'}}
                        >
                            {visible ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </div>
                    <Button type="submit" sx={{ "&:hover": { backgroundColor: '#0d47a1' }, display: "block", m: 2,backgroundColor:'blueviolet' }} >ایجاد حساب</Button>
                </form>
            </Paper>
        </div>
    </section>);
}

export default Signup;