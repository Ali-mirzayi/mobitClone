import React, { useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton, Chip, Box, Paper, InputBase, Divider } from "@mui/material";
import lightThemeOptions from '../../styles/theme/optionalTheme';
import { blueGrey, yellow } from '@mui/material/colors';
import Link from "next/link";
import styles from "../../styles/Navbar.module.css"
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';

const { lightTheme, darkTheme } = lightThemeOptions;
type props = {
  setDark: React.Dispatch<React.SetStateAction<typeof darkTheme>>;
}

function Navar({ setDark }: props) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    isDarkTheme ? setDark(darkTheme) : setDark(lightTheme)
  };
  return (<>

    <Paper dir="rtl" elevation={2} sx={{ backgroundColor: "grey.50" }}>
      <div className={styles.topheader} >
        <MenuIcon fontSize="large" sx={{m:"0 10px"}}/>
        <div className={styles.logo1} >
          <Image src="/gta-home.png" width="80" height="80" alt="logo" />
        </div>
        <IconButton onClick={() => { changeTheme() }} sx={{m:"0 10px"}}>
            {isDarkTheme === true ? <LightModeIcon className={styles.icons} sx={{ color: yellow[700] }} /> : <NightsStayIcon className={styles.icons} sx={{ color: blueGrey[100] }} />}
          </IconButton>
      </div>
      <Divider className={styles.divider} />
      <div className={styles.container}>
          <div className={styles.logo2}>
            <Image src="/gta-home.png" width="50" height="50" alt="logo" />
          </div>
          <div style={{ width:"500px"}}>
          <Paper dir="rtl" sx={{ backgroundColor: "grey.100"}} elevation={0} className={styles.paper} >
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="جستجو">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ m: 1, fontSize: 20}}
              placeholder="جستجو"
              inputProps={{ 'aria-label': 'جستجو' }}
            />
          </Paper>
          </div>
        <div className={styles.flex}>
          <Link href="login" className={styles.item} >
            <Chip label="ورود" sx={{ fontSize: "15px",".MuiChip-label":{padding:"10px 1vw"}}} icon={<PersonIcon sx={{ p: "10px",paddingLeft:0, boxSizing: "content-box",color:'grey.300'}}/>} />
          </Link>
          <Link href="login">
            <LocalGroceryStoreIcon className={styles.item} sx={{ p: "10px",pl:"0",marginLeft:0, boxSizing: "content-box" }} />
          </Link>
          <IconButton onClick={() => { changeTheme() }} className={styles.darkmode} >
            {isDarkTheme === true ? <LightModeIcon className={styles.icons} sx={{ color: yellow[700] }} /> : <NightsStayIcon className={styles.icons} sx={{ color: blueGrey[100] }} />}
          </IconButton>
        </div>
      </div>
    </Paper>
  </>);
}

export default Navar;