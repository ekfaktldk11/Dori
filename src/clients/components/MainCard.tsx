import * as React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Hi! Im Jindorry 😁
      </Typography>
      <Typography variant="body2">
        Have a good one 😎
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
