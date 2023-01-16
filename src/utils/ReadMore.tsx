import React from "react";
import styles from "./ReadMore.module.css";
import styled from "@emotion/styled";
import { DarkModeSwicher } from '../../Atoms';
import { useRecoilValue } from 'recoil';

function ReadMore({ text }: any) {
    const [readmore, title] = text;
    const [expanded, setExpanded] = React.useState<boolean>(false);
    const DarkMode = useRecoilValue(DarkModeSwicher);

    const Container = styled.div`
      margin: 20px auto;
      border-radius: 7px;
      padding: 20px;
      width: 70vw;
      position: relative;
      background-color: ${DarkMode ? '#607d8b' : '#e7e7e7' }
    `

    const Paragraph = styled.div`
    &:before {
       background: ${DarkMode ? "linear-gradient(transparent,#607d8b);" : "linear-gradient(transparent,#e7e7e7);"}
    }
   `

    console.log(expanded);

    return (
        <Container>
            <h2 onClick={()=>setExpanded(!expanded)} style={{ margin: "0.5rem 0",cursor:"pointer"}}>{title}</h2>
            <Paragraph className={!expanded ? styles.readmore : styles.none}>{readmore}</Paragraph>
        </Container>
    );
}

export default ReadMore;