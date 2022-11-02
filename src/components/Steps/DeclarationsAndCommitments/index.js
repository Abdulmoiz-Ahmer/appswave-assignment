import React from "react";
import { StepLayout } from "../../StepLayout";

export const DeclarationsAndCommitments = function (props) {
  return (
    <StepLayout
      panelNo="step8"
      heading="Declarations and Commitments"
      handleChange={props.handleChange}
      expanded={props.expanded}
      changePayload={props.changePayload}
      payload={props.payload}
    >
      Content Here
    </StepLayout>
  );
};
