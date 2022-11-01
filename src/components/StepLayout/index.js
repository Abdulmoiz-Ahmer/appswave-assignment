import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const StepLayout = function (props) {
  return (
    <Accordion
      disableGutters={true}
      expanded={props.expanded === props.panelNo}
      onChange={props.handleChange(props.panelNo)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={props.panelNo + "bh-content"}
        id={props.panelNo + "bh-header"}
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {props.heading}
        </Typography>
        {/* <Typography sx={{ color: "text.secondary" }}>
            I am an accordion
          </Typography> */}
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  );
};
