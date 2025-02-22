import { Container, Grid2 } from "@mui/material";
import MainCard from "./MainCard";
import ImageMasonry from "./ImageMasonry";

export default function MainContainer() {
  return (
    <Container>
      <Grid2 container spacing={2}>
        <Grid2 size={4}>
          <MainCard />
        </Grid2>
        <Grid2 size={8}>
          <ImageMasonry />
        </Grid2>
      </Grid2>
    </Container>
  );
}
