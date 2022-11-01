import React from "react";
import { StepLayout } from "../../StepLayout";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

export const Categorization = function (props) {
  return (
    <StepLayout
      panelNo="panel1"
      heading="Categorization"
      handleChange={props.handleChange}
      expanded={props.expanded}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle2" gutterBottom>
              Transporter type
            </Typography>
            <Typography variant="body2" gutterBottom>
              Please select your type.
            </Typography>
            <Card sx={{ minWidth: 275 }} className="radio-group-container">
              <CardContent>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Digging Contractor"
                      control={<Radio />}
                      label="Digging Contractor"
                    />
                    <Typography variant="subtitle">
                      Description will be here for the type.
                    </Typography>
                    <FormControlLabel
                      value="Private Transporter"
                      control={<Radio />}
                      label="Private Transporter"
                    />
                    <Typography variant="subtitle">
                      Description will be here for the type.
                    </Typography>
                    <FormControlLabel
                      value="Construction and commercial waste transportation company"
                      control={<Radio />}
                      label="Construction and commercial waste transportation company"
                    />
                    <Typography variant="subtitle">
                      Description will be here for the type.
                    </Typography>
                  </RadioGroup>
                </FormControl>
              </CardContent>
            </Card>
            <Button variant="contained" color="success">
              Next
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2" gutterBottom>
              Waste Type
            </Typography>
            <Typography variant="body2" gutterBottom>
              Please select waste type.
            </Typography>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Commercial Activities"
                    color="success"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Construction Waste"
                    color="success"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Special Medical waste"
                    color="success"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Treated medical waste"
                    color="success"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Sewage Water"
                    color="success"
                  />
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </StepLayout>
  );
};
