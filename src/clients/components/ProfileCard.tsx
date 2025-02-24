import { Paper, Card, CardContent, Typography } from "@mui/material";
import ProfileImage from "./ProfileImage";

export default function ProfileCard() {
  return (
    <Paper elevation={3} sx={{ p: 3, mx: "auto" }}>
      <ProfileImage
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        size={"8em"}
      />

      <Card variant="outlined" sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" align="center">
            Jinseok Kim
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            Software Engineer
          </Typography>
          <br />
          <Typography align="center">🙋‍♂️</Typography>
          {/* <Card variant="outlined" sx={{ m: 1 }}>
            <CardContent></CardContent>
          </Card> */}
        </CardContent>
      </Card>
    </Paper>
  );
}
