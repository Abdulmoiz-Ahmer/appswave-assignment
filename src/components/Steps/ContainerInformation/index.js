import React from "react";
import { StepLayout } from "../../StepLayout";

export const ContainerInformation = function (props) {
  return (
    <StepLayout
      panelNo="panel4"
      heading="Container information"
      handleChange={props.handleChange}
      expanded={props.expanded}
    >
      Content Here
    </StepLayout>
  );
};
