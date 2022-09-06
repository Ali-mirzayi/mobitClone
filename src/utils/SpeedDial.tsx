import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import { useRouter } from 'next/router';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from "react";
import SimpleSnackbar from '../Hooks/ClipBoard';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function BasicSpeedDial({title}:any) {
  const [open,setOpen] = useState(false);
  const router = useRouter();
  const Snackbar = () => {
      setOpen(true);
  }
  
    const actions = [
      { icon: <FileCopyIcon />, name: 'کپی لینک',onClick:Snackbar},
      { icon: <ChatIcon /> , name: 'پیامک' , onClick:()=>router.push(`sms:body=${window.location.href} ${title}`) },
      { icon: <WhatsAppIcon color={'success'} />, name: 'واتس اپ',onClick:()=>router.push(`https://api.whatsapp.com/send?text=${title} ${window.location.href}`) },
      { icon: <TelegramIcon color={'info'} />, name: 'تلگرام',onClick:()=>router.push(`https://t.me/share/url?text=${title} & url=${window.location.href}`) },
    ];
  return (<>
    <Box sx={{ height: 320,position:"fixed" ,right:"20px", bottom:"80px", flexGrow: 1,zIndex:10 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<ShareIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            componentsProps={{
              tooltip: {
                sx: {
                  fontSize: "1em",
                  color: "white"
                }
              }}}
            onClick={()=>action.onClick()}
          />
        ))}
        
      </SpeedDial>
    </Box>
    <SimpleSnackbar text={'window.location.href'} useOpen={[open,setOpen]} />
    </>
  );
}