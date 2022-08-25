import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const CustomInput = styled(TextField)<TextFieldProps>((props) => ({
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
export default function StyledCustomization(props: any) {
    return (
        <CustomInput
            inputRef={props.inputRef}
            onBlur={props.onBlur}
            variant={props.outlined}
            placeholder={props.placeholder}
            label={props.label}
            onChange={props.onChange}
            autoComplete={props.autoComplete}
            color={props.color}
            sx={props.sx}
            helperText={props.helperText}
            focused={props.focused}
            error={props.error}
            type={props.type}
            name={props.name}
            value={props.value}
            required={props.required}
            rows={props.rows}
            multiline={props.multiline}
            fullWidth={props.fullWidth}
            autoFocus={props.autoFocus}
            disabled={props.disabled}
            className={props.className}
        >{props.children}</CustomInput>);
}