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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section>
      <Categorization handleChange={handleChange} expanded={expanded} />
      <CompanyInformation handleChange={handleChange} expanded={expanded} />
      <TruckInformation handleChange={handleChange} expanded={expanded} />
      <ContainerInformation handleChange={handleChange} expanded={expanded} />
      <LaborInformation handleChange={handleChange} expanded={expanded} />
      <RequiredDocuments handleChange={handleChange} expanded={expanded} />
      <DeclarationsAndCommitments
        handleChange={handleChange}
        expanded={expanded}
      />
    </section>
  );
};
