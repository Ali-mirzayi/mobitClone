import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React , { useState } from "react";
import styles from "./ReadMore.module.css"

function ReadMore({ text }: any) {
    const [readmore,title] = text;
    const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={{margin:"30px"}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} onClick={()=>console.log('salam')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{"& .css-o4b71y-MuiAccordionSummary-content":{flexDirection:"column"},
                    "& .css-19hn6xk-MuiAccordionSummary-expandIconWrapper":{position:"absolute",top:"0.7rem",right:"0.7rem"}
                }}
                >
                    <Typography variant="h5" sx={{margin:"15px 0"}}>{title}</Typography>
                    <Typography className={expanded===false ? styles.readmore : styles.none} >{readmore}</Typography>
                </AccordionSummary>
            </Accordion>
        </div>
    );
}

export default ReadMore;