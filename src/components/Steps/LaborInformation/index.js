import React from "react";
import { StepLayout } from "../../StepLayout";
import Button from "@mui/material/Button";

export const LaborInformation = function (props) {
  const onNextButtonClick = () => {
    props.changePayload({
      from: "step6",
      to: "step7",
      step5: {},
    });
  };

  const onPreviousButtonClick = (event) => {
    event.preventDefault();
    props.changePayload({
      from: "step4",
      to: "step5",
    });
  };
  
  return (
    <StepLayout
      panelNo="step5"
      heading="Labor information"
      handleChange={props.handleChange}
      expanded={props.expanded}
      changePayload={props.changePayload}
      payload={props.payload}
    >
      Labor Information Content
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
