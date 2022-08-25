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
type UserSubmitForm = {
    email: string;
    password: string;
};

function Login() {
    const [visible, setVisible] = React.useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        setValue,
        reset,
    } = useForm<UserSubmitForm>();

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
                        label="نام کاربری"
                        color="info"
                        {...objemail}
                        inputRef={refemail}
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
                            sx={{ color: 'black',position: 'absolute',left:'20px'}}
                        >
                            {visible ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </div>
                    <Button type="submit" sx={{ "&:hover": { backgroundColor: '#0d47a1' }, display: "block", m: 2,backgroundColor:'blueviolet' }} >ورود به حساب</Button>
                </form>
                <Link href="/signup" passHref><a><p style={{textAlign:"right"}}>signup</p></a></Link>
            </Paper>
        </div>
    </section>);
}

export default Login;