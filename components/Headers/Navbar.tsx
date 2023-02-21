import React, { useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import lightThemeOptions from '../../styles/theme/optionalTheme';
import { blueGrey, yellow } from '@mui/material/colors';
import Link from "next/link";
import styles from "../../styles/Navbar.module.css"
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "./Menu";
import DescMenu from "./DescMenu";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useSetRecoilState } from 'recoil';
import { DarkModeSwicher } from '../../Atoms';

const { lightTheme, darkTheme } = lightThemeOptions;
type props = {
  setDark: React.Dispatch<React.SetStateAction<typeof darkTheme>>;
}

function Navar({ setDark }: props) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [closeMenu, setCloseMenu] = useState<boolean>(false);
  const setDarkMode = useSetRecoilState(DarkModeSwicher);
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    setDarkMode(isDarkTheme);
    isDarkTheme ? setDark(darkTheme) : setDark(lightTheme)
  };


  return (<>
    <Paper dir="rtl" elevation={2} sx={{ backgroundColor: "grey.50", position: "fixed", width: "100vw", zIndex: 999, top: 0 }}>
      <div className={styles.phoneResponsive} >
        <IconButton sx={{ padding: 0, mr: "15px" }} onClick={() => { setCloseMenu(true) }}>
          <MenuIcon fontSize="large" />
        </IconButton>
        <Menu pop={[closeMenu, setCloseMenu]} />
        <Link href="/" passHref>
          <div className={styles.logo1} >
            <Image src="/gta-home.png" width={50} height={50} alt="logo" />
          </div>
        </Link>
        <IconButton onClick={() => { changeTheme() }} sx={{ m: "0 10px" }}>
          {isDarkTheme === true ? <LightModeIcon className={styles.icons} sx={{ color: yellow[700] }} /> : <NightsStayIcon className={styles.icons} sx={{ color: blueGrey[100] }} />}
        </IconButton>
      </div>
      {/* endphone */}
      <Divider sx={{ margin: "0 2em" }} />
      <div className={styles.section}>
        <Link href="/" passHref>
          <div className={styles.logo2}>
            <Image src="/gta-home.png" width={70} height={70} alt="logo" />
          </div>
        </Link>
        <div style={{ width: "500px" }}>
          <Paper dir="rtl" sx={{ backgroundColor: "grey.100" }} elevation={0} className={styles.input} >
            <IconButton type="submit" aria-label="جستجو">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ width: "85%" }}
              className={styles.InputBase}
              placeholder="جستجو"
              inputProps={{ 'aria-label': 'جستجو' }}
            />
            <IconButton type="submit" sx={{ p: '0.5rem' }}>
              <HighlightOffIcon />
            </IconButton>
          </Paper>
        </div>
        <div className={styles.flex}>
          <Link href="/login" className={styles.item} >
            <Chip label="ورود" sx={{ fontSize: "18px", cursor: "pointer", ".MuiChip-label": { padding: "10px 1vw" } }} icon={<PersonIcon sx={{ p: "10px", paddingLeft: 0, boxSizing: "content-box", color: 'grey.300' }} />} />
          </Link>
          <Link href="/cart" passHref>
            <IconButton sx={{ margin: "10px" }}>
              <LocalGroceryStoreIcon className={styles.item} sx={{ fontSize: "1.2em !important" }} />
            </IconButton>
          </Link>
          <IconButton onClick={() => { changeTheme() }} className={styles.darkmode} >
            {isDarkTheme === true ? <LightModeIcon className={styles.icons} sx={{ color: yellow[700] }} /> : <NightsStayIcon className={styles.icons} sx={{ color: blueGrey[100] }} />}
          </IconButton>
        </div>
      </div>
    </Paper>
    <DescMenu />
  </>);
}

export default Navar;