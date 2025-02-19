import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

export default function NoteCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
          alt="Breakfast"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Breakfast
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Eating Breakfast is so important. Almost of people dont eat breakfast for anything reasons
            like they have no time, or hate it blah blah
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
