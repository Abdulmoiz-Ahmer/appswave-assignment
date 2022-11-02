import React from "react";
import { StepLayout } from "../../StepLayout";
import Button from "@mui/material/Button";

export const DeclarationsAndCommitments = function (props) {
  const onFinishButtonClick = () => {
    console.log(props.payload);
  };

  const onPreviousButtonClick = (event) => {
    event.preventDefault();
    props.changePayload({
      from: "step7",
      to: "step8",
    });
  };

  return (
    <StepLayout
      panelNo="step8"
      heading="Declarations and Commitments"
      handleChange={props.handleChange}
      expanded={props.expanded}
      changePayload={props.changePayload}
      payload={props.payload}
      num={props.num}
    >
      Content Here
      <div className="company-info-btn">
        <Button
          type="button"
          variant="contained"
          className="next"
          onClick={onFinishButtonClick}
        >
          Finish
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
