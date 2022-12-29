import React from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomInput from "../../src/Mui/TextField";
import styles from "../../styles/Contact/ContactForm.module.css"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type UserSubmitForm = {
    name: string;
    phone: string;
    email: string;
    title: string;
    message: string;
  };

//   const phoneRegExp = /^(\+98|0)?9\d{9}$/
  const phoneRegExp = /^(\+98|0)?9\d{9}$|^$/

function ContactForm() {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
          .required('نام و نام خانوادگی الزامی است.'),
        phone: Yup.string()
          .matches(phoneRegExp, 'شماره تماس نامعتبر است.'),
        email: Yup.string()
          .email('ایمیل نامعتبر است.'),
        title: Yup.string()
           .required('عنوان الزامی است.'),
        message: Yup.string()
           .required('لطفا نظر خود را به ما برسانید.')
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


      const onSubmit = (data:any) => {
        console.log(JSON.stringify(data));
       reset();
      };

      //customInput dosent assigned register
      const {ref:refname,...objname} = register('name');
      const {ref:refphone,...objphone} = register('phone');
      const {ref:refemail,...objemail} = register('email');
      const {ref:reftitle,...objtitle} = register('title');
      const {ref:refmessage,...objmessage} = register('message');
      

    return (<section className={styles.section}>
        <h2 className={styles.label}>ارسال سریع پیام</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.flex}>
                <div className={styles.div1}>
                    <CustomInput
                        variant="outlined"
                        type="text"
                        placeholder="نام و نام خانوادگی را وارد نمایید ..."
                        label="نام و نام خانوادگی"
                        color="info"
                        className={styles.lol}
                        {...objname}
                        inputRef={refname}
                        autoComplete="name"
                        error={!!errors.name}
                        helperText={errors.name ? errors.name.message: null}
                    />
                </div>
                <div className={styles.div1}>
                    <CustomInput
                        variant="outlined"
                        type="tel"
                        placeholder="شماره موبایل را وارد نمایید ..."
                        label="شماره موبایل"
                        color="info"
                        className={styles.lol} 
                        autoComplete="phone"
                        {...objphone}
                        inputRef={refphone}
                        error={!!errors.phone}
                        helperText={errors.phone ? errors.phone.message : null}
                    />
                </div>
            </div>
            <div className={styles.div}>
                <CustomInput
                    variant="outlined"
                    placeholder="ایمیل وارد نمایید..."
                    type="email"
                    label="ایمیل"
                    color="info"
                    {...objemail}
                    inputRef={refemail}
                    autoComplete="email"
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : null}
                    sx={{ width: "100%" }}
                />
            </div>
            <div className={styles.div}>
                <CustomInput
                    variant="outlined"
                    placeholder="بنویسید ..."
                    type="text"
                    label="عنوان"
                    {...objtitle}
                    inputRef={reftitle}
                    error={!!errors.title}
                    helperText={errors.title ? errors.title.message : null}
                    color="info"
                    sx={{ width: "100%" }}
                />
            </div>
            <div className={styles.div}>
                <CustomInput
                    variant="outlined"
                    placeholder="بنویسید ..."
                    type="text"
                    label="متن"
                    color="info"
                    sx={{ width: "100%","& textarea":{ resize: 'vertical',overflow: 'auto'}}}
                    {...objmessage}
                    inputRef={refmessage}
                    error={!!errors.message}
                    helperText={errors.message ? errors.message.message : null}
                    multiline
                    rows={5}
                />
            </div>
            <Button className={styles.btn} type="submit" sx={{"&:hover":{backgroundColor:'#0d47a1'}}}>ارسال پیام</Button>
        </form>
    </section>);
}

export default ContactForm;