import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function Modal({useOpen,removeItem}:any) {
  const [open, setOpen] = useOpen;
  const handleClose = () => setOpen(false);
  let margin = '';
  if(window.innerWidth < 700){margin='auto 0 -1px'};
  let width = '50vw';
  if(window.innerWidth < 700){width='100vw'};

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{"& .MuiDialog-paper":{background:'#000428',color:'white',margin:`${margin}`,width:`${width}`,maxWidth:`${width}`}}}
      >
        <DialogTitle id="alert-dialog-title" sx={{margin:'auto'}}>
          <HelpOutlineIcon sx={{fontSize:'4rem'}}/>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{"&.MuiDialogContentText-root":{color:'white',textAlign:'center'}}}>
          آیا مایل به حذف این آیتم می باشید؟ 
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{direction:'rtl',marginBottom:'10px'}}>
          <Button sx={{color:'white',width:'50%'}} onClick={handleClose}>انصراف</Button>
          <Button sx={{ color:'white',backgroundColor: 'error.light',"&:hover":{backgroundColor:'error.dark'},width:'50%'}} onClick={()=>{removeItem();handleClose();}}>حذف آیتم</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}