import { Paper, Button, IconButton } from "@mui/material";
import Head from "next/head";
import { useForm } from "react-hook-form";
import CustomInput from "../src/Mui/TextField";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from "react";
import useSWR from 'swr';

type UserSubmitForm = {
    email: string;
    password: string;
    fullname: string;
};

function Signup() {
    const [visible, setVisible] = React.useState(false)
    const {
        register,
        handleSubmit,
        setValue,
        reset,
    } = useForm<UserSubmitForm>();

    const onSubmit = (data: any) => {
        // try {
            fetch('https://api.dotenx.com/user/management/project/uXcyPyNEbyI6Bdd4/register', {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
            })
            .then(res => res.json())
         
        // catch (error) {
        //         throw new Error(`failed to signup ${error.message}`)
        //     }
        // console.log(JSON.stringify(data));
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

    return (<section style={{ height: '100vh', backgroundImage: 'https://www.mobit.ir/_nuxt/img/mobit-logo-footer-mobile.75ed3a3.svg' }}>
        <Head>
            <title>Login</title>
            <link rel="icon" href="/gta-home-logo.jpg" />
        </Head>
        <div style={{ marginTop: 10, width: 'fit-content', padding: 40, margin: 'auto', fontSize: 25 }}>
            <h1>GTA Home</h1>
            <Paper sx={{ backgroundColor: "grey", padding: 10 }}>
                <form onSubmit={handleSubmit(onSubmit)} dir="rtl">
                    <CustomInput
                        variant="outlined"
                        type="text"
                        placeholder="نام کاربری خود را وارد کنید..."
                        label="email "
                        color="info"
                        {...objemail}
                        inputRef={refemail}
                        autoComplete="username"
                        sx={{ width: 300, m: 2 }}
                    />
                    <CustomInput
                        variant="outlined"
                        type="text"
                        placeholder="نام کاربری خود را وارد کنید..."
                        label="نام کاربری"
                        color="info"
                        {...objfullname}
                        inputRef={reffullname}
                        autoComplete="username"
                        sx={{ width: 300, m: 2 }}
                    />
                    <div style={{display:'flex',position:'relative',alignItems:'center'}}>
                        <CustomInput
                            variant="outlined"
                            type={visible ? 'text' : 'password'}
                            placeholder="رمز ورود وارد کنید..."
                            label="رمز ورود"
                            color="info"
                            {...objpassword}
                            inputRef={refpassword}
                            sx={{ width: 300, m: 2 }}
                        />
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            sx={{ color: 'black',position: 'absolute',left:'180px'}}
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