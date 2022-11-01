import React from "react";
import { StepLayout } from "../../StepLayout";

export const RequiredDocuments = function (props) {
  return (
    <StepLayout
      panelNo="panel7"
      heading="Required documents"
      handleChange={props.handleChange}
      expanded={props.expanded}
    >
      Content Here
    </StepLayout>
  );
};
