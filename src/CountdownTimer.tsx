import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import styles from '../styles/CountdownTimer.module.css';
import { getRemainingTimeUntilMsTimestamp } from './utils/CountdownTimerUtils';
import PercentSharpIcon from '@mui/icons-material/PercentSharp';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({ countdownTimestampMs }: any) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimestampMs]);

    function updateRemainingTime(countdown: any) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }
    
    return (
        <Box className={styles.container} sx={{ backgroundColor: 'error.light' }}>
            <div style={{display:'flex'}}>
                <div className={styles.span}><div style={{display:'inline'}}>{remainingTime.days}</div></div>
                <span style={{color:'#ffffff'}}>:</span>
                <span className={styles.span}><div className={styles.twonumbers}>{remainingTime.hours}</div></span>
                <span style={{color:'#ffffff'}}>:</span>
                <span className={styles.span}><div className={styles.twonumbers}>{remainingTime.hours}</div></span>
                <span style={{color:'#ffffff'}}>:</span>
                <span className={styles.span}><div className={styles.twonumbers}>{remainingTime.seconds}</div></span>
            </div>
            <div style={{display:'flex',alignItems:'center'}}><p className={styles.p}>پیشنهادهای ویژه</p><PercentSharpIcon sx={{color:'#ffffff'}} className={styles.icon} /></div>
        </Box>
    );
}

export default CountdownTimer;