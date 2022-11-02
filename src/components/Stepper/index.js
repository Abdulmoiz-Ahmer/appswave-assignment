import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Categorization,
  CompanyInformation,
  ContainerInformation,
  DeclarationsAndCommitments,
  LaborInformation,
  LocationInformation,
  RequiredDocuments,
  TruckInformation,
} from "../Steps";

export const Stepper = function () {
  const [expanded, setExpanded] = React.useState(false);
  const [payload, setPayload] = React.useState({
    from: "step1",
    to: "step2",
  });

  const handleChange = (step) => (event, isExpanded) => {
    if (payload.from === step) {
      setExpanded(isExpanded ? step : false);
    }
  };

  const changePayload = (newPayload) => {
    setPayload({ ...payload, ...newPayload });
    setExpanded(newPayload.from);
  };

  return (
    <section className="stepper">
      <Categorization
        handleChange={handleChange}
        expanded={expanded}
        changePayload={changePayload}
        payload={payload}
      />
      <CompanyInformation
        handleChange={handleChange}
        expanded={expanded}
        changePayload={changePayload}
        payload={payload}
      />
      <TruckInformation
        handleChange={handleChange}
        expanded={expanded}
        changePayload={changePayload}
        payload={payload}
      />
      <ContainerInformation
        handleChange={handleChange}
        expanded={expanded}
        changePayload={changePayload}
        payload={payload}
      />
      <LaborInformation
        handleChange={handleChange}
        expanded={expanded}
        changePayload={changePayload}
        payload={payload}
      />

      <LocationInformation
        handleChange={handleChange}
        expanded={expanded}
        changePayload={changePayload}
        payload={payload}
      />

      <RequiredDocuments
        handleChange={handleChange}
        expanded={expanded}
        changePayload={changePayload}
        payload={payload}
      />
      <DeclarationsAndCommitments
        handleChange={handleChange}
        expanded={expanded}
        changePayload={changePayload}
        payload={payload}
      />
    </section>
  );
};
