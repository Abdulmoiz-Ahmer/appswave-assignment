import React from "react";
import { StepLayout } from "../../StepLayout";
import Button from "@mui/material/Button";

export const RequiredDocuments = function (props) {
  const onNextButtonClick = () => {
    props.changePayload({
      from: "step8",
      to: "step9",
      step6: {},
    });
  };

  const onPreviousButtonClick = (event) => {
    event.preventDefault();
    props.changePayload({
      from: "step6",
      to: "step7",
    });
  };

  return (
    <StepLayout
      panelNo="step7"
      heading="Required documents"
      handleChange={props.handleChange}
      expanded={props.expanded}
    >
      Required Documents Content
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
