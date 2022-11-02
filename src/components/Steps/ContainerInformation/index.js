import React from "react";
import Button from "@mui/material/Button";
import { StepLayout } from "../../StepLayout";

export const ContainerInformation = function (props) {
  const onNextButtonClick = () => {
    props.changePayload({
      from: "step5",
      to: "step6",
      step4: {},
    });
  };

  const onPreviousButtonClick = (event) => {
    event.preventDefault();
    props.changePayload({
      from: "step3",
      to: "step4",
    });
  };

  return (
    <StepLayout
      panelNo="step4"
      heading="Container information"
      handleChange={props.handleChange}
      changePayload={props.changePayload}
      payload={props.payload}
      expanded={props.expanded}
    >
      Container Information Content
      <div className="company-info-btn">
        <Button
          type="button"
          variant="contained"
          className="next"
          onClick={onNextButtonClick}
        >
          Next
        </Button>
        <div className="previous">
          <button
            type="button"
            className="previous-btn"
            onClick={onPreviousButtonClick}
          >
            Previous
          </button>
        </div>
      </div>
    </StepLayout>
  );
};
