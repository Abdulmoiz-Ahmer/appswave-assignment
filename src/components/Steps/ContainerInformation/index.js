import React from "react";
import { StepLayout } from "../../StepLayout";

export const ContainerInformation = function (props) {
  return (
    <StepLayout
      panelNo="step4"
      heading="Container information"
      handleChange={props.handleChange}
      changePayload={props.changePayload}
      payload={props.payload}
      expanded={props.expanded}
    >
      Content Here
    </StepLayout>
  );
};
