import React from "react";
import { StepLayout } from "../../StepLayout";
import Button from "@mui/material/Button";

export const LocationInformation = function (props) {
  const onNextButtonClick = () => {
    props.changePayload({
      from: "step7",
      to: "step8",
      step6: {},
    });
  };

  const onPreviousButtonClick = (event) => {
    event.preventDefault();
    props.changePayload({
      from: "step5",
      to: "step6",
    });
  };

  return (
    <StepLayout
      panelNo="step6"
      heading="Location information"
      handleChange={props.handleChange}
      expanded={props.expanded}
      changePayload={props.changePayload}
      payload={props.payload}
      num={props.num}
    >
      Location Information Content
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
