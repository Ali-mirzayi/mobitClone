import React from "react";
import Cookies from "js-cookie";
import { Paper, Button, IconButton } from "@mui/material";
import Head from "next/head";
import { useForm } from "react-hook-form";
import CustomInput from "../src/Mui/TextField";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/router';
import Link from "next/link";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from '../styles/Login/Login.module.css'

type UserSubmitForm = {
    email: string;
    password: string;
};

function Login() {
    const [visible, setVisible] = React.useState(false);
    const router = useRouter();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
          .required('ایمیل الزامی است.')
          .email('ایمیل نامعتبر است.'),
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
        try{
            const response = await fetch('https://api.dotenx.com/user/management/project/uXcyPyNEbyI6Bdd4/login', {
                method: 'POST',
                body: JSON.stringify(data)
                })
                .then(res =>res.json())
                if (response.accessToken) {
                    Cookies.set("accessToken", response.accessToken);
                    Cookies.set("expirationTime", response.expirationTime);  
                    router.push('/dashboard');   
            }
        }catch{
            return
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

    return (<section style={{ height: '100vh'}}>
        <Head>
            <title>Login</title>
            <link rel="icon" href="/gta-home-logo.jpg" />
        </Head>
        <div className={ styles.container}>
            <h1 className={styles.label}>GTA Home</h1>
            <Paper className={styles.paper} sx={{backgroundColor: "grey"}}>
                <form onSubmit={handleSubmit(onSubmit)} dir="rtl" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <CustomInput
                        variant="outlined"
                        type="email"
                        placeholder="ایمیل خود را وارد کنید..."
                        label="ایمیل"
                        color="info"
                        {...objemail}
                        inputRef={refemail}
                        autoComplete="email"
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : null}
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
                    <Button type="submit" sx={{ "&:hover": { backgroundColor: 'blue' }, display: "block", m: 2,backgroundColor:'blueviolet',fontSize:"20px" }} >ورود به حساب</Button>
                  <Link href="/signup" passHref><a><p className={styles.signup}>ثبت نام</p></a></Link>
                </form>
            </Paper>
        </div>
    </section>);
}

export default Login;