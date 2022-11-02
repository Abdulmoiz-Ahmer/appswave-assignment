import React from "react";
import { StepLayout } from "../../StepLayout";

export const LocationInformation = function (props) {
  return (
    <StepLayout
      panelNo="step6"
      heading="Location information"
      handleChange={props.handleChange}
      expanded={props.expanded}
      changePayload={props.changePayload}
      payload={props.payload}
    >
      Content Here
    </StepLayout>
  );
};
