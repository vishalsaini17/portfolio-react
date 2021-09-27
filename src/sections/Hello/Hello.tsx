import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import user from "../../assets/img_avatar.png";

type props = {};

const Hello: React.FC<props> = () => {
  const userName = "Vishal Saini";

  return (
    <Box component="header" id="hello">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <img
              src={user}
              alt={userName}
              style={{
                borderRadius: "5px",
                boxShadow: "0 0 27px rgb(96 96 96 / 34%)",
                width: "90%",
                height: "380px",
                objectFit: "cover",
                marginTop: "10px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h1">{userName}</Typography>
            <Typography variant="h6">
              frontend developer, QA-engineer
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Hello;
