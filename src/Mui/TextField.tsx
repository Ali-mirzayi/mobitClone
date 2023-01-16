import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const CustomInput = styled(TextField)<TextFieldProps>(() => ({
    width: '200px',
    "& div": { padding: 0 },
    '& label': {
        transformOrigin: "top right !important",
        right: "1.8rem !important",
    },
    "& legend": {
        textAlign: "right",
    },
    "& textarea": { padding: '16.5px 14px' }
}));
export default function StyledCustomization({...props}: any) {
    return (
        <CustomInput
          {...props}
        >{props.children}</CustomInput>);
}