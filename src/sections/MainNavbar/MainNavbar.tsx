import React from "react";
import { Box, Container, Grid, Link } from "@material-ui/core";

type props = {};

const MainNavbar: React.FC<props> = () => {
  const scrollToSection = (event: any, selector: string) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      selector
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <Box component="nav" py={3} sx={{ position: "sticky", top: 0 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item>
            <Link onClick={(e) => scrollToSection(e, "#hello")}>Hello</Link>
          </Grid>
          <Grid item>
            <Link onClick={(e) => scrollToSection(e, "#resume")}>Resume</Link>
            {/* sub list => education, employment, skills */}
          </Grid>
          <Grid item>
            <Link onClick={(e) => scrollToSection(e, "#projects")}>Projects</Link>
          </Grid>
          <Grid item>
            <Link onClick={(e) => scrollToSection(e, "#testimonials")}>testimonials</Link>
          </Grid>
          <Grid item>
            <Link onClick={(e) => scrollToSection(e, "#contact")}>Contact</Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default MainNavbar;
