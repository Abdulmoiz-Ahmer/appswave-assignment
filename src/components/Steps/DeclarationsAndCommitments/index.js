import React from "react";
import { StepLayout } from "../../StepLayout";

export const DeclarationsAndCommitments = function (props) {
  return (
    <StepLayout
      panelNo="panel8"
      heading="Declarations and Commitments"
      handleChange={props.handleChange}
      expanded={props.expanded}
    >
      Content Here
    </StepLayout>
  );
};
