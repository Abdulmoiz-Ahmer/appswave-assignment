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
import { Information } from "../../../assets/svg/information";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

export const CompanyInformation = function (props) {
  const [date, setDate] = React.useState(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
    props.changePayload({
      from: "step3",
      to: "step4",
      step2: data,
    });
  };

  const onPreviousButtonClick = (event) => {
    event.preventDefault();
    props.changePayload({
      from: "step1",
      to: "step2",
    });
  };

  return (
    <StepLayout
      panelNo="step2"
      heading="Company information"
      handleChange={props.handleChange}
      expanded={props.expanded}
      changePayload={props.changePayload}
      payload={props.payload}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          variant="body1"
          className="category-body"
          sx={{ marginLeft: 4 }}
        >
          Please Enter your company information
        </Typography>
        <div className="cr-number">
          <Typography
            variant="h4"
            component="h4"
            sx={{ fontWeight: 700, fontSize: 16 }}
          >
            CR number *
          </Typography>
        </div>
        <div className="text-field-container">
          <input
            {...register("cRNumber", { required: true })}
            type="text"
            placeholder="Write something"
            className="input-text"
          />
          {errors.cRNumber && (
            <p className="error" role="alert">
              CR Number is required
            </p>
          )}
          <div className="information-icon">
            <Information />
          </div>
        </div>

        <Card sx={{ minWidth: 275, marginTop: 5 }}>
          <CardContent>
            <Typography
              variant="h4"
              component="h4"
              sx={{ fontWeight: 700, fontSize: 16 }}
            >
              Company name
            </Typography>
            <div className="label">
              <label type="text" className="input-label">
                Nahdi Pharmacy
              </label>
            </div>
            <Typography
              variant="h4"
              component="h4"
              style={{
                marginTop: 20,
              }}
              sx={{ fontWeight: 700, fontSize: 16, marginBottom: 1 }}
            >
              Manager name
            </Typography>

            <div className="tags">
              <span className="tag">Ahmed Emad</span>
              <span className="tag">Ahmed Emad</span>
              <span className="tag">Ahmed Emad</span>
              <span className="tag">Ahmed Emad</span>
            </div>
            <Typography
              variant="h4"
              component="h4"
              style={{
                marginTop: 20,
              }}
              sx={{ fontWeight: 700, fontSize: 16, marginBottom: 1 }}
            >
              Partner name
            </Typography>

            <div className="tags">
              <span className="tag">Ahmed Emad</span>
              <span className="tag">Ahmed Emad</span>
              <span className="tag">Ahmed Emad</span>
              <span className="tag">Ahmed Emad</span>
            </div>
            <div>
              <div className="cr-issue">
                <Typography
                  variant="h4"
                  component="h4"
                  style={{
                    marginTop: 20,
                  }}
                  sx={{ fontWeight: 700, fontSize: 16 }}
                >
                  CR Issue date
                </Typography>

                <Typography
                  variant="h4"
                  component="h4"
                  style={{
                    marginTop: 20,
                  }}
                  sx={{ fontWeight: 700, fontSize: 16 }}
                >
                  CR Expiry date
                </Typography>
              </div>
              <div className="cr-input">
                <div className="label margin-issue">
                  <div className="text-field-container">
                    <input
                      {...register("cRIssueDate")}
                      type="text"
                      placeholder="Write something"
                      className="input-text transparent-input"
                    />
                  </div>
                </div>
                <div className="label">
                  <div className="text-field-container">
                    <input
                      {...register("cRExpiryDate")}
                      type="text"
                      placeholder="Write something"
                      className="input-text transparent-input"
                    />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </CardContent>
        </Card>
        <div className="license">
          <Typography
            variant="h4"
            component="h4"
            sx={{ fontWeight: 700, fontSize: 16 }}
          >
            Commercial License Number *
          </Typography>
        </div>
        <div className="text-field-container">
          <input
            {...register("commercialLicenseNumber", { required: true })}
            type="text"
            placeholder="Write something"
            className="input-text"
          />
        </div>
        {errors.commercialLicenseNumber && (
          <p role="alert" className="error">
            Commercial License Number is required
          </p>
        )}

        <Card sx={{ minWidth: 275, marginTop: 5 }}>
          <CardContent>
            <div>
              <div className="cr-license">
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ fontWeight: 700, fontSize: 16 }}
                >
                  Commercial License Issue date
                </Typography>

                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ fontWeight: 700, fontSize: 16 }}
                >
                  Commercial License Expiry date
                </Typography>
              </div>

              <div className="cr-input">
                <div className="text-field-container">
                  <input
                    {...register("commercialLicenseIssueDate")}
                    type="text"
                    placeholder="Write something"
                    className="input-text transparent-input"
                  />
                </div>
                <div className="text-field-container">
                  <input
                    {...register("commercialLicenseExpiryDate")}
                    type="text"
                    placeholder="Write something"
                    className="input-text transparent-input"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="license">
          <Typography
            variant="h4"
            component="h4"
            style={{
              marginTop: 20,
            }}
            sx={{ fontWeight: 700, fontSize: 16 }}
          >
            National Waste Center License Number *
          </Typography>
        </div>
        <div className="text-field-container">
          <input
            {...register("nationalWasteCenterLicenseNumber", {
              required: true,
            })}
            type="text"
            placeholder="Write something"
            className="input-text"
          />
        </div>
        {errors.nationalWasteCenterLicenseNumber && (
          <p className="error" role="alert">
            National Waste Center License Number is required
          </p>
        )}
        <div
          style={{
            marginTop: 20,
          }}
        >
          <div className="license">
            <div className="licenses-date">
              <Typography
                variant="h4"
                component="h4"
                sx={{ fontWeight: 700, fontSize: 16 }}
              >
                License Issue date *
              </Typography>
              <Typography
                variant="h4"
                component="h4"
                sx={{ fontWeight: 700, fontSize: 16 }}
              >
                License Expiry date *
              </Typography>
            </div>
            <div className="cr-input">
              <div>
                <Controller
                  name={"licenseIssueDate"}
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DatePicker
                        label={"write something"}
                        control={control}
                        inputFormat="DD-MM-YYYY"
                        {...register("licenseIssueDate", {
                          required: true,
                        })}
                        value={value}
                        onChange={(event) => {
                          onChange(event);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            error={!!error}
                            helperText={error?.message}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  )}
                />
                {errors.licenseIssueDate && (
                  <p className="error" role="alert">
                    License Issue Date is required
                  </p>
                )}
              </div>
              <div>
                <Controller
                  name={"licenseExpiryDate"}
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DatePicker
                        label={"write something"}
                        control={control}
                        inputFormat="DD-MM-YYYY"
                        {...register("licenseExpiryDate", {
                          required: true,
                        })}
                        value={value}
                        onChange={(event) => {
                          onChange(event);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            error={!!error}
                            helperText={error?.message}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  )}
                />
                {errors.licenseExpiryDate && (
                  <p className="error" role="alert">
                    License Expiry Date is required
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <Typography
          variant="h4"
          component="h4"
          sx={{ fontWeight: 700, fontSize: 16, marginTop: 4 }}
        >
          Working area*
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <FormGroup>
                  <Controller
                    name="alaqiq"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#3B5E71",
                              "&.Mui-checked": {
                                color: "#009378",
                              },
                            }}
                          />
                        }
                        label="Alaqiq"
                      />
                    )}
                  />
                  <Controller
                    name="alaqiq"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#3B5E71",
                              "&.Mui-checked": {
                                color: "#009378",
                              },
                            }}
                          />
                        }
                        label="Quibaa"
                        color="success"
                      />
                    )}
                  />

                  <Controller
                    name="alawali"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#3B5E71",
                              "&.Mui-checked": {
                                color: "#009378",
                              },
                            }}
                          />
                        }
                        label="Alawali"
                      />
                    )}
                  />
                  <Controller
                    name="uhud"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: "#3B5E71",
                              "&.Mui-checked": {
                                color: "#009378",
                              },
                            }}
                          />
                        }
                        label="Uhud"
                      />
                    )}
                  />
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <img src={mapImage} />
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          component="h4"
          sx={{ fontWeight: 700, fontSize: 16, marginTop: 0 }}
        >
          Company image
        </Typography>
        <Card sx={{ minWidth: 85, marginTop: 2 }} className="file-card">
          <label htmlFor="file-upload" className="custom-file-upload">
            Select file
          </label>
          <input
            id="file-upload"
            type="file"
            {...register("file")}
            accept=".png, .jpeg"
          />
          <label className="file-instructions">
            Select Png,Jpeg maximum 5Mb image
          </label>
        </Card>
        <div className="company-info-btn">
          <Button type="submit" variant="contained" className="next">
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
      </form>
    </StepLayout>
  );
};
