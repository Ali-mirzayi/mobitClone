import TextField, { TextFieldProps } from '@mui/material/TextField';

function CustomInput (props:any) {
    return(
    <TextField {...props} sx={{"& div": { padding: 0 },"& label": {transformOrigin: "top right !important",right: "1.8rem !important"},"& legend": {textAlign: "right"},"& textarea": { padding: '16.5px 14px' }}}>{props.children}</TextField>
    )
}

export default CustomInput ;