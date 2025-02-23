import ProfileImage from "../components/ProfileImage";
import { Container } from "@mui/material";

export default function AboutMe() {
  return (
    <Container>
      <ProfileImage
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        size={"10em"}
      />
    </Container>
  );
}
