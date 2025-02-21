import React from "react";
import { Typography } from "@mui/material";
export const MuiTypograpy = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>
      <Typography variant="subtitle1">Sub Title 1</Typography>
      <Typography variant="subtitle2">Sub Title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        quibusdam impedit voluptas vel, fuga cum laborum ratione ad, cupiditate
        nesciunt sunt consequatur doloribus odio modi asperiores nihil cumque
        molestiae tempora?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vel
        expedita quaerat voluptatibus. Fugit vel pariatur officia nihil ab
        necessitatibus accusantium voluptates est atque, ex iusto eos sunt nulla
        architecto?
      </Typography>
    </div>
  );
};
