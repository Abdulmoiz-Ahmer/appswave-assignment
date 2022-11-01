import React from "react";
import { StepLayout } from "../../StepLayout";

export const TruckInformation = function (props) {
  return (
    <StepLayout
      panelNo="panel3"
      heading="Truck information"
      handleChange={props.handleChange}
      expanded={props.expanded}
    >
      Content Here
    </StepLayout>
  );
};
