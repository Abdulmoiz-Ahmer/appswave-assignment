import React from "react";
import { StepLayout } from "../../StepLayout";

export const CompanyInformation = function (props) {
  return (
    <StepLayout
      panelNo="panel2"
      heading="Company information"
      handleChange={props.handleChange}
      expanded={props.expanded}
    >
      Content Here
    </StepLayout>
  );
};
