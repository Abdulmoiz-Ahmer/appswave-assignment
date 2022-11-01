import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function handleClick(event) {
  event.preventDefault();
  console.log("You clicked a breadcrumb.");
}

export const NavLink = function () {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      href="/#"
      className="breadcrumb"
      onClick={handleClick}
    >
      Services
    </Link>,
    <Link
      className="breadcrumb"
      underline="hover"
      key="2"
      href="/#"
      onClick={handleClick}
    >
      Transporter services
    </Link>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};
