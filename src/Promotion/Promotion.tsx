import { getRemainingTimeUntilMsTimestamp } from "../utils/CountdownTimerUtils";
import countdownTimestampMs from "../utils/countdownTimestampMs";
import { useState, useEffect } from 'react';
import styles from "./Promotion.module.css";
const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

function Promotion() {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs());
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimestampMs()]);

    function updateRemainingTime(countdown: any) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
            <div style={{ display: 'flex', position: 'absolute', left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                <div className={styles.span}><div style={{ display: 'inline' }}>{remainingTime.days}</div></div>
                <span style={{ color: '#ffffff' }}>:</span>
                <span className={styles.span}><div className={styles.twonumbers}>{remainingTime.hours}</div></span>
                <span style={{ color: '#ffffff' }}>:</span>
                <span className={styles.span}><div className={styles.twonumbers}>{remainingTime.hours}</div></span>
                <span style={{ color: '#ffffff' }}>:</span>
                <span className={styles.span}><div className={styles.twonumbers}>{remainingTime.seconds}</div></span>
            </div>
    );
}

export default Promotion;