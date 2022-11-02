import React from "react";
import { StepLayout } from "../../StepLayout";

export const TruckInformation = function (props) {
  return (
    <StepLayout
      panelNo="step3"
      heading="Truck information"
      handleChange={props.handleChange}
      expanded={props.expanded}
      changePayload={props.changePayload}
      payload={props.payload}
    >
      Content Here
    </StepLayout>
  );
};
