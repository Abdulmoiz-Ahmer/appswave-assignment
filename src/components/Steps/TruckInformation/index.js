import React from "react";
import Button from "@mui/material/Button";
import { StepLayout } from "../../StepLayout";

export const TruckInformation = function (props) {
  const onNextButtonClick = () => {
    props.changePayload({
      from: "step4",
      to: "step5",
      step3: {},
    });
  };

  const onPreviousButtonClick = (event) => {
    event.preventDefault();
    props.changePayload({
      from: "step2",
      to: "step3",
    });
  };

  return (
    <StepLayout
      panelNo="step3"
      heading="Truck information"
      handleChange={props.handleChange}
      expanded={props.expanded}
      changePayload={props.changePayload}
      payload={props.payload}
      num={props.num}
    >
      Truck Information Content
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
