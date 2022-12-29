import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";
import styles from "./ReadMore.module.css";
import styled from "@emotion/styled";
import { DarkModeSwicher } from '../../Atoms';
import { useRecoilValue } from 'recoil';

function ReadMore({ text }: any) {
    const [readmore, title] = text;
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const DarkMode = useRecoilValue(DarkModeSwicher);
    const Paragraph = styled.div`
     &:before {
        background: ${DarkMode ? "linear-gradient(transparent,#607d8b);" : "linear-gradient(transparent,#e7e7e7);"}
     }
    `

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box
            sx={{
                "& .MuiAccordionSummary-content": { flexDirection: "column" },
                "& .MuiAccordionSummary-expandIconWrapper": { position: "absolute", top: "0.7rem", right: "0.7rem" },
                margin: "20px"
            }}
        >
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={DarkMode ? {} : { backgroundColor: '#e7e7e7' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <h2 style={{ margin: "0.5rem 0" }}>{title}</h2>
                    <Paragraph className={expanded === false ? styles.readmore : styles.none}>{readmore}</Paragraph>
                </AccordionSummary>
            </Accordion>
        </Box>
    );
}

export default ReadMore;


// sx={{"& .css-o4b71y-MuiAccordionSummary-content":{flexDirection:"column"},
// "& .css-yw020d-MuiAccordionSummary-expandIconWrapper":{position:"absolute",top:"0.7rem",right:"0.7rem"},
// "& .css-19hn6xk-MuiAccordionSummary-expandIconWrapper":{position:"absolute",top:"0.7rem",right:"0.7rem"},
// margin:"20px"
// }}