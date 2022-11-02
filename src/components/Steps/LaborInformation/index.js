import React from "react";
import { StepLayout } from "../../StepLayout";

export const LaborInformation = function (props) {
  return (
    <StepLayout
      panelNo="step5"
      heading="Labor information"
      handleChange={props.handleChange}
      expanded={props.expanded}
      changePayload={props.changePayload}
      payload={props.payload}
    >
      Content Here
    </StepLayout>
  );
};
