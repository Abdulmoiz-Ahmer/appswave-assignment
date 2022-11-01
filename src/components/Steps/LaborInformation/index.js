import React from "react";
import { StepLayout } from "../../StepLayout";

export const LaborInformation = function (props) {
  return (
    <StepLayout
      panelNo="panel5"
      heading="Labor information"
      handleChange={props.handleChange}
      expanded={props.expanded}
    >
      Content Here
    </StepLayout>
  );
};
