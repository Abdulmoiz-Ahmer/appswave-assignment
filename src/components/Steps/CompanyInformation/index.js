import React from "react";
import { Typography } from "@mui/material";
import { StepLayout } from "../../StepLayout";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import mapImage from "../../../assets/images/map.png";

export const CompanyInformation = function (props) {
  const [value, setValue] = React.useState(null);
  return (
    <StepLayout
      panelNo="panel2"
      heading="Company information"
      handleChange={props.handleChange}
      expanded={props.expanded}
    >
      <Typography>Please Enter your company information</Typography>
      <div>
        <Typography>CR number *</Typography>
      </div>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        placeholder="Write something"
      />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography>Company name</Typography>
          <Typography>Nahdi Pharmacy</Typography>
          <Typography>Manager name</Typography>
          <div>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
          </div>
          <Typography>Partner name</Typography>

          <div>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
          </div>
          <div>
            <div>
              <Typography>CR Issue date</Typography>
              <TextField
                id="standard-basic"
                placeholder="Write Something"
                variant="standard"
              />
            </div>
            <div>
              <Typography>CR Expiry date</Typography>
              <TextField
                id="standard-basic"
                placeholder="Write Something"
                variant="standard"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <div>
        <Typography>Commercial License Number *</Typography>
      </div>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        placeholder="write numbers"
      />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div>
            <div>
              <Typography>Commercial License Issue date</Typography>
              <TextField
                id="standard-basic"
                placeholder="Write Something"
                variant="standard"
              />
            </div>
            <div>
              <Typography>Commercial License Expiry date</Typography>
              <TextField
                id="standard-basic"
                placeholder="Write Something"
                variant="standard"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <div>
        <Typography>National Waste Center License Number *</Typography>
      </div>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        placeholder="write numbers"
      />
      <div>
        <div>
          <Typography>License Issue date *</Typography>

          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label={"write something"}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  name="founded"
                  {...params}
                  // error={!!errors.founded}
                  // helperText={
                  //   errors.founded &&
                  //   String(messages["addBusiness.form.founderDate"])
                  // }
                />
              )}
            />
          </LocalizationProvider>
        </div>
        <div>
          <Typography>License Expiry date *</Typography>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label={"write something"}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  name="founded"
                  {...params}
                  // error={!!errors.founded}
                  // helperText={
                  //   errors.founded &&
                  //   String(messages["addBusiness.form.founderDate"])
                  // }
                />
              )}
            />
          </LocalizationProvider>
        </div>
      </div>
      <Typography>Working area*</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Alaqiq"
                  color="success"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Quibaa"
                  color="success"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Alawali"
                  color="success"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Uhud"
                  color="success"
                />
              </FormGroup>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <img src={mapImage} />
        </Grid>
      </Grid>
      <Typography>Company image</Typography>
      <Card>
        <input type="file" />
      </Card>
      <button>Next</button>
      <button className="rating-button">Previous</button>
    </StepLayout>
  );
};
