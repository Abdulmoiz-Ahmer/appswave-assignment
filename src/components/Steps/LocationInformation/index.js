import React from "react";
import { StepLayout } from "../../StepLayout";

export const LocationInformation = function (props) {
  return (
    <StepLayout
      panelNo="panel6"
      heading="Location information"
      handleChange={props.handleChange}
      expanded={props.expanded}
    >
      Content Here
    </StepLayout>
  );
};
