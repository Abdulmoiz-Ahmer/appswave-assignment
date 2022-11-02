import React from "react";
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
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { StepLayout } from "../../StepLayout";

export const Categorization = function (props) {
  const { handleSubmit, reset, setValue, control } = useForm({
    transporter: "",
    commercialActivities: false,
    constructionWaste: false,
    sewageWater: false,
    specialMedicalWaste: false,
    treatedMedicalWaste: false,
  });

  const onSubmit = (data) => {
    props.changePayload({
      from: "step2",
      to: "step3",
      step1: data,
    });
  };

  return (
    <StepLayout
      panelNo="step1"
      heading="Categorization"
      handleChange={props.handleChange}
      expanded={props.expanded}
      changePayload={props.changePayload}
      payload={props.payload}
      num={props.num}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <span className="category-heading">Transporter type</span>
              <Typography variant="body1" className="category-body">
                Please select your type.
              </Typography>
              <Card sx={{ minWidth: 275 }} className="radio-group-container">
                <CardContent>
                  <FormControl>
                    <Controller
                      render={({ field }) => (
                        <RadioGroup aria-label="transporters" {...field}>
                          <FormControlLabel
                            value="Digging Contractor"
                            control={
                              <Radio
                                sx={{
                                  color: "#3B5E71",
                                  "&.Mui-checked": {
                                    color: "#009378",
                                  },
                                }}
                              />
                            }
                            label="Digging Contractor"
                            className="radioLabel"
                          />

                          <Typography
                            variant="body1"
                            className="radio-description"
                          >
                            Description will be here for the type.
                          </Typography>
                          <FormControlLabel
                            value="Private Transporter"
                            control={
                              <Radio
                                sx={{
                                  color: "#3B5E71",
                                  "&.Mui-checked": {
                                    color: "#009378",
                                  },
                                }}
                              />
                            }
                            label="Private Transporter"
                          />
                          <Typography
                            variant="body1"
                            className="radio-description"
                          >
                            Description will be here for the type.
                          </Typography>
                          <FormControlLabel
                            value="Construction and commercial waste transportation company"
                            control={
                              <Radio
                                sx={{
                                  color: "#3B5E71",
                                  "&.Mui-checked": {
                                    color: "#009378",
                                  },
                                  lineHeight: 11,
                                }}
                              />
                            }
                            label="Construction and commercial waste transportation company"
                          />
                          <Typography
                            variant="body1"
                            className="radio-description"
                          >
                            Description will be here for the type.
                          </Typography>
                        </RadioGroup>
                      )}
                      name="transporter"
                      control={control}
                    />
                  </FormControl>
                </CardContent>
              </Card>
              <Button type="submit" variant="contained" className="next">
                Next
              </Button>
            </Grid>
            <Grid item xs={6}>
              <span className="category-heading">Waste Type</span>

              <Typography variant="body1" className="category-body">
                Please select waste type.
              </Typography>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <FormGroup>
                    <Controller
                      name="commercialActivities"
                      control={control}
                      render={({ field }) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) => field.onChange(e.target.checked)}
                              checked={
                                field.value == undefined ? false : field.value
                              }
                              sx={{
                                color: "#3B5E71",
                                "&.Mui-checked": {
                                  color: "#009378",
                                },
                              }}
                            />
                          }
                          label="Commercial Activities"
                        />
                      )}
                    />

                    <Controller
                      name="constructionWaste"
                      control={control}
                      render={({ field }) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) => field.onChange(e.target.checked)}
                              checked={
                                field.value == undefined ? false : field.value
                              }
                              sx={{
                                color: "#3B5E71",
                                "&.Mui-checked": {
                                  color: "#009378",
                                },
                              }}
                            />
                          }
                          label="Construction Waste"
                        />
                      )}
                    />

                    <Controller
                      name="specialMedicalWaste"
                      control={control}
                      render={({ field }) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) => field.onChange(e.target.checked)}
                              checked={
                                field.value == undefined ? false : field.value
                              }
                              sx={{
                                color: "#3B5E71",
                                "&.Mui-checked": {
                                  color: "#009378",
                                },
                              }}
                            />
                          }
                          label="Special Medical waste"
                        />
                      )}
                    />
                    <Controller
                      name="treatedMedicalWaste"
                      control={control}
                      render={({ field }) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) => field.onChange(e.target.checked)}
                              checked={
                                field.value == undefined ? false : field.value
                              }
                              sx={{
                                color: "#3B5E71",
                                "&.Mui-checked": {
                                  color: "#009378",
                                },
                              }}
                            />
                          }
                          label="Treated medical waste"
                        />
                      )}
                    />

                    <Controller
                      name="sewageWater"
                      control={control}
                      render={({ field }) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={(e) => field.onChange(e.target.checked)}
                              checked={
                                field.value == undefined ? false : field.value
                              }
                              sx={{
                                color: "#3B5E71",
                                "&.Mui-checked": {
                                  color: "#009378",
                                },
                              }}
                            />
                          }
                          label="Sewage Water"
                        />
                      )}
                    />
                  </FormGroup>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </form>
    </StepLayout>
  );
};
