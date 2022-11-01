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
            <span className="categoryheading">Transporter type</span>
            <Typography variant="body1" className="categorybody">
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
                    <Typography variant="body1" className="radioDescription">
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
                    <Typography variant="body1" className="radioDescription">
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
                    <Typography variant="body1" className="radioDescription">
                      Description will be here for the type.
                    </Typography>
                  </RadioGroup>
                </FormControl>
              </CardContent>
            </Card>
            {/* <label for="html">HTML</label><br/>
<input type="radio" id="css" name="fav_language" value="CSS" fieldset id="group1"/> */}
            <Button variant="contained" color="success" className="next">
              Next
            </Button>
          </Grid>
          <Grid item xs={6}>
            <span className="categoryheading">Waste Type</span>

            <Typography variant="body1" className="categorybody">
              Please select waste type.
            </Typography>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: "#3B5E71",
                          "&.Mui-checked": {
                            color: "#009378",
                          },
                        }}
                      />
                    }
                    label="Commercial Activities"
                    color="success"
                  />
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
                    label="Construction Waste"
                    color="success"
                  />
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
                    label="Special Medical waste"
                    color="success"
                  />
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
                    label="Treated medical waste"
                    color="success"
                  />
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
