import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Check } from "../../assets/svg/check";

function returnClassName(from, panelNo) {
  const array = [];

  if (from === "step2") {
    array.push("step1");
  }

  if (from === "step3") {
    array.push("step1");
    array.push("step2");
  }

  if (from === "step4") {
    array.push("step1");
    array.push("step2");
    array.push("step3");
  }

  if (from === "step5") {
    array.push("step1");
    array.push("step2");
    array.push("step3");
    array.push("step4");
  }

  if (from === "step6") {
    array.push("step1");
    array.push("step2");
    array.push("step3");
    array.push("step4");
    array.push("step5");
  }

  if (from === "step7") {
    array.push("step1");
    array.push("step2");
    array.push("step3");
    array.push("step4");
    array.push("step5");
    array.push("step6");
  }

  if (from === "step8") {
    array.push("step1");
    array.push("step2");
    array.push("step3");
    array.push("step4");
    array.push("step5");
    array.push("step6");
    array.push("step7");
  }

  if (from === "step9") {
    array.push("step1");
    array.push("step2");
    array.push("step3");
    array.push("step4");
    array.push("step5");
    array.push("step6");
    array.push("step7");
    array.push("step8");
  }

  if (array.includes(panelNo)) {
    return "";
  } else {
    return "circle";
  }
}

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
        <div
          className={
            props.expanded === props.panelNo
              ? "active-circle"
              : returnClassName(props?.payload?.from, props.panelNo)
          }
        >
          {props.expanded === props.panelNo ? (
            props.num
          ) : returnClassName(props?.payload?.from, props.panelNo) == "" ? (
            <Check />
          ) : (
            props.num
          )}
        </div>

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
